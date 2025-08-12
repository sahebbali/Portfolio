import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Mock HeaderSection component
const HeaderSection = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {title}
    </motion.h2>
    <motion.p
      className="text-xl text-gray-600 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {subtitle}
    </motion.p>
  </div>
);

const services = [
  {
    title: "Admin Panel Development",
    description:
      "Creating powerful and user-friendly admin panels to manage your business efficiently.",
    icon: "🛠️",
  },
  {
    title: "Seller Dashboard",
    description:
      "Developing feature-rich seller dashboards for smooth product management and analytics.",
    icon: "📊",
  },
  {
    title: "E-commerce Login System",
    description:
      "Implementing secure and seamless login systems for customers, sellers, and admins.",
    icon: "🔐",
  },
  {
    title: "Multi-Vendor Platform",
    description:
      "Building scalable multi-vendor platforms to connect buyers and sellers effectively.",
    icon: "🛒",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Integrating secure payment gateways to ensure smooth and reliable transactions.",
    icon: "💳",
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing website speed and performance for an improved user experience.",
    icon: "🚀",
  },
  {
    title: "Flutter App",
    description:
      "Building scalable and high-performance mobile applications with Flutter, ensuring seamless cross-platform experience, beautiful UI designs, and smooth animations.",
    icon: "📱",
  },

  {
    title: "Game Development",
    description:
      "Designing and building engaging games such as color prediction, poll games, number guessing, and betting games with smooth gameplay and appealing graphics.",
    icon: "🎮",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <HeaderSection
          title="Our Services"
          subtitle="Comprehensive e-commerce solutions tailored to elevate your business to new heights"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

              {/* Main card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                {/* Icon background with gradient */}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl filter drop-shadow-sm">
                    {service.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Decorative element */}
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-300"></div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to={"/services"}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
              <span>Get Started Today</span>
              <span className="ml-2">→</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
