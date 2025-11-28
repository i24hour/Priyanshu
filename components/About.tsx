'use client';

import { motion } from 'framer-motion';
import { Palette, Lightbulb, Zap, Users } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting visually stunning interfaces with attention to detail and user-centric approach.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge solutions and forward-thinking design strategies.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Building fast, efficient, and scalable applications that deliver exceptional user experiences.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working seamlessly with teams to bring ideas to life and exceed expectations.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate product designer dedicated to creating exceptional digital experiences
            that blend aesthetics with functionality.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-6 text-center group hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-4"
              >
                <skill.icon size={32} className="text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all">
                {skill.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gradient">
                About Me
              </h3>
              <p className="text-gray-300 mb-4">
                I'm Priyanshu, a final year student at IIT Roorkee with a passion for product 
                design and management, and a one-side lover of automation. With 1+ years of 
                experience in product design, I've worked across startups and established companies, 
                combining creativity with data-driven thinking to build products that matter.
              </p>
              <p className="text-gray-300 mb-4">
                My approach combines user research, creative thinking, and technical expertise
                to deliver solutions that not only look great but also perform exceptionally.
              </p>
              <p className="text-gray-300">
                From AI-powered systems to educational platforms, I've worked on diverse
                projects that have impacted thousands of users worldwide.
              </p>
            </div>

            <div className="space-y-4">
              {/* Experience Stats */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-dark rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-gradient mb-2">1+</div>
                <div className="text-gray-300">Years of Experience</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-dark rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-gradient mb-2">5+</div>
                <div className="text-gray-300">Major Projects</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-dark rounded-2xl p-6"
              >
                <div className="text-4xl font-bold text-gradient mb-2">IIT</div>
                <div className="text-gray-300">Roorkee Student</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
