import React, { useState } from "react";
import Hero from "../features/home/Hero";
import PropertyList from "../features/home/PropertyList";

const Home = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Property List Section */}
      <div className="mt-10">
        <PropertyList
          properties={filteredProperties.length > 0 ? filteredProperties : null}
        />
      </div>
    </>
  );
};

export default Home;
