import React, { useState } from "react";
import { FaCaretUp, FaCaretDown, FaRegBookmark, FaHistory, FaCheck } from "react-icons/fa";

const Voter = ({ initialVotes, isAccepted }) => {
  // Manage vote count and active states for upvote/downvote
  const [votes, setVotes] = useState(initialVotes);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  // Handle Upvote
  const handleUpvote = () => {
    if (downvoted) {
      setVotes(votes + 2);
      setDownvoted(false);
      setUpvoted(true);
    } else if (!upvoted) {
      setVotes(votes + 1);
      setUpvoted(true);
    } else {
      setVotes(votes - 1);
      setUpvoted(false);
    }
  };

  // Handle Downvote
  const handleDownvote = () => {
    if (upvoted) {
      setVotes(votes - 2);
      setUpvoted(false);
      setDownvoted(true);
    } else if (!downvoted) {
      setVotes(votes - 1);
      setDownvoted(true);
    } else {
      setVotes(votes + 1);
      setDownvoted(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Upvote Button */}
      <button
        onClick={handleUpvote}
        className={`border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center mb-2 ${
          upvoted ? "bg-blue-500 text-white" : "hover:bg-orange-100"
        }`}
      >
        <FaCaretUp size={20} />
      </button>

      {/* Vote Count */}
      <span className="text-xl font-bold text-black mb-2">{votes}</span>

      {/* Downvote Button */}
      <button
        onClick={handleDownvote}
        className={`border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center mb-8 ${
          downvoted ? "bg-blue-500 text-white" : "hover:bg-orange-100"
        }`}
      >
        <FaCaretDown size={20} />
      </button>

      {/* Bookmark Button */}
      <button className="text-gray-400 mb-3">
        <FaRegBookmark size={18} />
      </button>

      {/* Mark as Accepted Button */}
      {isAccepted && (
        <button className="text-green-700 mb-2">
          <FaCheck size={24} />
        </button>
      )}

      {/* View History Button */}
      <button className="text-gray-400 hover:text-secondary-500 mb-2">
        <FaHistory size={18} />
      </button>
    </div>
  );
};

export default Voter;
