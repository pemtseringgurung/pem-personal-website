import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import posterImage from "../images/amre-poster.png";
import juniorIsImage from "../images/junioris.png";

const Research = () => {
  const researchItems = [
    {
      title: "autonomous agents",
      description: "research conducted in collaboration with amre and schneider electric.",
      image: posterImage,
      link: "https://wooster.edu/2025/11/17/amre-team-schneider-electric-autonomous-agents/",
      linkLabel: "view poster"
    },
    {
      title: "rate lowry!: implementing and evaluating database optimization in a full-stack web application",
      description: "junior independent study research thesis.",
      image: juniorIsImage,
      link: "https://drive.google.com/file/d/1VwK8vpWgJOZn-EPMgbN_-yW-h0ct5qgZ/view?usp=sharing",
      linkLabel: "view paper"
    }
  ];

  return (
    <section id="research" className="py-24 bg-[color:var(--background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="section-title text-[color:var(--text)]">research</h2>
          <p className="text-[color:var(--text-light)] max-w-2xl">
            academic research and industrial collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {researchItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[color:var(--background-alt)] overflow-hidden flex flex-row items-center p-6 gap-6"
            >
              <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>


                <div className="flex">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[color:var(--text)] text-[color:var(--background)] text-xs font-medium rounded-none hover:opacity-90 transition-opacity"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={12} />
                    {item.linkLabel}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
