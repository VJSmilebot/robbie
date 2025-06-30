import '../styles/globals.css'
import { Merriweather } from 'next/font/google';
import React from 'react';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and Bold
  variable: '--font-merriweather',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${merriweather.variable} font-serif`}>
      <Component {...pageProps} />
    </main>
  );
}
