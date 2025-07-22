import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import heroImage from '../images/pem.png'; 

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 min-h-screen flex flex-col justify-center relative overflow-hidden bg-[color:var(--background)]">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-mono text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                HELLO! MY NAME IS
              </h2>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[color:var(--text)]">
                <span className="block mb-1">PEM TSERING</span>
                <span className="block mb-1">GURUNG</span>
                <span className="block text-2xl sm:text-3xl font-light text-[color:var(--text-light)] whitespace-nowrap">
  Software Engineer | Full-Stack & AI Development
</span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6 text-sm sm:text-base text-[color:var(--text-light)] max-w-lg"
              >
                <p className="mb-5">
                  I am a junior at the College of Wooster majoring in Computer Science. I am passionate about building intelligent AI agents and full-stack web applications that solve real-world problems. I enjoy combining the logic of backend systems with the creativity of user-focused design, and I am especially excited by the possibilities of autonomous systems powered by modern AI.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-[color:var(--text)] inline-block relative">
                    Tech Stack
                    <span className="absolute w-12 h-0.5 bg-black bottom-[-6px] left-0"></span>
                  </h3>
                  
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {['JavaScript', 'Python', 'Java', 'C++', 'Kotlin', 'TypeScript', 'React', 'Node.js', 'Next.js', 'LlamaIndex', 'Model Context Protocol (MCP)', 'Flask', 'Django', 'PyTorch', 'TensorFlow', 'Git', 'GitHub', 'Jupyter', 'FastAPI', 'MongoDB','PostgreSQL', 'HTML', 'CSS', 'AWS(EC2, S3, EKS)', 'GCP', 'Firebase', 'Docker', 'Kubernetes'].map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] rounded-full bg-[color:var(--tag-bg)] text-[color:var(--tag-text)] hover:shadow-md transition-shadow duration-200 inline-block">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Action button and social icons in separate rows */}
              <div className="mt-8 flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Link 
                    to="/projects"
                    className="px-8 py-3 rounded-none bg-black text-white font-medium tracking-wider hover-lift inline-block"
                  >
                    VIEW WORK
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="flex space-x-6"
                >
                  <motion.a
                    href="https://github.com/pemtseringgurung"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-700 dark:text-gray-300 hover:bg-[#e5e7eb] hover:text-black p-2 rounded-full transition-colors duration-200"
                  >
                    <FiGithub size={22} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/pemgurung/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-700 dark:text-gray-300 hover:bg-[#e5e7eb] hover:text-black p-2 rounded-full transition-colors duration-200"
                  >
                    <FiLinkedin size={22} />
                  </motion.a>
                  <motion.a
                    href="mailto:pemgurung541@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-700 dark:text-gray-300 hover:bg-[#e5e7eb] hover:text-black p-2 rounded-full transition-colors duration-200"
                  >
                    <FiMail size={22} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 relative">
                <div className="absolute inset-0 border-2 border-black dark:border-white">
                  <div className="w-full h-full bg-gray-100 dark:bg-gray-900 overflow-hidden">
                    <img 
                      src={heroImage} 
                      alt="Hero" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;