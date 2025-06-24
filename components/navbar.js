export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4 font-medium text-gray-700">
          <a href="#hero" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#research" className="hover:text-blue-600 transition">Research</a>
          <a href="#cv" className="hover:text-blue-600 transition">CV</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
