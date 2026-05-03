import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Zap, BarChart3 } from 'lucide-react';

const SGPAPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] relative z-10 py-12">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-blue-500/8 blur-[120px] pointer-events-none rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
          <Zap className="w-4 h-4" />
          <span>Under Development</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-glow">
          SGPA Calculator
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Advanced SGPA calculation system is under development
        </p>
      </motion.div>

      {/* Center Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative group max-w-lg w-full mx-4"
      >
        {/* Glow effect behind card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

        <div className="relative glass-panel p-12 rounded-3xl border border-white/10 flex flex-col items-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mb-8">
            <BarChart3 className="w-10 h-10 text-blue-400" />
          </div>

          {/* Status */}
          <h2 className="text-3xl font-bold text-white mb-3">🚧 Coming Soon</h2>
          <p className="text-white/40 text-center mb-10 max-w-sm leading-relaxed">
            We are building a precise SGPA calculator for CU students. Calculate your semester GPA with accuracy.
          </p>

          {/* Features Preview */}
          <div className="w-full grid grid-cols-2 gap-3 mb-10">
            {[
              { label: 'Credit Weights', icon: '⚖️' },
              { label: 'Grade Mapping', icon: '📊' },
              { label: 'Multi-Semester', icon: '📅' },
              { label: 'Export Results', icon: '📥' },
            ].map((feat) => (
              <div
                key={feat.label}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/3 border border-white/5 text-white/30"
              >
                <span className="text-base">{feat.icon}</span>
                <span className="text-xs font-medium">{feat.label}</span>
              </div>
            ))}
          </div>

          {/* Disabled Button */}
          <button
            disabled
            className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white/30 cursor-not-allowed font-medium text-lg transition-all"
          >
            <Lock className="w-5 h-5" />
            Start Calculating
          </button>

          {/* Progress Bar */}
          <div className="w-full mt-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Development Progress</span>
              <span className="text-xs font-bold text-white">75%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SGPAPage;
