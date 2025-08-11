import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/abouts", name: "Abouts" },
    { path: "/skills", name: "Skills" },
    { path: "/services", name: "Services" },
    { path: "/allProjects", name: "All Projects" },
  ];

  return (
    <header
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled ? "bg-green-600 shadow-lg" : "bg-green-500"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-white text-2xl md:text-3xl font-bold">
            Saheb Bali
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white text-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-300 font-semibold"
                  : "hover:text-blue-300 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-600">
          <nav className="flex flex-col items-start space-y-2 p-4 text-white text-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-300 font-semibold"
                    : "hover:text-blue-300 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
