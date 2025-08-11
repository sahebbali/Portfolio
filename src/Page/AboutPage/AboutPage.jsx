import React, { useState, useEffect } from "react";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const journeySteps = [
    {
      icon: "💡",
      title: "My Journey",
      description:
        "I started learning web development with HTML, CSS, and JavaScript. As I grew confident, I embraced React and modern UI libraries to create better experiences.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "⚛️",
      title: "React & Tailwind",
      description:
        "I build responsive, modular user interfaces using React.js and style them beautifully with Tailwind CSS. I understand DOM manipulation, props, state, and use hooks like useState, useEffect, and React Router effectively.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "🛠️",
      title: "Projects",
      description:
        "I've built projects like a Quiz Website, a Car Selling Platform, and a Punjabi E-commerce Store — always focusing on clean code and smooth user experience.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: "🤝",
      title: "Collaboration & Vision",
      description:
        "I'm comfortable using Git & GitHub, love teamwork, and aim to work on impactful real-world projects while constantly learning new technologies.",
      color: "from-green-400 to-green-600",
    },
  ];

  const highlights = [
    {
      icon: "🧠",
      title: "Self-Learning Ability",
      description:
        "I have primarily learned through online platforms and make it a habit to learn something new every day. I'm always curious to explore and apply new technologies and tools.",
      gradient: "from-pink-400 to-red-500",
    },
    {
      icon: "⏰",
      title: "Time Management",
      description:
        "I always try to finish tasks on time and stick to deadlines. I consider time management a key part of every project I handle.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: "🧰",
      title: "Tools & Software",
      description:
        "I use Visual Studio Code for coding, GitHub for version control, and can convert UI designs from Figma to functional code.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: "📣",
      title: "User Feedback",
      description:
        "I have shared some of my projects with friends and mentors who appreciated the UI and overall design experience.",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  const skills = [
    { name: "React.js", level: 90, color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-cyan-500" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
    { name: "HTML5", level: 98, color: "from-orange-400 to-red-500" },
    { name: "CSS3", level: 90, color: "from-blue-400 to-indigo-500" },
    { name: "MongoDB", level: 75, color: "from-green-400 to-emerald-500" },
    { name: "Express.js", level: 70, color: "from-gray-400 to-gray-600" },
    { name: "REST API", level: 80, color: "from-purple-400 to-pink-500" },
    { name: "Git & GitHub", level: 85, color: "from-indigo-400 to-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20 px-4 md:px-10">
        {/* Hero Section */}
        <div
          className={`max-w-5xl mx-auto text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Assalamu Alaikum
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-20 animate-pulse"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            I'm <span className="text-green-600">Saheb Bali</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate{" "}
            <span className="font-semibold text-green-600">
              Frontend Developer
            </span>{" "}
            focused on building modern web apps with React.js and Tailwind CSS.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              My Development Journey
            </span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-start transition-all duration-700 delay-${
                    index * 200
                  } ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  {/* Timeline Node */}
                  <div
                    className={`relative z-10 w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div className="ml-8 flex-1 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${step.color} rounded-l-2xl`}
                    ></div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Highlights */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ✨ Professional Highlights
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-gray-200 transform hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${highlight.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}

            {/* Future Goals - Full Width */}
            <div className="md:col-span-2 group bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                  🚀
                </div>
                <h4 className="text-2xl font-bold">Future Goal</h4>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                My goal is to become a professional frontend engineer and work
                on world-class, real-life projects that create real impact.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              💼 Technical Skills
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-sm font-semibold text-gray-500 group-hover:text-green-600 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{
                      width: hoveredSkill === index ? `${skill.level}%` : "0%",
                      transition: "width 1s ease-out",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Something Amazing? 🚀
              </h3>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                I'm excited to work on meaningful projects. Let's connect and
                create something extraordinary together!
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                  ⚡
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce delay-150">
                  💫
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce delay-300">
                  🌟
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
