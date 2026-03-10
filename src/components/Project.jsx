import React from "react";
import Grocy from "../assets/Grocy.png";
import JobHunt from "../assets/JobHunt.png";
import ITM from "../assets/itm.png";
import Resumly from "../assets/Resumly.png";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    projectName: "Resumly",
    time: "Jan 2026",
    description: `Resumly is a full-stack AI-powered resume builder that helps users create and enhance professional resumes effortlessly.  
It uses Google Gemini AI to provide smart suggestions for improving wording, clarity, and overall impact.`,
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Google Gemini AI",
      "REST APIs",
    ],
    viewDemo: "https://resumly.onrender.com",
    projectDetails:
      "https://github.com/aditya-tripathee/Resumly---Resume-Builder",
    image: Resumly,
  },
  {
    projectName: "Job Hunt",
    time: "Feb 2026",
    description: `Job Hunt is a full-stack job search platform that helps users discover jobs and recruiters manage candidates efficiently.  
It uses AI-powered recommendations to match candidates with suitable job listings based on skills and experience.`,
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Google Gemini AI",
      "REST APIs",
      "Authentication & Authorization",
    ],
    viewDemo: "https://job-hunt-2ot6.onrender.com",
    projectDetails: "https://github.com/aditya-tripathee/JobHunt---JobPortal",
    image: JobHunt,
  },
  {
    projectName: "Grocy Website",
    time: "Mar 2026",
    description: `Grocy Website is a clean and modern frontend interface for a grocery management platform.  
It focuses on responsive design, interactive UI components, and a smooth user experience.`,
    skills: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    viewDemo: "https://thegrocy.vercel.app",
    projectDetails: "https://github.com/aditya-tripathee/Grocy",
    image: Grocy,
  },
  {
    projectName: "Hospital Management System",
    time: "Apr 2026",
    description: `Hospital Management System is a backend-focused application for managing patient records, appointments, and doctor schedules.  
It provides robust RESTful APIs and secure database management for efficient hospital operations.`,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication & Authorization",
      "Postman for testing",
    ],
    viewDemo: "",
    projectDetails: "https://github.com/aditya-tripathee/itmhospital",
    image: ITM,
  },
];

const Project = () => {
  return (
    <div className="mt-16 px-5 pb-10 bg-[#f9f9f9] md:pt-28 pt-20" id="projects">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Projects
      </h1>
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-2xl shadow-md overflow-hidden flex flex-col hover:scale-105 transform transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              className="w-full h-48 object-cover"
              alt={project.projectName}
            />

            <div className="p-5 flex flex-col flex-1">
              {/* Header */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold text-xl">{project.projectName}</h2>
                <span className="text-gray-500 text-sm">{project.time}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-3">
                {project.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                {project.viewDemo && (
                  <a
                    href={project.viewDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border text-black px-5 py-2 rounded-md text-sm  transition"
                  >
                    <FaGlobe  size={20}/>
                  </a>
                )}
                {project.projectDetails && (
                  <a
                    href={project.projectDetails}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-5 py-2 rounded-md text-sm hover:bg-gray-100 transition"
                  >
                    <FaGithub size={20}/>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
