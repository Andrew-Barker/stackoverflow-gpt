import React from "react";
import Voter from "./Voter"; // Import the new Voter component
import Answer from "./Answer";

const Question = () => {
  const question = {
    title: "How do I center a div in CSS?",
    content:
      "I'm trying to center a div both vertically and horizontally. What are the best practices for doing this in CSS? Here are some things I've tried...",
    votes: 25,
    views: 1025,
    datePosted: "2021-09-15",
    dateModified: "2023-10-31",
    tags: ["css", "html", "center"],
    answers: [
      {
        id: 1,
        content: "You can use `display: flex` and `justify-content: center;` combined with `align-items: center;` to center a div.",
        votes: 1583,
        isAccepted: true,
      },
      {
        id: 2,
        content: "Another option is to use `margin: auto;` on the div and set a width.",
        votes: 3462,
        isAccepted: false,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      {/* Question Header */}
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h1 className="text-2xl mb-2">{question.title}</h1>
        <div className="text-gray-600 text-sm flex space-x-6">
          <span>
            Asked: <span className="text-black">{question.datePosted}</span>
          </span>
          <span>
            Modified <span className="text-black">{question.dateModified}</span>
          </span>
          <span>
            Viewed <span className="text-black">{question.views} times</span>
          </span>
        </div>
      </div>

      {/* Question Body */}
      <div className="mb-6 flex">
        {/* Voter Component */}
        <Voter initialVotes={question.votes} />

        {/* Question Content */}
        <div className="ml-4">
          <p>{question.content}</p>
        </div>
      </div>

      {/* Tags after the question content */}
      <div className="mt-4">
        {question.tags.map((tag, index) => (
          <span key={index} className="text-sm font-medium bg-gray-100 px-2 py-1 mr-2 rounded hover:bg-gray-300 hover:cursor-pointer">
            {tag}
          </span>
        ))}
      </div>

      {/* Answers Section */}
      <div className="mt-16">
        <h2 className="text-xl mb-4">{question.answers.length} Answers</h2>
        {question.answers.map((answer) => (
          <Answer key={answer.id} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
