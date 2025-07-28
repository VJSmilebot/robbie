export default function CV() {
  return (
    <section id="cv" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">CV / Experience</h2>
        <ul className="text-lg text-gray-700 leading-relaxed space-y-4">
          <li><strong>English Instructor</strong> — Lanier Technical College</li>
          <li><strong>Advanced English Instructor</strong> — Saudi Aramco</li>
          <li><strong>Teaching Fellow</strong> — Georgia State University</li>
          <li><strong>Adjunct Professor</strong> — Reinhardt University</li>
          <li><strong>Language Tutor</strong> — Varsity Tutors</li>
          <li><strong>Research Assistant</strong> — GSU English Department</li>
        </ul>
        <div className="mt-8">
          <a
            href="/cv/Curriculum Vitae.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
          >
            Download Full CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
