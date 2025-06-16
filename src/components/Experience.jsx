import React from 'react';
import { motion } from 'framer-motion';
import cowImage from "../images/cow.png"
import seLogo from "../images/se.png"

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Schneider Electric",
      period: "May 2025 - Present",
      description: "I engineered an agentic co-pilot using a Large Language Model (LLM) and LlamaIndex to translate natural language into database queries, which reduced client data retrieval time by 25%. I also designed a multi-agent architecture in Python, where a central Coordinator Agent delegated tasks to specialized Function Agents (Knowledge, Metrics, Invoice), improving query efficiency by 30%. Additionally, I implemented and trained an intelligent MCP client that dynamically selects tools from the MCP server and passes the necessary parameters, achieving 95% task automation. Further, I developed the central backend for all AI agent operations by building a multi-tool Model Context Protocol (MCP) server with FastAPI and containerized it using Docker.",
      skills: ["Python", "FastAPI", "Docker", "Kubernetes", "Large Language Models (LLM)", "LlamaIndex", "Multi-Agent Systems", "Agentic Co-pilot", "Model Context Protocol (MCP)", "Natural Language Processing", "Database Query Optimization"],
    },

    {
      title: "Digital Archive Research Assistant",
      company: "The College of Wooster",
      period: "Oct 2023 - Sep 2024",
      description: "I maintained and enhanced the full-stack website for the Anglophone Chile project using Django, React.js, and PostgreSQL, improving user experience by 20% through front-end optimizations. I developed an automated email notification system with Django, Celery, and Redis, increasing user engagement by 30%. Additionally, I streamlined the website’s architecture with Django REST Framework, improving usability scores by 25% based on user feedback.",
      skills: ["Django", "React.js", "PostgreSQL", "Bootstrap", "CSS", "Celery", "Redis", "Django REST Framework (DRF)", "SMTP"]
    },
    {
      title: "Mathematics and Computational Science Research Assistant",
      company: " The College of Wooster",
      period: "Jan 2024 - May 2024",
      description: "I developed deep learning models with TensorFlow and SciPy, improving pattern identification by 12% and reducing analysis time by 20%. I built data pipelines with Scikit-Learn, Matplotlib, and Seaborn, increasing accuracy by 15% in bacterial resistance analysis. I also designed differential equation models, used SQLite and Jupyter Notebooks, and created agent-based models with PyTorch and MLflow, boosting prediction accuracy by 10%.",
      skills: ["TensorFlow", "SciPy", "Scikit-Learn", "Matplotlib", "Seaborn", "SQLite", "Jupyter Notebooks", "Mesa", "PyTorch", "MLflow", "Pandas"]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            My past professional experiences.
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
                  <div className="flex items-center">
                    <span className="text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase">
                      {exp.period}
                    </span>
                    <div className="ml-4 w-12 h-12">
                      <img 
                        src={index === 0 ? seLogo : cowImage} // Path to your cow image
                        alt={`${exp.title} logo`} // Use a descriptive alt text
                        className="w-full h-full object-cover rounded-sm" 
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-12 border-l border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <h4 className="text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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