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
    return self.db.questions.find_one({"_id": ObjectId(question_id)})

  def insert_question(self, question_data):
    question_data["_id"] = str(uuid.uuid4())  # Set UUID as _id
    return self.db.questions.insert_one(question_data)

  def update_question(self, question_id, update_data):
    return self.db.questions.update_one({"_id": ObjectId(question_id)},
                                        {"$set": update_data})

  def delete_question(self, question_id):
    return self.db.questions.delete_one({"_id": question_id})