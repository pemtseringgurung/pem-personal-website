import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import fireImage from "../images/fire.png";
import roomImage from "../images/room.png";
import rateLowry from "../images/ratelowry.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "rate lowry!",
      description: "a full-stack application for discovering and reviewing food items using next.js and mongodb, featuring real-time image uploads with cloudinary and dynamic station-based filtering. implemented with a responsive tailwind css ui, including an interactive rating system and image preview functionality for seamless user experience across mobile and desktop devices.",
      image: rateLowry,
      technologies: ['next.js', 'mongodb', 'cloudinary', 'tailwind css', 'react'],
      liveLink: "https://rate-lowry.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/rate-lowry"
    },
    {
      title: "fire rescue resource allocator",
      description: "an interactive mapping tool for optimizing emergency response in los angeles by visualizing fire station locations and incidents.",
      image: fireImage,
      technologies: ['react', 'react router', 'leaflet', 'react-leaflet', 'vite', 'css modules'],
      liveLink: "https://fire-rescue-resource-allocator-luk4.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/fire-rescue-resource-allocator"
    },
    {
      title: "pem's room tracking website",
      description: "a web application for managing and tracking room availability using vite and react. features real-time updates and a user-friendly interface for efficient room management.",
      image: roomImage,
      technologies: ['react', 'vite', 'react modal', 'eslint'],
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
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
          whileInView="show"
          viewport={{ once: true }}
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