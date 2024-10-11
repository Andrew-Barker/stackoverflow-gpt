import React from "react";
import { Link } from "react-router-dom";

const QuestionsSummaries = () => {
  const questions = [
    { id: 1, title: "How do I center a div in CSS?" },
    { id: 2, title: "How to make a HTTP request in JavaScript?" },
  ];

  return (
    <div>
      <h1>Questions Summaries</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>
            <Link to={`/question/${q.id}`}>{q.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsSummaries;
