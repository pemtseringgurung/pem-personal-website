import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import heroImage from '../images/pem.png'; // Adjust the path as needed

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">
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
              <h2 className="font-mono text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-3">
                HELLO! MY NAME IS
              </h2>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                <span className="block mb-2"> <span className="text-gradient">PEM TSERING GURUNG</span></span>
                <span className="block text-4xl sm:text-5xl font-light text-gray-700 dark:text-gray-300">
                  Developer & Designer
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg"
              >
                I am currently a junior at the College of Wooster majoring in Computer Science. I am an aspiring software engineer and I am very passionate about building full-stack applications!
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a 
                href="#projects" 
                className="px-8 py-3 rounded-none bg-black text-white dark:bg-white dark:text-black font-medium tracking-wider hover-lift"
              >
                VIEW WORK
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-12 flex space-x-6"
            >
              <motion.a
                href="https://github.com/pemtseringgurung"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                <FiGithub size={22} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pemgurung/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                <FiLinkedin size={22} />
              </motion.a>
              <motion.a
                href="mailto:pemgurung541@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              >
                <FiMail size={22} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
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