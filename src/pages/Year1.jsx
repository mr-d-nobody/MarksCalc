import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tabs from '../components/Tabs';
import { HybridCalculator, TheoryCalculator, PracticalCalculator } from '../features/year1';

const Year1 = () => {
  const [activeTab, setActiveTab] = useState('hybrid');

  const tabs = [
    { id: 'hybrid', label: 'Hybrid' },
    { id: 'theory', label: 'Theory' },
    { id: 'practical', label: 'Practical' },
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-4 text-glow">2029 Passout Calculator</h1>
        <p className="text-[var(--color-text-main)] max-w-2xl mx-auto">
          Calculate your weighted marks for 2029 Passout Hybrid, Theory, or Practical subjects.
        </p>
      </div>

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'hybrid' && <HybridCalculator key="hybrid" />}
          {activeTab === 'theory' && <TheoryCalculator key="theory" />}
          {activeTab === 'practical' && <PracticalCalculator key="practical" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Year1;
