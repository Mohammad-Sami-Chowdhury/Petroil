import React from "react";
import { MdOutlineMarkEmailRead, MdPhoneInTalk } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const navbar = () => {
  return (
    <header className="bg-[#282828] py-[15px] border-b-[5px] border-[#FFB800] font-primary">
      <div className="max-w-container mx-auto">
        <div className="parent flex justify-between">
        <div className="left flex items-center w-[1/2]">
          <div className="mail flex gap-[5px]">
            <MdOutlineMarkEmailRead className="text-white text-xl" />
            <p className="text-white">mail@yourcompany.com</p>
          </div>
          <div className="bg-[#5C6A92] flex h-4 w-[1px] mx-[22px]"></div>
          <div className="phone flex gap-[5px]">
            <MdPhoneInTalk className="text-white text-xl" />
            <p className="text-white">+896 120 5889 (Toll free)</p>
          </div>
        </div>
        <div className="right flex items-center w-[1/2] text-white text-[20px] gap-[19px]">
          <FaFacebookF className="hover:text-gray-300 transition-all duration-500" />
          <FaTwitter className="hover:text-gray-300 transition-all duration-500" />
          <FaLinkedinIn className="hover:text-gray-300 transition-all duration-500" />
          <FaInstagram className="hover:text-gray-300 transition-all duration-500" />
        </div>
        </div>
      </div>
    </header>
  );
};

export default navbar;
