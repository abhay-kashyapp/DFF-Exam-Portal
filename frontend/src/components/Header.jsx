import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-gray-800">DFF Talent Exam</h1>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        <Link to="/apply" className="hover:text-blue-500">Apply</Link>
      </nav>

      {/* Auth Buttons */}
      <div className="space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow hover:opacity-90"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
