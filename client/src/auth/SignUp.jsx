import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../utils/ValidationSchema";
import { Toaster, toast } from "react-hot-toast";
import MyButton from "../components/MyButton";
import visibilityOn from "../assets/visibility_on.svg";
import visibilityOff from "../assets/visibility_off.svg";
import SignUpImage from "../assets/signup-image.svg";
import GoogleIcon from "../assets/googleIcon.svg";
import BetaHouseLogo from "../assets/BH-logo.svg";
import LoadingRing from "../utils/Loader";

const baseUrl = import.meta.env.VITE_API_URL;
const SignUp = () => {
  const [isReveal, setIsReveal] = useState(false);
  const [isReveal2, setIsReveal2] = useState(false);
  const [isError, setIsError] = useState(null);
 const navigate = useNavigate(); // Initialize useNavigate for redirection
  function togglePwd() {
    setIsReveal((prev) => !prev);
  }
  function togglePwd2() {
    setIsReveal2((prev) => !prev);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const onSubmit = async (data) => {
    try {
      const req = await fetch(`${baseUrl}/api/auth/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      if (!res.success) {
        // Show error message if sign-up fails
        setIsError(res.errMsg);
        toast.error(res.errMsg); // Display error using toast
        setTimeout(() => setIsError(null), 3000);
        return; // Stop further execution if sign-up fails
      }

      // If sign-up is successful
      toast.success(res.message);
      reset(); // Reset the form
      navigate("/signin"); // Redirect to the sign-in page
    } catch (error) {
      // Handle unexpected errors
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Sign-up error:", error);
    }
  };
   const btnText = isSubmitting ? <LoadingRing /> : "Sign Up";
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row lg:gap-10 items-center justify-center lg:pt-[50px] pt-28 pb-48 lg:pb-3 px-6 lg:px-[130px]">
      {/* Sign Up Form */}
      <div className="w-full lg:w-1/2 bg-white h-[846px]">
        <h1 className="text-[25px] font-bold text-black mb-4">
          Join our community of home seekers and explore the possibilities that
          await.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Let’s get started by filling out the information below.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name and Last Name */}
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            {/* First Name */}
            <div className="w-full">
              <label className="block text-black text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                {...register("firstName")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
              />
              <p className="text-red-600">{errors.firstName?.message}</p>
            </div>
            {/* Last Name */}
            <div className="w-full">
              <label className="block text-black text-sm font-medium mb-2  lg:mt-0 mt-4">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                {...register("lastName")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
              />
              <p className="text-red-600">{errors.lastName?.message}</p>
            </div>
          </div>
          {/* Email */}
          <div>
            <label className="block text-black text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              {...register("email")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          {/* Password */}
          <div className="relative w-full">
            <label className="block text-black text-sm font-medium mb-2">
              Password
            </label>
            <input
              type={isReveal ? "text" : "password"}
              placeholder="Enter Password"
              {...register("password")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
            <img
              className=" absolute top-10  left-[90%]"
              src={isReveal ? visibilityOff : visibilityOn}
              alt="toggle-password-img"
              onClick={togglePwd}
            />
            <p className="text-red-600">{errors.password?.message}</p>
          </div>
          {/* Confirm Password */}
          <div className="relative w-full">
            <label className="block text-black text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type={isReveal2 ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("cPassword")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
            />
            <img
              className=" absolute top-12  left-[90%]"
              src={isReveal2 ? visibilityOff : visibilityOn}
              alt="toggle-password-img"
              onClick={togglePwd2}
            />
            <p className="text-red-600">{errors.cPassword?.message}</p>
          </div>
          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#3D9970] border-gray-300 rounded focus:ring-[#3D9970]"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to Terms of Service and Privacy Policies
            </label>
          </div>
          {isError && (
            <div className="text-red-500 bg-red-100 px-4 py-2 rounded mt-2 text-sm">
              {isError}
            </div>
          )}
          {/* Sign Up Button */}
          <MyButton
            disabled={isSubmitting}
            text={btnText}
            className={`w-full h-[40px] font-[500] text-[20px] ${
              isSubmitting ? "bg-dark" : "bg-[#3D9970] hover:bg-[#2E7A5C] transition-all duration-300 text-white"
            } `}
          />
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
        {/* Already Have an Account */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#3D9970] font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block  relative">
        {/* BetaHouse Logo */}
        <div className="absolute top-35 left-4  p-2  flex items-center">
          <img
            src={BetaHouseLogo}
            alt="BetaHouse Logo"
            className="w-10 bg-[#3D9970] rounded-full  p-2  shadow-md flex items-center h-10"
          />
          <span className="ml-2 text-white font-bold text-lg">BetaHouse</span>
        </div>
        <img
          src={SignUpImage}
          alt="Sign Up"
          className="w-[779px] h-[1028px]  "
        />
      </div>
    </div>
  );
};

export default SignUp;
