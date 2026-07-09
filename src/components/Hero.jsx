import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import gsap from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';

// Magnetic button wrapper using React Spring physics
const SpringBtn = ({ children, className, onClick, href, target, rel, style }) => {
    const ref = useRef(null);
    const [springs, api] = useSpring(() => ({
        x: 0, y: 0, scale: 1,
        config: { mass: 1, tension: 300, friction: 18 }
    }));

    const handleMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        api.start({ x: (e.clientX - cx) * 0.35, y: (e.clientY - cy) * 0.35, scale: 1.05 });
    };
    const handleLeave = () => api.start({ x: 0, y: 0, scale: 1 });
    const Tag = href ? 'a' : 'button';

    return (
        <animated.div style={{ ...springs, display: 'inline-flex' }}>
            <Tag
                ref={ref}
                className={className}
                onClick={onClick}
                href={href}
                target={target}
                rel={rel}
                style={{ ...style, textDecoration: 'none' }}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
            >
                {children}
            </Tag>
        </animated.div>
    );
};

// Typewriter hook
const useTypewriter = (phrases, speed = 60, pause = 2200) => {
    const [display, setDisplay] = useState('');
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = phrases[phraseIdx];
        let timeout;

        if (!deleting && charIdx <= current.length) {
            timeout = setTimeout(() => {
                setDisplay(current.slice(0, charIdx));
                setCharIdx(c => c + 1);
            }, speed);
        } else if (!deleting && charIdx > current.length) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => {
                setDisplay(current.slice(0, charIdx - 1));
                setCharIdx(c => c - 1);
            }, speed / 2);
        } else {
            setDeleting(false);
            setPhraseIdx(i => (i + 1) % phrases.length);
        }

        return () => clearTimeout(timeout);
    }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

    return display;
};

// Glitch word — randomly scrambles and resolves
const GlitchWord = ({ text, className }) => {
    const ref = useRef(null);
    const GLITCH_CHARS = '!<>-_\\/[]{}=+*^?#01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomChar = () => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const doGlitch = () => {
            let iter = 0;
            const interval = setInterval(() => {
                el.textContent = text.split('').map((ch, i) => {
                    if (ch === ' ') return ' ';
                    return i < iter / 2 ? ch : randomChar();
                }).join('');
                iter++;
                if (iter > text.length * 2) { clearInterval(interval); el.textContent = text; }
            }, 28);
        };

        setTimeout(doGlitch, 800);
        const t = setInterval(doGlitch, 5000 + Math.random() * 3000);
        return () => clearInterval(t);
    }, [text]);

    return <span ref={ref} className={className}>{text}</span>;
};

const Hero = () => {
    const badgeRef = useRef(null);
    const headlineRef = useRef(null);
    const subtitleRef = useRef(null);
    const descRef = useRef(null);
    const ctaRef = useRef(null);
    const typewriterText = useTypewriter([
        'Backend Engineer & Automation Expert.',
        'FastAPI & n8n Specialist.',
        'RAG Pipeline Architect.',
        'Building Intelligent Systems.',
    ]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const headline = headlineRef.current;
        if (!headline) return;

        // Split non-accent words into masked word-slides
        const words = [
            { text: 'Building the ', accent: false },
            { text: 'Future', accent: true },
            { text: ' of Autonomous Systems.', accent: false },
        ];

        headline.innerHTML = words.map(({ text, accent }) => {
            if (accent) {
                return `<span class="text-accent hero-accent-word">${text}</span>`;
            }
            return text.split(' ').map(word => word ?
                `<span class="hero-word" style="display:inline-block;overflow:hidden;margin-right:0.3em;">` +
                `<span class="hero-word-inner" style="display:inline-block;transform:translateY(110%);">${word}</span>` +
                `</span>` : ' '
            ).join('');
        }).join('');

        const tl = gsap.timeline({ delay: 0.1 });

        tl.fromTo(badgeRef.current,
            { opacity: 0, scale: 0.7, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(2)' }
        );
        tl.to('.hero-word-inner', {
            y: '0%', duration: 0.8, stagger: 0.06, ease: 'power4.out'
        }, '-=0.1');
        tl.fromTo(subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3'
        );
        tl.fromTo(descRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3'
        );
        tl.fromTo(ctaRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2'
        );

        return () => tl.kill();
    }, []);

    return (
        <div className="hero">
            <div ref={badgeRef} className="hero-badge" style={{ opacity: 0 }}>
                <Sparkles size={14} />
                Available for Freelance
            </div>

            <h1 ref={headlineRef}>
                Building the <span className="text-accent">Future</span> of Autonomous Systems.
            </h1>

            {/* Typewriter line */}
            <div ref={subtitleRef} style={{ opacity: 0, marginBottom: '24px' }}>
                <p style={{ fontWeight: 400, color: 'var(--text-color)', fontSize: '1.6rem', marginBottom: '4px' }}>
                    Hi, I'm <span className="text-accent" style={{ fontWeight: 700 }}>Mohyuddin Rao</span>.
                </p>
                <p style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '1.1rem', color: 'var(--text-light)', minHeight: '1.6em' }}>
                    <span style={{ color: 'var(--accent)', marginRight: '6px' }}>{'>'}</span>
                    {typewriterText}
                    <span className="hero-cursor">▋</span>
                </p>
            </div>

            <p ref={descRef} style={{ opacity: 0 }}>
                Specializing in FastAPI, n8n Automation, and advanced RAG Pipelines.
                I engineer highly scalable, intelligent workflows for global clients.
            </p>

            <div ref={ctaRef} style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap', opacity: 0 }}>
                <SpringBtn className="neu-btn" onClick={() => scrollToSection('projects')}>
                    View My Work <ArrowRight size={18} />
                </SpringBtn>
                <SpringBtn className="neu-btn outline" onClick={() => scrollToSection('about')}>
                    Get in Touch
                </SpringBtn>
                <SpringBtn
                    className="neu-btn outline"
                    href="https://drive.google.com/file/d/1RN3RIXmvA8jcDu3XAzb_OpVdHkZJ5Xt3/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download CV
                </SpringBtn>
            </div>
        </div>
    );
};

export default Hero;
