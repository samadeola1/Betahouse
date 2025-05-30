import React, { useState } from "react";
import Navlogo from "../assets/BH-logo.svg";
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // Access user and logout from AuthContext
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
    navigate("/signin"); // Redirect to sign-in page
  };

  return (
    <nav className="fixed py-4 bg-[#1D293F1F] left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 md:px-[30px] lg:px-[80px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-[#3D9970] h-12 w-12 flex justify-center items-center">
            <Link to="/">
              <img src={Navlogo} alt="BetaHouse Logo" className="h-6 w-6" />
            </Link>
          </div>
          <h1 className="text-[25px]  font-poppins text-[#FFFFFF]">
            BetaHouse
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <a
            href="/"
            className="text-[22px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            Home
          </a>
          <a
            href=""
            className="text-[22px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            Properties
          </a>
          <a
            href="#about"
            className="text-[22px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            About Us
          </a>
          <a
            href="#blog"
            className="text-[22px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-[22px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            Contact Us
          </a>
        </div>

        {/* Buttons or User Dropdown */}
        <div className="flex items-center space-x-4">
          {user ? (
            // Show user dropdown if logged in
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center space-x-2 text-[#3D9970] bg-[#1D293F1F] text-[20px] px-4 py-2 rounded-md "
              >
                <span className="font-medium">{user.firstName}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

         {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                {/* Navigation Links for md and below */}
                <div className="lg:hidden">
                  <a
                    href="#home"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Home
                  </a>
                  <a
                    href="#properties"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Properties
                  </a>
                  <a
                    href="#about"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </a>
                  <a
                    href="#blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </a>
  <a
                    href="#contact"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Contact Us
                  </a>
                </div>
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          // Show Sign Up and Login buttons if not logged in
          <>
            {/* Hamburger Menu for Mobile and Tablet */}
            <div className="lg:hidden relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/signin"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>

            {/* Sign Up and Login Buttons for Desktop */}
            <Link to="/signup" className="hidden lg:block">
              <button className="px-4 py-3 border border-white text-white text-[20px] rounded-[8px] hover:bg-white hover:text-[#3D9970]">
                Sign Up
              </button>
            </Link>
            <Link to="/signin" className="hidden lg:block">
              <button className="px-4 py-3 text-white bg-[#3D9970] text-[20px] rounded-[8px]">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
