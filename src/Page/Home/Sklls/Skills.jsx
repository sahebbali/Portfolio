import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiNextdotjs,
  SiPrisma,
  SiDart,
  SiFlutter,
} from "react-icons/si";

// Express.js
const SiExpressJs = () => (
  <div className="text-gray-800 text-5xl">
    <SiExpress />
  </div>
);

// Dart
const DartIcon = () => (
  <div className="text-blue-500 text-5xl">
    <SiDart />
  </div>
);

// Flutter
const FlutterIcon = () => (
  <div className="text-blue-400 text-5xl">
    <SiFlutter />
  </div>
);

// PostgreSQL
const PostgreSQLIcon = () => (
  <div className="text-blue-700 text-5xl">
    <SiPostgresql />
  </div>
);

// Next.js
const NextJsIcon = () => (
  <div className="text-white text-5xl bg-black rounded-full p-2">
    <SiNextdotjs />
  </div>
);

// Prisma
const PrismaIcon = () => (
  <div className="text-indigo-500 text-5xl">
    <SiPrisma />
  </div>
);

// Mock icons for demonstration - replace with actual react-icons
const FaHtml = () => (
  <div className="text-blue-600 text-5xl">
    <FaHtml5 />
  </div>
);
const SiMongodb = () => (
  <div className="text-green-500 text-5xl">
    <DiMongodb />
  </div>
);
const NodeJs = () => (
  <div className="text-green-600 text-5xl">
    <FaNodeJs />
  </div>
);

const FaCss3 = () => (
  <div className="text-blue-600 text-5xl">
    <FaCss3Alt />
  </div>
);
const SiTailwindcss = () => (
  <div className="text-teal-500 text-5xl">
    <RiTailwindCssFill />
  </div>
);
const Github = () => (
  <div className="text-gray-800 text-5xl">
    <FaGithub />
  </div>
);
const FaJs = () => (
  <div className="text-yellow-400 text-5xl">
    <IoLogoJavascript />
  </div>
);

const SaReact = () => (
  <div className="text-blue-400 text-5xl">
    <FaReact />
  </div>
);

const skills = [
  {
    name: "HTML",
    icon: <FaHtml />,
    level: 95,
    description: "Semantic markup & accessibility",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
    level: 90,
    description: "Advanced styling & animations",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: 88,
    description: "Utility-first CSS framework",
    category: "Frontend",
  },
  {
    name: "GitHub",
    icon: <Github />,
    level: 80,
    description: "Version control & collaboration",
    category: "Tools",
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
    level: 85,
    description: "ES6+ & Modern JS features",
    category: "Programming",
  },
  {
    name: "Node.js",
    icon: <NodeJs />,
    level: 80,
    description: "Server-side JavaScript runtime",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: 90,
    description: "NoSQL database",
    category: "Database",
  },
  {
    name: "React js",
    icon: <SaReact />,
    level: 82,
    description: "Component-based architecture",
    category: "Framework",
  },
  {
    name: "Express.js",
    icon: <SiExpressJs />,
    level: 85,
    description: "Backend web framework",
    category: "Backend",
  },
  {
    name: "Dart",
    icon: <DartIcon />,
    level: 80,
    description: "Programming language for Flutter",
    category: "Programming",
  },
  {
    name: "Flutter",
    icon: <FlutterIcon />,
    level: 78,
    description: "Cross-platform UI toolkit",
    category: "Framework",
  },

  {
    name: "PostgreSQL",
    icon: <PostgreSQLIcon />,
    level: 75,
    description: "Relational database",
    category: "Database",
  },
  {
    name: "Next.js",
    icon: <NextJsIcon />,
    level: 80,
    description: "React framework for SSR & SSG",
    category: "Framework",
  },
  {
    name: "Prisma",
    icon: <PrismaIcon />,
    level: 70,
    description: "Next-gen ORM",
    category: "Tools",
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
        My technical expertise spans across modern web technologies, design
        tools, and development practices.
      </p>
    </motion.div>
  </div>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Frontend",
    "Programming",
    "Framework",
    "Backend",
    "Tools",
    "Design",
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills-section");
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

  return (
    <section
      id="skills-section"
      className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <HeaderSection name="SKILLS" />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                background:
                  "linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(255, 255, 255, 0.95))",
              }}
            >
              {/* Floating Background Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

              <div className="text-center space-y-4">
                {/* Icon Container */}
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    {skill.icon}
                  </div>
                  {/* Skill Level Ring */}
                  <div className="absolute -bottom-2 -right-2">
                    <div className="relative w-8 h-8">
                      <svg
                        className="w-8 h-8 transform -rotate-90"
                        viewBox="0 0 32 32"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="12"
                          stroke="rgba(229, 231, 235, 0.3)"
                          strokeWidth="3"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="16"
                          cy="16"
                          r="12"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 12}`}
                          initial={{ strokeDashoffset: `${2 * Math.PI * 12}` }}
                          animate={
                            isVisible
                              ? {
                                  strokeDashoffset: `${
                                    2 * Math.PI * 12 * (1 - skill.level / 100)
                                  }`,
                                }
                              : {}
                          }
                          transition={{
                            duration: 1,
                            delay: index * 0.1 + 0.5,
                            ease: "easeOut",
                          }}
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#16A34A" />
                            <stop offset="100%" stopColor="#15803D" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {skill.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-700 text-xs font-semibold rounded-full">
                    {skill.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to={"/skills"}>
            <button className="group relative px-12 py-4 bg-gradient-to-r from-green-600 via-green-500 to-green-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span className="relative z-10">See More Skills</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-green-500 to-green-700 rounded-full opacity-30 group-hover:opacity-50 blur transition-all duration-300"></div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
