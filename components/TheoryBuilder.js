import { useMemo, useState } from 'react';

const buckets = {
  theory: ['Critical Pedagogy', 'Rhetoric', 'Media Ecology'],
  psyche: ['Archetypes', 'Shadow Work', 'Individuation'],
  ai: ['In-Context Learning', 'Emergence', 'Alignment'],
};

export default function TheoryBuilder() {
  const [picked, setPicked] = useState({ theory: null, psyche: null, ai: null });

  const formula = useMemo(() => {
    const { theory, psyche, ai } = picked;
    if (!theory || !psyche || !ai) return 'Select one from each column to synthesize a framework.';
    return `${theory} × ${psyche} → ${ai}`;
  }, [picked]);

  const Column = ({ label, options, keyName }) => (
    <div className="flex-1">
      <h4 className="font-semibold mb-3">{label}</h4>
      <div className="flex flex-col gap-2">
        {options.map(op => (
          <button
            key={op}
            onClick={() => setPicked(p => ({ ...p, [keyName]: p[keyName] === op ? null : op }))}
            className={`px-3 py-2 rounded border text-sm text-left ${
              picked[keyName] === op ? 'bg-blue-600 text-white border-blue-700' : 'bg-white hover:bg-gray-50'
            }`}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="md:flex gap-6">
        <Column label="Critical Theory" options={buckets.theory} keyName="theory" />
        <Column label="Depth Psychology" options={buckets.psyche} keyName="psyche" />
        <Column label="AI Emergence" options={buckets.ai} keyName="ai" />
      </div>

      <div className="border rounded-lg p-4 bg-white">
        <p className="font-medium">{formula}</p>
        <p className="mt-2 text-sm text-gray-600">
          Use the builder to mix lenses. The resulting statement is a starting point for your argument,
          not the end—export this into your writing workflow and refine with examples.
        </p>
      </div>

      {/* tiny visual */}
      <svg viewBox="0 0 500 140" className="w-full bg-gray-50 rounded">
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#1d4ed8" />
          </marker>
        </defs>
        <g>
          <circle cx="80" cy="70" r="22" fill="#dbeafe" stroke="#1d4ed8" />
          <text x="80" y="74" textAnchor="middle" fontSize="10">Theory</text>

          <circle cx="250" cy="70" r="22" fill="#e0e7ff" stroke="#3730a3" />
          <text x="250" y="74" textAnchor="middle" fontSize="10">Psyche</text>

          <circle cx="420" cy="70" r="22" fill="#dcfce7" stroke="#16a34a" />
          <text x="420" y="74" textAnchor="middle" fontSize="10">AI</text>

          <line x1="102" y1="70" x2="228" y2="70" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="272" y1="70" x2="398" y2="70" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrow)" />
        </g>
      </svg>
    </div>
  );
}
