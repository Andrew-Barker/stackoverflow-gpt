import React from "react";
import { FaHome, FaQuestionCircle, FaTags, FaUsers } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";

const activeClasses = "font-bold text-black bg-gray-100 rounded-l-md";

const Navbar = () => {
  return (
    <div className="w-52 bg-white pl-4 pt-6 text-sm fixed top-16 h-auto">
      {/* Navbar Links */}
      <ul className="space-y-2">
        <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 hover:border hover:border-l hover:rounded-l-md cursor-pointer">
          <MdHome className="text-black text-xl" />
          <span className="text-black">Home</span>
        </li>
        <li
          className={`flex items-center space-x-3 p-2 hover:bg-gray-100 hover:border hover:border-l hover:rounded-l-md cursor-pointer ${activeClasses}`}
        >
          <FaQuestionCircle className="text-black text-xl" />
          <span className="text-black">Questions</span>
        </li>
        <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 hover:border hover:border-l hover:rounded-l-md cursor-pointer">
          <FaTags className="text-black text-xl" />
          <span className="text-black">Tags</span>
        </li>
      </ul>

      {/* Gap before Users and Companies */}
      <div className="mt-8">
        <ul className="space-y-2">
          <li className="flex items-center space-x-3 p-1 hover:bg-gray-100 hover:border hover:border-l hover:rounded-l-md cursor-pointer">
            <FaUsers className="text-black text-xl" />
            <span className="text-black">Users</span>
          </li>
          <li className="flex items-center space-x-3 p-1 hover:bg-gray-100 hover:border hover:border-l hover:rounded-l-md cursor-pointer">
            <BiBuildings className="text-black text-xl" />
            <span className="text-black">Companies</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
