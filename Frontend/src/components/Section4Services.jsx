import React from 'react'
import quality from "../assets/quality.jpg";

const Section4Services = ({heading,children}) => {
  return (
    <>
    <div className="w-[90%] h-auto flex flex-col md:flex-row my-10 mx-auto">
        <div className="w-full md:w-[50%]">
          <img
            className="w-full h-full object-cover"
            src={quality}
            alt="customTShirt"
          />
        </div>
        <div className="w-full md:w-[50%] p-15 bg-[#FBF9F4]">
          <h1 className="font-semibold text-4xl lg:py-4">{heading}</h1>
          {children}
        </div>
      </div>
    </>
  )
}
 
export default Section4Services