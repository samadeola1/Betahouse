import React from "react";
import { useNavigate } from "react-router-dom";
import locationIcon from "../assets/location-icon.svg";
import phonIcon from "../assets/phoneIcon.svg";
import emailIcon from "../assets/emailIcon.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#035A33] text-[#FFFFFF] py-10 px-6 lg:px-20 font-Outfit">
      <section className="md:flex justify-between items-start md:gap-6 space-y-10 md:space-y-0">
        {/* About Section */}
        <div>
          <div className="flex items-center mb-4">
            <h1 className="text-2xl font-bold text-[#FFFFFF] p-2 rounded-full bg-[#4BA586]">
              BH
            </h1>
            <h1 className="ml-2 text-2xl text-[#FEFEFF] font-medium tracking-wide">
              BetaHouse
            </h1>
          </div>
          <p className=" mb-6 text-[16px] font-light max-w-[300px]">
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>
          <div className="space-y-4 text-[16px] font-light">
            <div className="flex items-center gap-4">
              <img src={locationIcon} alt="Location Icon" className="w-6 h-6" />
              <p className="">Tinubu Estate, Lekki, Lagos</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={phonIcon} alt="Phone Icon" className="w-6 h-6" />
              <p className="">+234 675 8935 675</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={emailIcon} alt="Email Icon" className="w-6 h-6" />
              <p className="">support@rentbetahouse.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="text-lg font-semibold text-[#FEFEFF] mb-4">
            Quick Links
          </h1>
          <div
            className="flex flex-col gap-2 text-[16px] font-light "
            onClick={() => (window.location.href = "/")}
          >
            <p className="hover:text-black cursor-pointer">Home</p>
            <p className="hover:text-black cursor-pointer">Properties</p>
            <p className="hover:text-black cursor-pointer">About</p>
            <p className="hover:text-black cursor-pointer">Contact Us</p>
            <p className="hover:text-black cursor-pointer">Blog</p>
          </div>
        </div>

        {/* More Section */}
        <div>
          <h1 className="text-lg font-semibold text-[#FEFEFF] mb-4">More</h1>
          <div className="flex flex-col gap-2 text-[16px] font-light">
            <p className="hover:text-black cursor-pointer">Agents</p>
            <p className="hover:text-black cursor-pointer">Affordable Houses</p>
            <p className="hover:text-black cursor-pointer">FAQ's</p>
          </div>
        </div>

        {/* Popular Search Section */}
        <div>
          <h1 className="text-lg font-semibold text-[#FEFEFF] mb-4">
            Popular Search
          </h1>
          <div className="flex flex-col gap-2 text-[16px] font-light ">
            <p className="hover:text-black cursor-pointer">
              Apartment for sale
            </p>
            <p className="hover:text-black cursor-pointer">
              Apartment for rent
            </p>
            <p className="hover:text-black cursor-pointer">3 Bedroom flat</p>
            <p className="hover:text-black cursor-pointer">Bungalow</p>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <section className="mt-10 border-t border-gray-700 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center  text-sm">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p className=" border-r-1 pr-4">&copy; 2025 BetaHouse</p>
            <p>Code by Sam</p>
          </div>
          <p className="hover:text-black cursor-pointer">Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
