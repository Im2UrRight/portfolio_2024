import React, { useState } from 'react';
import Header from '../components/Header';
import AboutCats from '../components/AboutCats';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
const About: React.FC = () => {


  return (
    <>
      <Header />
      <main className='about'>
        <h2>
          About <span className='tab-selector'>
            <a>This Site</a> |&nbsp;
            <a className='selected'>Me</a> |&nbsp;
            <a>Fran&amp;Pepper</a>
          </span>
        </h2>
        {/* <AboutSite />*/}
        <AboutMe /> 
        {/* <AboutCats /> */}
      </main>
      <Footer />
    </>
  );
};

export default About;