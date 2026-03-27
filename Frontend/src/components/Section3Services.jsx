import React from "react";
import customTshirts from "../assets/custom-tshirts.jpg";

const Section3Services = ({heading,children}) => {
  return (
    <>
      <div className="w-full h-auto flex flex-col md:flex-row  px-5 sm:px-10">
        <div className="flex flex-col gap-3 w-full md:w-[60%] mx-auto pr-10 py-10">
          <h1 className="text-4xl font-semibold py-5">
            {heading}
          </h1>
          {children}
        </div>
        <div className="w-full md:w-[40%] bg-yellow-500 md:my-25">
          <img
            className="w-full h-full object-cover"
            src={customTshirts}
            alt="customTShirt"
          />
        </div>
      </div>
    </>
  );
};

export default Section3Services; 
