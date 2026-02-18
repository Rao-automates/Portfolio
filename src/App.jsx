import { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import { ToastProvider } from './components/Toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Skills, Contact } from './components/Footer';
import Cursor from './components/Cursor';
import Terminal from './components/Terminal';
import ScrollProgress from './components/ScrollProgress';
import ParticleNetwork from './components/ParticleNetwork';
import CursorTrail from './components/CursorTrail';
import Stats from './components/Stats';
import TechMarquee from './components/TechMarquee';
import Preloader from './components/Preloader';
import SideNav from './components/SideNav';
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <ToastProvider>
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
      <div className="app-container" style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}>
        <ParticleNetwork />
        <ScrollProgress />
        <Cursor />
        <CursorTrail />
        <Terminal />
        <Header />
        <SideNav />
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Stats />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </ToastProvider>
  )
}

export default App
