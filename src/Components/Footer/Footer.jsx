import React, { useState } from "react";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    // {
    //   name: "YouTube",
    //   url: "https://www.youtube.com",
    //   icon: "https://cdn-icons-png.flaticon.com/128/3670/3670147.png",
    //   hoverColor: "hover:bg-red-500",
    // },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: "https://cdn-icons-png.flaticon.com/128/145/145807.png",
      hoverColor: "hover:bg-blue-600",
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/saheb.ali.974819/",
      icon: "https://cdn-icons-png.flaticon.com/128/145/145802.png",
      hoverColor: "hover:bg-blue-500",
    },
    {
      name: "GitHub",
      url: "https://github.com/sahebbali",
      icon: "https://cdn-icons-png.flaticon.com/128/733/733609.png",
      hoverColor: "hover:bg-gray-800",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-green-200 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 py-16">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Name Section */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent animate-pulse">
              Saheb Bali
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-green-500 mx-auto rounded-full"></div>
            <p className="text-xl md:text-2xl font-light uppercase tracking-wider text-green-100">
              Junior Full-stack Web Developer
            </p>
          </div>

          {/* Email Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-green-400/20 hover:bg-white/15 transition-all duration-300 group">
            <p className="text-lg text-green-100 mb-2">Get in touch</p>
            <a
              href="mailto:sahebbali253@gmail.com"
              className="text-white text-lg font-medium hover:text-green-300 transition-all duration-300 relative inline-block group-hover:scale-105"
            >
              sahebbali253@gmail.com
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 group-hover:w-full transition-all duration-500"></div>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="space-y-4">
            <p className="text-lg text-green-100 font-medium">
              Connect with me
            </p>
            <div className="flex justify-center items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-green-400/20 hover:border-green-300/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 ${social.hoverColor}`}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    boxShadow:
                      hoveredIcon === index
                        ? "0 20px 40px rgba(0,0,0,0.3)"
                        : "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 group-hover:animate-ping bg-white transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-12 mb-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
        </div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-green-200 text-lg font-light">
            © 2025
            <span className="mx-2 text-white font-medium hover:text-green-300 transition-colors duration-300 cursor-default">
              Saheb Bali
            </span>
            All Rights Reserved.
          </p>
          <p className="mt-2 text-green-300 text-sm animate-pulse">
            Made with ❤️ in Bangladesh
          </p>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900/50 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
