import React from "react";
import Voter from "./Voter"; // Import the Voter component

const Answer = ({ answer }) => {
  return (
    <div className="mb-4 pb-4 border-b border-gray-300 rounded flex">
      {/* Voter Component on the left */}
      <Voter initialVotes={answer.votes} isAccepted={answer.isAccepted} />

      {/* Answer Content */}
      <div className="ml-4">
        <p>{answer.content}</p>
        <div className="text-gray-600 mt-2 text-sm">
          <span>{answer.votes} votes</span>
        </div>
      </div>
    </div>
  );
};

export default Answer;
