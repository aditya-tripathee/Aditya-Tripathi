import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="font-bold text-3xl md:text-7xl leading-tight">
          Hello, I'm
          <br />
          <span className="text-blue-700">Aditya Kumar Tripathi</span>
        </h1>

        {/* Tagline */}
        <div className="flex justify-center items-center gap-3 mt-4 text-lg md:text-2xl font-semibold text-gray-700">
          <p>Code</p>
          <span>-</span>
          <p>Cloud</p>
          <span>-</span>
          <p>Create</p>
        </div>

        {/* Social Links */}
        <div className="mt-6">
          <ul className="flex justify-center items-center gap-4">
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
              href="https://leetcode.com/u/adii_tripathii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-yellow-500 hover:text-white transition cursor-pointer">
                <SiLeetcode size={18} />
              </li>
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/aditya04tripathi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition cursor-pointer">
                <SiGeeksforgeeks size={18} />
              </li>
            </a>

            <a href="mailto:aditytripathee@gmail.com"
            target="_blank"
              rel="noopener noreferrer"
            >
              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition cursor-pointer">
              <IoMail size={18} />
            </li>
            </a>

            <a
              href="https://github.com/aditya-tripathee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white transition cursor-pointer">
                <FaGithub size={18} />
              </li>
            </a>
          </ul>
        </div>

        {/* Resume Button */}
        <div className="mt-8">
          <a href="https://drive.google.com/file/d/1u-hD2AWinP-nfpBhNx_vDMQ4mxujqL_x/view?usp=drive_link/"
          target="_blank"
              rel="noopener noreferrer"
          ><button className="px-6 py-2 rounded-md bg-blue-700 text-white cursor-pointer font-semibold hover:bg-blue-800 transition">
            View Resume
          </button></a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
