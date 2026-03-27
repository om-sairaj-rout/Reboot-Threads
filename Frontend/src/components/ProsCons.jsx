import React from "react";

const ProsCons = ({title,pros,children}) => {
  return (
    <>
      <div className="w-full h-auto px-5 sm:px-15 py-30">
        <h1 className="text-4xl font-semibold leading-15 lg:w-[45%]">
          Why choose {title} method
        </h1>
        <div className="w-full h-[90%] flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-full my-5">
            {children}
          </div>
          <div className="w-full lg:w-1/2 h-full bg-[#e0f2f1] border-l-4 border-[#037166] my-10 lg:mx-10 p-10">
            <h1 className="text-4xl font-semibold">Pros Of {title}</h1>
            <ul className="list-disc p-5 text-lg">
              {pros.map((item,index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProsCons;
