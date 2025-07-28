import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6 py-16 space-y-10">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-wide">
          Robert Manfredi
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          English Instructor
           <br />
          Masters in English (Rhetoric and Composition) 
        </p>
      </div>

      <div className="rounded-full overflow-hidden shadow-lg border-4 border-white w-72 h-72 relative">
        <Image
          src="/images/manfredi-headshot.jpg"
          alt="Robbie Headshot"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="max-w-xl text-gray-400">
        <p>
          Robert is a rhetoric scholar with a background in critical theory and digital rhetoric.

          He’s passionate about teaching students critical thinking in this digital world.
        </p>
      </div>
    </section>
  );
}
