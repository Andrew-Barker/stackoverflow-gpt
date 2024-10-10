import React from "react";
import Voter from "./Voter"; // Import the new Voter component
import Answer from "./Answer";
import { formatDistanceToNow, parseISO } from "date-fns";

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
      {
        id: 3,
        content: "You can use `position: absolute;` combined with `top: 50%; left: 50%;` and `transform: translate(-50%, -50%);` for centering.",
        votes: 712,
        isAccepted: false,
      },
      {
        id: 4,
        content: "Using CSS Grid is another modern approach. Set the container to `display: grid; place-items: center;`.",
        votes: 1212,
        isAccepted: false,
      },
      {
        id: 5,
        content: "For older browsers, try setting the parent to `text-align: center;` and the child to `display: inline-block;`.",
        votes: 431,
        isAccepted: false,
      },
      {
        id: 6,
        content: "You can also use Flexbox: `display: flex; justify-content: center; align-items: center;` is an easy way.",
        votes: 983,
        isAccepted: false,
      },
      {
        id: 7,
        content: "If the div has a fixed width, use `margin: 0 auto;` along with `position: relative;` for horizontal centering.",
        votes: 545,
        isAccepted: false,
      },
      {
        id: 8,
        content: "Use `min-height: 100vh; display: flex; justify-content: center; align-items: center;` for full-page centering.",
        votes: 1101,
        isAccepted: false,
      },
      {
        id: 9,
        content: "To center inline content, use `text-align: center;` on the parent container and `vertical-align: middle;`.",
        votes: 211,
        isAccepted: false,
      },
      {
        id: 10,
        content: "Try using CSS `transform-origin` to center a div within its parent element for more control over placement.",
        votes: 632,
        isAccepted: false,
      },
      {
        id: 11,
        content: "For Flexbox, remember to add `height: 100%;` to the parent container to ensure proper centering.",
        votes: 781,
        isAccepted: false,
      },
      {
        id: 12,
        content: "Using `display: table;` on the parent and `display: table-cell; vertical-align: middle;` on the child is also an option.",
        votes: 854,
        isAccepted: false,
      },
    ],
  };

  const datePostedRelative = cleanRelativeDate(formatDistanceToNow(parseISO(question.datePosted), { addSuffix: true }));
  const dateModifiedRelative = cleanRelativeDate(formatDistanceToNow(parseISO(question.dateModified), { addSuffix: true }));
  const formattedViews = formatViews(question.views);

  return (
    <div className="container mx-auto p-4">
      {/* Question Header */}
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h1 className="text-2xl mb-2">{question.title}</h1>
        <div className="text-gray-600 text-sm flex space-x-6">
          <span>
            Asked: <span className="text-black">{datePostedRelative}</span>
          </span>
          <span>
            Modified <span className="text-black">{dateModifiedRelative}</span>
          </span>
          <span>
            Viewed <span className="text-black">{formattedViews} times</span>
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
