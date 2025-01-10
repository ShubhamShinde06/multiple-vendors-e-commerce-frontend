import React from "react";
import SeactionName from "../components/SeactionName";
import ProductIem from "../components/ProductIem";
import CategorieItem from "../components/CategorieItem";
import Slider from "../components/Slider";
import AdsPoster from "../components/AdsPoster";

const Home = () => {
  return (
    <div className=" flex flex-col gap-[50px] md:gap-[80px] mb-[80px]">
      <div className=" w-full md:h-[calc(100vh)] lg:h-[calc(100vh)] xl:h-[calc(90vh)] bg-[#F7F5EB] flex items-center justify-center">
        <Slider />
      </div>
      {/* Ads & Poster */}
      <div className=" lg:mt-[80px] xl:mt-[150px]">
        <AdsPoster />
      </div>
      
      {/* Top Categories */}
      <div>
        <SeactionName heading={"Top Categories"} />
        <div className=" w-full h-full md:h-[800px] lg:h-[600px] xl:h-[70vh]  py-10 flex items-center justify-center p-5 lg:px-[100px] xl:px-[150px]">
          <div className="w-full h-full flex overflow-scroll gap-5 md:gap-8 xl:gap-5 lg:gap-10 hide-scoll">
            <CategorieItem />
            <CategorieItem />
            <CategorieItem />
            <CategorieItem />
            <CategorieItem />
          </div>
        </div>
      </div>
      {/* Our Products */}
      <div className="w-full h-full">
        <SeactionName heading={"Our Products"} />
        <div className="w-full md:px-[150px] py-8 grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-6 items-center font-bold md:p-5 lg:text-[18px] xl:text-[20px]">
          <button className="w-full h-10 border-r-2 hover:text-[#80B500]">
            Food & Drinks
          </button>
          <button className="w-full h-10 border-none md:border-r-2  hover:text-[#80B500]">
            Vegetables
          </button>
          <button className="w-full h-10 border-r-2 hover:text-[#80B500]">
            Dried Foods
          </button>
          <button className="w-full h-10 border-none border-r-2 hover:text-[#80B500]">
            Bread & Cake
          </button>
          <button className="w-full h-10 border-r-2 md:border-r-2 hover:text-[#80B500]">
            Fish & Meat
          </button>
          <button className="w-full h-10  md:border-r-2 lg:border-none hover:text-[#80B500]">
            Fish & Meat
          </button>
        </div>
        <div className=" w-full h-full md:py-10 lg:px-[100px] xl:px-[150px]">
          <div className="w-full h-[600px] md:h-[800px] lg:h-[600px] xl:h-[700px] flex overflow-hidden p-5 gap-2 md:gap-8 lg:gap-10 xl:gap-8 hide-scoll">
            <ProductIem />
            <ProductIem />
            <ProductIem />
            <ProductIem />
            <ProductIem />
            <ProductIem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
