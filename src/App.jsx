import { useState, useCallback, useEffect, useRef } from 'react';
import { ToastProvider } from './components/Toast';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stats from './components/Stats';
import TechMarquee from './components/TechMarquee';
import Preloader from './components/Preloader';
import Terminal from './components/Terminal';
import CursorTrail from './components/CursorTrail';
import HUD from './components/HUD';
import NeuralWeb from './components/NeuralWeb';
import CyberField from './components/CyberField';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [loaded, setLoaded] = useState(false);
    const progressBarRef = useRef(null);
    const [activeSection, setActiveSection] = useState('home');

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
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (!loaded) return;

        // Scroll progress bar
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            if (progressBarRef.current) progressBarRef.current.style.width = `${progress}%`;
        };
        window.addEventListener('scroll', updateProgress, { passive: true });

        // Active nav tracking
        navItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            ScrollTrigger.create({
                trigger: el,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => setActiveSection(id),
                onEnterBack: () => setActiveSection(id),
            });
        });

        return () => {
            window.removeEventListener('scroll', updateProgress);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [loaded]);

    return (
        <ToastProvider>
            {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

            <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}>
                {/* Global ambient FX */}
                <NeuralWeb />
                <CyberField />
                <CursorTrail />

                {/* Scroll progress bar */}
                <div className="scroll-progress-track">
                    <div className="scroll-progress-bar" ref={progressBarRef} />
                </div>

                {/* Floating HUD & Terminal */}
                <HUD />
                <Terminal />

                <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
                    <nav className="top-nav">
                        <div className="logo">Rao<span>.</span></div>
                        <div className="nav-links">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
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
