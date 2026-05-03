import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl glass-panel p-10 md:p-16 rounded-3xl text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-[var(--color-primary)]/20 blur-[80px] pointer-events-none rounded-full" />
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10 text-glow">
          About
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed relative z-10">
          <p>
            I am <span className="text-[var(--color-primary)] font-semibold text-glow">MrDnobody</span>, an independent student creator from Chandigarh University who started helping students in 2023 by sharing structured notes, curated playlists, and practical academic resources.
          </p>
          <p>
            This calculator is an extension of my work — built to simplify internal marks calculation and remove confusion around university assessment systems.
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.instagram.com/mrdnobody"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300 relative z-10"
        >
          Follow on Instagram
        </motion.a>
      </motion.div>
    </div>
  );
};

export default About;
