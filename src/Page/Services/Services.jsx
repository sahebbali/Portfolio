import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "MERN Stack Project Creation",
    description: "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    icon: "🖥️"
  },
  {
    title: "CRUD Projects",
    description: "Create dynamic applications with full CRUD functionality for data management.",
    icon: "🗃️"
  },
  {
    title: "Responsive Projects",
    description: "Develop websites that are fully responsive on all screen sizes and devices.",
    icon: "📱"
  },
  {
    title: "Authentication System",
    description: "Implement secure authentication and authorization with JWT, Firebase, and OAuth.",
    icon: "🔒"
  },
  {
    title: "Admin Panel Development",
    description: "Build powerful admin panels to manage and control your platform with ease.",
    icon: "🎓"
  },
  {
    title: "Dashboard",
    description: "Create user-friendly dashboards with real-time data and interactive components.",
    icon: "📊"
  },
  {
    title: "Multi-Vendor Platform",
    description: "Develop platforms supporting multiple vendors for an e-commerce solution.",
    icon: "👥"
  },
  {
    title: "Payment Gateway Integration (Stripe)",
    description: "Integrate Stripe payment gateway for secure and reliable payment processing.",
    icon: "💳"
  },
  {
    title: "Performance Optimization",
    description: "Improve your website's speed and performance using various optimization techniques.",
    icon: "⚡"
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <section className="mt-10 px-6 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Services
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.h1>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      {/* Services Grid */}
      <div className="container mx-auto text-center py-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              {/* Main card */}
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-green-200/50 hover:shadow-2xl transition-all duration-500 transform perspective-1000 group-hover:bg-gradient-to-br group-hover:from-green-500 group-hover:to-emerald-500 group-hover:text-white overflow-hidden">
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl transform rotate-12 scale-110"></div>
                </div>

                {/* Icon with advanced animations */}
                <motion.div 
                  className="text-6xl mb-6 inline-block filter drop-shadow-lg"
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <div className="relative">
                    {service.icon}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 leading-tight transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Animated bottom accent */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-500"
                  initial={{ width: "100%" }}
                  whileHover={{ 
                    height: 4,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/50 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Services;