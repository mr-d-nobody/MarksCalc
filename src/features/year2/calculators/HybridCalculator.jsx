import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import InputField from '../../../components/InputField';
import ResultPanel from '../../../components/ResultPanel';
import { calculateHybrid } from '../utils/hybridCalc';

const HybridCalculator = () => {
  const [inputs, setInputs] = useState({});

  const handleInputChange = useCallback((key, value) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  const [calculatedResults, setCalculatedResults] = useState(null);

  const handleCalculate = () => {
    setCalculatedResults(calculateHybrid(inputs));
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

  const fields = [
    { label: 'Attendance', key: 'attendance', max: 2, weight: 2 },
    { label: 'MST-1', key: 'mst1', max: 20, weight: 5 },
    { label: 'MST-2', key: 'mst2', max: 20, weight: 5 },
    { label: 'Experiment 1', key: 'exp1', max: 30, weight: 5 },
    { label: 'Experiment 2', key: 'exp2', max: 30, weight: 5 },
    { label: 'Experiment 3', key: 'exp3', max: 30, weight: 5 },
    { label: 'Experiment 4', key: 'exp4', max: 30, weight: 5 },
    { label: 'Class Performance', key: 'classPerf', max: 10, weight: 5 },
    { label: 'End Term Practical', key: 'endTermPractical', max: 40, weight: 20 },
    { label: 'Assignment / PBL', key: 'assignment', max: 10, weight: 2 },
    { label: 'Quiz', key: 'quiz', max: 4, weight: 2 },
    { label: 'Surprise Test', key: 'surpriseTest', max: 12, weight: 2 },
    { label: 'End Term Theory', key: 'endTermTheory', max: 60, weight: 30 },
    { label: 'Course Project', key: 'courseProject', max: 5, weight: 2 },
    { label: 'Industry Assessment', key: 'industryAssessment', max: 10, weight: 5 },
  ];

  const resultData = [
    { label: 'Internal Marks (out of 70)', value: `${results.internalTotal || results.totalWeighted || '--'}` },
    { label: 'External Marks (out of 30)', value: `${results.externalScaled || '--'}` },
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
        <h3 className="text-xl font-semibold text-white mb-6">Enter Marks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {fields.map(f => (
            <InputField
              key={f.key}
              label={f.label}
              max={f.max}
              value={inputs[f.key] ?? ''}
              onChange={(val) => handleInputChange(f.key, val)}
            />
          ))}
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
        <ResultPanel title="Hybrid" results={resultData} onReset={reset} />
      </div>
    </motion.div>
  );
};

export default HybridCalculator;
