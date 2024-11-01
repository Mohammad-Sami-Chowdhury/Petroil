import React from "react";

const Services = () => {
  return (
    <section className="bg-[#F0F0F0]">
      <div className="flex items-center">
        <div className="max-w-container mx-auto">
          <h4 className="text-[64px] font-bold leading-[96px] text-black">
            Our Services
          </h4>
          <p className="w-[405px] text-base text-[#6C6C6C] leading-[24px] font-semibold">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="bg-bg1 bg-cover bg-no-repeat bg-center">
          <div className="bg-[#00000099] pt-[147px] pb-[139px] pl-[116px] w-[944px]">
            <h6 className="text-[36px] leading-[54px] text-white font-bold pb-[19px]">
              Modern natural oil and gas refineries.
            </h6>
            <button className="py-[14px] px-[30px] border-[1px] border-[#F40404] text-white bg-[#F40404] font-semibold hover:bg-transparent hover:border-[1px] hover:border-[#F40404] transition-all duration-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="bg-bg3 bg-cover bg-no-repeat bg-center">
          <div className="bg-[#00000099] pt-[147px] pb-[139px] pl-[116px] w-[960px]">
            <h6 className="text-[36px] leading-[54px] text-white font-bold pb-[19px]">
              Supply of national industries.
            </h6>
            <button className="py-[14px] px-[30px] border-[1px] border-[#F40404] text-white bg-[#F40404] font-semibold hover:bg-transparent hover:border-[1px] hover:border-[#F40404] transition-all duration-500">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-bg2 bg-cover bg-no-repeat bg-center">
          <div className="bg-[#00000099] pt-[147px] pb-[139px] pl-[116px] w-[960px]">
            <h6 className="text-[36px] leading-[54px] text-white font-bold pb-[19px]">
              National fuel distribution and supply.
            </h6>
            <button className="py-[14px] px-[30px] border-[1px] border-[#F40404] text-white bg-[#F40404] font-semibold hover:bg-transparent hover:border-[1px] hover:border-[#F40404] transition-all duration-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
