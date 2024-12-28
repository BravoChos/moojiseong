import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Left: Logo */}
        <div className="hidden md:flex flex items-center space-x-2">
          <text className="text-2xl text-gray-700 font-bold">MOOJI</text>
        </div>

        {/* Center: Navigation Links */}
        <nav className="space-x-6 text-sm font-medium">
          <a href="/guide" className="text-base text-gray-700 hover:text-blue-500">
            Guide
          </a>
          <a href="/calculator" className="text-base text-gray-700 hover:text-blue-500">
            MOO Calculator
          </a>
          <a href="/mymoo" className="text-base text-gray-700 hover:text-blue-500">
            My MOO
          </a>
        </nav>

        {/* Right: Login/Signup */}
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-gray-700 hover:text-blue-500 text-sm font-medium">
            Login
          </a>
          <a href="/signup" className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-600">
            Signup
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
