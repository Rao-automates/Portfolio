import { useEffect, useRef } from 'react';

/**
 * CursorTrail — single canvas, zero React re-renders.
 * Stores trail points in a ring buffer and fades them out manually.
 */
const CursorTrail = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let raf;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize, { passive: true });

        // Ring buffer of trail points
        const MAX = 18;
        const trail = [];
        let mouse = { x: -999, y: -999 };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            trail.push({ x: e.clientX, y: e.clientY, age: 0 });
            if (trail.length > MAX) trail.shift();
        }, { passive: true });

        const draw = () => {
            raf = requestAnimationFrame(draw);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < trail.length; i++) {
                trail[i].age++;
                const ratio = i / trail.length;
                const alpha = ratio * 0.7 * (1 - trail[i].age / 60);
                if (alpha <= 0) continue;

                const size = 2 + ratio * 7;
                const isSquare = ratio < 0.4;

                ctx.globalAlpha = alpha;
                ctx.shadowColor = '#ccff00';
                ctx.shadowBlur = ratio * 8;
                ctx.fillStyle = `rgba(204,255,0,${0.6 + ratio * 0.4})`;

                if (isSquare) {
                    ctx.fillRect(trail[i].x - size / 2, trail[i].y - size / 2, size, size);
                } else {
                    ctx.beginPath();
                    ctx.arc(trail[i].x, trail[i].y, size / 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Remove old points
            while (trail.length && trail[0].age > 55) trail.shift();

            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
        };

        raf = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas ref={canvasRef} style={{
            position: 'fixed', inset: 0, zIndex: 9997, pointerEvents: 'none'
        }} />
    );
};

export default CursorTrail;
