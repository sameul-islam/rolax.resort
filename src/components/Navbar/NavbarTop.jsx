import React from "react";
import { BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoMail } from "react-icons/io5";

const NavbarTop = () => {
  return (
    <div className=" font-EB flex flex-col md:flex-row items-center w-full border-b border-gray-700 bg-[#eeb78e] py-3 justify-between px-[8%]">
      <div className="text-sm font-semibold text-gray-800 flex items-center gap-4">
        <p className="flex items-center gap-2 whitespace-nowrap">
          <BsFillTelephoneFill size={16} /> Call Us : +01234-567890
        </p>
        <span className="h-4 w-px bg-gray-800"></span>
        <span className="flex items-center gap-2">
          <IoMail size={16} /> info@rolax.com
        </span>
      </div>

      <div className="flex mt-5 md:mt-0  items-center gap-3 text-gray-800">
        <GrFacebookOption
          size={18}
          className="hover:text-blue-600 cursor-pointer transition duration-300"
        />
        <FaInstagram
          size={18}
          className="hover:text-pink-500 cursor-pointer transition duration-300"
        />
        <BsTwitter
          size={18}
          className="hover:text-sky-500 cursor-pointer transition duration-300"
        />
        <FaLinkedinIn
          size={18}
          className="hover:text-blue-700 cursor-pointer transition duration-300"
        />
      </div>
    </div>
  );
};

export default NavbarTop;
