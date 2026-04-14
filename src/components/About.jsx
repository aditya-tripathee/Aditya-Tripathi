import React from "react";
import Img from "../assets/Image.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "motion/react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <section className="px-5 mt-20 pb-10 bg-[#f9f9f9] md:pt-28 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          whileHover={{ opacity: 0.9, scale: 1.03 }}
          whileTap={{ opacity: 1, scale: 0.98 }}
          className="md:w-1/2 bg-white border border-gray-200 px-8 py-8 rounded-2xl shadow-md "
        >
          <h2 className="font-bold text-2xl mb-4 text-blue-700">
            Aspiring Developer 🚀
          </h2>

          <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold">Aditya Kumar Tripathi</span>
            . I completed my B.Tech in Computer Science from
            <span className="font-semibold">
              {" "}
              Dr. A.P.J Abdul Kalam Technical University
            </span>
            .
            <br />
            <br />
            I love building modern, responsive web applications and solving
            real-world problems through elegant code. My focus areas include
            full-stack development, cloud technologies, and scalable software
            systems.
            <br />
            <br />
            <span className="font-semibold text-xl">Tech Stack:</span>
            <br />
            <ul className="flex gap-4 mt-1 text-2xl items-center">
              <li>
                <IoLogoJavascript />
              </li>
              <li>
                <FaNodeJs />
              </li>
              <li>
                <SiExpress />
              </li>
              <li>
                <SiMongodb />
              </li>
              <li>
                <SiMysql />
              </li>
              <li>
                <FaReact />
              </li>
            </ul>
          </p>

          <div className="mt-5">
            <a
              href="https://drive.google.com/drive/u/0/my-drive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg
                                   hover:scale-105 hover:shadow-2xl transition transform duration-300 cursor-pointer"
              >
                View Resume
              </button>
            </a>
          </div>
        </motion.div>

        {/* images */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center relative"
        >
          {/* Rotating Gradient Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute w-[340px] h-[340px] rounded-full 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md opacity-60"
          />

          {/* Profile Image */}
          <motion.img
            src={Img}
            alt="Aditya"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="relative w-80 h-80 md:w-100 md:h-100 object-cover rounded-full 
    shadow-2xl border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
