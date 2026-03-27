import React from "react";

const BulkOrder = () => {
  return (
    <div className="w-full h-auto bg-[#404752] p-10 flex flex-col lg:flex-row items-center justify-around gap-10">
      <h1 className="text-2xl font-bold text-[#F1F6FC]/50">For Bulk Order</h1>
      <div className="w-full lg:w-[60%] h-full flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-15 text-[#F1F6FC]/50">
        <p className="text-2xl font-semibold">+(91) 987 110 2144</p>
        <span className="hidden sm:block text-2xl font-semibold">|</span>
        <p className="text-2xl font-semibold">RebootThreads@gmail.com</p>
      </div>
    </div>
  );
};

export default BulkOrder;
