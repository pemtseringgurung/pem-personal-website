import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import fireImage from "../images/fire.png";
import roomImage from "../images/room.png";
import rateLowry from "../images/rateLowry.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "Rate Lowry!",
      description: "A full-stack application for discovering and reviewing food items using Next.js and MongoDB, featuring real-time image uploads with Cloudinary and dynamic station-based filtering. Implemented with a responsive Tailwind CSS UI, including an interactive rating system and image preview functionality for seamless user experience across mobile and desktop devices.",
      image: rateLowry,
      technologies: ['Next.js', 'MongoDB', 'Cloudinary', 'Tailwind CSS', 'React'],
      liveLink: "https://rate-lowry.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/rate-lowry"
    },
    {
      title: "Fire Rescue Resource Allocator",
      description: "An interactive mapping tool for optimizing emergency response in Los Angeles by visualizing fire station locations and incidents.",
      image: fireImage,
      technologies: ['React', 'React Router', 'Leaflet', 'React-Leaflet', 'Vite', 'CSS Modules'],
      liveLink: "https://fire-rescue-resource-allocator-luk4.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/fire-rescue-resource-allocator"
    },
    {
      title: "Pem's Room Tracking Website",
      description: "A web application for managing and tracking room availability using Vite and React. Features real-time updates and a user-friendly interface for efficient room management.",
      image: roomImage,
      technologies: ['React', 'Vite', 'React Modal', 'ESLint'],
      liveLink: "https://pemroomtrackingwebsite.vercel.app/",
      repoLink: "https://github.com/pemtseringgurung/pem_room_tracking_website"
    },
  ];
  
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            A selection of my recent work. 
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
              <div className="bg-white dark:bg-black overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 dark:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white text-black rounded-full"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white text-black rounded-full"
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
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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