# src/database_service.py
import os
import uuid
from pymongo import MongoClient
from bson.objectid import ObjectId


class DatabaseService:
  def __init__(self):
    mongo_host = os.getenv("MONGO_HOST", "localhost")
    mongo_port = int(os.getenv("MONGO_PORT", 27017))
    mongo_db = os.getenv("MONGO_DB", "stackoverflow_gpt")

    self.client = MongoClient(mongo_host, mongo_port)
    self.db = self.client[mongo_db]

  def get_questions(self):
    return list(self.db.questions.find())

  def get_question_by_id(self, question_id):
    return self.db.question_details.find_one({"_id": question_id})

  # def insert_question(self, question_data):
  #   question_data["_id"] = str(uuid.uuid4())  # Set UUID as _id
  #   return self.db.questions.insert_one(question_data)

  def insert_question(self, question_data):
    question_data["_id"] = str(uuid.uuid4())  # Set UUID as _id
    result = self.db.questions.insert_one(question_data)
    return question_data

  def insert_question_details(self, question_details):
    question_id = question_details.get("question_id")

    # Insert question details document into the collection
    result = self.db.question_details.insert_one(question_details)

    # Retrieve the inserted document
    inserted_details = self.db.question_details.find_one(
        {"_id": result.inserted_id})

    # Return the full inserted document, including the `_id`
    return inserted_details

  def update_question(self, question_id, update_data):
    return self.db.questions.update_one({"_id": ObjectId(question_id)},
                                        {"$set": update_data})

  def delete_question(self, question_id):
    return self.db.questions.delete_one({"_id": question_id})

  def delete_all_questions(self):
    self.db.question_details.delete_many({})
    return self.db.questions.delete_many({})

  def get_all_question_details(self):
    return list(self.db.question_details.find())