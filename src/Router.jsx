import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import ScrollToTop from './components/ScrollToTop';

export default function AppRouter() {
  return (
    <Router>
      <div className="App bg-[color:var(--background)] text-[color:var(--text)] min-h-screen">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}
