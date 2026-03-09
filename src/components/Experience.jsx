import React from "react";

const Experience = () => {
  return (
    <div className="bg-[#f9f9f9] mt-16">
      <h1 className="text-3xl md:text-4xl font-bold  text-center">
        Experience
      </h1>
      <div className="w-full max-w-5xl px-5 py-5 border border-gray-200 mx-auto mt-10 rounded-2xl shadow-md bg-white">
        <h1 className="text-2xl font-bold">Ridezzup.com</h1>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold md:text-xl text-11px">
            Frontend Web Developer Intern{" "}
          </h3>
          <div className="">
            <h5 className=" text-blue-700 font-semibold text-[10px]">Remote</h5>
            <p className="text-[10px]">July 2025 - October 2025</p>
          </div>
        </div>
        <div className="w-[70%] ">
          <p className="md:text-sm text-[10px] font-medium text-gray-700">
            I worked as a Frontend Developer Intern at Ridezupp, building
            responsive and interactive web interfaces using React, JavaScript,
            and Tailwind CSS, focusing on problem-solving, enhancing user
            experience, and delivering efficient, maintainable solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
