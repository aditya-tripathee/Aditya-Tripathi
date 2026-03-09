import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#f9f9f9] px-5 py-5 mt-16">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-2 rounded-2xl shadow-2xl py-5 px-5  items-center">
        <h1 className="font-bold text-blue-600 md:text-3xl text-xl">
          Aditya Kumar Tripathi
        </h1>
        <p className="text-[12px]">
          Let’s team up to turn ideas into innovative solutions.
        </p>
        <div>
          <ul className="flex justify-center items-center gap-2.5">
            <a
              href="https://github.com/aditya-tripathee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white transition cursor-pointer">
                <FaGithub size={18} />
              </li>
            </a>

            <a
              href="https://www.linkedin.com/in/adii-tripathii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <FaLinkedin size={18} />
              </li>
            </a>

            <a
              href="mailto:aditytripathee@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition cursor-pointer">
                <IoMail size={18} />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
