const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src/features', function(filePath) {
  if (filePath.endsWith('Calculator.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Replace useMemo with state
    content = content.replace(
      /const results = useMemo\(\(\) => calculate(\w+)\(inputs\), \[inputs\]\);/g,
      `const [calculatedResults, setCalculatedResults] = useState(null);\n\n  const handleCalculate = () => {\n    setCalculatedResults(calculate$1(inputs));\n  };\n\n  const results = calculatedResults || {\n    internalTotal: '--',\n    externalScaled: '--',\n    externalTotal: '--',\n    totalWeighted: '--',\n    totalMaxWeight: '--',\n    finalOutOf70: '--',\n    finalScore: '--',\n    percentage: '--'\n  };`
    );

    // 2. Update reset
    content = content.replace(
      /const reset = useCallback\(\(\) => setInputs\(\{\}\), \[\]\);/g,
      `const reset = useCallback(() => {\n    setInputs({});\n    setCalculatedResults(null);\n  }, []);`
    );

    // 3. Add the button after the last div before </div>\n      <div className="lg:col-span-1">
    if (!content.includes('handleCalculate')) {
       console.log('Skipping or handleCalculate already exists in', filePath);
    }

    // Replace the closing div of the first column to inject the button
    content = content.replace(
      /<\/div>\s*<\/div>\s*<div className="lg:col-span-1">/g,
      `</div>\n        <button\n          onClick={handleCalculate}\n          disabled={!Object.values(inputs).some(v => v !== '')}\n          className="w-full mt-6 bg-[var(--color-primary)] hover:opacity-90 transition-all py-3 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-lg"\n        >\n          Calculate\n        </button>\n      </div>\n      <div className="lg:col-span-1">`
    );
    
    fs.writeFileSync(filePath, content);
    console.log('Processed', filePath);
  }
});
