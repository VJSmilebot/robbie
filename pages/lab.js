import Head from 'next/head';
import dynamic from 'next/dynamic';

// load D3 components client-side only
const D3PatternChart = dynamic(() => import('../components/D3PatternChart'), { ssr: false });

import ParallelNarratives from '../components/ParallelNarratives';
import EvidenceGallery from '../components/EvidenceGallery';
import TheoryBuilder from '../components/TheoryBuilder';
import AudioRhetoric from '../components/AudioRhetoric';

export default function Lab() {
  return (
    <>
      <Head>
        <title>Human x AI Literacy Lab</title>
        <meta name="description" content="Interactive exploration of human & AI literacy." />
      </Head>

      {/* page scaffold */}
      <div className="min-h-screen bg-white text-gray-900">
        {/* sticky top nav for anchors */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
          <ul className="max-w-6xl mx-auto flex gap-6 px-4 py-3 text-sm">
            <li><a href="#narratives" className="hover:text-blue-700">Parallel Narratives</a></li>
            <li><a href="#viz" className="hover:text-blue-700">Behavior Viz</a></li>
            <li><a href="#evidence" className="hover:text-blue-700">Evidence Gallery</a></li>
            <li><a href="#theory" className="hover:text-blue-700">Framework Builder</a></li>
            <li><a href="#audio" className="hover:text-blue-700">Audio</a></li>
          </ul>
        </nav>

        {/* scroll snap container */}
        <main className="snap-y snap-mandatory">
          <section id="narratives" className="snap-start min-h-[100svh] flex items-center">
            <div className="max-w-6xl mx-auto w-full px-4 py-16">
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Interactive Parallel Narratives
              </h1>
              <ParallelNarratives />
            </div>
          </section>

          <section id="viz" className="snap-start min-h-[100svh] bg-gray-50 flex items-center">
            <div className="max-w-6xl mx-auto w-full px-4 py-16">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Emergent Behaviors vs Conversation Length
              </h2>
              <p className="text-gray-600 mb-6">
                A quick exploratory chart (D3.js) showing how certain behaviors trend as conversations
                get longer and more complex. Replace the sample data with your real observations later.
              </p>
              <D3PatternChart />
            </div>
          </section>

          <section id="evidence" className="snap-start min-h-[100svh] flex items-center">
            <div className="max-w-6xl mx-auto w-full px-4 py-16">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Embedded Evidence Gallery
              </h2>
              <EvidenceGallery />
            </div>
          </section>

          <section id="theory" className="snap-start min-h-[100svh] bg-gray-50 flex items-center">
            <div className="max-w-6xl mx-auto w-full px-4 py-16">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Theoretical Framework Builder
              </h2>
              <TheoryBuilder />
            </div>
          </section>

          <section id="audio" className="snap-start min-h-[100svh] flex items-center">
            <div className="max-w-6xl mx-auto w-full px-4 py-16">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                Audio Elements: Rhetorical Analysis
              </h2>
              <AudioRhetoric />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
