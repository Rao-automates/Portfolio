import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * GlitchText — applies a cyberpunk glitch distortion effect to any text.
 * Randomly fires short glitch bursts using GSAP.
 */
const GlitchText = ({ text, className, style, tag: Tag = 'span' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const glitchChars = '!<>-_\\/[]{}—=+*^?#0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const originalText = text;
        let glitchTimer = null;

        const randomChar = () => glitchChars[Math.floor(Math.random() * glitchChars.length)];

        const doGlitch = () => {
            let iterations = 0;
            const maxIter = originalText.length * 2;

            const interval = setInterval(() => {
                el.textContent = originalText
                    .split('')
                    .map((char, idx) => {
                        if (char === ' ') return ' ';
                        if (idx < iterations / 2) return char;
                        return randomChar();
                    })
                    .join('');

                iterations++;
                if (iterations > maxIter) {
                    clearInterval(interval);
                    el.textContent = originalText;
                }
            }, 30);
        };

        // Fire glitch randomly every 4–8s
        const scheduleGlitch = () => {
            const delay = 4000 + Math.random() * 4000;
            glitchTimer = setTimeout(() => {
                doGlitch();
                scheduleGlitch();
            }, delay);
        };

        // Initial glitch on mount (subtle)
        setTimeout(doGlitch, 600);
        scheduleGlitch();

        return () => {
            clearTimeout(glitchTimer);
        };
    }, [text]);

    return (
        <Tag ref={ref} className={className} style={style}>
            {text}
        </Tag>
    );
};

export default GlitchText;
