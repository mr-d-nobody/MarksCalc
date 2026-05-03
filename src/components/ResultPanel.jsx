import React from 'react';
import { motion } from 'framer-motion';

const ResultPanel = ({ title, results, onReset }) => {
  return (
    <div className="glass-panel p-6 rounded-2xl sticky top-24">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">{title} Results</h2>

      <div className="space-y-4 mb-8">
        {results.map((result, index) => (
          <div key={index} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
            <span className="text-[var(--color-text-main)] font-medium">{result.label}</span>
            <span className={`text-xl font-bold ${result.highlight && !result.value.includes('--') ? 'text-[var(--color-primary)] text-glow' : 'text-white'}`}>
              {result.value === '--%' ? '--' : result.value}
            </span>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onReset}
        className="w-full py-3 rounded-xl bg-red-500/20 text-red-400 font-semibold border border-red-500/30 hover:bg-red-500/30 transition-colors"
      >
        Reset Calculator
      </motion.button>
    </div>
  );
};

export default ResultPanel;
