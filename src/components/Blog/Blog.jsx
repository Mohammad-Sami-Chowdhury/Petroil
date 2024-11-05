import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  return (
    <section className="bg-[#F0F0F0] md:py-[110px] py-[30px]">
      <div className="max-w-container mx-auto">
        <div className="md:flex justify-between block">
          <div className="bg-blog1 md:mb-0 mb-[20px]">
            <div className="bg-[#00000099] pl-[46px] pr-[44px] pt-[75px] pb-[55px]">
              <h3 className="font-bold text-white text-[24px] leading-[36px] w-[249px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <button className="mt-[52px] py-[10px] px-[23px] bg-[#FFFFFF80] text-white font-semibold hover:bg-[#f4040480] transition-all duration-500">
                Read more
              </button>
            </div>
          </div>
          <div className="bg-blog2 md:mb-0 mb-[20px]">
            <div className="bg-[#00000099] pl-[46px] pr-[44px] pt-[75px] pb-[55px]">
              <h3 className="font-bold text-white text-[24px] leading-[36px] w-[249px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <button className="mt-[52px] py-[10px] px-[23px] bg-[#FFFFFF80] text-white font-semibold hover:bg-[#f4040480] transition-all duration-500">
                Read more
              </button>
            </div>
          </div>
          <div className="bg-blog3 md:mb-0 mb-[20px]">
            <div className="bg-[#00000099] pl-[46px] pr-[44px] pt-[75px] pb-[55px]">
              <h3 className="font-bold text-white text-[24px] leading-[36px] w-[249px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h3>
              <button className="mt-[52px] py-[10px] px-[23px] bg-[#FFFFFF80] text-white font-semibold hover:bg-[#f4040480] transition-all duration-500">
                Read more
              </button>
            </div>
          </div>
        </div>
        <a href="#" className="group md:pt-[30px] pt-[10px] flex justify-end items-center md:text-base text-xs font-bold leading-[24px] text-black">MORE FROM THE BLLOG <IoIosArrowForward className="md:text-[20px] text-base group-hover:rotate-[360deg] duration-500"></IoIosArrowForward></a>
      </div>
    </section>
  );
};

export default Blog;
