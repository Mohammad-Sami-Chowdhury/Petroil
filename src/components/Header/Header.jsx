import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown);
  };
  return (
    <header className="bg-[#F40404] md:py-[27px] py-[15px] font-primary">
      <div className="max-w-container mx-auto">
        <div className="parent flex items-center justify-between md:mx-0 mx-4">
          <div className="logo">
            <img className="md:w-full w-[100px]" src={logo} alt="logo" />
          </div>
          <div>
            <CiMenuFries
              className="md:hidden text-white text-[28px]"
              onClick={handleClick}
            />
            <div className={`${dropdown ? "duration-500" : "hidden md:flex"}`}>
              <div className="nav-items text-white block text-base font-semibold md:flex justify-between items-center">
                <ul className="md:flex md:gap-[47px] block">
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
                <button className="text-white md:ml-12 md:mr-0 mr-10 md:mt-0 mt-[20px] border-2 border-white md:px-8 px-[15px] py-[7px] md:py-[13px] text-xs md:text-base font-semibold hover:bg-white hover:text-[#F40404] transition-all duration-500">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
