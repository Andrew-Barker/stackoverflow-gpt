from flask import Flask, request, jsonify
from flask_cors import CORS
import g4f
from mockedData import get_questions_data

app = Flask(__name__)
CORS(app)

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

    # Use g4f to get the response from ChatGPT
    prompt = f"Please analyze the following question and return JSON in three fields where the field keys are lowercase camelcase: title and 2-5 relevant tags (if the tag is many words use a hyphen to separate the words in the tag).\n\nQuestion: {question}\n\nOutput format:\nTitle: <insert title>\nTags: <insert tags>"

    try:
        gpt_response = g4f.ChatCompletion.create(model='gpt-4', messages=[
            {"role": "user", "content": prompt}])
    except Exception as e:
        print(f"Failed to get response from GPT: {e}")
        return jsonify({"error": "Failed to get response from GPT"}), 500

    # Assuming the response is wrapped in backticks and contains a JSON string
    response_text = gpt_response.strip('```json').strip('```')

    print(response_text)

    # Parse the string as JSON
    try:
        parsed_response = json.loads(response_text)
    except json.JSONDecodeError as e:
        print(f"Failed to parse JSON: {e}")
        return jsonify({"error": "Failed to parse response from GPT"}), 500

    # Extract title, full question, and tags
    title = parsed_response.get('title', 'Unknown Title')
    full_question = parsed_response.get('fullQuestion', 'No full question provided')
    tags = parsed_response.get('tags', [])

    # Return the parsed response as JSON
    return jsonify({
        "title": title,
        "full_question": question,
        "tags": tags
    }), 200

@app.route('/api/questions', methods=['GET'])
def get_questions():
    questions = get_questions_data()
    # questions = {}
    return jsonify(questions), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)