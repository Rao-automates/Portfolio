import { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import gsap from 'gsap';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

// Magnetic CTA button
const SpringBtn = ({ children, className, onClick, href, target, rel, style }) => {
    const ref = useRef(null);
    const [springs, api] = useSpring(() => ({
        x: 0, y: 0, scale: 1,
        config: { mass: 1, tension: 320, friction: 18 }
    }));
    const handleMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        api.start({ x: (e.clientX - rect.left - rect.width / 2) * 0.35, y: (e.clientY - rect.top - rect.height / 2) * 0.35, scale: 1.06 });
    };
    const handleLeave = () => api.start({ x: 0, y: 0, scale: 1 });
    const Tag = href ? 'a' : 'button';
    return (
        <animated.div style={{ ...springs, display: 'inline-flex' }}>
            <Tag ref={ref} className={className} onClick={onClick} href={href} target={target} rel={rel}
                style={{ ...style, textDecoration: 'none' }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
                {children}
            </Tag>
        </animated.div>
    );
};

// Typewriter cycling tagline
const useTypewriter = (phrases, speed = 60, pause = 2400) => {
    const [display, setDisplay] = useState('');
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);
    useEffect(() => {
        const current = phrases[phraseIdx];
        let timeout;
        if (!deleting && charIdx <= current.length) {
            timeout = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, speed);
        } else if (!deleting && charIdx > current.length) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => { setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, speed / 2);
        } else {
            setDeleting(false);
            setPhraseIdx(i => (i + 1) % phrases.length);
        }
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);
    return display;
};

const Hero = () => {
    const heroRef = useRef(null);
    const badgeRef = useRef(null);
    const headlineRef = useRef(null);
    const subtitleRef = useRef(null);
    const descRef = useRef(null);
    const ctaRef = useRef(null);
    const statusRef = useRef(null);

    const typewriterText = useTypewriter([
        'Backend Engineer & Automation Expert.',
        'FastAPI & n8n Specialist.',
        'RAG Pipeline Architect.',
        'Building Intelligent Systems.',
        'LLM Orchestration Engineer.',
    ]);

    // Whole-hero 3D tilt on mouse move
    const [heroSpring, heroApi] = useSpring(() => ({
        rotateX: 0, rotateY: 0,
        config: { mass: 2, tension: 100, friction: 30 }
    }));

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const handleMove = (e) => {
            const rect = hero.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            heroApi.start({
                rotateX: (e.clientY - cy) / rect.height * -6,
                rotateY: (e.clientX - cx) / rect.width * 6,
            });
        };
        const handleLeave = () => heroApi.start({ rotateX: 0, rotateY: 0 });
        hero.addEventListener('mousemove', handleMove);
        hero.addEventListener('mouseleave', handleLeave);
        return () => {
            hero.removeEventListener('mousemove', handleMove);
            hero.removeEventListener('mouseleave', handleLeave);
        };
    }, [heroApi]);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const headline = headlineRef.current;
        if (!headline) return;

        // Word-mask entrance
        const rawText = 'Building the Future of Autonomous Systems.';
        const words = rawText.split(' ');
        headline.innerHTML = words.map((word, i) => {
            const isAccent = word === 'Future';
            return `<span style="display:inline-block;overflow:hidden;margin-right:0.28em;">` +
                `<span class="hero-word-inner${isAccent ? ' text-accent' : ''}" ` +
                `style="display:inline-block;transform:translateY(110%);">${word}</span>` +
                `</span>`;
        }).join('');

        const tl = gsap.timeline({ delay: 0.1 });
        tl.fromTo(badgeRef.current, { opacity: 0, scale: 0.7, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(2)' });
        tl.to('.hero-word-inner', { y: '0%', duration: 0.85, stagger: 0.06, ease: 'power4.out' }, '-=0.1');
        tl.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');
        tl.fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
        tl.fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2');
        tl.fromTo(statusRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4');

        return () => tl.kill();
    }, []);

    return (
        <animated.div
            ref={heroRef}
            className="hero"
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1200px',
                rotateX: heroSpring.rotateX,
                rotateY: heroSpring.rotateY,
            }}
        >
            {/* Floating status chips */}
            <div ref={statusRef} className="hero-status-row" style={{ opacity: 0 }}>
                <span className="status-chip online"><span className="status-dot" />Online</span>
                <span className="status-chip">PKT-48k/s</span>
                <span className="status-chip accent">Available</span>
            </div>

            <div ref={badgeRef} className="hero-badge" style={{ opacity: 0 }}>
                <Sparkles size={14} />
                Available for Freelance
            </div>

            <h1 ref={headlineRef}>
                Building the <span className="text-accent">Future</span> of Autonomous Systems.
            </h1>

            <div ref={subtitleRef} style={{ opacity: 0, marginBottom: '24px' }}>
                <p style={{ fontWeight: 400, color: 'var(--text-color)', fontSize: '1.6rem', marginBottom: '8px' }}>
                    Hi, I'm <span className="text-accent" style={{ fontWeight: 800 }}>Mohyuddin Rao</span>.
                </p>
                <p className="hero-typewriter">
                    <span className="hero-prompt">{'>'}</span>
                    {typewriterText}
                    <span className="hero-cursor">▋</span>
                </p>
            </div>

            <p ref={descRef} style={{ opacity: 0 }}>
                Specializing in <strong style={{ color: '#fff' }}>FastAPI</strong>, <strong style={{ color: '#fff' }}>n8n Automation</strong>, and advanced <strong style={{ color: '#fff' }}>RAG Pipelines</strong>.
                Engineering highly scalable, intelligent workflows for global clients.
            </p>

            <div ref={ctaRef} style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap', opacity: 0 }}>
                <SpringBtn className="neu-btn" onClick={() => scrollToSection('projects')}>
                    View My Work <ArrowRight size={18} />
                </SpringBtn>
                <SpringBtn className="neu-btn outline" onClick={() => scrollToSection('about')}>
                    Get in Touch
                </SpringBtn>
                <SpringBtn className="neu-btn outline"
                    href="https://drive.google.com/file/d/1RN3RIXmvA8jcDu3XAzb_OpVdHkZJ5Xt3/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">
                    Download CV
                </SpringBtn>
            </div>
        </animated.div>
    );
};

export default Hero;
