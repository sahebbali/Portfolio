import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Sklls/Skills';
import Services from '../Service/Services';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='max-w-[1500px] mx-auto'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Services></Services>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Home;