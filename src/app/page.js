'use client';
import { useState, useEffect } from 'react';
import Loader from '@/components/sections/Loader';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Starfield from '@/components/canvas/Starfield';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Academics from '@/components/sections/Academics';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="reading-progress" style={{ width: `${progress}%` }} />;
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Reading progress */}
      <ReadingProgress />

      {/* Loader */}
      {!loaded && <Loader onDone={() => setLoaded(true)} />}

      {/* Starfield — always visible behind everything */}
      <Starfield />

      {/* Main content */}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease', position: 'relative', zIndex: 1 }}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Academics />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
