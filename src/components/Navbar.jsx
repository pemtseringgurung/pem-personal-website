import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiFileText } from 'react-icons/fi';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-transparent" 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
              animate={{ opacity: scrolled ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[color:var(--text)]">pem's </span>
              <span className="text-black">portfolio</span>
            </motion.div>
          </div>


          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {[
                { name: 'home', path: '/' },
                { name: 'experience', path: '/experience' },
                { name: 'projects', path: '/projects' },
                { name: 'resume', path: '/resume', icon: <FiFileText size={16} /> }
              ].map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }} className="inline-block">
                  <Link
                    to={item.path}
                    className={
                      `px-5 py-2 rounded-md text-sm tracking-widest relative overflow-hidden text-[color:var(--text-light)] hover:text-black font-medium nav-link flex items-center gap-1`
                    }
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </motion.div>
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
          className="md:hidden bg-[color:var(--background-alt)] border-t border-[color:var(--secondary)]"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: 'home', path: '/' },
              { name: 'experience', path: '/experience' },
              { name: 'projects', path: '/projects' },
              { name: 'resume', path: '/resume', icon: <FiFileText size={18} /> }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-base text-gray-600 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;