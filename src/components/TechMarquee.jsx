import { useEffect, useRef } from 'react';

const allTech = [
    "Python", "FastAPI", "Firebase", "n8n", "Docker", "AWS",
    "React", "RAG", "LLM", "AI Agents", ".NET", "C#",
    "SQL Server", "Flask", "Linux", "GitHub Actions", "OCR", "Vector DB"
];

const TechMarquee = () => {
    const trackRef = useRef(null);
    const rafRef = useRef(null);
    const posRef = useRef(0);
    const pausedRef = useRef(false);
    const items = [...allTech, ...allTech, ...allTech];

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // Wait one frame for layout, then get width
        requestAnimationFrame(() => {
            const totalWidth = track.scrollWidth / 3;
            const speed = 0.6; // px per frame

            const loop = () => {
                if (!pausedRef.current) {
                    posRef.current -= speed;
                    if (Math.abs(posRef.current) >= totalWidth) {
                        posRef.current = 0;
                    }
                    track.style.transform = `translateX(${posRef.current}px)`;
                }
                rafRef.current = requestAnimationFrame(loop);
            };

            rafRef.current = requestAnimationFrame(loop);
        });

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const handleMouseEnter = () => { pausedRef.current = true; };
    const handleMouseLeave = () => { pausedRef.current = false; };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                width: '100%',
                position: 'relative',
                marginTop: '2rem',
                padding: '16px 0',
            }}
        >
            {/* Edge fades */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, var(--bg-color), transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, var(--bg-color), transparent)', zIndex: 2, pointerEvents: 'none' }} />

            <div
                ref={trackRef}
                style={{ display: 'inline-flex', gap: '12px', willChange: 'transform' }}
            >
                {items.map((tech, i) => (
                    <div
                        key={i}
                        style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            padding: '7px 18px',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-light)',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                            transition: 'border-color 0.2s, color 0.2s',
                            cursor: 'default',
                            flexShrink: 0,
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'var(--accent)';
                            e.currentTarget.style.color = 'var(--accent)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'var(--border-color)';
                            e.currentTarget.style.color = 'var(--text-light)';
                        }}
                    >
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechMarquee;
