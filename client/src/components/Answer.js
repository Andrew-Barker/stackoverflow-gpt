import React from "react";
import Voter from "./Voter"; // Import the Voter component
import Comments from "./Comments"; // Import the Comments component
import PostFooter from "./PostFooter";

const Answer = ({ answer }) => {
  return (
    <div className="mb-4 pb-4 border-b border-gray-300 rounded flex">
      {/* Voter Component on the left */}
      <Voter initialVotes={answer.votes} isAccepted={answer.isAccepted} />

      {/* Answer Content and Comments */}
      <div className="ml-4 flex-grow">
        <p>{answer.content}</p>

        {/* Comments below the answer content */}
        <div className="mt-4">
          <PostFooter dateString={answer.datePosted} comments={answer.comments} />
        </div>
      </div>
    </div>
  );
};

export default Answer;
