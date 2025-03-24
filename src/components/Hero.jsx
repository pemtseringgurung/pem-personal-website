import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import heroImage from '../images/pem.png'; 

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
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

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block mb-1"> <span className="text-gradient">PEM TSERING GURUNG</span></span>
                <span className="block text-3xl sm:text-4xl font-light text-gray-700 dark:text-gray-300">
                  Software Engineer
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-lg"
              >
                <p className="mb-4">
                  I am a junior majoring in Computer Science at the College of Wooster.  
                  I specialize in building full-stack applications and creating beautiful and easily usable interfaces.
                </p>
                
                <h3 className="text-lg font-bold mb-3 text-black dark:text-white">My Tech Stack</h3>
                
                <div className="space-y-3">
                  <div className="p-3 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                    <h4 className="text-black dark:text-white font-medium mb-2 uppercase tracking-wider text-xs">Languages & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {['JavaScript', 'Python', 'Java', 'C++', 'Kotlin', 'React', 'Node.js', 'Next.js', 'TypeScript', 'Flask', 'Django'].map((tech, i) => (
                        <span key={i} className="px-2 py-1 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200 hover:border-black dark:hover:border-white transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                    <h4 className="text-black dark:text-white font-medium mb-2 uppercase tracking-wider text-xs">Libraries & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['PyTorch', 'TensorFlow', 'Git', 'GitHub', 'Jupyter', 'MongoDB', 'Google Colab', 'Miro', 'HTML', 'CSS'].map((tech, i) => (
                        <span key={i} className="px-2 py-1 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200 hover:border-black dark:hover:border-white transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                    <h4 className="text-black dark:text-white font-medium mb-2 uppercase tracking-wider text-xs">Cloud & Infrastructure</h4>
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'GCP', 'Firebase', 'Docker', 'Kubernetes'].map((tech, i) => (
                        <span key={i} className="px-2 py-1 border border-gray-200 dark:border-gray-700 text-xs text-gray-800 dark:text-gray-200 hover:border-black dark:hover:border-white transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Combined action buttons and social icons row */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <a 
                    href="#projects" 
                    className="px-6 py-2 rounded-none bg-black text-white dark:bg-white dark:text-black font-medium tracking-wider hover-lift inline-block"
                  >
                    VIEW WORK
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="flex space-x-5"
                >
                  <motion.a
                    href="https://github.com/pemtseringgurung"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/pemgurung/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <FiLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="mailto:pemgurung541@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <FiMail size={20} />
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
              <div className="w-56 h-56 sm:w-64 sm:h-64 relative">
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