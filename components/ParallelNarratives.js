import { useRef } from 'react';

export default function ParallelNarratives() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const syncing = useRef(false);

  const sync = (from, to) => {
    if (syncing.current) return;
    syncing.current = true;
    const a = from.current;
    const b = to.current;
    const ratio = a.scrollTop / (a.scrollHeight - a.clientHeight || 1);
    b.scrollTop = ratio * (b.scrollHeight - b.clientHeight);
    // allow a tick so we don’t loop forever
    requestAnimationFrame(() => { syncing.current = false; });
  };

  const block = (title, paras) => (
    <div className="space-y-4">
      <h3 className="font-semibold">{title}</h3>
      {paras.map((p,i) => <p key={i} className="text-sm leading-relaxed text-gray-700">{p}</p>)}
    </div>
  );

  const human = [
    "Prewrite → draft → revise. Builds rhetorical awareness and metacognitive control.",
    "Leans on genre knowledge and audience modeling.",
    "Ethical checks are deliberative—slow, reflective, community-bound."
  ];
  const ai = [
    "Token-by-token generation with emergent planning as context grows.",
    "Style transfers via in-context learning; genre emerges by example.",
    "Ethical checks are procedural—fast, rule-bound, brittle at edges."
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Human Literacy</h2>
        <div
          ref={leftRef}
          onScroll={() => sync(leftRef, rightRef)}
          className="h-[60vh] overflow-y-auto pr-2 space-y-6"
        >
          {Array.from({length: 8}).map((_,i)=>(
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
              {block(`Stage ${i+1}`, human)}
            </div>
          ))}
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">AI Literacy</h2>
        <div
          ref={rightRef}
          onScroll={() => sync(rightRef, leftRef)}
          className="h-[60vh] overflow-y-auto pr-2 space-y-6"
        >
          {Array.from({length: 8}).map((_,i)=>(
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
              {block(`Phase ${i+1}`, ai)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
