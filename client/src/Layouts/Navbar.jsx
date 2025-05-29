import React, { useState } from "react";
import Navlogo from "../assets/BH-logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            href="/properties"
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

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4 font-exo2">
          <Link to="/signup">
            <button className="px-4 py-3 border border-white text-white text-[20px] rounded-[8px] hover:bg-white hover:text-[#1A1A1A] transition">
              Sign Up
            </button>
          </Link>
          <Link to="/signin">
            <button className="px-6 py-3 bg-[#3D9970] text-white text-[20px] rounded-[8px] hover:bg-[#2E7A5C] transition">
              Login
            </button>
          </Link>
        </div>

        {/* Hamburger Menu for Tablets */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#1A1A1A]/90 shadow-md flex flex-col space-y-4 p-4 text-center">
          <a
            href="#home"
            className="text-[20px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            Home
          </a>
          <a
            href="#properties"
            className="text-[20px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            Properties
          </a>
          <a
            href="#about"
            className="text-[20px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            About Us
          </a>
          <a
            href="#blog"
            className="text-[20px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-[20px] font-exo2 text-[#FFFFFF] hover:text-[#3D9970]"
          >
            Contact Us
          </a>
          <Link to="/signup">
            <button className="px-3 py-1 border border-white text-white text-[20px] rounded-full hover:bg-white hover:text-[#1A1A1A] transition">
              Sign Up
            </button>
          </Link>
          <Link to="/signin">
            <button className=" px-3 py-1 bg-[#3D9970] text-white text-[20px] rounded-full hover:bg-[#2E7A5C] transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
