import { useEffect, useRef } from 'react';

/**
 * NeuralWeb — animated neural network with neon nodes, pulsing data signals,
 * and mouse-reactive repulsion. Far more impressive than matrix rain.
 */
const NeuralWeb = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let raf;
        let mouse = { x: -999, y: -999 };
        const ACCENT = [204, 255, 0];
        const ORANGE = [249, 115, 22];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

        // Nodes
        const NODE_COUNT = 55;
        const CONNECT_DIST = 160;
        const MOUSE_DIST = 180;
        let nodes = [];

        class Node {
            constructor() { this.reset(); this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.r = Math.random() * 1.8 + 0.6;
                this.pulse = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.02 + Math.random() * 0.02;
                this.color = Math.random() > 0.8 ? ORANGE : ACCENT;
            }
            update() {
                const dx = this.x - mouse.x, dy = this.y - mouse.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < MOUSE_DIST) {
                    const f = (MOUSE_DIST - d) / MOUSE_DIST * 0.8;
                    this.vx += (dx / d) * f * 0.4;
                    this.vy += (dy / d) * f * 0.4;
                }
                this.vx *= 0.98; this.vy *= 0.98;
                this.x += this.vx; this.y += this.vy;
                this.pulse += this.pulseSpeed;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            draw() {
                const pulseFactor = 0.8 + 0.5 * Math.sin(this.pulse);
                const r = this.r * pulseFactor;
                const [R, G, B] = this.color;
                // Outer glow
                const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, r * 5);
                grd.addColorStop(0, `rgba(${R},${G},${B},0.25)`);
                grd.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath(); ctx.arc(this.x, this.y, r * 5, 0, Math.PI * 2);
                ctx.fillStyle = grd; ctx.fill();
                // Core dot
                ctx.beginPath(); ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${R},${G},${B},0.9)`; ctx.fill();
            }
        }

        // Data signals travelling along edges
        let signals = [];
        class Signal {
            constructor(from, to) {
                this.from = from; this.to = to;
                this.t = 0; this.speed = 0.006 + Math.random() * 0.006;
                this.color = Math.random() > 0.5 ? ACCENT : ORANGE;
            }
            update() { this.t += this.speed; return this.t < 1; }
            draw() {
                const x = this.from.x + (this.to.x - this.from.x) * this.t;
                const y = this.from.y + (this.to.y - this.from.y) * this.t;
                const [R, G, B] = this.color;
                const g = ctx.createRadialGradient(x, y, 0, x, y, 6);
                g.addColorStop(0, `rgba(${R},${G},${B},0.9)`);
                g.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2);
                ctx.fillStyle = g; ctx.fill();
            }
        }

        for (let i = 0; i < NODE_COUNT; i++) nodes.push(new Node());

        let frameCount = 0;
        const draw = () => {
            raf = requestAnimationFrame(draw);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            frameCount++;

            // Spawn signals occasionally
            if (frameCount % 40 === 0 && nodes.length > 1) {
                const a = nodes[Math.floor(Math.random() * nodes.length)];
                const b = nodes[Math.floor(Math.random() * nodes.length)];
                if (a !== b) signals.push(new Signal(a, b));
                if (signals.length > 20) signals.shift();
            }

            // Draw edges
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < CONNECT_DIST) {
                        const alpha = (1 - d / CONNECT_DIST) * 0.18;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(204,255,0,${alpha})`;
                        ctx.lineWidth = 0.6; ctx.stroke();
                    }
                }
                // Mouse connections
                const dx = nodes[i].x - mouse.x, dy = nodes[i].y - mouse.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < MOUSE_DIST) {
                    const alpha = (1 - d / MOUSE_DIST) * 0.35;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(204,255,0,${alpha})`;
                    ctx.lineWidth = 0.8; ctx.stroke();
                }
            }

            // Update & draw nodes
            nodes.forEach(n => { n.update(); n.draw(); });

            // Update & draw signals
            signals = signals.filter(s => s.update());
            signals.forEach(s => s.draw());
        };
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas ref={canvasRef} style={{
            position: 'fixed', inset: 0, zIndex: 0, opacity: 0.5, pointerEvents: 'none'
        }} />
    );
};

export default NeuralWeb;
