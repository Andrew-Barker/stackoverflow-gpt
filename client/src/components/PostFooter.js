import React from "react";
import Comments from "./Comments";
import { format } from "date-fns";

const PostFooter = ({ dateString, comments, type = "answer", userName }) => {
  return (
    <div className="mt-4 text-gray-500">
      <div className={`grid grid-cols-3 text-sm ${comments.length > 0 ? "border-b border-gray-200 pb-6" : "pb-6"}`}>
        {/* Clickable Text Elements */}
        <div className="space-x-4 col-span-1">
          <span className="hover:text-gray-700 cursor-pointer">Share</span>
          <span className="hover:text-gray-700 cursor-pointer">improve this {type.toLowerCase()}</span>
          <span className="hover:text-gray-700 cursor-pointer">Follow</span>
        </div>

        {/* Edited Date in the Center */}
        <div className="col-span-1 text-center">
          <span className="text-secondary cursor-pointer hover:text-secondary-500">
            edited {format(new Date(dateString), "MMM d, yyyy 'at' HH:mm")}
          </span>
        </div>

        {/* Community Wiki and Username on the Right */}
        <div className="col-span-1 text-right">
          <span className="text-gray-400">Community Wiki</span>
          <span className="block text-secondary cursor-pointer hover:text-secondary-500">{userName}</span>
        </div>
      </div>

      {/* Comments Section */}
      <Comments comments={comments} />
    </div>
  );
};

export default PostFooter;
