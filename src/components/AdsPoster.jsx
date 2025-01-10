import React from "react";

const AdsPoster = () => {
  return (
    <div>
      <div className="w-full h-full bg-white flex items-center justify-center">
        <div className="w-full lg:h-[400px] xl:h-[600px] flex items-center justify-center gap-8 lg:px-[100px] xl:px-[150px]">
          <div className="md:w-[50%] w-full h-full bg-[#EEF5E7]"></div>
          <div className="md:w-[50%] w-full h-full flex flex-col gap-8">
            <div className=" w-full h-1/2 bg-[#F6F6F6]"></div>
            <div className=" w-full h-1/2 bg-[#F6F6F6]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsPoster;
