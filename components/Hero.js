export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-100 via-white to-blue-100 pt-24">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <img src="/images/Manfredi-headshot.jpg" alt="Robert W. Manfredi" className="w-40 h-40 rounded-full mx-auto mb-6 shadow-md" />
        <h1 className="text-4xl font-bold text-gray-800">Robert W. Manfredi</h1>
        <p className="text-lg text-gray-600 mt-4">English Instructor • Rhetoric & Composition • Writing Mentor</p>
        <a href="#contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
