import React from "react";

const Banner = () => {
  return (
    <section className="bg-banner bg-center bg-no-repeat bg-cover bg py-[257px] relative z-[4] font-primary ">
      <div className="max-w-container mx-auto">
        <div className="z-[-4] absolute bg-[#00000099] h-full w-full top-0 left-0 "></div>
        <div>
          <h1 className="text-white text-[64px] font-bold w-[842px] pb-[31px]">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <button className="px-[40px] py-[13px] bg-[#F40404] border-[#F40404] border-[1px] text-white font-bold hover:bg-transparent hover:border-[1px] hover:border-white transition-all duration-500">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
