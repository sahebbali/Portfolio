import React, { useState, useEffect } from 'react';
import { FaGithub, FaServer, FaExternalLinkAlt, FaCode, FaEye, FaRocket, FaStar, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const projectsData = [
  {
    title: "MedlinePlus 🛒",
    image: "https://i.ibb.co.com/WWRX97xB/Screenshot-2025-04-01-235028.png",
    technologies: [
      "React.js", "Tailwind CSS", "Firebase", "Node.js", "Express.js",
      "MongoDB", "Stripe", "JWT Auth"
    ],
    liveLink: "https://medicine-client.web.app/",
    serverLink: "https://github.com/BD-Arfat/medicine-server",
    livesiteLink: "https://github.com/BD-Arfat/medicine-client",
    category: "fullstack",
    featured: true,
    status: "Production Ready"
  },
  {
    title: "Rainbow Collection",
    image: "https://i.ibb.co/vx6zh1D2/Screenshot-2025-06-14-233510.png",
    technologies: [
      "React", "React Router", "Tailwind CSS", "Firebase", "JWT", "Axios", "React Query", "Stripe"
    ],
    liveLink: "https://panjabi-server.web.app/",
    serverLink: "https://github.com/BD-Arfat/panjabi-server",
    livesiteLink: "https://github.com/BD-Arfat/panjabi-client",
    category: "fullstack",
    featured: true,
    status: "Live"
  },
  {
    title: "LIFTGUARD SOLUTION",
    image: "https://i.ibb.co.com/HDWQf4C1/lift-guard.png",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://liftguardsolution01.netlify.app/",
    livesiteLink: "https://github.com/BD-Arfat/lift-guard",
    serverLink: null,
    category: "react-tailwind",
    status: "Complete"
  },
  
];

const HeaderSection = ({ name }) => (
  <div className="text-center mb-20 relative">
    {/* Background Decorative Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-10 right-1/4 w-56 h-56 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    
    <div className="relative z-10">
      <div className="inline-block relative mb-6">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 tracking-tight">
          {name}
        </h1>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full shadow-lg"></div>
        
        {/* Decorative stars */}
        <div className="absolute -top-4 -left-4 text-emerald-400 text-2xl animate-bounce">✨</div>
        <div className="absolute -top-6 -right-6 text-teal-400 text-xl animate-bounce delay-500">⭐</div>
      </div>
      
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
        Crafting digital experiences with passion and precision. 
        <span className="text-emerald-600 font-semibold"> Every project tells a story of growth and innovation.</span>
      </p>
    </div>
  </div>
);

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-30 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      />
    ))}
  </div>
);

const EnhancedProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ["all", ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = selectedCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getCategoryLabel = (category) => {
    const labels = {
      "all": "🚀 All Projects",
      "fullstack": "💻 Full Stack",
      "react-tailwind": "⚛️ React & Tailwind",
      "html-css": "🎨 HTML & CSS",
      "javascript": "✨ JavaScript"
    };
    return labels[category] || category.toUpperCase();
  };

  const getStatusColor = (status) => {
    const colors = {
      "Production Ready": "bg-green-500",
      "Live": "bg-blue-500",
      "Complete": "bg-purple-500",
      "Learning Project": "bg-yellow-500"
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  relative overflow-hidden">
      <FloatingParticles />
      
      {/* Main Content */}
      <div id="projects-section" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <HeaderSection name="MY PROJECTS" />

          {/* Category Filter with Enhanced Design */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-2xl shadow-emerald-500/40"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 shadow-xl hover:shadow-2xl"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="relative z-10">{getCategoryLabel(category)}</span>
                {selectedCategory !== category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                )}
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
              </button>
            ))}
          </div>

          {/* Projects Grid with Staggered Animation */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 ${
                  hoveredProject === idx ? 'shadow-emerald-500/30' : ''
                } ${project.featured ? 'ring-2 ring-emerald-400 ring-opacity-50' : ''}`}
                style={{
                  animationDelay: `${idx * 0.15}s`
                }}
              >
               

                {/* Project Image Container */}
                <div className="relative overflow-hidden h-72 group-hover:h-64 transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transform hover:scale-125 transition-all duration-300 relative overflow-hidden"
                        title="View Live Site"
                      >
                        <FaExternalLinkAlt className="text-xl relative z-10" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                      </a>
                    )}
                    {project.livesiteLink && project.livesiteLink !== "#" && (
                      <a
                        href={project.livesiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full shadow-2xl transform hover:scale-125 transition-all duration-300 relative overflow-hidden"
                        title="View Source Code"
                      >
                        <FaGithub className="text-xl relative z-10" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                      </a>
                    )}
                    {project.serverLink && (
                      <a
                        href={project.serverLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn bg-yellow-600 hover:bg-yellow-700 text-white p-4 rounded-full shadow-2xl transform hover:scale-125 transition-all duration-300 relative overflow-hidden"
                        title="View Server Code"
                      >
                        <FaServer className="text-xl relative z-10" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                      </a>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute bottom-6 right-6 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies with Enhanced Design */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <FaCode className="text-emerald-600" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-emerald-700 px-3 py-2 text-xs rounded-full font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 border border-emerald-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="bg-gray-100 text-gray-600 px-3 py-2 text-xs rounded-full font-semibold border border-gray-200">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1"
                      >
                        <FaEye className="text-sm" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.livesiteLink && project.livesiteLink !== "#" && (
                      <a
                        href={project.livesiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1"
                      >
                        <FaGithub className="text-sm" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-24">
            <div className="inline-block relative">
              <Link to={'/allProjects'}>
              <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold rounded-3xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 transform hover:scale-110 overflow-hidden">
                <FaRocket className="group-hover:animate-bounce text-2xl" />
                <span className="relative z-10">Explore More Projects</span>
                <FaHeart className="group-hover:animate-pulse text-2xl" />
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              </Link>
              
              {/* Decorative elements around button */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-emerald-400 rounded-full animate-spin"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-teal-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default EnhancedProjects;