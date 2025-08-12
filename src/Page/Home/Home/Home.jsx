import React from "react";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Sklls/Skills";
import Services from "../Service/Services";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import ExperienceSection from "../Experience/ExperienceSection";

const Home = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <ExperienceSection></ExperienceSection>
      <Skills></Skills>
      <Services></Services>
      <Education></Education>
      <Projects></Projects>
    </div>
  );
};

export default Home;
