import React from 'react'
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <div className='bg-[#f9f9f9] ' id='home'>
       <Navbar />
      <About id="about" />
      <Skills id="skills" />
      <Project id="projects" />
      <Experience id="experience"/>
      <Footer />
    </div>
  )
}

export default Home
