import React from "react";

const languages = ["JavaScript","C++"];
const webs = ["ReactJS","NodeJS","ExpressJS","HTML5","CSS3","MongoDB","Tailwind CSS","MySQL"];
const tools = ["Git","Github","Postman","Docker","Vercel"];

const Skills = () => {
  return (
    <div className="px-5 mt-16 pb-10 md:pt-28 pt-20 bg-[#f9f9f9]" id="skills">
      {/* title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">Skills</h1>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-4">
        {/* Languages */}
        <SkillCard title="Languages" skills={languages} />
        {/* Web Technologies */}
        <SkillCard title="Web Technologies" skills={webs} />
        {/* Tools */}
        <SkillCard title="Tools" skills={tools} />
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="flex-1 bg-white border border-gray-200 px-6 py-6 rounded-2xl shadow-md hover:translate-0.5 cursor-pointer hover:scale-95">
    <h2 className="text-lg font-bold text-center mb-4">{title}</h2>
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-blue-700 text-white rounded-full text-xs font-semibold"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Skills;

