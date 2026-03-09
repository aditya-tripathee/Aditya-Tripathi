import React from 'react'
import Home from './Pages/Home'
import {Route,Routes} from "react-router-dom";
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Project from './components/Project';
import About from './components/About';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div >
     <Navbar />
      <HeroSection id="hero" />
      <About id="about" />
      <Skills id="skills" />
      <Project id="projects" />
      <Experience id="experience"/>
      <Footer />
    </div>
  )
}

export default App
