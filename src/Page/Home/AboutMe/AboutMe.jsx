import React from "react";
import image from "../../../assets/sahebali.jpg";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <HeaderSection name={"ABOUT ME"}></HeaderSection>

      <div className="flex justify-center items-center mt-12 relative">
        {/* Background Decorative Dots */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-full h-full bg-green-100 opacity-30 rounded-full absolute"></div>
          <div className="w-20 h-20 bg-green-300 rounded-full absolute top-10 left-10 animate-ping"></div>
          <div className="w-16 h-16 bg-green-400 rounded-full absolute bottom-16 right-16 animate-ping delay-150"></div>
        </div>

        <div className="max-w-6xl w-full bg-gradient-to-r from-green-400 via-green-200 to-green-100 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden transform transition duration-500 hover:scale-105">
          {/* Left Section with Image */}
          <div className="md:w-1/3 bg-white flex items-center justify-center p-10 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-green-500 to-green-300 rounded-full -z-10 w-72 h-72 md:w-96 md:h-96 animate-pulse" />
            <img
              src={image}
              alt="Saheb Bali"
              className="rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-green-700 transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Right Section with Content */}
          <div className="md:w-2/3 bg-white p-12 md:p-16 relative">
            {/* Decorative Shapes */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-green-200 rounded-full -z-10 animate-bounce"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-green-300 rounded-full -z-10 animate-bounce delay-150"></div>
            <div className="absolute top-10 left-1/2 w-16 h-16 bg-green-400 rounded-full -z-10 animate-ping"></div>
            <div className="absolute bottom-10 right-1/2 w-14 h-14 bg-green-500 rounded-full -z-10 animate-ping delay-200"></div>

            {/* Heading Section */}
            <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-3 font-roboto">
              Hello, I’m
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-5 font-lora animate-fade-in">
              Saheb Bali
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-5 font-roboto">
              Junior MERN Stack Developer & Flutter Developer
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5 font-lora text-lg">
              I’m driven by the challenge of crafting scalable,
              high-performance, and user-focused applications. From
              pixel-perfect frontends to robust backend architectures, I
              transform ideas into seamless digital experiences.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 font-lora text-lg">
              💡 Passionate about writing clean, efficient code, my mission is
              to bridge innovation and functionality—delivering solutions that
              are not only powerful but also intuitive and delightful to use.
            </p>

            {/* Contact Section */}
            <div className="mt-6">
              <Link
                to={"/abouts"}
                className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-transform duration-300 hover:scale-110 font-roboto"
              >
                More Information
              </Link>
              <p className="mt-4 text-gray-500 font-roboto">
                Contact: sahebbali253@gmail.com
              </p>
              <div className="flex items-center gap-5 mt-4">
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 text-2xl transition duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 text-2xl transition duration-300"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="#"
                  className="text-green-600 hover:text-green-800 text-2xl transition duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
