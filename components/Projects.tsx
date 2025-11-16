'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Swiggy with Waiter Bot',
    description: 'An AI-powered restaurant service automation system that streamlines order management and enhances customer experience with intelligent bot interactions.',
    tags: ['AI/ML', 'Automation', 'React', 'Node.js'],
    gradient: 'from-cyan-500 to-blue-500',
    github: 'https://github.com/i24hour/swiggyAI-order-food-with-Voice-or-prompt',
    live: 'https://swiggy-ai.vercel.app/',
  },
  {
    id: 2,
    title: 'Mentors Mantra',
    description: 'A comprehensive mentorship platform connecting learners with industry experts, featuring real-time communication and progress tracking.',
    tags: ['EdTech', 'React', 'WebRTC', 'Firebase'],
    gradient: 'from-blue-500 to-purple-500',
    github: 'https://github.com/i24hour/mentors--mantra',
    live: 'https://www.mentorsmantra.co.in/',
  },
  {
    id: 3,
    title: 'ITC Inventory Management',
    description: 'A robust inventory management system designed for ITC, optimizing stock control, tracking, and reporting with advanced analytics.',
    tags: ['Enterprise', 'Dashboard', 'Analytics', 'TypeScript'],
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/i24hour/ITC-2',
    live: 'https://itc-warehouse-app-2025-c8hgg5deeagae5dj.centralindia-01.azurewebsites.net',
  },
  {
    id: 4,
    title: 'Infinitest',
    description: 'A comprehensive testing platform for students with adaptive learning algorithms, real-time feedback, and detailed performance analytics.',
    tags: ['EdTech', 'Testing', 'Next.js', 'PostgreSQL'],
    gradient: 'from-pink-500 to-rose-500',
    github: 'https://github.com/i24hour/infinitest',
    live: 'https://infinitest.onrender.com',
  },
  {
    id: 5,
    title: 'Stock Analysis Bot',
    description: 'A sophisticated data analysis bot providing real-time stock market insights, predictive analytics, and automated trading recommendations.',
    tags: ['FinTech', 'AI/ML', 'Python', 'Data Science'],
    gradient: 'from-rose-500 to-orange-500',
    github: 'https://github.com/Priyanshu85953/iStock_subpart_1',
    live: 'https://istock-analysis-dashboard.vercel.app/',
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 water-gradient opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative solutions crafted with precision and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Project Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      0{project.id}
                    </span>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 glass-dark rounded-lg hover:bg-white/20 transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 glass-dark rounded-lg hover:bg-white/20 transition-colors"
                        aria-label="View Live Site"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                        className="px-3 py-1 text-sm glass-dark rounded-full text-cyan-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Ripple Effect on Hover */}
                {hoveredId === project.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      background: `radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)`,
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Projects
            <ExternalLink size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
