import React, { useState } from "react";
import Searchfield from "./Searchfield";
import HeroImg from "../../assets/Hero-img.svg";

const Hero = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleFilter = (properties) => {
    setFilteredProperties(properties);
  };
  return (
    <div
      className="md:h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      {/* Hero Section Content */}
      <div className="h-full flex flex-col items-center justify-center text-center text-white">
        <div className="">
          <h1
            className="text-[40px] md:text-[68px] font-bold font-outfit pt-30 md:pt-15 leading-[100%] tracking-[2px] capitalize"
            style={{
              textAlign: "center", // Horizontal align center
            }}
          >
            Browse Our Properties
          </h1>
          <p
            className="text-[26px] font-outfit pt-10 mt-15 leading-[160%]"
            style={{
              textAlign: "center", // Horizontal align center
            }}
          >
            Find your perfect home among our curated properties. Start <br />{" "}
            browsing now!
          </p>
        </div>

        {/* Search Field */}
        <div className="w-full px-4 mt-15 md:px-8 lg:px-16">
          <Searchfield onFilter={handleFilter} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
