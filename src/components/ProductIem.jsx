import React from "react";
import apple from "../assets/apple.webp";

const ProductIem = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col gap-5 md:gap-8 lg:gap-6 xl:gap-8">
        <div className="xl:w-[290px] lg:w-[245px] md:w-[345px] w-[160px] h-1/2 border cursor-pointer">
          <div className="xl:h-[70%] lg:h-[70%] md:h-[70%] h-[70%] bg-[#F9F9F9] flex items-center justify-center overflow-hidden">
            <img src={apple} alt="" className=" w-[150px] h-[150px] " />
          </div>
          <div className="h-[30%] bg-[#FFFFFF] flex flex-col gap-2 items-center justify-center">
            <p className=" uppercase font-bold lg:text-[14px]">
              red hot tomato
            </p>
            <span className="text-[#80B500] font-bold xl:text-2xl">
              $128.25{" "}
              <span className=" line-through font-normal xl:text-xl  ml-2">
                $162.00
              </span>
            </span>
          </div>
        </div>
        <div className="xl:w-[290px] lg:w-[245px] md:w-[345px] h-1/2 border cursor-pointer">
          <div className="xl:h-[70%] lg:h-[70%] md:h-[70%] h-[70%] bg-[#F9F9F9] flex items-center justify-center overflow-hidden">
            <img src={apple} alt="" className=" w-[150px] h-[150px] " />
          </div>
          <div className="h-[30%] bg-[#FFFFFF] flex flex-col gap-2 items-center justify-center">
            <p className=" uppercase font-bold lg:text-[14px]">
              red hot tomato
            </p>
            <span className="text-[#80B500] font-bold xl:text-2xl">
              $128.25{" "}
              <span className=" line-through font-normal xl:text-xl  ml-2">
                $162.00
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIem;
