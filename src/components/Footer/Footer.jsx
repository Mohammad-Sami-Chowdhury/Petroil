import React from "react";
import logo from "../../assets/logo-footer.png";
import { MdOutlineMarkEmailRead, MdPhoneInTalk } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] pt-[144px] pb-[170px]">
      <div className="max-w-container mx-auto">
        <div className="flex items-center">
          <div className="w-[40%]">
            <img src={logo} alt="logo" />
            <div className="flex items-center text-white text-sm pt-[33px] gap-[5px] ">
              <MdOutlineMarkEmailRead size={16} />
              <p>mail@yourcompany.com</p>
            </div>
            <div className="flex items-center text-white text-sm pt-[15px] gap-[5px]">
              <MdPhoneInTalk size={16} />
              <p>+896 120 5889 (Toll free)</p>
            </div>
            <div className="flex items-center text-white text-sm pt-[15px] gap-[5px]">
              <FaMapLocationDot size={16} />
              <p>101 Baker Street, New York, USA, 12345</p>
            </div>
            <div className="flex items-center text-white text-[16px] gap-[12px] pt-[34px]">
              <div className="bg-[#F40404] p-[7px] rounded-full duration-500 hover:bg-[#f4040480]">
                <FaFacebookF />
              </div>
              <div className="bg-[#F40404] p-[7px] rounded-full duration-500 hover:bg-[#f4040480]">
                <FaTwitter />
              </div>
              <div className="bg-[#F40404] p-[7px] rounded-full duration-500 hover:bg-[#f4040480]">
                <FaLinkedinIn />
              </div>
              <div className="bg-[#F40404] p-[7px] rounded-full duration-500 hover:bg-[#f4040480]">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="flex w-[60%] justify-between">
            <div>
              <h2 className="text-white font-bold text-base pb-[21px]">
                Company
              </h2>
              <ul className="text-white text-sm">
                <li className="pb-[15px]">
                  <a href="#">Home</a>
                </li>
                <li className="pb-[15px]">
                  <a href="#">About</a>
                </li>
                <li className="pb-[15px]">
                  <a href="#">Services</a>
                </li>
                <li className="pb-[15px]">
                  <a href="#">Gallery</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white font-bold text-base pb-[21px]">
                Others
              </h2>
              <ul className="text-white text-sm">
                <li className="pb-[15px]">
                  <a href="#">Blog</a>
                </li>
                <li className="pb-[15px]">
                  <a href="#">Contact</a>
                </li>
                <li className="pb-[15px]">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="pb-[15px]">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-white font-bold text-base pb-[21px]">
                Certificate
              </h6>
              <div className="flex gap-[5px]">
                <div className="bg-white rounded-lg h-[44px] w-[110px] pl-[9px] content-center">
                  <h3 className="text-2xl font-bold text-[#008AD8]">ISO 88</h3>
                  <p className="text-[8px] font-medium text-[#008AD8]">
                    Environmentally Safe
                  </p>
                </div>
                <div className="bg-white rounded-lg content-center h-[44px] w-[110px] text-center">
                  <p className="text-sm text-[#980076] font-bold">
                    Liquid<span className="text-[#009818]">Green</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
