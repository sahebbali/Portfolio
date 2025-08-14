import React, { useState, useEffect } from "react";
import { FaGithub, FaServer, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Life Never again",
    description:
      "Life Never Again provides a straightforward and transparent mechanism to attract investments and make more profits.",
    image:
      "https://res.cloudinary.com/dqfnprtlc/image/upload/v1754980125/Prject%20Image/qg1j73olteqxs367hjnt.png",
    technologies: [
      "React.js",
      "Sass CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "custom Payment gateway",
      "JWT Auth",
    ],
    liveLink: "https://life-never-again.netlify.app/",
    serverLink: "https://github.com/sahebbali/LifeNeverAgain-Client.git",
    livesiteLink: "https://github.com/sahebbali/LifeNeverAgain-Server.git",

    featured: true,
    status: "Production Ready",
    category: "fullstack",
  },
  {
    title: "Grow More Today",
    description:
      "Grow More is one of the largest and longest serving independent private equity partnerships. Since our founding in 2016, we have invested investments across 5 countries. While every company is different, our hands-on approach to helping these businesses flourish has remained a constant.",
    image:
      "https://res.cloudinary.com/dqfnprtlc/image/upload/v1755162694/Prject%20Image/y1tpa2qiexafw5isk4ev.jpg",
    technologies: [
      "React.js",
      "Sass CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "custom Payment gateway",
      "JWT Auth",
    ],
    liveLink: "https://grow-more-today.netlify.app/",
    serverLink: "https://github.com/sahebbali/Grow_More_Today_Client.git",
    livesiteLink: "https://github.com/sahebbali/Grow_More_Today_Server.git",
    category: "fullstack",
    featured: true,
    status: "Live",
  },
  {
    title: "Self Life Care",
    description:
      "At Self Life Care, we envision a world where everyone has the opportunity to turn their ideas into reality, regardless of their financial background.",
    image:
      "https://res.cloudinary.com/dqfnprtlc/image/upload/v1754980126/Prject%20Image/wfkkp115zdgduyiviszo.png",
    technologies: [
      "React.js",
      "Sass CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "custom Payment gateway",
      "JWT Auth",
    ],
    liveLink: "https://self-life-care.netlify.app/",
    serverLink: "https://github.com/sahebbali/self-Life-Care-Client.git",
    livesiteLink: "https://github.com/sahebbali/self-Life-Care-Server.git",
    featured: true,
    status: "Live",
    category: "fullstack",
  },
  {
    title: "mithilla-11",
    description:
      "Mithila 11 Platform allows you to play Games online by adding excitement to your gaming experience with real Money. Mithila 11 is among the most well-liked gaming platforms in India for its quick gameplay, safe platform, and secure transactions.",
    image:
      "https://res.cloudinary.com/dqfnprtlc/image/upload/v1754980935/Prject%20Image/nj3cfluwqp3nrxeio7av.jpg",
    technologies: [
      "React.js",
      "Sass CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "custom Payment gateway",
      "JWT Auth",
    ],
    liveLink: "https://mithilla-11.netlify.app",
    serverLink: "https://github.com/sahebbali/Mithilla11-Client.git",
    livesiteLink: "https://github.com/sahebbali/Mithilla11-Server.git",
    category: "fullstack",
    featured: true,
    status: "Live",
  },
  {
    title: "Gamer Hub",
    description:
      "Gamers Hub Game Platform allows you to play Games online by adding excitement to your gaming experience with real Money. Gamers Hub Game is among the most well-liked gaming platforms in India for its quick gameplay, safe platform, and secure transactions.",
    image:
      "https://res.cloudinary.com/dqfnprtlc/image/upload/v1754981338/Prject%20Image/gpcleg2fk4s3qjc0u1ab.jpg",
    technologies: [
      "React.js",
      "Sass CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "custom Payment gateway",
      "JWT Auth",
    ],
    liveLink: "https://gamers-hubs.netlify.app",
    serverLink: "https://github.com/sahebbali/Gamers_Hub_Client.git",
    livesiteLink: "https://github.com/sahebbali/Gamers_Hub_Server.git",
    category: "fullstack",
    featured: true,
    status: "Live",
  },

  {
    title: "ABHIFX024",
    description:
      "We provide significant support to management teams in developing and executing their business plans. In addition to our deal team, which is involved throughout the life of an investment, we draw on operating resources from our in-house Portfolio Support Group and third-party Operating Partner program. These combined resources underpin our highly operational approach to investing.",
    image:
      "https://res.cloudinary.com/dqfnprtlc/image/upload/v1755162732/Prject%20Image/sgboqgh3xftydirny2e5.jpg",
    technologies: [
      "React.js",
      "Sass CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "custom Payment gateway",
      "JWT Auth",
    ],
    liveLink: "https://abhifx024.netlify.app",
    serverLink: "https://github.com/sahebbali/ABHIFX024-Client.git",
    livesiteLink: "https://github.com/sahebbali/ABHIFX024-Server.git",
    category: "fullstack",
    featured: true,
    status: "Live",
  },
  {
    title: "Solnet.global",
    description:
      "Turn market chaos into consistent profits with our AI-powered hedge fund. Earn daily passive income and get rewarded for sharing the opportunity.",
    image:
      "https://res.cloudinary.com/dqfnprtlc/image/upload/v1755162855/Prject%20Image/iqrwctpute24kqjhr8bh.jpg",
    technologies: [
      "React.js",
      "Sass CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "custom Payment gateway",
      "JWT Auth",
    ],
    liveLink: "https://salana-network.netlify.app",
    serverLink: "https://github.com/sahebbali/Solana-Network-Client.git",
    livesiteLink: "https://github.com/sahebbali/Solana-Network-Server.git",
    category: "fullstack",
    featured: true,
    status: "Live",
  },
  // {
  //   title: "Yashaswigenics",
  //   description:
  //     "A medicine e-commerce platform for buying and selling medicines seamlessly.",
  //   image: "https://i.ibb.co.com/WWRX97xB/Screenshot-2025-04-01-235028.png",
  //   technologies: [
  //     "React.js",
  //     "Tailwind CSS",
  //     "Firebase",
  //     "Node.js",
  //     "Express.js",
  //     "MongoDB",
  //     "Stripe",
  //     "JWT Auth",
  //   ],
  //   liveLink: "https://medicine-client.web.app/",
  //   serverLink: "https://github.com/sahebbali/Yashaswigenics-Client.git",
  //   livesiteLink: "https://github.com/sahebbali/Yashaswigenics-Server.git",
  //   category: "fullstack",
  // },
];

