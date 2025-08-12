import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Mock icons for demonstration - you can replace with actual react-icons
const FaHtml5 = () => (
  <div className="text-orange-600 text-5xl font-bold">HTML5</div>
);
const FaCss3Alt = () => (
  <div className="text-blue-600 text-5xl font-bold">CSS3</div>
);
const FaJs = () => <div className="text-yellow-400 text-5xl font-bold">JS</div>;
const FaReact = () => <div className="text-blue-400 text-5xl font-bold">⚛</div>;
const FaNode = () => (
  <div className="text-green-600 text-5xl font-bold">NODE</div>
);
const FaGithub = () => (
  <div className="text-gray-800 text-5xl font-bold">GIT</div>
);
const FaDatabase = () => (
  <div className="text-green-700 text-5xl font-bold">DB</div>
);
const FaTools = () => (
  <div className="text-purple-600 text-5xl font-bold">🛠</div>
);

const skills = {
  Frontend: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      percentage: 90,
      description: "Semantic markup & accessibility",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      percentage: 85,
      description: "Advanced styling & animations",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      percentage: 75,
      description: "ES6+ & Modern JS features",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      name: "React JS",
      icon: <FaReact />,
      percentage: 80,
      description: "Component-based architecture",
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "Next.js",
      icon: (
        <div className="text-white text-5xl bg-black rounded-full p-2">⚡</div>
      ),
      percentage: 78,
      description: "React framework for SSR & SSG",
      color: "from-gray-800 to-black",
    },
    {
      name: "Flutter",
      icon: <div className="text-blue-400 text-5xl">💙</div>,
      percentage: 72,
      description: "Cross-platform UI toolkit",
      color: "from-blue-400 to-blue-500",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNode />,
      percentage: 70,
      description: "Server-side JavaScript runtime",
      color: "from-green-600 to-green-700",
    },
    {
      name: "Firebase",
      icon: <div className="text-gray-800 text-5xl font-bold">FIRE</div>,
      percentage: 80,
      description: "Serverless backend platform",
      color: "from-yellow-500 to-gray-800",
    },
    {
      name: "Express.js",
      icon: <div className="text-gray-800 text-5xl font-bold">EXP</div>,
      percentage: 75,
      description: "Minimal & flexible Node.js framework",
      color: "from-gray-700 to-gray-800",
    },
    {
      name: "MongoDB",
      icon: <FaDatabase />,
      percentage: 65,
      description: "NoSQL database management",
      color: "from-green-700 to-green-800",
    },
    {
      name: "PostgreSQL",
      icon: <div className="text-blue-700 text-5xl font-bold">PSQL</div>,
      percentage: 60,
      description: "Advanced relational database",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Prisma",
      icon: <div className="text-indigo-500 text-5xl font-bold">PRIS</div>,
      percentage: 68,
      description: "Next-gen ORM for DB access",
      color: "from-indigo-500 to-indigo-700",
    },
  ],
  Tools: [
    {
      name: "GitHub",
      icon: <FaGithub />,
      percentage: 95,
      description: "Version control & collaboration",
      color: "from-gray-700 to-gray-800",
    },
    {
      name: "VS Code",
      icon: <FaTools />,
      percentage: 90,
      description: "Code editor & extensions",
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "Postman",
      icon: <div className="text-orange-500 text-5xl font-bold">PM</div>,
      percentage: 88,
      description: "API testing & debugging tool",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Figma",
      icon: <div className="text-pink-500 text-5xl font-bold">🎨</div>,
      percentage: 80,
      description: "UI/UX design & prototyping",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Docker",
      icon: <div className="text-blue-400 text-5xl font-bold">🐳</div>,
      percentage: 65,
      description: "Containerization & deployment",
      color: "from-blue-400 to-blue-500",
    },
  ],
};

const HeaderSection = ({ name }) => (
  <div className="text-center mb-16">
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent mb-6 tracking-tight">
        {name}
      </h2>
      <div className="flex justify-center items-center space-x-2 mb-6">
        <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
        <div className="w-3 h-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
        <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
      </div>
      <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
        My technical skills span modern web technologies, design tools, and
        development practices.
      </p>
    </motion.div>
  </div>
);

const SkillCard = ({ skill, index, isVisible, categoryIndex }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: categoryIndex * 0.2 + index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden">
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
        ></div>

        {/* Floating decorative elements */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>

        <div className="relative z-10">
          {/* Icon container with enhanced styling */}
          <div className="relative mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3">
              {skill.icon}
            </div>

            {/* Skill percentage ring */}
            <div className="absolute -bottom-3 -right-3">
              <div className="relative w-12 h-12">
                <svg
                  className="w-12 h-12 transform -rotate-90"
                  viewBox="0 0 48 48"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke="rgba(229, 231, 235, 0.3)"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke="url(#skillGradient)"
                    strokeWidth="4"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 18}`}
                    initial={{ strokeDashoffset: `${2 * Math.PI * 18}` }}
                    animate={
                      isVisible
                        ? {
                            strokeDashoffset: `${
                              2 * Math.PI * 18 * (1 - skill.percentage / 100)
                            }`,
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      delay: categoryIndex * 0.2 + index * 0.1 + 0.5,
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="skillGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skill information */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
              {skill.description}
            </p>
          </div>

          {/* Animated progress bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className={`h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                initial={{ width: 0 }}
                animate={
                  isVisible ? { width: `${skill.percentage}%` } : { width: 0 }
                }
                transition={{
                  duration: 1.5,
                  delay: categoryIndex * 0.2 + index * 0.1 + 1,
                }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills-section"
      className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-screen relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-teal-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <HeaderSection name="SKILLS" />

        {/* Skills categories */}
        <div className="space-y-20">
          {Object.keys(skills).map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-gray-800 mb-4">
                  {category === "Frontend"
                    ? "Frontend"
                    : category === "Backend"
                    ? "Backend"
                    : "Tools"}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {skills[category].map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isVisible={isVisible}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
