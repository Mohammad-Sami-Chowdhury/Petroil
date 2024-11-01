import React from "react";
import slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import slider3 from '../../assets/slider3.png'
import slider4 from '../../assets/slider4.png'

const Slider = () => {
  return (
    <section className="pb-[28px] bg-[#F0F0F0]">
      <div className="flex justify-between items-center">
        <div>
          <img src={slider1} alt="slider1" />
        </div>
        <div>
          <img src={slider2} alt="slider2" />
        </div>
        <div>
          <img src={slider3} alt="slider3" />
        </div>
        <div>
          <img src={slider4} alt="slider4" />
        </div>
      </div>
    </section>
  );
};

export default Slider;
