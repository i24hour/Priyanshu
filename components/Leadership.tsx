'use client';

import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Award } from 'lucide-react';

const leadership = [
  {
    id: 1,
    role: 'Sponsorship Manager',
    organization: 'ArIES, IIT Roorkee',
    achievements: [
      {
        text: 'Led 10-member team delivering ₹5L+ partnerships with founders and CXOs (IdeaForge, CoinDCX)',
        icon: Users,
        metric: '₹5L+',
        label: 'Partnerships',
      },
      {
        text: 'Presented data-driven proposals to executives, securing buy-in through strategic positioning',
        icon: Target,
        metric: '100%',
        label: 'Success Rate',
      },
    ],
  },
  {
    id: 2,
    role: 'Senior Executive',
    organization: 'Cognizance, IIT Roorkee',
    achievements: [
      {
        text: 'Closed ₹2 lakh in deals through structured outreach to 1,000+ potential partners',
        icon: TrendingUp,
        metric: '₹2L',
        label: 'Deals Closed',
      },
      {
        text: 'Recruited and mentored 15 team members, standardizing research and outreach processes',
        icon: Award,
        metric: '15',
        label: 'Team Members',
      },
    ],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Driving impact through strategic leadership and team collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-8 h-full hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all mb-2">
                      {item.role}
                    </h3>
                    <p className="text-cyan-400 font-medium">{item.organization}</p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-6">
                    {item.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + achIndex * 0.1, duration: 0.5 }}
                        className="glass-dark rounded-2xl p-5"
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex-shrink-0"
                          >
                            <achievement.icon size={24} className="text-white" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1">
                            <p className="text-gray-300 mb-3">{achievement.text}</p>

                            {/* Metric Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                              <span className="text-2xl font-bold text-gradient">
                                {achievement.metric}
                              </span>
                              <span className="text-sm text-gray-400">{achievement.label}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Impact Indicator */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Impact Level</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + i * 0.05 }}
                            className="w-2 h-8 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                            style={{ opacity: 1 - i * 0.15 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '₹7L+', label: 'Total Partnerships' },
            { value: '25+', label: 'Team Members Led' },
            { value: '1000+', label: 'Outreach Contacts' },
            { value: '2', label: 'Leadership Roles' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-dark rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
