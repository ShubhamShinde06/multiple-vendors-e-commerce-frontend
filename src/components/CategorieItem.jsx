import React from "react";
import demo from "../assets/demo.webp";

const CategorieItem = () => {
  return (
    <div>
      <div className="xl:w-[305px] lg:w-[245px] md:w-[345px] w-[150px] md:gap-8 h-full flex flex-col gap-8">
        <div className="  py-2 md:py-0 cursor-pointer hover:border-b-2 hover:border-[#80B500] w-ful h-1/2 border flex flex-col items-center justify-center gap-4">
          <img src={demo} alt="" />
          <h1 className=" font-bold text-xl">Browse all</h1>
          <span className=" font-bold">60 items</span>
        </div>
        <div className=" cursor-pointer hover:border-b-2 hover:border-[#80B500] w-ful h-1/2 border flex flex-col items-center justify-center gap-4">
          <img src={demo} alt="" />
          <h1 className=" font-bold text-xl">Browse all</h1>
          <span className=" font-bold">60 items</span>
        </div>
      </div>
    </div>
  );
};

export default CategorieItem;
