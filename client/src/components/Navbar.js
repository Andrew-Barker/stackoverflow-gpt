import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaTags, FaUsers } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";

const activeClasses = "font-bold text-black bg-gray-100 rounded-l-md";

const Navbar = () => {
  const location = useLocation();

  const getActiveClass = (path) => (location.pathname === path ? "font-bold text-black bg-gray-100 rounded-l-md" : "");

  return (
    <div className="w-52 bg-white pl-4 pt-6 text-sm fixed top-16 h-auto">
      <ul className="space-y-0">
        {" "}
        {/* Set space-y to 0 to remove extra gaps */}
        <li>
          <Link to="/" className={`flex items-center space-x-3 p-2 hover:bg-gray-100 hover:border-l hover:rounded-l-md ${getActiveClass("/")}`}>
            <MdHome className="text-black text-xl" />
            <span className="text-black">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/questions"
            className={`flex items-center space-x-3 p-2 hover:bg-gray-100 hover:border-l hover:rounded-l-md ${getActiveClass("/questions")}`}
          >
            <FaQuestionCircle className="text-black text-xl" />
            <span className="text-black">Questions</span>
          </Link>
        </li>
        <li>
          <Link
            to="/tags"
            className={`flex items-center space-x-3 p-2 hover:bg-gray-100 hover:border-l hover:rounded-l-md ${getActiveClass("/tags")}`}
          >
            <FaTags className="text-black text-xl" />
            <span className="text-black">Tags</span>
          </Link>
        </li>
      </ul>

      <div className="mt-8">
        <ul className="space-y-0">
          {" "}
          {/* Again, set space-y to 0 */}
          <li>
            <Link
              to="/users"
              className={`flex items-center space-x-3 p-2 hover:bg-gray-100 hover:border-l hover:rounded-l-md ${getActiveClass("/users")}`}
            >
              <FaUsers className="text-black text-xl" />
              <span className="text-black">Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/companies"
              className={`flex items-center space-x-3 p-2 hover:bg-gray-100 hover:border-l hover:rounded-l-md ${getActiveClass("/companies")}`}
            >
              <BiBuildings className="text-black text-xl" />
              <span className="text-black">Companies</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
