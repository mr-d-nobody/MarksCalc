import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InputField from '../../../components/InputField';
import ResultPanel from '../../../components/ResultPanel';
import { calculatePractical } from '../utils/practicalCalc';

const PracticalCalculator = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = useCallback((key, value) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  const [calculatedResults, setCalculatedResults] = useState(null);

  const handleCalculate = () => {
    setCalculatedResults(calculatePractical(inputs));
  };

  const results = calculatedResults || {
    internalTotal: '--',
    externalScaled: '--',
    externalTotal: '--',
    totalWeighted: '--',
    totalMaxWeight: '--',
    finalOutOf70: '--',
    finalScore: '--',
    percentage: '--'
  };

  const reset = useCallback(() => {
    setInputs({});
    setCalculatedResults(null);
  }, []);

  const internalFields = [
    { label: 'Practical Assessment 1', key: 'practAss1', max: 30, weight: 15 },
    { label: 'Practical Assessment 2', key: 'practAss2', max: 30, weight: 15 },
    { label: 'Practical Assessment 3 / Project', key: 'practAss3', max: 30, weight: 15 },
    { label: 'Practical MST', key: 'practMst', max: 30, weight: 15 },
  ];

  const resultData = [
    { label: 'Internal Marks (out of 60)', value: `${results.internalTotal || results.totalWeighted || '--'}` },
    { label: 'External Marks (out of 40)', value: `${results.externalTotal || '--'}` },
    { label: 'Final Score (out of 100)', value: `${results.finalScore || results.finalOutOf70 || '--'}`, highlight: true },
    { label: 'Percentage', value: `${results.percentage || '--'}%` },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      <div className="lg:col-span-2 glass-panel p-8 rounded-3xl">
        <h3 className="text-xl font-semibold text-white mb-6 text-[var(--color-primary)]">Internal Marks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-8">
          {internalFields.map(f => (
            <InputField
              key={f.key}
              label={f.label}
              max={f.max}
              value={inputs[f.key] ?? ''}
              onChange={(val) => handleInputChange(f.key, val)}
            />
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white mb-6 text-[var(--color-secondary)] border-t border-white/10 pt-6">External Marks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          <InputField
            label="External Viva / Voce"
            max={40}
            value={inputs['externalViva'] ?? ''}
            onChange={(val) => handleInputChange('externalViva', val)}
          />
        </div>
        <button
          onClick={handleCalculate}
          disabled={!Object.values(inputs).some(v => v !== '')}
          className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 py-4 rounded-2xl font-bold text-lg tracking-wide disabled:from-white/5 disabled:to-white/5 disabled:text-white/30 disabled:border disabled:border-white/10 disabled:cursor-not-allowed disabled:shadow-none text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
        >
          Calculate Result
        </button>
      </div>
      <div className="lg:col-span-1">
        <ResultPanel title="2029 Passout Practical" results={resultData} onReset={reset} />
      </div>
    </motion.div>
  );
};

export default PracticalCalculator;
