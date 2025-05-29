import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Toaster, toast } from "react-hot-toast";
import visibilityOn from "../assets/visibility_on.svg";
import visibilityOff from "../assets/visibility_off.svg";
import SignInImage from "../assets/signup-image.svg";
import GoogleIcon from "../assets/googleIcon.svg";


// Validation Schema for Sign In
const signInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

const SignIn = () => {
  const [isReveal, setIsReveal] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
       localStorage.setItem("customerToken", res.user.token);
     
        navigate("/"); // Redirect to the home page
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Sign In Failed!");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row items-center justify-center pt-[120px] px-6 lg:px-[130px]">
      <Toaster />
      {/* Sign In Form */}
      <div className="w-full lg:w-1/2 bg-white lg:pr-10">
        <h1 className="text-3xl font-bold text-black mb-6 text-center lg:text-left">
          Welcome back to BetaHouse
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          {/* Password */}
          <div className="relative">
            <label className="block text-black text-sm font-medium mb-2">Password</label>
            <input
              type={isReveal ? "text" : "password"}
              placeholder="Enter Password"
              {...register("password")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
            <img
              className="absolute top-10 right-3 w-6 h-6 cursor-pointer"
              src={isReveal ? visibilityOff : visibilityOn}
              alt="toggle-password-img"
              onClick={() => setIsReveal(!isReveal)}
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>
          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-red-500 text-sm font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#3D9970] text-white py-3 rounded-md hover:bg-[#2E7A5C] transition"
          >
            Sign In
          </button>
        </form>
        {/* or Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-600 lowercase">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {/* Continue with Google */}
        <button className="w-full bg-white text-black py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition flex items-center justify-center space-x-2">
          <img src={GoogleIcon} alt="Google Icon" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>
        {/* Don't Have an Account */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#3D9970] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
      {/* Image Section */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center">
        <div className="w-[90%] h-[80%] bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <img src={SignInImage} alt="Sign In" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;