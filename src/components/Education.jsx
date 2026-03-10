import React from "react";
import { motion } from "framer-motion";


const education = [
  {
    schoolName: "M.P Public School",
    year: "2017 - 2018",
    branch: "Science",
  },
  {
    schoolName: "Govt. Jubilee Inter College",
    year: "2019 - 2020",
    branch: "PCM",
  },
  {
    schoolName: "Dr. A.P.J Abdul Kalam Technical University",
    year: "2021 - 2025",
    branch: "B.Tech (CSE)",
  },
];

const Education = () => {
  return (
   <section className="bg-[#f9f9f9] py-16 px-5">
      <h1 className="text-center md:text-4xl text-3xl font-bold mb-16 text-blue-700">
        Education 🎓
      </h1>

      <div className="relative max-w-5xl mx-auto">

        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-blue-300"></div>

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex w-full mb-16 items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            <div className="w-1/2 relative px-6">

              {/* Dot */}
              <div className="absolute -left-4 top-6 md:top-8 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <h2 className="text-lg md:text-xl font-semibold text-blue-700 mb-1">
                  {item.schoolName}
                </h2>
                <p className="text-gray-600 font-medium">{item.branch}</p>
                <p className="text-sm text-gray-500 mt-1">{item.year}</p>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;