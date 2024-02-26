import React from "react";
import { Plusicon, Readmoreicon } from "../components/common/Icons";
import { Resoursescard } from "../components/common/Helper";

const Resourses = () => {
  return (
    <>
      <div className="max-w-[1340px] w-full mx-auto py-4 md:py-14 px-4 lg:px-12  bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2">
          <p className=" font-dmsans font-bold text-[16px] sm:text-[24px] md:text-[40px] leading-12 text-[#19213D]">
            Welcome back, Andrew
          </p>
          <button className="w-[194px] h-[48px] bg-[#8C39FF] hover:bg-transparent hover:border hover:border-[#8C39FF] rounded-[8px] shadow-[0px,1px,2px,0px_rgba(0,0,0,0.05)] text-white hover:text-[#8C39FF] duration-300 font-manrope font-bold text-[16px] leading-5 flex flex-row-reverse justify-center items-center gap-2 group">
            Add new client
            <span>
              <Plusicon />
            </span>
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {Resoursescard.map((item, index) => (
            <div
              className="max-w-[293px] w-full mx-auto flex flex-col gap-6 rounded-[12px] bg-white shadow-[0px,4px,6px,-1px_rgba(0,0,0,0.10),0px,2px,4px,-2px_rgba(0,0,0,0.10)]"
              key={index}>
              <img
                src={item.img}
                alt="agreement image"
                className="w-full h-[186px] rounded-t-[12px]"
              />
              <div className="px-6 pb-6 flex flex-col gap-2">
                <p className=" font-dmsans font-bold text-[20px] leading-6 text-[#353E5C] max-lg:line-clamp-2">
                  {item.heading}
                </p>
                <p className=" font-manrope font-normal text-[16px] leading-5 text-[#6D758F] line-clamp-4">
                  {item.decs}
                </p>
                <div className="flex items-center gap-1 p-1 w-[105px]">
                  <button className=" font-manrope font-bold text-[14px] leading-4 text-[#8C39FF]">
                    Read more
                  </button>
                  <div>
                    {" "}
                    <Readmoreicon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resourses;
