import React from "react";
import { Link } from "react-router-dom";
import InfoBar from "./InfoBar"; // Assuming InfoBar is a separate component
import { FaCaretDown } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import QuestionSummary from "./QuestionSummary";

const QuestionsSummaries = () => {
  const data = {
    totalQuestions: 1453288,
    questions: [
      {
        id: 1,
        title: "How do I center a div in CSS?",
        description:
          "I'm trying to center a div both vertically and horizontally in CSS. I've tried using flexbox and margin: auto, but I can't seem to get it centered perfectly in all browsers. What are some of the best techniques for centering elements in CSS that work consistently across modern browsers?",
        votes: 26691,
        answers: 108,
        views: 15000000,
        tags: ["css", "html", "center"],
        author: "Peter Mortensen",
        date: "Oct 12, 2021",
        userReputation: "93k",
        isAnswered: true,
        isAccepted: true,
      },
      {
        id: 2,
        title: "How to make an HTTP request in JavaScript?",
        description:
          "I'm trying to make an HTTP request using JavaScript, but I'm not sure what the best approach is. Should I use XMLHttpRequest, fetch, or a library like Axios? Also, what are the pros and cons of each approach, and how do I handle things like timeouts, retries, and errors?",
        votes: 203,
        answers: 2,
        views: 1200,
        tags: ["javascript", "http", "request"],
        author: "Matthew Rankin",
        date: "Sep 15, 2020",
        userReputation: "12k",
        isAnswered: true,
        isAccepted: false,
      },
      {
        id: 3,
        title: "What is the difference between 'git pull' and 'git fetch'?",
        description:
          "I'm confused about the difference between 'git pull' and 'git fetch'. Both commands seem to be used to update the local repository with changes from the remote, but what is the actual difference in their behavior, and when should I use one over the other?",
        votes: 13905,
        answers: 37,
        views: 3600000,
        tags: ["git", "version-control", "git-pull", "git-fetch"],
        author: "Pablo Fernandez",
        date: "Nov 15, 2008",
        userReputation: "286k",
        isAnswered: true,
        isAccepted: true,
      },
      {
        id: 4,
        title: "What is the difference between null and undefined in JavaScript?",
        description:
          "I'm trying to understand the difference between null and undefined in JavaScript. They both seem to represent 'nothing' or an absence of value, but they behave differently in certain situations. Can someone explain the key differences and when I should use each?",
        votes: 18950,
        answers: 56,
        views: 9600000,
        tags: ["javascript", "null", "undefined"],
        author: "John Doe",
        date: "Jan 20, 2021",
        userReputation: "5k",
        isAnswered: true,
        isAccepted: false,
      },
      {
        id: 5,
        title: "How do I fix a CORS issue when making requests?",
        description:
          "I'm making HTTP requests from my frontend to a backend API, but I'm encountering a CORS (Cross-Origin Resource Sharing) issue. The browser blocks the request because the API doesn't allow the origin of my frontend. What is the best way to handle or fix CORS issues?",
        votes: 16500,
        answers: 0,
        views: 8500000,
        tags: ["javascript", "cors", "http"],
        author: "Jane Smith",
        date: "Apr 12, 2022",
        userReputation: "7k",
        isAnswered: false,
        isAccepted: false,
      },
      {
        id: 6,
        title: "How do I reverse a linked list in Python?",
        description:
          "I need to reverse a linked list in Python. Can someone provide a clear explanation of how to implement a reverse function for a singly linked list? It would be helpful to understand both iterative and recursive approaches.",
        votes: 22200,
        answers: 61,
        views: 10000000,
        tags: ["python", "linked-list", "reverse"],
        author: "Alice Johnson",
        date: "May 15, 2020",
        userReputation: "10k",
        isAnswered: true,
        isAccepted: true,
      },
      {
        id: 7,
        title: "What is the purpose of useEffect in React?",
        description:
          "I'm learning React and came across the useEffect hook. I understand it's used for side effects, but I'm having trouble figuring out when and why to use it. Can someone explain common use cases and provide examples of proper usage?",
        votes: 18700,
        answers: 44,
        views: 9300000,
        tags: ["react", "hooks", "useEffect"],
        author: "Emily Davis",
        date: "Aug 05, 2019",
        userReputation: "20k",
        isAnswered: true,
        isAccepted: false,
      },
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
            <QuestionSummary key={q.id} question={q} />
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
