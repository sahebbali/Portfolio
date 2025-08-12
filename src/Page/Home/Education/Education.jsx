import React from "react";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "HSC",
    subject: "Science",
    description:
      "Specialized in Physics, Chemistry, Mathematics, and ICT. Prepared for university admission tests with strong fundamentals in science.",
    year: "2014 – 2016",
    institution: "Parbatipur Technical School & College",
  },
  {
    title: "BSC",
    subject: "Computer Science and Engineering",
    description:
      "Focused on software development, data structures, algorithms, and web technologies. Completed various academic projects and research work.",
    year: "2017 – 2021",
    institution: "Uttara University",
  },
];

const Education = () => {
  return (
    <section className="mt-40">
      <div className="text-center mb-16">
        <HeaderSection name={"EDUCATION"}></HeaderSection>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 15px 40px rgba(0, 128, 0, 0.4)",
            }}
            className="relative bg-gradient-to-r from-green-400 to-teal-500 py-12 text-white p-8 rounded-3xl shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
          >
            <h3 className="md:text-6xl text-3xl font-roboto font-extrabold mb-6 uppercase tracking-wide">
              {edu.title}
            </h3>
            <p className="text-lg leading-relaxed font-lora mb-6">
              {edu.description}
            </p>
            <p className="text-xl font-bold mb-4 font-roboto">
              Subject: {edu.subject}
            </p>
            <p className="text-lg font-semibold mb-2 font-roboto">{edu.year}</p>
            <p className="italic font-medium text-lg font-roboto">
              {edu.institution}
            </p>
            <div className="absolute top-0 right-0 w-28 h-28 bg-white opacity-20 rounded-bl-full transform scale-75 transition-transform duration-300 ease-in-out group-hover:scale-100"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-white opacity-20 rounded-tr-full transform scale-75 transition-transform duration-300 ease-in-out group-hover:scale-100"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
