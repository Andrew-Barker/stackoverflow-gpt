import React from "react";
import Comments from "./Comments";
import { format } from "date-fns";

const PostFooter = ({ dateString, comments, type = "answer" }) => {
  return (
    <div className="mt-4 text-gray-500">
      <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-6">
        {/* Clickable Text Elements */}
        <div className="space-x-4">
          <span className="hover:text-gray-700 cursor-pointer">Share</span>
          <span className="hover:text-gray-700 cursor-pointer">improve this {type.toLowerCase()}</span>
          <span className="hover:text-gray-700 cursor-pointer">Follow</span>
        </div>

        {/* Edited Date and Community Wiki */}
        <div className="flex items-center space-x-4">
          <span className="text-secondary">edited {format(new Date(dateString), "MMM d, yyyy 'at' HH:mm")}</span>
          <span className="text-gray-400">Community Wiki</span>
        </div>
      </div>

      {/* Comments Section */}
      <Comments comments={comments} />
    </div>
  );
};

export default PostFooter;
