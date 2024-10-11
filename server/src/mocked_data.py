import random
import datetime
from faker import Faker


class MockedDataService:
  def __init__(self):
    self.faker = Faker()  # Initialize the faker object

  def generate_random_question_data(self):
    # Use faker to generate a random username
    author = self.faker.user_name()

    user_reputation_values = ["1k", "5k", "12k", "50k", "287k", "500k", "1m"]

    # Generate random values for the question data
    votes = random.randint(0, 10000)
    answers = random.randint(0, 200)
    views = random.randint(1000, 10000000)
    date = (datetime.datetime.now() - datetime.timedelta(
      days=random.randint(1, 1000))).strftime("%b %d, %Y")
    user_reputation = random.choice(user_reputation_values)
    is_answered = random.choice([True, False])
    is_accepted = random.choice([True, False]) if is_answered else False

    # Construct the random question data
    question_data = {
      "votes": votes,
      "answers": answers,
      "views": views,
      "author": author,
      "date": date,
      "userReputation": user_reputation,
      "isAnswered": is_answered,
      "isAccepted": is_accepted
    }

    return question_data

    def generate_random_question_data(self):
      # Generate the basic question metadata
      author = self.faker.user_name()
      user_reputation_values = ["1k", "5k", "12k", "50k", "287k", "500k", "1m"]
      votes = random.randint(0, 10000)
      answers = random.randint(0, 200)
      views = random.randint(1000, 10000000)
      date = (datetime.datetime.now() - datetime.timedelta(
        days=random.randint(1, 1000))).strftime("%b %d, %Y")
      user_reputation = random.choice(user_reputation_values)
      is_answered = random.choice([True, False])
      is_accepted = random.choice([True, False]) if is_answered else False

      # Construct the question summary data
      question_data = {
        "votes": votes,
        "answers": answers,
        "views": views,
        "author": author,
        "datePosted": date,
        "userReputation": user_reputation,
        "isAnswered": is_answered,
        "isAccepted": is_accepted
      }
      return question_data

  def generate_mock_comments(self, count=3):
    comments = []
    for i in range(count):
      comment = {
        "id": i + 1,
        "content": self.faker.sentence(),
        "author": self.faker.user_name(),
        "datePosted": self.faker.date_this_year().strftime("%Y-%m-%d")
      }
      comments.append(comment)
    return comments

  def generate_mock_answers(self, count=3):
    answers = []
    for i in range(count):
      answer = {
        "id": i + 1,
        "content": self.faker.paragraph(),
        "votes": random.randint(0, 1000),
        "isAccepted": random.choice([True, False]),
        "author": self.faker.user_name(),
        "datePosted": self.faker.date_this_year().strftime("%Y-%m-%d"),
        "dateModified": self.faker.date_this_year().strftime("%Y-%m-%d"),
        "comments": self.generate_mock_comments(random.randint(0, 5))
        # Some answers may have comments
      }
      answers.append(answer)
    return answers

  def generate_question_details(self, question, full_question):
    # Mock full question details data
    details = {
      # "_id": question["_id"],
      # "question_id": question_id,
      "content": full_question,
      "comments": self.generate_mock_comments(),
      "answers": self.generate_mock_answers(),
      "datePosted": datetime.datetime.now().strftime("%b %d, %Y"),
      "dateModified": datetime.datetime.now().strftime("%b %d, %Y")
    }

    complete_details = {**question, **details}
    return complete_details