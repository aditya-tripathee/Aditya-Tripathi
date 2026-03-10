
import React from "react";

const Experience = () => {
  return (
    <div className="bg-[#f9f9f9] mt-10 md:pt-28 pt-10" id="experience">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        Experience
      </h1>

      <div className="flex flex-col gap-8 mt-10 max-w-5xl mx-auto px-5">
        {/* Experience Card */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h2 className="text-2xl font-bold text-gray-900">Ridezzup.com</h2>

            <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
              <span className="px-3 py-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white 
              font-medium shadow-lg
              hover:scale-105 hover:shadow-2xl transition transform duration-300">
                Frontend Web Developer Intern
              </span>
              <span className="px-4 py-1 bg-gray-900 text-gray-200 rounded-2xl text-xs font-medium">
                July - October 2025
              </span>
              {/* Uncomment if you want location/remote */}
              {/* <span className="px-4 py-1 bg-green-600 text-white rounded-2xl text-xs font-medium">Remote</span> */}
            </div>
          </div>

          <p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
            I worked as a Frontend Developer Intern at Ridezzup, building
            responsive and interactive web interfaces using <strong>React</strong>, 
            <strong> JavaScript</strong>, and <strong>Tailwind CSS</strong>. 
            I focused on <strong>problem-solving, enhancing user experience</strong>, 
            and delivering efficient, maintainable solutions.
          </p>
        </div>

        {/* You can duplicate this card for more experiences */}
      </div>
    </div>
  );
};

export default Experience;





