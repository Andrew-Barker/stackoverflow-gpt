import React, { useEffect, useState } from "react";
import Voter from "./Voter"; // Import the new Voter component
import Answer from "./Answer";
import { useParams } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns";
import PostFooter from "./PostFooter";
import RichTextarea from "./RichTextarea";
import InfoBar from "./InfoBar";
import AskQuestionButton from "./AskQuestionButton";
import { fetchQuestionDetails } from "../services/ApiService";

const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return views;
};

// Function to remove "about" from the relative date
const cleanRelativeDate = (relativeDate) => {
  return relativeDate.replace(/^about /, "");
};

const Question = () => {
  const { questionId } = useParams(); // This will get the question ID from the URL
  const [question, setQuestion] = useState(null); // To store the question details
  const [loading, setLoading] = useState(true); // To handle the loading state

  useEffect(() => {
    const getQuestionDetails = async () => {
      try {
        const data = await fetchQuestionDetails(questionId); // Call API with question ID
        setQuestion(data); // Set the fetched data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching question details:", error);
        setLoading(false); // Stop loading if an error occurs
      }
    };

    getQuestionDetails();
  }, [questionId]); // Run the effect when the questionId changes

  // Show loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // Show error or if no question found
  if (!question) {
    return <p>Question not found!</p>;
  }

  // Helper functions to format date and views with fallback
  const formatDate = (date) => {
    return date ? formatDistanceToNow(parseISO(date), { addSuffix: true }) : "Unknown date";
  };

  const datePostedRelative = formatDate(question?.datePosted);
  const dateModifiedRelative = formatDate(question?.dateModified);

  return (
    <div className="container mx-auto py-4 border-l border-gray-200">
      {/* Full-width Question Header */}
      <div className="border-b border-gray-300 pb-4 mb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl mb-2">{question.title}</h1>
          <div>
            <AskQuestionButton />
          </div>
        </div>
        {/* Post Details */}
        <div className="text-gray-600 text-sm flex space-x-6 mt-2">
          <span>
            Asked: <span className="text-black">{datePostedRelative}</span>
          </span>
          <span>
            Modified: <span className="text-black">{dateModifiedRelative}</span>
          </span>
          <span>
            Viewed: <span className="text-black">{formatViews(question.views)} times</span>
          </span>
        </div>
      </div>

      {/* Question Content and InfoBar */}
      <div className="flex">
        {/* Question and Voter */}
        <div className="flex-grow max-w-[72%]">
          <div className="mb-6 flex">
            {/* Voter Component */}
            <Voter initialVotes={question.votes} />

            {/* Question Content */}
            <div className="ml-4 flex-grow">
              <p>{question.content.question}</p>
              {/* Tags after the question content */}
              <div className="mt-4 mb-10">
                {question.tags.map((tag, index) => (
                  <span key={index} className="text-sm font-medium bg-gray-100 px-2 py-1 mr-2 rounded hover:bg-gray-300 hover:cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Footer Component */}
              <PostFooter dateString={question.dateModified} comments={question.comments} userName={question.author} />
            </div>
          </div>

          {/* Answers Section */}
          <div className="mt-16 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">{question.answers.length} Answers</h2>
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-700">Sorted by:</label>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>Highest score (Default)</option>
                  <option>Trending (recent votes count more)</option>
                  <option>Date modified (newest first)</option>
                  <option>Date created (oldest first)</option>
                </select>
              </div>
            </div>

            {question.answers.map((answer) => (
              <Answer key={answer.id} answer={answer} />
            ))}
          </div>

          {/* Call to Share Section */}
          <div className="mt-10">
            <p className="text-lg">
              Know someone who can answer? Share a link to this{" "}
              <span className="text-secondary-500 cursor-pointer hover:text-secondary-600">question</span> via{" "}
              <span className="text-secondary-500 cursor-pointer hover:text-secondary-600">email</span>,{" "}
              <span className="text-secondary-500 cursor-pointer hover:text-secondary-600">Twitter</span>, or{" "}
              <span className="text-secondary-500 cursor-pointer hover:text-secondary-600">Facebook</span>.
            </p>
          </div>

          {/* Your Answer Section */}
          <div className="mt-3">
            <h3 className="text-lg">Your Answer</h3>
            <RichTextarea />
          </div>
        </div>

        {/* Info Bar */}
        <div className="w-[28%] pl-6">
          <InfoBar />
        </div>
      </div>
    </div>
  );
};

export default Question;
