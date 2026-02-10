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
      description: "my team's main project was to architect and deploy an end-to-end ai automation platform. we built the entire system, starting with a scalable model context protocol (mcp) server backend on aws eks using fastapi, docker, and kubernetes. we then built the intelligent client that consumed this backend, using a large language model (llm) to dynamically execute workflows. this system was a major success and automated 95% of ai agent tasks. separately, we focused on data retrieval efficiency. we engineered an agentic ai co-pilot using python and llamaindex to translate natural language into sql, which cut client data retrieval time by 25%. we pushed this further by designing a delegated, multi-agent workflow that optimized the sql logic itself, accelerating query execution by another 30%.",
      skills: ["python", "fastapi", "docker", "kubernetes", "large language models (llm)", "llamaindex", "multi-agent systems", "agentic co-pilot", "model context protocol (mcp)", "natural language processing", "database query optimization"],
    },

    {
      title: "digital archive research intern",
      company: "The College of Wooster",
      period: "oct 2023 - sep 2024",
      description: "in my role as digital archive research intern, i led the full-stack development for the anglophone chile archive project. my primary focus was on re-architecting the site for modern performance and adding new, high-value user features. on the backend, i led the migration to a react and django rest framework architecture, which was a major success that cut api response times by 40%. i also designed and built an automated email notification system from scratch using django, celery, and redis. this new system delivered over 500 personalized notifications monthly and increased user engagement by 30%. on the frontend, i implemented over 20 specific optimizations using react and css, which directly reduced page load time by 15% and cut mobile bounce rates by 20%.",
      skills: ["django", "react.js", "postgresql", "bootstrap", "css", "celery", "redis", "django rest framework (drf)", "smtp"]
    },
    {
      title: "mathematics and computational science research intern",
      company: " The College of Wooster",
      period: "jan 2024 - may 2024",
      description: "my work as a research intern involved applying machine learning to accelerate and improve scientific analysis. my first step was to build a robust data pipeline, where i automated cleaning and integration workflows using pandas, slashing data preparation time by 40%. i then engineered the full pipeline with scikit-learn and matplotlib, which boosted bacterial analysis accuracy by 15%. with this efficient data pipeline in place, i developed tensorflow deep learning models that accelerated experimental analysis by 20% by improving pattern identification accuracy by 12% across thousands of samples. i also built predictive agent-based simulations using mesa, pytorch, and mlflow, which increased the predictive accuracy of experimental outcomes by 10%.",
      skills: ["tensorflow", "scipy", "scikit-learn", "matplotlib", "seaborn", "sqlite", "jupyter notebooks", "mesa", "pytorch", "mlflow", "pandas"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[color:var(--background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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