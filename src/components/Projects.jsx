import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import fireImage from "../images/fire.png";
import roomImage from "../images/room.png";
import rateLowry from "../images/ratelowry.png";
import isOralDefense from "../images/is-oral-defense.png";
import axeImage from "../images/axe.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "axe",
      description: "a lightweight web app that uses langchain and langgraph with google gemini to analyze personal spending, reveal behavioral triggers, and give clear actionable insights.",
      image: axeImage,
      technologies: ['next.js', 'python (flask)', 'langchain', 'google gemini', 'tailwind css'],
      liveLink: "https://axe-ten.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/axe"
    },
    {
      title: "wooster independent Study (i.s.) oral defense scheduler",
      description: "a full-stack scheduling platform adopted by 3 departments, automating the complex oral defense scheduling process for over 80 students and 15 professors.",
      image: isOralDefense,
      technologies: ['typescript', 'next.js', 'supabase', 'postgresql', 'supabase auth'],
      liveLink: "https://woo-oral.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/WooOral"
    },
    {
      title: "rate lowry",
      description: "a full-stack food review application for discovering and rating dining hall menu items. built with a next.js restful api achieving a 95/100 lighthouse performance score and sub-200ms api response times through optimized mongodb queries. integrated cloudinary api for image uploads and cdn delivery, cutting image load times by 70%.",
      image: rateLowry,
      technologies: ['next.js', 'mongodb', 'tailwind css', 'cloudinary', 'react.js'],
      liveLink: "https://rate-lowry.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/rate-lowry"
    },
    {
      title: "fire rescue resource allocator",
      description: "an emergency response optimization tool using a javascript genetic algorithm to determine optimal fire station placement and emergency routes across los angeles. secured 2nd place (developer track) at woohackathon. features an interactive map ui with react and leaflet.js to visualize optimal routing.",
      image: fireImage,
      technologies: ['react.js', 'leaflet.js', 'javascript', 'vite', 'genetic algorithm'],
      liveLink: "https://fire-rescue-resource-allocator-luk4.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/fire-rescue-resource-allocator"
    },
    {
      title: "pem's room tracking website",
      description: "a web application for managing and tracking room availability using vite and react. features real-time updates and a user-friendly interface for efficient room management.",
      image: roomImage,
      technologies: ['react.js', 'vite', 'react modal', 'eslint'],
      liveLink: "https://pemroomtrackingwebsite.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/pem_room_tracking_website"
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-[color:var(--background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title text-[color:var(--text)]">projects</h2>
          <p className="text-[color:var(--text-light)] max-w-2xl">
            a selection of my recent work.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-[color:var(--background-alt)] overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 md:p-2 bg-white text-black rounded-full shadow-lg"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 md:p-2 bg-white text-black rounded-full shadow-lg"
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 text-xs font-medium bg-gray-200 text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;