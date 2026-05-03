import React from 'react';

const InputField = ({ label, value, onChange, max, weight }) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex justify-between mb-1">
        <label className="text-sm font-medium text-white/90">{label}</label>
        <span className="text-xs text-white/50">Max: {max} {weight ? `| Weight: ${weight}` : ''}</span>
      </div>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const val = e.target.value;
            if (val === '') {
              onChange('');
              return;
            }
            const num = parseFloat(val);
            if (!isNaN(num) && num >= 0 && num <= max) {
              // We pass the string value to allow typing decimals like "1."
              onChange(val);
            }
          }}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-300 placeholder-white/20"
          placeholder={`Enter marks (0-${max})`}
          min="0"
          max={max}
          step="any"
        />
      </div>
    </div>
  );
};

export default InputField;
