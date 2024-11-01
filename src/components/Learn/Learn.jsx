import React from "react";

const Learn = () => {
  return (
    <section className="py-[136px] bg-[#F0F0F0]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-center">
          <div className="py-[100px] pl-[74px] pr-[77px] bg-[#F40404]">
            <h5 className="font-bold text-[36px] text-white leading-[54px] w-[262px]">
              Learn more about our company
            </h5>
          </div>
          <div className="bg-bg4 px-[282px] pt-[168px] pb-[142px]">
            <button className="py-[14px] px-[30px] bg-white text-[#f40404] font-semibold hover:bg-[#f40404] hover:text-white transition-all duration-500">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
