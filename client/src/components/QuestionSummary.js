import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa"; // Importing checkmark icon

const QuestionSummary = ({ question }) => {
  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}m`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <li className="border-b border-gray-300 pb-4 flex">
      {/* Votes, Answers, Views */}
      <div className="w-1/5 flex flex-col items-end mr-4 pr-2 text-xs shrink-0">
        <span className="text-gray-700 mb-[5px]">
          <span className="font-medium text-sm">{question.votes}</span> votes
        </span>

        {/* Answer Logic */}
        {question.answers === 0 ? (
          <span className="text-gray-600">0 answers</span>
        ) : question.isAccepted ? (
          <span className="bg-green-700 text-white font-bold px-2 py-1 rounded flex items-center">
            <FaCheck className="mr-1" /> {question.answers} answers
          </span>
        ) : (
          <span className="border border-green-700 text-green-700 font-bold px-2 py-1 rounded">{question.answers} answers</span>
        )}

        <span className="text-red-700 mt-[5px]">
          <span className="font-medium text-sm">{formatViews(question.views)}</span> views
        </span>
      </div>

      {/* Question Title, Description, and Tags */}
      <div className="flex-grow">
        <Link to={`/question/${question._id}`} className="text-secondary hover:underline text-lg">
          {question.title}
        </Link>

        {/* Question Description */}
        <p className="text-sm text-gray-700 mt-1 line-clamp-2">{question.description}</p>

        {/* Tags */}
        <p className="text-gray-600 mt-1">
          {question?.tags?.map((tag, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 text-xs rounded mr-2 font-bold cursor-pointer">
              {tag}
            </span>
          ))}
        </p>

        {/* Author and Date Info */}
        <div className="text-xs text-gray-500 mt-1 text-right ml-auto">
          Community wiki {question.userReputation} {question.author} asked {question.date}
        </div>
      </div>
    </li>
  );
};

export default QuestionSummary;
