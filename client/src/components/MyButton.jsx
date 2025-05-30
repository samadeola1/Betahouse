import React from 'react'

const MyButton = ({text ,className = "",onClick,disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`${
        disabled
          ? "bg-gray-700 cursor-not-allowed"
          : "bg-[#3D9970] cursor-pointer"
      } text-[#FBFBFB] rounded-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default MyButton