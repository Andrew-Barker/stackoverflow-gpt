import React from "react";
import { Link } from "react-router-dom";
import InfoBar from "./InfoBar"; // Assuming InfoBar is a separate component
import { FaCaretDown } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

const QuestionsSummaries = () => {
  const data = {
    totalQuestions: 1453288,
    questions: [
      { id: 1, title: "How do I center a div in CSS?" },
      { id: 2, title: "How to make an HTTP request in JavaScript?" },
      // Add more questions as needed
    ],
  };

  return (
    <div className="container mx-auto py-4 border-l border-gray-200 flex">
      <div className="flex-grow">
        {/* Page Title and Ask Question Button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">All Questions</h1>
          <button className="bg-secondary text-white text-sm px-4 py-2 rounded-md hover:bg-secondary-dark">Ask Question</button>
        </div>

        {/* Total Questions Count, Sorting, and Filter */}
        <div className="mb-4 flex justify-between items-center">
          <span className="text-base">{data.totalQuestions.toLocaleString()} questions</span>

          <div className="flex space-x-4 items-center">
            {/* Tab-like buttons */}
            <div className="flex items-center border border-gray-300 rounded-md text-gray-600">
              <button className="px-4 py-2 my-1 ml-1 text-sm hover:bg-gray-50 rounded-l">Newest</button>
              <button className="px-4 py-2 my-1 text-sm hover:bg-gray-50">Active</button>
              <button className="px-4 py-2 my-1 text-sm hover:bg-gray-50">Bountied</button>
              <button className="px-4 py-2 my-1 text-sm hover:bg-gray-50">Unanswered</button>
              <button className="px-4 py-2 my-1 mr-1 text-sm bg-gray-200 rounded-md font-bold flex items-center text-gray-700">
                More <FaCaretDown className="ml-1" />
              </button>
            </div>

            {/* Filter button */}
            <button className="border border-secondary text-secondary text-sm px-4 py-2 rounded-md hover:bg-secondary-200 flex items-center">
              <IoFilterSharp className="mr-1 text-base" />
              Filter
            </button>
          </div>
        </div>

        {/* Questions List */}
        <ul className="space-y-4">
          {data?.questions?.map((q) => (
            <li key={q.id} className="border-b border-gray-300 pb-2">
              <Link to={`/question/${q.id}`} className="text-lg text-blue-500 hover:underline">
                {q.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Info Bar */}
      <div className="ml-8 w-1/4">
        <InfoBar />
      </div>
    </div>
  );
};

export default QuestionsSummaries;
