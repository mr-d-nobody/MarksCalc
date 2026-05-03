import React from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10 bg-white/5 p-2 rounded-2xl border border-white/10 w-fit mx-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 z-10 ${
              isActive ? 'text-white' : 'text-[var(--color-text-main)] hover:text-white'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/50 rounded-xl -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
