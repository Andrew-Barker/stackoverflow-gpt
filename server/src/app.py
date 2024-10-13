from crypt import methods

from flask import Flask, request, jsonify
from flask_cors import CORS
import g4f
from mocked_data import MockedDataService
from database_service import DatabaseService
import logging
import datetime

app = Flask(__name__)
CORS(app)
db_service = DatabaseService()
mocked_data_service = MockedDataService()

# Configure Flask logger to log to console
console_handler = logging.StreamHandler()  # StreamHandler logs to console
console_handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
console_handler.setFormatter(formatter)

# Remove default handlers if necessary and set the console handler
if not app.logger.handlers:
    app.logger.addHandler(console_handler)

app.logger.setLevel(logging.INFO)

ASSISTANT = "assistant"
USER = "user"

def create_conversation_obj(message, role):
    return {"role": role, "content": message}
@app.route('/api/chat', methods=['POST'])
def chat():
    # Get the JSON data from the request
    data = request.get_json()

    # Extract the message from the JSON
    message = data.get('message', '')

    # Use g4f to get the response from ChatGPT
    gpt_response = g4f.ChatCompletion.create(model='gpt-4', messages=[{"role": "user", "content": message}])

    # Print the response to understand its structure
    print(gpt_response)

    # For now, just return the raw gpt_response
    return jsonify({"response": gpt_response}), 200


import json

@app.route('/api/questions', methods=['POST'])
def new_question():
    # Get the JSON data from the request
    data = request.get_json()

    # Extract the question from the JSON
    question = data.get('question', '')
    app.logger.debug(f"Received question: {question}")

    # Use g4f to get the response from ChatGPT
    prompt = f"Please analyze the following question and return JSON in three fields where the field keys are lowercase camelcase: title and 2-5 relevant tags (if the tag is many words use a hyphen to separate the words in the tag).\n\nQuestion: {question}\n\nOutput format:\nTitle: <insert title>\nTags: <insert tags>"

    try:
        gpt_response = g4f.ChatCompletion.create(model='gpt-4', messages=[
            {"role": "user", "content": prompt}])
        app.logger.debug(f"Received response from GPT: {gpt_response}")
    except Exception as e:
        app.logger.error(f"Failed to get response from GPT: {e}")
        return jsonify({"error": "Failed to get response from GPT", "details": e}), 500

    # Assuming the response is wrapped in backticks and contains a JSON string
    response_text = gpt_response.strip('```json').strip('```')

    app.logger.debug(f"Parsed text: {response_text}")

    # Parse the string as JSON
    try:
        parsed_response = json.loads(response_text)
    except json.JSONDecodeError as e:
        app.logger.error(f"Failed to parse JSON: {e}")
        return jsonify({"error": "Failed to parse response from GPT", "details": e}), 500

    # Extract title, full question, and tags
    title = parsed_response.get('title', 'Unknown Title')
    tags = parsed_response.get('tags', [])

    mocked_question_data = mocked_data_service.generate_random_question_data()
    gpt_question_data = {
        "title": title,
        "full_question": question,
        "tags": tags
    }
    complete_question = {**gpt_question_data, **mocked_question_data}

    question_id = db_service.insert_question(complete_question)

    app.logger.info(f"Inserted question with ID: {question_id}")

    try:
        gpt_question_send = create_conversation_obj(question['question'], USER)
        gpt_question_answer = g4f.ChatCompletion.create(model='gpt-4', messages=[gpt_question_send])
    except Exception as e:
        app.logger.error(f"Failed to get response from GPT: {e}")
        return jsonify({"error": "Failed to get response from GPT for user's question", "details": e}), 500

    conversation_history = {"conversation": [gpt_question_send, create_conversation_obj(gpt_question_answer, ASSISTANT)]}

    complete_question = {**complete_question, **conversation_history}

    question_details = mocked_data_service.generate_question_details(
        question_id, complete_question)
    db_service.insert_question_details(question_details)

    # Return the parsed response as JSON
    return jsonify(complete_question), 200

@app.route('/api/questions', methods=['GET'])
def get_questions():
    questions = db_service.get_questions()

    return jsonify({
        "questions": questions,
        "totalQuestions": len(questions)
    }), 200

@app.route('/api/questions/<question_id>', methods=['DELETE'])
def delete_question(question_id):
    result = db_service.delete_question(question_id)
    return jsonify({"status": "Question deleted"}) if result.deleted_count > 0 else jsonify({"status": "Question not found"})

@app.route('/api/questions/<question_id>', methods=['GET'])
def get_question(question_id):
    question = db_service.get_question_by_id(question_id)
    # Map the conversation array to the answers array using the method
    updated_question = mocked_data_service.map_conversation_to_answers(question)

    # Return the updated question object with answers
    return jsonify(updated_question)

@app.route('/api/questions-details', methods=['GET'])
def get_question_details():
    question_details = db_service.get_all_question_details()
    return jsonify(question_details)

@app.route('/api/questions', methods=['DELETE'])
def delete_all_questions():
    result = db_service.delete_all_questions()
    return jsonify({"status": "All questions deleted"}) if result.deleted_count > 0 else jsonify({"status": "Failed to delete all questions"})


@app.route('/api/questions/<question_id>/answer', methods=['POST'])
def add_answer_to_question(question_id):
    try:
        # Get the answer from the request
        data = request.get_json()
        user_answer = data.get('answer')

        # Fetch the question details from the database
        question_details = db_service.get_question_by_id(question_id)

        if not question_details:
            return jsonify({"error": "Question not found"}), 404

        # Add the user answer to the conversation array
        question_details['conversation'].append({
            "content": user_answer,
            "role": "user"
        })

        app.logger.debug(f"conversation history for user answer: {question_details['conversation']}")

        # Generate a GPT response for the new answer
        gpt_response = g4f.ChatCompletion.create(
            model='gpt-4',
            messages=[{"role": "user", "content": user_answer}] +
                     question_details['conversation']
        )

        # Add the GPT response to the conversation array
        question_details['conversation'].append({
            "content": gpt_response if gpt_response else "No response",
            "role": "assistant"
        })

        # Optionally create a new answer object and append it to the 'answers' array
        new_answer = {
            "id": len(question_details['answers']) + 1,
            "content": gpt_response if gpt_response else "No response",
            "votes": 0,
            "isAccepted": False,
            "author": "GPT Assistant",
            "datePosted": datetime.datetime.now().isoformat(),
            "dateModified": datetime.datetime.now().isoformat(),
            "comments": []
        }
        question_details['answers'].append(new_answer)

        app.logger.debug(f"conversation history after GPT response: {question_details['conversation']}")

        # Update the question details in the database
        db_service.update_question_details(question_id, question_details)

        return jsonify({"status": "Answer added",
                        "updatedQuestion": question_details}), 200

    except Exception as e:
        print(f"Error adding answer: {e}")
        return jsonify({"error": "An error occurred"}), 500


if __name__ == "__main__":
    app.logger.info("Starting the application")
    app.run(host="0.0.0.0", port=5000, debug=False)