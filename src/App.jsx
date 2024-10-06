import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/skills';
import Contact from './components/Contact';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
