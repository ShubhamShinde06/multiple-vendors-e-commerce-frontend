import React from "react";
import main from "../assets/main.webp";
import Gols from "./Gols";

const Slider = () => {
  return (
    <div>
      <div className="  w-full h-[700px] md:h-[500px] md:flex md:flex-col lg:flex lg:flex-row gap-8 lg:gap-4 xl:flex flex flex-col items-center justify-center p-5 lg:px-[100px] xl:px-[150px]">
        <div className=" lg:w-[50%] w-[100%]">
          <p className=" font-bold md:text-[14px] text-[18px]">100% genuine Products</p>
          <div className=" md:text-[40px] mt-2 text-[30px] xl:text-[60px] lg:text-[40px] md:flex md:flex-col font-bold">
            <span>Tasty & Healthy </span>
            <span>Organic Food</span>
          </div>
          <button className=" py-1 px-1 md:text-[15px] mt-6 lg:text-[18px] md:px-6 md:py-3 text-white font-bold rounded-md bg-[#80B500] hover:bg-white hover:text-black hover:transition">
            EXPLORE PRODUCTS
          </button>
        </div>
        <div className="lg:w-[50%] md:w-[80%] w-full">
          <img src={main} alt="" />
        </div>
      </div>
      <Gols/>
    </div>
  );
};

export default Slider;
