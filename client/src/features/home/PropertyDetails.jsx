import React from "react";
import { useParams } from "react-router-dom";
import { propertyTypes } from "../../../db";

const PropertyDetails = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const property = propertyTypes.find((item) => item._id === parseInt(id)); // Find the property by ID

  if (!property) {
    return <div className="text-center text-red-500">Property not found!</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-30">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src={property.image}
            alt={property.title}
            className="rounded-lg w-full h-[400px] object-cover mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Location:</strong> {property.location}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Bedrooms:</strong> {property.bedroom}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Bathrooms:</strong> {property.Bathrooms}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Price:</strong> ₦{property.price}
          </p>
          <p className="text-lg font-bold text-gray-800 mt-6">
            <strong>Description:</strong>
          </p>
          <p className="text-lg text-gray-700">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
