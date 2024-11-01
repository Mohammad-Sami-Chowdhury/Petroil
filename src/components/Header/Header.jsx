import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#F40404] py-[27px] font-primary">
      <div className="max-w-container mx-auto">
        <div className="parent flex items-center justify-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-items text-white text-base font-semibold">
            <ul className="flex gap-[47px]">
              <li className="hover:text-gray-300 transition-all duration-500">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-gray-300 transition-all duration-500">
                <a href="#">About</a>
              </li>
              <li className="hover:text-gray-300 transition-all duration-500">
                <a href="#">Services</a>
              </li>
              <li className="hover:text-gray-300 transition-all duration-500">
                <a href="#">Gallery</a>
              </li>
              <li className="hover:text-gray-300 transition-all duration-500">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <button className="text-white border-2 border-white px-8 py-[13px] text-base font-semibold hover:bg-white hover:text-[#F40404] transition-all duration-500">Contact</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
