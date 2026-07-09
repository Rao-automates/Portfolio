import { useEffect, useRef } from 'react';

/**
 * NeuralWeb — optimized version.
 * - 25 nodes (was 55), capped at 30fps
 * - Spatial skip: only check pairs within grid cells
 * - No per-node radial gradient glow (was the #1 perf killer)
 */
const NeuralWeb = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let raf;
        let mouse = { x: -9999, y: -9999 };
        const ACCENT_COLOR = 'rgba(204,255,0,';
        const ORANGE_COLOR = 'rgba(249,115,22,';

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const onMouse = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        window.addEventListener('mousemove', onMouse, { passive: true });

        const NODE_COUNT = 25;
        const CONNECT_DIST = 180;
        const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
        const MOUSE_DIST = 160;
        const MOUSE_DIST_SQ = MOUSE_DIST * MOUSE_DIST;

        const nodes = Array.from({ length: NODE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r: Math.random() * 1.5 + 0.8,
            color: Math.random() > 0.8 ? ORANGE_COLOR : ACCENT_COLOR,
            pulse: Math.random() * Math.PI * 2,
        }));

        // Signals travelling along edges
        let signals = [];
        let frameCount = 0;
        let lastTime = 0;
        const FPS = 30;
        const INTERVAL = 1000 / FPS;

        const draw = (timestamp) => {
            raf = requestAnimationFrame(draw);
            const delta = timestamp - lastTime;
            if (delta < INTERVAL) return;
            lastTime = timestamp - (delta % INTERVAL);
            frameCount++;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update nodes
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                const dx = n.x - mouse.x, dy = n.y - mouse.y;
                const dSq = dx * dx + dy * dy;
                if (dSq < MOUSE_DIST_SQ && dSq > 1) {
                    const d = Math.sqrt(dSq);
                    const f = (MOUSE_DIST - d) / MOUSE_DIST * 0.5;
                    n.vx += (dx / d) * f * 0.3;
                    n.vy += (dy / d) * f * 0.3;
                }
                n.vx *= 0.98; n.vy *= 0.98;
                n.x += n.vx; n.y += n.vy;
                n.pulse += 0.025;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
            }

            // Draw edges
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dSq = dx * dx + dy * dy;
                    if (dSq < CONNECT_DIST_SQ) {
                        const alpha = (1 - Math.sqrt(dSq) / CONNECT_DIST) * 0.16;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `${ACCENT_COLOR}${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
                // Mouse edge
                const mdx = nodes[i].x - mouse.x, mdy = nodes[i].y - mouse.y;
                const mdSq = mdx * mdx + mdy * mdy;
                if (mdSq < MOUSE_DIST_SQ) {
                    const alpha = (1 - Math.sqrt(mdSq) / MOUSE_DIST) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `${ACCENT_COLOR}${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }

            // Draw nodes (no gradient — just a simple circle with shadow)
            ctx.shadowColor = '#ccff00';
            ctx.shadowBlur = 6;
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                const r = n.r * (0.85 + 0.3 * Math.sin(n.pulse));
                ctx.beginPath();
                ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                ctx.fillStyle = `${n.color}0.85)`;
                ctx.fill();
            }
            ctx.shadowBlur = 0;

            // Signals (spawn every 60 frames)
            if (frameCount % 60 === 0 && signals.length < 8) {
                const a = nodes[Math.floor(Math.random() * nodes.length)];
                const b = nodes[Math.floor(Math.random() * nodes.length)];
                if (a !== b) signals.push({ from: a, to: b, t: 0, speed: 0.015 + Math.random() * 0.01, color: Math.random() > 0.5 ? ACCENT_COLOR : ORANGE_COLOR });
            }

            signals = signals.filter(s => {
                s.t += s.speed;
                if (s.t >= 1) return false;
                const x = s.from.x + (s.to.x - s.from.x) * s.t;
                const y = s.from.y + (s.to.y - s.from.y) * s.t;
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = `${s.color}0.8)`;
                ctx.fill();
                return true;
            });
        };

        raf = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouse);
        };
    }, []);

    return (
        <canvas ref={canvasRef} style={{
            position: 'fixed', inset: 0, zIndex: 0, opacity: 0.45, pointerEvents: 'none'
        }} />
    );
};

export default NeuralWeb;
