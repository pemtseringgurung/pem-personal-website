import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
function App() {

  return (
    <div className="App bg-background text-text">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;