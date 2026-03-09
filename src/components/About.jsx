import React from "react";
import Img from "../assets/Img.png";

const About = () => {
  return (
    <section className="px-5 mt-16 pb-10 bg-[#f9f9f9]">
      
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        About Me
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="Aditya"
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 bg-white border border-gray-200 px-8 py-8 rounded-2xl shadow-md">
          <h2 className="font-bold text-2xl mb-4 text-blue-700">
            Aspiring Developer 🚀
          </h2>

          <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
            Hi, I'm <span className="font-semibold">Aditya Tripathi</span>. 
            I completed my B.Tech in Computer Science from 
            <span className="font-semibold">
              {" "}Dr. A.P.J Abdul Kalam Technical University
            </span>.
            <br /><br />

            I enjoy building modern web applications and solving real-world
            problems through code. My interests lie in full-stack development,
            cloud technologies, and scalable software systems.
            <br /><br />

            <span className="font-semibold">Tech Stack:</span>
            <br />
            C++ • SQL • Nodejs • JavaScript • React.js • Redux
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
