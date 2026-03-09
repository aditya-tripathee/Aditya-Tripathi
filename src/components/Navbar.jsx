import React, { useState } from "react";
import { motion } from "motion/react";
import { GiPanda } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex justify-center md:pt-5 pt-2 bg=[#f3f3f3] md:px-5 px-1 relative">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full md:max-w-6xl flex justify-between bg-white items-center border border-gray-200
        z-10 rounded-3xl md:py-6 py-4 md:px-10 px-8 mx-auto shadow-md"
      >
        {/* left  */}
        <div className="flex items-center justify-center gap-1">
          <GiPanda size={25} className="size-7" />
          <h1 className=" font-bold text-xl md:block hidden">
            Aditya Tripathi
          </h1>
        </div>
        {/* right  */}
        <div className="flex items-center md:block hidden">
          <ul className="flex justify-center items-center gap-5 cursor-pointer font-medium">
            
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </ul>
        </div>

        {/* menu icons */}
        <button
          className="size-7 md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {!openMenu ? (
            <TiThMenu size={18} />
          ) : (
            <RxCross2 size={18} className="font-bold text-2xl" />
          )}
        </button>

        {/* mobile menu */}
        {openMenu && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[90%]  bg-white rounded-xl shadow-lg mt-2 border border-gray-200 z-20">
            <ul className=" flex p-2 gap-2 flex-col">
            
              <li className="py-3 font-medium px-5 text-gray-600">About</li>
              <li className="py-3 font-medium px-5 text-gray-600">Skills</li>
             <li className="py-3 font-medium px-5 text-gray-600">Experience</li>
              <li className="py-3 font-medium px-5 text-gray-600">Project</li>
               
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
