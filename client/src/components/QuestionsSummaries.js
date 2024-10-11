import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InfoBar from "./InfoBar"; // Assuming InfoBar is a separate component
import { FaCaretDown } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import QuestionSummary from "./QuestionSummary";
import { fetchQuestions } from "../services/ApiService";
import AskQuestionButton from "./AskQuestionButton";

const QuestionsSummaries = () => {
  const [questionsData, setQuestionsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuestions();
      if (data) {
        setQuestionsData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-4 border-l border-gray-200 flex">
      <div className="flex-grow max-w-[72%]">
        {/* Page Title and Ask Question Button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">All Questions</h1>
          {/* <button className="bg-secondary text-white text-sm px-4 py-2 rounded-md hover:bg-secondary-dark">Ask Question</button> */}
          <div>
            <AskQuestionButton />
          </div>
        </div>

        {/* Total Questions Count, Sorting, and Filter */}
        <div className="mb-4 flex justify-between items-center">
          <span className="text-base">{questionsData?.totalQuestions ? questionsData?.totalQuestions?.toLocaleString() : 0} questions</span>

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
          {questionsData?.questions?.map((q) => (
            <QuestionSummary key={q._id} question={q} />
          ))}
        </ul>
      </div>

      {/* Info Bar */}
      <div className="ml-8 w-[28%]">
        <InfoBar />
      </div>
    </div>
  );
};

export default QuestionsSummaries;
