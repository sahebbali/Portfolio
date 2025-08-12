import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "../../../assets/ali1.jpg";
import cv from "../../../../src/assets/frontend-cv-pdf.pdf";

const titles = [
  "Saheb Bali",
  "Frontend Web Developer",
  "MERN Stack Web Developer",
  "Next.js Developer",
  "Flutter Developer",
];

const Banner = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const phoneNumber = "+880 1783238471";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    alert("Number copied to clipboard!");
  };

  return (
    <div className="relative w-full py-32 lg:py-52 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-gradient-to-r  overflow-hidden">
      {/* Background Decorative Circles */}
      <motion.div
        animate={{ x: [-10, 10, -10], y: [-10, 20, -10] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 left-10 w-36 h-36 bg-green-600 rounded-full opacity-30 blur-xl"
      ></motion.div>

      <motion.div
        animate={{ x: [10, -10, 10], y: [10, -20, 10] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-green-700 rounded-full opacity-40 blur-2xl"
      ></motion.div>

      <motion.div
        animate={{ x: [-15, 15, -15], y: [15, -25, 15] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/3 left-1/4 w-40 h-40 bg-green-500 rounded-full opacity-20 blur-lg"
      ></motion.div>

      <motion.div
        animate={{ x: [10, -10, 10], y: [-10, 20, -10] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-1/4 right-1/3 w-44 h-44 bg-green-400 rounded-full opacity-25 blur-lg"
      ></motion.div>

      <motion.div
        animate={{ x: [-8, 8, -8], y: [8, -8, 8] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-10 w-24 h-24 bg-green-500 rounded-full opacity-20 blur-md"
      ></motion.div>

      <motion.div
        animate={{ x: [12, -12, 12], y: [-12, 12, -12] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-5 right-1/2 w-28 h-28 bg-green-300 rounded-full opacity-30 blur-md"
      ></motion.div>

      {/* Left Side - Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left md:w-1/2 space-y-4 z-10"
      >
        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          🚀 Modern Web Developer
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          <motion.span
            key={titleIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-green-500"
          >
            {titles[titleIndex]}
          </motion.span>
          <br />
          Your Next-Level Developer!
        </h1>
        <p className="text-gray-700 text-lg max-w-lg justify-between md:justify-between mx-auto md:mx-0">
          I’m a versatile MERN Stack and Flutter Developer with 2 years of
          experience crafting modern, interactive, and high-performance
          applications. I specialize in building seamless web and mobile
          experiences that combine clean design with powerful functionality
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-600 transition-all"
          >
            📞 Whatsapp Number
          </motion.button>
          <a href={cv} download="Ariful-Islam-CV">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-emerald-600 transition-all"
            >
              📄 Download CV
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Right Side - Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0"
      >
        <motion.img
          src={image}
          alt="Saheb Bali"
          className="w-[400px] xl:w-[500px] rounded-xl shadow-xl border-4 border-green-500 relative z-10"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-2xl w-96 text-center relative"
          >
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              📞 Let's Talk!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Want to discuss a project or need help? Feel free to contact me
              now.
            </p>
            <div className="bg-green-100 py-2 rounded-md mb-4">
              <span className="text-xl font-semibold text-green-800">
                {phoneNumber}
              </span>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={copyToClipboard}
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow"
              >
                📋 Copy Number
              </button>
              <a
                href={`tel:${phoneNumber}`}
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow"
              >
                📞 Call Now
              </a>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-red-500 font-bold text-xl hover:text-red-700"
            >
              ✖
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Banner;
