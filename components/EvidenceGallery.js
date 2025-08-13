import { useState } from 'react';

const items = [
  {
    id: 1,
    title: 'Finding A: Style Transfer Threshold',
    summary: 'Clear shift around 10–15 turns where style becomes stable.',
    detail: 'Triangulated via prompt traces, perplexity dips, and annotator agreements across 120 dialogues.',
  },
  {
    id: 2,
    title: 'Finding B: Ethical Drift',
    summary: 'Alignment scores plateau as novelty keeps rising.',
    detail: 'Observed across 3 models; mitigated by reflective prompts every ~8 turns.',
  },
  {
    id: 3,
    title: 'Finding C: Human Regrounding',
    summary: 'Audience modeling restores clarity after long runs.',
    detail: 'Adding a reader persona re-aligns outputs without killing creativity.',
  },
];

export default function EvidenceGallery() {
  const [open, setOpen] = useState(null);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map(card => (
        <article key={card.id} className="border rounded-lg p-4 shadow-sm">
          <h3 className="font-semibold">{card.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{card.summary}</p>
          <button
            onClick={() => setOpen(open === card.id ? null : card.id)}
            className="mt-4 text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            {open === card.id ? 'Hide analysis' : 'Show analysis'}
          </button>
          {open === card.id && (
            <div className="mt-3 text-sm text-gray-800 bg-gray-50 rounded p-3">
              {card.detail}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
