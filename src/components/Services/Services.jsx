import React from "react";

const Services = () => {
  return (
    <section className="bg-[#F0F0F0]">
      <div className="block items-center md:flex">
        <div className="max-w-container mx-auto">
          <h4 className="text-[24px] md:text-[64px] text-center md:text-left font-bold md:leading-[96px] text-black">
            Our Services
          </h4>
          <p className="w-[405px] text-base text-[#6C6C6C] leading-[24px] font-semibold text-center md:text-left md:pb-0 pb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="bg-bg1 bg-cover bg-no-repeat bg-center md:w-[50%] w-full mb-5 md:mb-0">
          <div className="bg-[#00000099] md:pt-[147px] pb-[50px] pt-[50px] md:pb-[139px] md:pl-[116px]">
            <h6 className="md:text-[36px] text-[24px] md:leading-[54px] text-white font-bold pb-[19px] w-[400px] mx-auto md:w-full md:mx-0 ">
              Modern natural oil and gas refineries.
            </h6>
            <button className="md:px-[30px] md:ml-0 ml-4 px-[15px] py-[7px] md:text-base text-xs md:py-[14px] bg-[#F40404] border-[#F40404] border-[1px] text-white font-bold hover:bg-transparent hover:border-[1px] hover:border-white transition-all duration-500">
            Learn More
          </button>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between block">
        <div className="bg-bg3 bg-cover bg-no-repeat bg-center md:w-[50%] w-full mb-5 md:mb-0">
          <div className="bg-[#00000099] pb-[70px] pt-[70px] md:pt-[147px] md:pb-[139px] md:pl-[116px]">
            <h6 className="md:text-[36px] text-[24px] md:leading-[54px] text-white font-bold pb-[19px] w-[400px] mx-auto md:w-full md:mx-0">
              Supply of national industries.
            </h6>
            <button className="md:px-[30px] md:ml-0 ml-4 px-[15px] py-[7px] md:text-base text-xs md:py-[14px] bg-[#F40404] border-[#F40404] border-[1px] text-white font-bold hover:bg-transparent hover:border-[1px] hover:border-white transition-all duration-500">
            Learn More
          </button>
          </div>
        </div>
        <div className="bg-bg2 bg-cover bg-no-repeat bg-center md:w-[50%] w-full mb-5 md:mb-0">
          <div className="bg-[#00000099] pb-[50px] pt-[50px] md:pt-[147px] md:pb-[139px] md:pl-[116px]">
            <h6 className="md:text-[36px] text-[24px] md:leading-[54px] text-white font-bold pb-[19px] w-[400px] mx-auto md:w-full md:mx-0">
              National fuel distribution and supply.
            </h6>
            <button className="md:px-[30px] md:ml-0 ml-4 px-[15px] py-[7px] md:text-base text-xs md:py-[14px] bg-[#F40404] border-[#F40404] border-[1px] text-white font-bold hover:bg-transparent hover:border-[1px] hover:border-white transition-all duration-500">
            Learn More
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
