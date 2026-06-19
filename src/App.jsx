import { useState, useEffect, useCallback } from 'react';
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
  const [activeTab, setActiveTab] = useState('home');

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' }
  ];

  return (
    <ToastProvider>
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="app-container">
          <nav className="top-nav">
            <div className="logo">Rao.</div>
            <div className="nav-pills">
              {navItems.map(item => (
                <button 
                  key={item.id}
                  className={`nav-btn ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
          
          <div className="content-area">
            <section className={`app-section ${activeTab === 'home' ? 'active' : ''}`}>
              <Hero setActiveTab={setActiveTab} />
              <TechMarquee />
              <Stats />
            </section>
            
            <section className={`app-section ${activeTab === 'projects' ? 'active' : ''}`}>
              <Projects />
            </section>
            
            <section className={`app-section ${activeTab === 'experience' ? 'active' : ''}`}>
              <Experience />
            </section>
            
            <section className={`app-section ${activeTab === 'about' ? 'active' : ''}`}>
              <About />
            </section>
          </div>
        </div>
      </div>
    </ToastProvider>
  );
}

export default App;
