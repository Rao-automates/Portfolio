import { useState, useCallback } from 'react';
import { ToastProvider } from './components/Toast';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stats from './components/Stats';
import TechMarquee from './components/TechMarquee';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ToastProvider>
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}>
        <div className="app-container">
          <nav className="top-nav">
            <div className="logo">Rao<span>.</span></div>
            <div className="nav-links">
              {navItems.map(item => (
                <button 
                  key={item.id}
                  className="nav-link"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
          
          <div className="content-area">
            <section id="home" className="app-section">
              <Hero />
              <TechMarquee />
              <Stats />
            </section>
            
            <section id="projects" className="app-section">
              <Projects />
            </section>
            
            <section id="experience" className="app-section">
              <Experience />
            </section>
            
            <section id="about" className="app-section">
              <About />
            </section>
          </div>
        </div>
      </div>
    </ToastProvider>
  );
}

export default App;
