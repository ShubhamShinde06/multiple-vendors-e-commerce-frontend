import React from "react";
import veg1 from "../assets/vag1.webp";
import veg2 from "../assets/vag2.webp";
import root from "../assets/root.webp";
import truck from "../assets/truck.webp";

const Gols = () => {
  return (
    <div className=" hidden md:block">
      <div className=" absolute w-[100%] md:h-auto lg:h-[120px] xl:h-[160px] bg-[#FFFFFF] md:bottom-[-18%] lg:bottom-[-7%] xl:bottom-[1%] shadow-xl px-8 py-8">
        <div className="w-full h-full md:grid md:grid-cols-2 md:grid-flow-row md:gap-8 lg:flex items-center justify-around">
          <div className="w-full h-full border-r-2 flex items-center gap-6 md:mb-4">
            <div>
              <img src={veg1} alt="" />
            </div>
            <div>
              <h1 className="font-bold xl:text-[20px] lg:text-[15px] mb-1">
                Curated Products
              </h1>
              <p className=" lg:text-[12px] ">
                Provide free home delivery for all product over $100
              </p>
            </div>
          </div>
          <div className="w-full h-full lg:border-r-2 flex items-center justify-center lg:hidden xl:flex gap-6 lg:pl-0 xl:pl-6">
            <div>
              <img src={veg2} alt="" />
            </div>
            <div>
              <h1 className="font-bold  xl:text-[20px] lg:text-[15px] mb-1">
                Handmade
              </h1>
              <p className=" lg:text-[12px]">
                We ensure the product quality that is our main goal
              </p>
            </div>
          </div>
          <div className="w-full h-full border-r-2 flex items-center gap-6 pl-6 md:pl-0 md:mb-4">
            <div>
              <img src={root} alt="" />
            </div>
            <div>
              <h1 className="font-bold  xl:text-[20px] lg:text-[15px] mb-1">
                Natural Food
              </h1>
              <p className=" lg:text-[12px]">
                Return product within 3 days for any product you buy
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-center gap-6 pl-6">
            <div>
              <img src={truck} alt="" />
            </div>
            <div>
              <h1 className="font-bold  xl:text-[20px] lg:text-[15px] mb-1">
                Free home delivery
              </h1>
              <p className=" lg:text-[12px]">
                We ensure the product quality that you can trust easily
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gols;
