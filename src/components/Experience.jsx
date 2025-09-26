import React from 'react';
import { motion } from 'framer-motion';
import cowImage from "../images/cow.png"
import seLogo from "../images/se.png"

const Experience = () => {
  const experiences = [
    {
      title: "software engineer intern",
      company: "Schneider Electric",
      period: "may 2025 - july 2025",
      description: "i engineered an agentic co-pilot using a large language model (llm) and llamaindex to translate natural language into database queries, which reduced client data retrieval time by 25%. i also designed a multi-agent architecture in python, where a central coordinator agent delegated tasks to specialized function agents (knowledge, metrics, invoice), improving query efficiency by 30%. additionally, i implemented and trained an intelligent mcp client that dynamically selects tools from the mcp server and passes the necessary parameters, achieving 95% task automation. further, i developed the central backend for all ai agent operations by building a multi-tool model context protocol (mcp) server with fastapi and containerized it using docker.",
      skills: ["python", "fastapi", "docker", "kubernetes", "large language models (llm)", "llamaindex", "multi-agent systems", "agentic co-pilot", "model context protocol (mcp)", "natural language processing", "database query optimization"],
    },

    {
      title: "digital archive research intern",
      company: "The College of Wooster",
      period: "oct 2023 - sep 2024",
      description: "i maintained and enhanced the full-stack website for the anglophone chile project using django, react.js, and postgresql, improving user experience by 20% through front-end optimizations. i developed an automated email notification system with django, celery, and redis, increasing user engagement by 30%. additionally, i streamlined the website's architecture with django rest framework, improving usability scores by 25% based on user feedback.",
      skills: ["django", "react.js", "postgresql", "bootstrap", "css", "celery", "redis", "django rest framework (drf)", "smtp"]
    },
    {
      title: "mathematics and computational science research intern",
      company: " The College of Wooster",
      period: "jan 2024 - may 2024",
      description: "i developed deep learning models with tensorflow and scipy, improving pattern identification by 12% and reducing analysis time by 20%. i built data pipelines with scikit-learn, matplotlib, and seaborn, increasing accuracy by 15% in bacterial resistance analysis. i also designed differential equation models, used sqlite and jupyter notebooks, and created agent-based models with pytorch and mlflow, boosting prediction accuracy by 10%.",
      skills: ["tensorflow", "scipy", "scikit-learn", "matplotlib", "seaborn", "sqlite", "jupyter notebooks", "mesa", "pytorch", "mlflow", "pandas"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[color:var(--background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title text-[color:var(--text)]">experience</h2>
          <p className="text-[color:var(--text-light)] max-w-2xl">
            my past professional experiences.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex items-center mb-2 md:mb-0">
                      <span className="text-xs md:text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase">
                        {exp.period}
                      </span>
                      <div className="ml-3 md:ml-4 w-10 h-10 md:w-12 md:h-12">
                        <img 
                          src={index === 0 ? seLogo : cowImage}
                          alt={`${exp.title} logo`}
                          className="w-full h-full object-cover rounded-sm" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-12 md:border-l border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg md:text-xl font-bold mb-1 text-[color:var(--text)]">{exp.title}</h3>
                  <h4 className="text-black mb-3 md:mb-4 inline-block relative">
                    {exp.company}
                    <span className="absolute w-full h-0.5 bg-black bottom-[-6px] left-0"></span>
                  </h4>
                  <p className="text-sm md:text-base text-[color:var(--text-light)] mb-3 md:mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-3 py-1 text-xs font-medium bg-[color:var(--tag-bg)] text-[color:var(--tag-text)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;