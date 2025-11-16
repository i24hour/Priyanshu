'use client';

import { motion } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Nothing Incubator Contest Finalist',
    description: 'Selected as 1 of 15 finalists from 10,000+ teams for innovative product concept, demonstrating product thinking and GTM strategy to industry leaders',
    icon: Award,
    stats: '1 of 15',
    highlight: 'from 10,000+ teams',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 water-gradient opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recognition and milestones in my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative glass rounded-3xl p-8 md:p-12 border-2 border-transparent group-hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon and Stats */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-lg shadow-cyan-500/50"
                      >
                        <achievement.icon size={32} className="text-white" />
                      </motion.div>

                      {/* Title */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gradient transition-all mb-2">
                          {achievement.title}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400">
                          <TrendingUp size={16} />
                          <span className="text-sm font-semibold">Top Achievement</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="glass-dark rounded-2xl p-4 text-center min-w-[140px]">
                      <div className="text-3xl font-bold text-gradient mb-1">
                        {achievement.stats}
                      </div>
                      <div className="text-sm text-gray-400">{achievement.highlight}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Highlight Tags */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="px-4 py-2 glass-dark rounded-full text-sm text-cyan-300 font-medium">
                      Product Thinking
                    </span>
                    <span className="px-4 py-2 glass-dark rounded-full text-sm text-blue-300 font-medium">
                      GTM Strategy
                    </span>
                    <span className="px-4 py-2 glass-dark rounded-full text-sm text-purple-300 font-medium">
                      Innovation
                    </span>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
