import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Research from '../components/Research';
import CV from '../components/CV';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Robert W. Manfredi - Academic Profile</title>
        <meta name="description" content="Professional website for Robert W. Manfredi, English Instructor and Writing Specialist." />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <CV />
        <Contact />
      </main>
    </>
  );
}
