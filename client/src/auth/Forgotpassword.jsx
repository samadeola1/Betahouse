import React from "react";
import { Link } from "react-router-dom";
import ForgotPasswordImage from "../assets/signup-image.svg";
import BetaHouseLogo from "../assets/BH-logo.svg";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center pt-[120px] px-6 lg:px-[130px]">
      {/* Forgot Password Form */}
      <div className="w-full lg:w-1/2 bg-white lg:pr-10">
        <h1 className="text-3xl font-bold text-black mb-6 text-center lg:text-left">
          Forgot Your Password?
        </h1>
        <p className="text-lg text-gray-600 mb-6 text-center lg:text-left">
          Enter your email address below and we’ll send you instructions to
          reset your password.
        </p>
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
          </div>
          {/* Reset Password Button */}
          <button className="w-full bg-[#3D9970] text-white py-3 rounded-md hover:bg-[#2E7A5C] transition">
            Reset Password
          </button>
        </form>
        {/* Back to Sign In */}
        <p className="text-center text-gray-600 mt-4">
          Remember your password?{" "}
          <Link
            to="/signin"
            className="text-[#3D9970] font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center">
        {/* BetaHouse Logo */}
        <div className="absolute top-4 left-10  flex items-center">
          <img
            src={BetaHouseLogo}
            alt="BetaHouse Logo"
            className="w-10 h-10 bg-[#3D9970] p-2 rounded-full shadow-md"
          />
          <span className="ml-2 text-white font-bold text-lg">BetaHouse</span>
        </div>
        {/* Image */}
        <div className="w-[90%] h-[80%] bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <img
            src={ForgotPasswordImage}
            alt="Forgot Password"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;