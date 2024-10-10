import React from "react";
import { format } from "date-fns";

// Comments component for displaying comments and add comment option
const Comments = ({ comments }) => {
  return (
    <div className="text-black">
      <div className="divide-y divide-gray-200 border-b border-gray-200">
        {comments.map((comment, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            {/* Comment Content */}
            <div className="flex items-center space-x-2">
              <span className="text-sm">{comment.content}</span>
              <span className="">-</span>
              <span className="text-secondary text-sm">{comment.author}</span>
              <span className="text-sm text-gray-500">{format(new Date(comment.datePosted), "MMM d, yyyy 'at' HH:mm")}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1">
        <span className="text-gray-400 hover:underline cursor-pointer text-sm">Add a comment</span>
      </div>
    </div>
  );
};

export default Comments;
