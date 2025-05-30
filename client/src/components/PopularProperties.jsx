import { popularPropertiesData } from "../../db";
import arrowRight from "../assets/rightArrow.svg";
import arrowLeft from "../assets/leftArrow.svg";
import { useState, useEffect } from "react";

const PopularProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomProperties, setRandomProperties] = useState([]);

  const itemsPerPage = 4; // Number of items to display at once
  const totalItems = popularPropertiesData.length;

  // Generate 4 random properties for mobile view
  useEffect(() => {
    const shuffled = [...popularPropertiesData].sort(() => 0.5 - Math.random());
    setRandomProperties(shuffled.slice(0, 4));
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < totalItems) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <main className="md:mt-20 mt-12 mb-12">
      <div className="flex justify-center items-center font-Outfit font-semibold md:text-5xl text-2xl pb-6">
        Discover Our Popular Properties
      </div>
      <section className="mt-10 px-4 lg:px-20 md:px-10 mx-0 relative">
        {/* Mobile View: Single Column with Random Properties */}
        <div className="block lg:hidden">
          <div className="flex flex-col gap-10 px-4">
            {randomProperties.map((property, _id) => (
              <section
                key={_id}
                className="relative border border-gray-300 rounded-lg bg-gray-100 shadow-md overflow-hidden"
              >
                {/* Image */}
                <div className="">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="object-cover h-[300px] w-full"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end">
                  <div className="font-medium p-4 font-Outfit text-[16px] text-white bg-[#4A4A4C33]">
                    <p className="">{property.title}</p>
                    <p>{property.price}</p>
                    <div className="flex gap-2">
                      <p>{property.room}</p>
                      <p>{property.bathroom}</p>
                      <p>{property.area}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <img
                        src={property.locationIcon}
                        alt="location Icon"
                        className="w-4 h-4"
                      />
                      <p>{property.location}</p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Desktop View: Carousel */}
        <div className="hidden lg:flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className={`absolute lg:left-14 md:left-3 z-10 p-2 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === 0}
          >
            <img
              src={arrowLeft}
              alt="Previous"
              className="w-8 h-8 p-2 hover:bg-[#3D9970] bg-[#F4F4F4]  rounded-full"
            />
          </button>

          {/* Carousel Items */}
          <div className="flex gap-6 overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 "
              style={{
                transform: `translateX(-${
                  (currentIndex / itemsPerPage) * 100
                }%)`,
                width: `${(totalItems / itemsPerPage) * 100}%`,
              }}
            >
              {popularPropertiesData.map((property, _id) => (
                <section
                  key={_id}
                  className="relative border border-gray-300 rounded-lg bg-gray-100 shadow-md overflow-hidden flex-shrink-0 w-1/4"
                >
                  {/* Image */}
                  <div className="">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="object-cover md:h-full h-[300px] w-full"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-end">
                    <div className="font-medium p-4 font-Outfit text-[16px] text-white bg-[#4A4A4C33]">
                      <p className="">{property.title}</p>
                      <p>{property.price}</p>
                      <div className="flex gap-2">
                        <p>{property.room}</p>
                        <p>{property.bathroom}</p>
                        <p>{property.area}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <img
                          src={property.locationIcon}
                          alt="location Icon"
                          className="w-4 h-4"
                        />
                        <p>{property.location}</p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className={`absolute lg:right-14 md:right-3 z-10 p-2 ${
              currentIndex + itemsPerPage >= totalItems
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentIndex + itemsPerPage >= totalItems}
          >
            <img
              src={arrowRight}
              alt="Next"
              className="w-8 h-8 p-2 hover:bg-[#3D9970] bg-[#F4F4F4] rounded-full"
            />
          </button>
        </div>
      </section>
    </main>
  );
};

export default PopularProperties;
