import React from "react";
import logo from "../assets/stackoverflow_logo.png";

const hoverClass = "hover:text-gray-200";
const Footer = () => {
  return (
    <div className="bg-[#0c0d0e] text-gray-400 py-8">
      <div className="container mx-auto grid grid-cols-6 gap-8 text-xs">
        {/* Stack Overflow Section with Logo and Title/Links */}
        <div className="flex space-x-4">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-14 h-14 -mt-4" />

          {/* Title and Links */}
          <div className="flex flex-col">
            <h3 className="font-bold text-sm text-gray-300">STACK OVERFLOW</h3>
            <ul className="mt-2">
              <li className="mb-2">
                <a href="#" className={hoverClass}>
                  Questions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className={hoverClass}>
                  Help
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className={hoverClass}>
                  Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="font-bold mb-3 text-sm text-gray-300">PRODUCTS</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Teams
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Advertising
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Talent
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold mb-3 text-sm text-gray-300">COMPANY</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Press
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Work Here
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Legal
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Cookie Settings
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Stack Exchange Network Section */}
        <div>
          <h3 className="font-bold mb-3 text-sm text-gray-300">STACK EXCHANGE NETWORK</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Technology
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Culture & Recreation
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Life & Arts
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Science
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Professional
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className={hoverClass}>
                Business
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                API
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className={hoverClass}>
                Data
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links with Copyright at the bottom */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex space-x-3">
            <p className={`cursor-pointer ${hoverClass}`}>Blog</p>
            <p className={`cursor-pointer ${hoverClass}`}>Facebook</p>
            <p className={`cursor-pointer ${hoverClass}`}>LinkedIn</p>
            <p className={`cursor-pointer ${hoverClass}`}>Twitter</p>
            <p className={`cursor-pointer ${hoverClass}`}>Instagram</p>
          </div>
          {/* Copyright Text */}
          <p className="text-gray-400 text-xs mt-4">© 2024 Stack Exchange Inc; user contributions licensed under CC BY-SA. rev 2024.10.10.16668</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
