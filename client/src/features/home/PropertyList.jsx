import React, { useState } from "react";
import { Link } from "react-router-dom";
import { propertyTypes } from "../../../db";
import locationIcon from "../../../src/assets/location-icon.svg";
import LinkIcon from "../../../src/assets/link-icon.svg";
import VideoIcon from "../../../src/assets/video-icon.svg";
import PictureIcon from "../../../src/assets/picture-icon.svg";
import BedroomIcon from "../../../src/assets/Bedroom-icon.svg";
import BathroomIcon from "../../../src/assets/Bathroom-icon.png";
import ArrowIcon from "../../../src/assets/arrow-icon.svg";
import ShareIcon from "../../../src/assets/share-icon.png";
import LoveIcon from "../../../src/assets/love-icon.svg";

const PropertyList = ({ properties }) => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = properties
    ? properties.slice(startIndex, endIndex)
    : propertyTypes.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen py-10 lg:px-[80px]">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Property Listings
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {currentProperties.map((property) => (
            <div
              key={property._id}
              className="card bg-white shadow-md rounded-lg"
            >
              {/* Image Section */}
              <figure className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="rounded-t-lg h-[200px] w-full object-cover"
                />
                {/* Featured Text */}
                <div className="absolute top-2 left-2 bg-[#3D9970] text-white text-xs font-bold px-2 py-1 rounded">
                  Featured
                </div>
                {/* For Sale Text */}
                <div className="absolute top-2 right-2 bg-gray-300 text-black text-xs font-bold px-2 py-1 rounded">
                  For Rent
                </div>
                {/* Icons at Bottom Right */}
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <img
                    src={LinkIcon}
                    alt="Link Icon"
                    className="w-6 h-6 cursor-pointer hover:opacity-80"
                  />
                  <img
                    src={VideoIcon}
                    alt="Video Icon"
                    className="w-6 h-6 cursor-pointer hover:opacity-80"
                  />
                  <img
                    src={PictureIcon}
                    alt="Picture Icon"
                    className="w-6 h-6 cursor-pointer hover:opacity-80"
                  />
                </div>
              </figure>

              {/* Card Body */}
              <div className="card-body p-4 font-outfit">
                <h2 className="card-title text-lg font-bold">
                  {property.title}
                </h2>
                <div className="flex items-center text-sm text-[#373737]">
                  <img
                    src={locationIcon}
                    alt="location Icon"
                    className="w-4 h-4 mr-2"
                  />
                  <p className="text-[12px] text-[#373737]">
                    {property.location}
                  </p>
                </div>
                <div className="flex items-center mt-2 gap-6">
                  {/* Bedroom Section */}
                  <div className="flex items-center text-sm text-[#373737]">
                    <img
                      src={BedroomIcon}
                      alt="Bedroom Icon"
                      className="w-4 h-4 mr-2"
                    />
                    {property.bedroom}
                  </div>
                  {/* Bathroom Section */}
                  <div className="flex items-center text-sm text-[#373737]">
                    <img
                      src={BathroomIcon}
                      alt="Bathroom Icon"
                      className="w-4 h-4 mr-2"
                    />
                    {property.Bathrooms}
                  </div>
                </div>

                {/* Price Section */}
                <div className="flex items-center text-[18px] text-[#373737] mt-2  space-x-2">
                  <span>₦{property.price}</span>
                  <div className="flex items-center gap-6 mx-8">
                    <img
                      src={ArrowIcon}
                      alt="Arrow Icon"
                      className="w-3 h-3 cursor-pointer  hover:opacity-80"
                    />
                    <img
                      src={ShareIcon}
                      alt="Share Icon"
                      className="w-3 h-3 cursor-pointer  hover:opacity-80"
                    />
                    <img
                      src={LoveIcon}
                      alt="Love Icon"
                      className="w-3 h-3 cursor-pointer  hover:opacity-80"
                    />
                  </div>
                </div>
                <div className="card-actions mt-4">
                  <Link
                    to={`/property/${property._id}`}
                    className="btn bg-[#3D9970] w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {[1, 2, 3, 4].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`btn ${
                currentPage === pageNumber
                  ? "btn-primary bg-[#3D9970]"
                  : "btn-outline"
              } px-4`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
