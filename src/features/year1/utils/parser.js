/**
 * Year 1 Specific OCR Parser
 */

const KEYWORDS = {
  practEval: ['practical evaluation', 'practical eval', 'pract eval'],
  attendance: ['attendance'],
  mst1: ['mst-1', 'mst 1', 'mst1', 'mid semester 1'],
  mst2: ['mst-2', 'mst 2', 'mst2', 'mid semester 2'],
  practMidTerm: ['practical mid term', 'pract mid term', 'practical mst'],
  practMst: ['practical mst', 'pract mst'],
  practAss1: ['practical assessment 1', 'pract ass 1', 'practical ass 1'],
  practAss2: ['practical assessment 2', 'pract ass 2', 'practical ass 2'],
  practAss3: ['practical assessment 3', 'pract ass 3', 'practical ass 3', 'project'],
  courseProject: ['case study', 'course project'],
  surpriseTest: ['surprise test', 'quiz', 'st'],
  assignment: ['assignment'],
  endTermTheory: ['end term theory', 'ett', 'external theory', 'end-term theory'],
  externalTheory: ['external theory', 'end term theory', 'ett'],
  externalViva: ['external viva', 'viva voce', 'viva-voce']
};

const extractNumbers = (line) => {
  const regex = /\b\d+(\.\d+)?\b/g;
  const matches = line.match(regex);
  return matches ? matches.map(Number) : [];
};

export const parseRawText = (rawText) => {
  const lines = rawText.toLowerCase().split('\n');
  const extractedData = {};

  lines.forEach(line => {
    for (const [key, aliases] of Object.entries(KEYWORDS)) {
      if (aliases.some(alias => line.includes(alias))) {
        const numbers = extractNumbers(line);
        if (numbers.length > 0) {
          if (!extractedData[key]) {
            extractedData[key] = {
              rawNumbers: numbers,
              matchedText: line,
              confidence: 'medium'
            };
          }
        }
      }
    }
  });

  return extractedData;
};