const HeaderSection = ({ name }) => (
  <div className="text-center mb-16">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-green-700 bg-clip-text text-transparent mb-4">
        {name}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto rounded-full"></div>
      <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
        Showcasing my journey through web development with diverse projects
        ranging from simple HTML/CSS to complex full-stack applications.
      </p>
    </motion.div>
  </div>
);

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  const categories = ["all", ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCategoryDisplayName = (category) => {
    const categoryNames = {
      all: "All Projects",
      fullstack: "Full Stack",
      "react-tailwind": "React & Tailwind",
      "html-css": "HTML & CSS",
      javascript: "JavaScript",
    };
    return categoryNames[category] || category.toUpperCase();
  };

  return (
    <section
      id="projects-section"
      className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <HeaderSection name="MY PROJECTS" />

        {/* Category Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
              }`}
            >
              {getCategoryDisplayName(category)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-white/20"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                rotateY: 5,
                rotateX: 5,
              }}
            >
              {/* Floating Background Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

              {/* Project Image Container */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Icon Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                  {project.livesiteLink && project.livesiteLink !== "#" && (
                    <motion.a
                      href={project.livesiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                      whileHover={{ rotate: -360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  {project.serverLink && (
                    <motion.a
                      href={project.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FaServer />
                    </motion.a>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-semibold rounded-full shadow-lg">
                    {getCategoryDisplayName(project.category)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-xs font-medium rounded-full border border-green-200 hover:shadow-sm transition-shadow duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-semibold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 text-center transform hover:scale-105"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.livesiteLink && project.livesiteLink !== "#" && (
                    <a
                      href={project.livesiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 text-center transform hover:scale-105"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-500 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
