import React, { useState } from "react";
import { motion } from "motion/react";
import { GiPanda } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Project", to: "projects" },
    { name: "Experience", to: "experience" },
  ];

  return (
    <div className="flex justify-center md:pt-5 pt-2 bg-[#f9f9f9]  md:px-5 px-1  fixed top-0 w-full z-50">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full md:max-w-6xl flex justify-between bg-white items-center border border-gray-200
        z-10 rounded-3xl md:py-6 py-4 md:px-10 px-8 mx-auto shadow-md"
      >
        {/* Left - Logo */}

        <div className="flex items-center justify-center gap-1">
          <GiPanda size={25} />
          <h1 className="font-bold text-xl md:block ">Aditya Tripathi</h1>
        </div>

        {/* Right - Desktop Menu */}
        <div className="flex items-center md:block hidden">
          <ul className="flex justify-center items-center gap-5 cursor-pointer font-medium">
            {menuItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-600"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {!openMenu ? <TiThMenu size={20} /> : <RxCross2 size={20} />}
        </button>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg mt-2 border border-gray-200 z-20">
            <ul className="flex flex-col p-2 gap-2">
              {menuItems.map((item) => (
                <li
                  key={item.to}
                  className="py-3 font-medium px-5 text-gray-600"
                >
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setOpenMenu(false)}
                    className="cursor-pointer hover:text-blue-600"
                  >
                    
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
