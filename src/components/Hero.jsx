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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-mono text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                hello! my name is
              </h2>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[color:var(--text)]">
                <span className="block mb-1">pem tsering</span>
                <span className="block mb-1">gurung</span>
                <span className="block text-lg sm:text-xl md:text-3xl font-light text-[color:var(--text-light)]">
  software engineer | full-stack & ai development
</span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-4 md:mt-6 text-sm sm:text-base text-[color:var(--text-light)] max-w-lg"
              >
                <p className="mb-5">
                  i am a senior at the college of wooster majoring in computer science. i am passionate about building intelligent ai agents and full-stack web applications that solve real-world problems. i enjoy combining the logic of backend systems with the creativity of user-focused design, and i am especially excited by the possibilities of autonomous systems powered by modern ai.
                </p>
                
                <div className="mb-4 md:mb-6">
                  <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-[color:var(--text)] inline-block relative">
                    tech stack
                    <span className="absolute w-12 h-0.5 bg-black bottom-[-6px] left-0"></span>
                  </h3>
                  
                  <div className="mt-4 md:mt-5 flex flex-wrap gap-2">
                    {['javascript', 'python', 'java', 'c++', 'kotlin', 'typescript', 'react', 'node.js', 'next.js', 'llamaindex', 'model context protocol (mcp)', 'flask', 'django', 'pytorch', 'tensorflow', 'git', 'github', 'jupyter', 'fastapi', 'mongodb','postgresql', 'html', 'css', 'aws(ec2, s3, eks)', 'gcp', 'firebase', 'docker', 'kubernetes'].map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] rounded-full bg-[color:var(--tag-bg)] text-[color:var(--tag-text)] hover:shadow-md transition-shadow duration-200 inline-block">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              <div className="mt-6 md:mt-8 flex flex-col gap-4 md:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Link 
                    to="/projects"
                    className="px-6 md:px-8 py-2.5 md:py-3 rounded-none bg-black text-white font-medium tracking-wider hover-lift inline-block w-fit text-sm md:text-base"
                  >
                    view work
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
            className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-96 md:h-96">
              <img 
                src={heroImage} 
                alt="pem tsering gurung" 
                className="w-full h-full object-cover rounded-sm" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;