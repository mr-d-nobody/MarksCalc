import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tabs from '../components/Tabs';
import { HybridCalculator, TheoryCalculator, PracticalCalculator, AptitudeCalculator } from '../features/year3';

const Year3 = () => {
  const [activeTab, setActiveTab] = useState('hybrid');

  const tabs = [
    { id: 'hybrid', label: 'Hybrid' },
    { id: 'theory', label: 'Theory' },
    { id: 'practical', label: 'Practical' },
    { id: 'aptitude', label: 'Aptitude' },
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-4 text-glow">2027 Passout Calculator</h1>
        <p className="text-[var(--color-text-main)] max-w-2xl mx-auto">
          Calculate your marks for 2027 Passout Hybrid, Theory, Practical, or Aptitude subjects.
        </p>
      </div>

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === 'hybrid' && <HybridCalculator key="hybrid" />}
          {activeTab === 'theory' && <TheoryCalculator key="theory" />}
          {activeTab === 'practical' && <PracticalCalculator key="practical" />}
          {activeTab === 'aptitude' && <AptitudeCalculator key="aptitude" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Year3;
