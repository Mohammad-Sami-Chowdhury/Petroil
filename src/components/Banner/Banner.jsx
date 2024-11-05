import React from "react";

const Banner = () => {
  return (
    <section className="bg-banner bg-center bg-no-repeat bg-cover md:py-[257px] py-[50px] relative z-[4] font-primary ">
      <div className="max-w-container mx-auto">
        <div className="z-[-1] absolute bg-[#00000099] h-full w-full top-0 left-0 "></div>
        <div className="px-[20px] md:px-0">
          <h1 className="text-white md:text-[64px] text-[24px] font-bold md:w-[842px] w-[300px] pb-[31px]">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <button className="md:px-[40px] px-[15px] py-[7px] md:text-base text-xs md:py-[13px] bg-[#F40404] border-[#F40404] border-[1px] text-white font-bold hover:bg-transparent hover:border-[1px] hover:border-white transition-all duration-500">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
