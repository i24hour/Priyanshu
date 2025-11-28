'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'AI Product Design & Analytics Intern',
    company: 'Scaler',
    duration: '10/2025 – 11/2025',
    description: 'Leading AI-driven product design initiatives and analytics',
    current: false,
  },
  {
    id: 2,
    title: 'Co-Founder & Product Lead',
    company: 'Mentors Mantra',
    duration: '05/2024 – 06/2024',
    description: 'Founded and led product strategy for a mentorship platform',
    current: false,
  },
  {
    id: 3,
    title: 'Program Intern',
    company: 'Mosaic Digital',
    duration: '07/2025 – 09/2025',
    description: 'Contributing to digital program initiatives',
    current: false,
  },
  {
    id: 4,
    title: 'AI Product Intern',
    company: 'Mentor Prep',
    duration: '05/2024 – 06/2024',
    description: 'Design test automation Bot',
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey in product design and management
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Water Flow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-30 hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="glass rounded-2xl p-6 relative group"
                  >
                    {/* Current Badge */}
                    {exp.current && (
                      <div className="absolute -top-3 -right-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-semibold text-white shadow-lg">
                          Current
                        </span>
                      </div>
                    )}

                    {/* Company Icon */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 mb-3 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300">{exp.description}</p>

                    {/* Water Ripple Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                    className="relative"
                  >
                    {/* Outer Ring */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                      {/* Inner Ring */}
                      <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center">
                        {/* Dot */}
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                      </div>
                    </div>

                    {/* Pulse Animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-500"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
