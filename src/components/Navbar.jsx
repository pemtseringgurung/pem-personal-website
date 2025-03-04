import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'experience', 'projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm dark:bg-black/90' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className="dark:text-white text-black">PEM'S </span>
              <span className="text-gray-500 dark:text-gray-400">PORTFOLIO</span>
            </motion.div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Experience', id: 'experience' },
                { name: 'Projects', id: 'projects' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  whileHover={{ scale: 1.05 }}
                  className={`px-5 py-3 rounded-md text-sm tracking-widest relative overflow-hidden ${
                    activeSection === item.id 
                      ? 'font-bold text-black dark:text-white' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.span 
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className={`block px-3 py-2 rounded-md text-base ${
                  activeSection === item.id 
                    ? 'font-bold text-black dark:text-white' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;