import React from "react";

const LinkedList = ({ links, title = "Linked", expansionText }) => {
  return (
    <div className="mt-6">
      <h3 className="mb-4">{title}</h3>
      <ul className="text-xs">
        {links.map((link) => (
          <li key={link.id} className="mb-2 flex">
            <div
              className={`flex items-center justify-center rounded min-w-12 max-w-12 min-h-7 max-h-7 text-center px-2 mr-2 ${
                link.isAnswered ? "bg-green-700 text-white" : "bg-gray-200"
              }`}
            >
              {link.id}
            </div>
            <span className="text-secondary cursor-pointer hover:text-secondary-500">{link.text}</span>
          </li>
        ))}
      </ul>
      {expansionText && <p className="text-sm text-secondary text-center mt-6 hover:text-seconday-500 cursor-pointer">{expansionText}</p>}
    </div>
  );
};

export default LinkedList;
