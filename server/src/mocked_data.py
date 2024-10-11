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