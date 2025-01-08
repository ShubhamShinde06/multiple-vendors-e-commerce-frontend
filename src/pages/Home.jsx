import React from "react";
import main from "../assets/main.webp";
import SeactionName from "../components/SeactionName";

const Home = () => {
  return (
    <div>
      <div className=" w-full h-[calc(100vh)] bg-[#F7F5EB] flex items-center justify-center">
        <div className=" w-full h-[500px] flex items-center justify-center lg:px-[150px]">
          <div className=" w-[50%]">
            <p className=" font-bold">100% genuine Products</p>
            <div className=" text-[70px] flex flex-col font-bold">
              <span>Tasty & Healthy </span>
              <span>Organic Food</span>
            </div>
            <button className=" mt-6 text-[18px] px-6 py-3 text-white font-bold rounded-md bg-[#80B500] hover:bg-white hover:text-black hover:transition">
              EXPLORE PRODUCTS
            </button>
          </div>
          <div className="w-[50%]">
            <img src={main} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full h-[calc(100vh)] bg-white flex items-center justify-center">
        <div className="w-full h-[600px] flex items-center justify-center gap-8 lg:px-[150px]">
          <div className="w-[50%]  h-full bg-[#EEF5E7]">

          </div>
          <div className="w-[50%]  h-full flex flex-col gap-8">
            <div className=" w-full h-1/2 bg-[#F6F6F6]">

            </div>
            <div className=" w-full h-1/2 bg-[#F6F6F6]">

            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[calc(120vh)]">
        <SeactionName 
          heading={'Our Products'}
        />
        <div className="w-full mt-14 px-[150px] grid grid-cols-5 items-center font-bold text-[20px]">
          <button className="w-full h-10 border-r-2 hover:text-[#80B500]">Food & Drinks</button>
          <button className="w-full h-10 border-r-2 hover:text-[#80B500]">Vegetables</button>
          <button className="w-full h-10 border-r-2 hover:text-[#80B500]">Dried Foods</button>
          <button className="w-full h-10 border-r-2 hover:text-[#80B500]">Bread & Cake</button>
          <button className="w-full h-10 hover:text-[#80B500]">Fish & Meat</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
