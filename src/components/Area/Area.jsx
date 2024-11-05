import React from "react";

const Area = () => {
  return (
    <section className="bg-[#F40404] md:py-[47px] py-[30px] border-b-[5px] border-[#FFB800]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between items-center md:mx-0 mx-[10px]">
          <h6 className="text-white md:text-[36px] text-[24px] md:leading-[54px] font-bold">
            Want to join as member branch in your area?
          </h6>
          <button className="bg-transparent md:py-[14px] md:text-base text-xs px-[13px] py-[7px] font-semibold md:px-[32px] text-white border-[1px] border-white hover:bg-white hover:text-[#f40404] duration-500">
            CONTACT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Area;
