import { useEffect, useRef } from 'react';

/**
 * MatrixRain — a canvas-based Matrix rain effect that runs in the background.
 * Very subtle (low opacity) so it doesn't overwhelm the content.
 */
const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const fontSize = 13;
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        let columns = Math.floor(canvas.width / fontSize);
        let drops = Array(columns).fill(1);

        let raf;
        let lastTime = 0;
        const fps = 20;

        const draw = (timestamp) => {
            raf = requestAnimationFrame(draw);
            if (timestamp - lastTime < 1000 / fps) return;
            lastTime = timestamp;

            // Columns change with resize
            columns = Math.floor(canvas.width / fontSize);
            while (drops.length < columns) drops.push(Math.random() * canvas.height / fontSize);

            ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const alpha = Math.random() * 0.5 + 0.1;

                // Lead character brighter
                ctx.fillStyle = `rgba(204, 255, 0, ${i === 0 ? 1 : alpha})`;
                ctx.fillText(char, i * fontSize, y * fontSize);

                // Reset when off screen
                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        };

        raf = requestAnimationFrame(draw);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                opacity: 0.04,
                pointerEvents: 'none',
            }}
        />
    );
};

export default MatrixRain;
