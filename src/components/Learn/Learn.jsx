import React from "react";

const Learn = () => {
  return (
    <section className="md:py-[136px] py-[30px] bg-[#F0F0F0]">
      <div className="max-w-container mx-auto">
        <div className="flex justify-center">
          <div className="md:py-[100px] py-[50px] md:pl-[74px] md:pr-[77px] bg-[#F40404] md:w-[35%] w-[40%]">
            <h5 className="font-bold md:text-[36px] text-[24px] text-white md:leading-[54px] md:w-[262px] w-[200px] md:ml-0 ml-4">
              Learn more about our company
            </h5>
          </div>
          <div className="bg-bg4 bg-cover bg-no-repeat bg-center flex justify-center py-[80px] md:pt-[168px] md:pb-[142px] md:w-[65%] w-[60%]">
            <button className="md:py-[14px] py-[7px] px-[15px] md:px-[30px] bg-white text-[#f40404] font-semibold hover:bg-[#f40404] hover:text-white transition-all duration-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learn;
