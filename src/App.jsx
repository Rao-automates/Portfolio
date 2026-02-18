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
import './App.css'

function App() {
  return (
    <ToastProvider>
      <div className="app-container">
        <ParticleNetwork />
        <ScrollProgress />
        <Cursor />
        <CursorTrail />
        <Terminal />
        <Header />
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
