
// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// function Header() {
//   const location = useLocation(); // gives current URL path

//   return (
//     <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
//       {/* Logo */}
//       <h1 className="text-2xl font-bold text-gray-800">DFF Talent Exam</h1>

//       {/* Nav Links */}
//       <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
//         <Link
//           to="/"
//           className={`hover:text-blue-500 ${location.pathname === "/" ? "text-blue-500 font-bold" : ""}`}
//         >
//           Home
//         </Link>
//         <Link
//           to="/about"
//           className={`hover:text-blue-500 ${location.pathname === "/about" ? "text-blue-500 font-bold" : ""}`}
//         >
//           About
//         </Link>
//         <Link
//           to="/contact"
//           className={`hover:text-blue-500 ${location.pathname === "/contact" ? "text-blue-500 font-bold" : ""}`}
//         >
//           Contact
//         </Link>
//         <Link
//           to="/apply"
//           className={`hover:text-blue-500 ${location.pathname === "/apply" ? "text-blue-500 font-bold" : ""}`}
//         >
//           Apply
//         </Link>
//       </nav>

//       {/* Auth Buttons */}
//       <div className="space-x-4">
//         <Link
//           to="/login"
//           className={`px-4 py-2 rounded-lg ${location.pathname === "/login" ? "bg-blue-500 text-white" : "text-gray-700 hover:text-blue-500"}`}
//         >
//           Login
//         </Link>
//         <Link
//           to="/register"
//           className={`px-4 py-2 rounded-lg ${location.pathname === "/register" ? "bg-purple-500 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"}`}
//         >
//           Sign Up
//         </Link>
//       </div>
//     </header>
//   );
// }

// export default Header;



import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // gives current URL path

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-gray-800">DFF Talent Exam</h1>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link
          to="/"
          className={`hover:text-blue-500 ${location.pathname === "/" ? "text-blue-500 font-bold" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-blue-500 ${location.pathname === "/about" ? "text-blue-500 font-bold" : ""}`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`hover:text-blue-500 ${location.pathname === "/contact" ? "text-blue-500 font-bold" : ""}`}
        >
          Contact
        </Link>
        <Link
          to="/apply"
          className={`hover:text-blue-500 ${location.pathname === "/apply" ? "text-blue-500 font-bold" : ""}`}
        >
          Apply
        </Link>
        <Link
          to="/admit-card"
          className={`hover:text-blue-500 ${location.pathname === "/admit-card" ? "text-blue-500 font-bold" : ""}`}
        >
          Admit Card
        </Link>
      </nav>

      {/* Auth Buttons */}
      <div className="space-x-4">
        <Link
          to="/login"
          className={`px-4 py-2 rounded-lg ${location.pathname === "/login" ? "bg-blue-500 text-white" : "text-gray-700 hover:text-blue-500"}`}
        >
          Login
        </Link>
        <Link
          to="/register"
          className={`px-4 py-2 rounded-lg ${location.pathname === "/register" ? "bg-purple-500 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"}`}
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
