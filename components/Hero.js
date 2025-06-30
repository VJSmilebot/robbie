import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6 py-16 space-y-10">
      <div>
        <h1 className="text-5xl font-bold leading-tight tracking-wide">
          Welcome to Robbie’s World
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Where research meets vision and every pixel has purpose.
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
          Robbie is a next-generation thinker, backed by science, guided by intuition, and styled like a boss. This headshot is proof. Scroll to explore his research, publications, and creative mind.
        </p>
      </div>
    </section>
  );
}
