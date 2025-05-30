import React, { useState } from "react";
import { propertyTypes } from "../../../db";

const Searchfield = ({ onFilter }) => {
  // Extract unique locations and property types from db.js
  const locations = [
    ...new Set(propertyTypes.map((property) => property.location)),
  ];
  const propertyTitles = [
    ...new Set(propertyTypes.map((property) => property.title)),
  ];

  // State for filters
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState(1);

  // Handle bedroom increment and decrement
  const handleIncrement = () => {
    setBedrooms(bedrooms + 1);
  };

  const handleDecrement = () => {
    if (bedrooms > 1) {
      setBedrooms(bedrooms - 1);
    }
  };

  // Handle filtering
  const handleFilter = () => {
    const filteredProperties = propertyTypes.filter((property) => {
      return (
        (!selectedLocation || property.location === selectedLocation) &&
        (!selectedPropertyType || property.title === selectedPropertyType) &&
        (!bedrooms || parseInt(property.bedroom) === bedrooms)
      );
    });
    onFilter(filteredProperties);
  };

  return (
    <div className="bg-white shadow-md font-outfit text-[14px] rounded-lg p-4 flex flex-wrap items-center justify-between space-y-4 md:space-y-0 md:flex-nowrap w-full max-w-[1200px] mx-auto">
      {/* Location Dropdown */}
      <div className="flex flex-col items-start w-full md:w-auto">
        <label
          className="text-[14px] font-outfit text-black uppercase mb-2"
          htmlFor="location"
        >
          Location
        </label>
        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full md:w-[200px] px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
        >
          <option value="">Select Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[40px] w-[1px] bg-gray-300 mx-4"></div>

      {/* Property Type Dropdown */}
      <div className="flex flex-col items-start w-full md:w-auto">
        <label
          className="text-[14px] font-outfit text-black uppercase mb-2"
          htmlFor="propertyType"
        >
          Property Type
        </label>
        <select
          id="propertyType"
          value={selectedPropertyType}
          onChange={(e) => setSelectedPropertyType(e.target.value)}
          className="w-full md:w-[200px] px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#3D9970]"
        >
          <option value="">Select Property Type</option>
          {propertyTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[40px] w-[1px] bg-gray-300 mx-4"></div>

      {/* Bedroom Counter */}
      <div className="flex flex-col items-start w-full md:w-auto">
        <label
          className="text-[14px] font-outfit text-black uppercase mb-2"
          htmlFor="bedrooms"
        >
          Bedroom
        </label>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrement}
            className="px-3 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition"
          >
            -
          </button>
          <span className="text-[14px] font-outfit text-black">{bedrooms}</span>
          <button
            onClick={handleIncrement}
            className="px-3 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[40px] w-[1px] bg-gray-300 mx-4"></div>

      {/* Find My Properties Button */}
      <div className="flex flex-col items-start w-full md:w-auto bg-[#3D9970] rounded-md px-2 py-3 ">
        <button
          onClick={handleFilter}
          className="w-full text-white text-[14px] font-outfit uppercase transition"
        >
          Find My Properties
        </button>
      </div>
    </div>
  );
};

export default Searchfield;
