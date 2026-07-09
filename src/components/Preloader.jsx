import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const preloaderRef = useRef(null);
    const logoRef = useRef(null);
    const barFillRef = useRef(null);
    const percentRef = useRef(null);
    const taglineRef = useRef(null);
    const progressValue = useRef({ val: 0 });

    useEffect(() => {
        const tl = gsap.timeline();

        // Char-by-char entrance for "MR."
        const chars = logoRef.current?.querySelectorAll('.pre-char');
        if (chars) {
            tl.set(chars, { opacity: 0, y: 30 })
              .to(chars, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  stagger: 0.12,
                  ease: 'power3.out',
              })
              .to(taglineRef.current, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: 'power2.out',
              }, '-=0.2');
        }

        // Animate the progress counter
        const progressObj = { val: 0 };
        const progressTween = gsap.to(progressObj, {
            val: 100,
            duration: 2.4,
            ease: 'power1.inOut',
            onUpdate: () => {
                const v = Math.floor(progressObj.val);
                setProgress(v);
                if (barFillRef.current) barFillRef.current.style.width = v + '%';
                if (percentRef.current) percentRef.current.textContent = v + '%';
            },
            onComplete: () => {
                // Curtain wipe exit using clip-path
                gsap.to(preloaderRef.current, {
                    clipPath: 'inset(0 0 100% 0)',
                    duration: 0.9,
                    ease: 'power4.inOut',
                    delay: 0.25,
                    onComplete: onComplete,
                });
            }
        });

        return () => {
            progressTween.kill();
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div className="preloader" ref={preloaderRef} style={{ clipPath: 'inset(0 0 0% 0)' }}>
            <div className="preloader-grid"></div>
            <div className="preloader-content">
                <div className="preloader-logo" ref={logoRef}>
                    {'MR.'.split('').map((char, i) => (
                        <span key={i} className={`pre-char${char === '.' ? ' pre-dot' : ''}`}>{char}</span>
                    ))}
                </div>

                <p className="preloader-tagline" ref={taglineRef}>
                    Initializing Portfolio...
                </p>

                <div className="preloader-bar-track">
                    <div className="preloader-bar-fill" ref={barFillRef} style={{ width: '0%' }} />
                    <div className="preloader-bar-glow" />
                </div>

                <p className="preloader-text" ref={percentRef}>0%</p>
            </div>
        </div>
    );
};

export default Preloader;
