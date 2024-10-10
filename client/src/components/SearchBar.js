import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/stackoverflow_logo.png";

const SearchBar = () => {
  return (
    <div className="sticky top-0 z-50 border-t-[3px] border-t-primary bg-white p-2 border-b border-gray-300">
      <div className="flex justify-between items-center container">
        {/* Logo Placeholder and StackOverflow text */}
        <div className="flex items-center space-x-2 px-4">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl text-gray-700">
            stack<span className="font-extrabold ml-0.5">overflow</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex space-x-4 text-sm text-gray-500">
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Products</span>
          <span className="hover:underline cursor-pointer">OverflowAI</span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 p-1 rounded-lg  text-black placeholder-gray-500 border border-gray-300"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-2 px-4">
          <button className="px-3 py-1 bg-white text-secondary border border-secondary rounded-md hover:bg-secondary-200">Log in</button>
          <button className="px-3 py-1 bg-secondary text-white rounded-md hover:bg-secondary-500">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
