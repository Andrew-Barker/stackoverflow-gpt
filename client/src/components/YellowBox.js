import React from "react";

const YellowBox = () => {
  return (
    <div className="bg-so-yellow-light border border-so-yellow-dark rounded">
      {/* The Overflow Blog */}
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-700 py-3 px-4 border-b border-so-yellow-dark bg-so-yellow-dark/25">The Overflow Blog</h3>
        <p className="text-sm py-3 px-4">Rust is evolving from system-level language to UI and frontend development</p>
      </div>

      {/* Featured on Meta */}
      <div className="mb-4">
        <h3 className="font-bold text-sm text-gray-700 py-3 px-4 border-y border-so-yellow-dark bg-so-yellow-dark/25">Featured on Meta</h3>
        <ul className="text-sm list-disc list-inside  py-3 px-4">
          <li>Preventing unauthorized automated access to the network</li>
          <li>Upcoming initiatives on Stack Overflow and across the Stack Exchange network</li>
          <li>Proposed designs to update the homepage for logged-in users</li>
          <li>Feedback Requested: How do you use the tagged questions page?</li>
        </ul>
      </div>

      {/* Hot Meta Posts */}
      <div>
        <h3 className="font-bold text-sm text-gray-700 py-3 px-4 border-y border-so-yellow-dark bg-so-yellow-dark/25">Hot Meta Posts</h3>
        <ul className="text-sm list-disc list-inside  py-3 px-4">
          <li>Why was my question about how regex lookarounds work, considered a duplicate...</li>
          <li>Is there a point to reviewing/accepting suggested edits of tags on a poorly...</li>
        </ul>
      </div>
    </div>
  );
};

export default YellowBox;
