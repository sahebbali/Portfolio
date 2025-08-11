import React, { useState, useEffect } from 'react';
import { FaGithub, FaServer, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "MedlinePlus 🛒",
    description: "A medicine e-commerce platform for buying and selling medicines seamlessly.",
    image: "https://i.ibb.co.com/WWRX97xB/Screenshot-2025-04-01-235028.png",
    technologies: [
      "React.js", "Tailwind CSS", "Firebase", "Node.js", "Express.js",
      "MongoDB", "Stripe", "JWT Auth"
    ],
    liveLink: "https://medicine-client.web.app/",
    serverLink: "https://github.com/BD-Arfat/medicine-server",
    livesiteLink: "https://github.com/BD-Arfat/medicine-client",
    category: "fullstack"
  },
  {
    title: "Rainbow Collection",
    description: "I'm excited to share my latest full-stack project — Rainbow Collection, a modern e-commerce platform designed especially for Eid shoppers!",
    image: "https://i.ibb.co/vx6zh1D2/Screenshot-2025-06-14-233510.png",
    technologies: [
      "React",
      "React Router",
      "Icons (React/Lucide)",
      "Carousel (React Slick)",
      "Alerts (SweetAlert2)",
      "SEO (React Helmet)",
      "Tailwind CSS",
      "Emotion",
      "Firebase",
      "JWT",
      "Axios",
      "React Query",
      "Stripe",
      "Autoprefixer",
    ],
    liveLink: "https://panjabi-server.web.app/",
    serverLink: "https://github.com/BD-Arfat/panjabi-server",
    livesiteLink: "https://github.com/BD-Arfat/panjabi-client",
    category: "fullstack"
  },
  {
    title: "LIFTGUARD SOLUTION",
    description: "Industry-level management system built using React, Tailwind CSS.",
    image: "https://i.ibb.co.com/HDWQf4C1/lift-guard.png",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://liftguardsolution01.netlify.app/",
    livesiteLink: "https://github.com/BD-Arfat/lift-guard",
    serverLink: null,
    category: "react-tailwind"
  },
  {
    title: "This is my first website and first project.",
    description: "I made this to see and know how much html and css I have learned. I made this with html and css",
    image: "https://i.ibb.co.com/x8jSV1Hk/Screenshot-2025-04-23-183806.png",
    technologies: ['html5', 'css3'],
    liveLink: "https://bd-arfat.github.io/Assignment-Project-one/",
    livesiteLink: "https://github.com/BD-Arfat/Assignment-Project-one",
    serverLink: null,
    category: "html-css"
  },
  {
    title: "This is my Seconds website and Seconds project.",
    description: "I made this to see and know how much html and css I have learned. I made this with html and css",
    image: "https://i.ibb.co.com/KjBbZ6N4/Screenshot-2025-04-23-184500.png",
    technologies: ['html5', 'css3'],
    liveLink: "https://bd-arfat.github.io/Assignment-two/",
    livesiteLink: "https://github.com/BD-Arfat/Assignment-two",
    serverLink: null,
    category: "html-css"
  },
  {
    title: "This is my Third website and Third project.",
    description: "I made this to see and know how much html, css and tailwindCss I have learned. I made this with html and css",
    image: "https://i.ibb.co.com/C5qCbgh7/Screenshot-2025-04-23-191528.png",
    technologies: ['html5', 'css3', 'tailwind css'],
    liveLink: "https://bd-arfat.github.io/Assignment-three/",
    livesiteLink: "https://github.com/BD-Arfat/Assignment-three",
    serverLink: null,
    category: "html-css"
  },
  {
    title: "Donate Website.",
    description: "I made it with JavaScript. I designed it with CSS, Tailwind CSS.",
    image: "https://i.ibb.co.com/DsdfGyV/Screenshot-2025-04-25-195857.png",
    technologies: ['html5', 'css3', 'tailwind css', 'Javascript'],
    liveLink: "https://banking-project-333.netlify.app/",
    livesiteLink: "https://github.com/BD-Arfat/Assignment-Five",
    serverLink: null,
    category: "javascript"
  },
  {
    title: "adopt-your-best-friend.",
    description: "I made it with JavaScript. I designed it with CSS, Tailwind CSS.",
    image: "https://i.ibb.co.com/FbfMy7kM/Screenshot-2025-04-26-225424.png",
    technologies: ['html5', 'css3', 'tailwind css', 'Javascript'],
    liveLink: "https://adopt-your-best-friend.web.app/",
    livesiteLink: "#",
    serverLink: null,
    category: "javascript"
  },
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

  const categories = ["all", ...new Set(projectsData.map(p => p.category))];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter(project => project.category === selectedCategory);

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
      'all': 'All Projects',
      'fullstack': 'Full Stack',
      'react-tailwind': 'React & Tailwind',
      'html-css': 'HTML & CSS',
      'javascript': 'JavaScript'
    };
    return categoryNames[category] || category.toUpperCase();
  };

  return (
    <section id="projects-section" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen">
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
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
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
                stiffness: 100
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
                  <h4 className="text-sm font-semibold text-gray-700">Tech Stack:</h4>
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