'use client';

import { motion } from 'framer-motion';

export default function WaterDroplets() {
  const droplets = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 4 + Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {droplets.map((droplet) => (
        <motion.div
          key={droplet.id}
          className="absolute rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-sm"
          style={{
            left: `${droplet.x}%`,
            width: `${droplet.size}px`,
            height: `${droplet.size}px`,
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: droplet.duration,
            delay: droplet.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
