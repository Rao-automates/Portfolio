import { useEffect, useRef, useState } from 'react';

/**
 * HUD — a floating corner widget showing live system-style stats.
 * Simulates "uptime", "packets", and a mini pulse graph.
 */
const HUD = () => {
    const [time, setTime] = useState('');
    const [packets, setPackets] = useState(0);
    const canvasRef = useRef(null);
    const dataRef = useRef(Array(40).fill(0.2));
    const rafRef = useRef(null);

    useEffect(() => {
        // Live clock
        const tick = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        tick();
        const clockTimer = setInterval(tick, 1000);

        // Packet counter
        const packetTimer = setInterval(() => {
            setPackets(p => p + Math.floor(Math.random() * 120 + 40));
        }, 800);

        // Mini pulse canvas
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            const W = canvas.width;
            const H = canvas.height;

            const draw = () => {
                // Shift data left and push new random value
                dataRef.current.shift();
                dataRef.current.push(0.2 + Math.random() * 0.7);

                ctx.clearRect(0, 0, W, H);

                // Draw line
                ctx.beginPath();
                ctx.strokeStyle = '#ccff00';
                ctx.lineWidth = 1.5;
                ctx.shadowColor = '#ccff00';
                ctx.shadowBlur = 6;

                const data = dataRef.current;
                const step = W / (data.length - 1);

                data.forEach((val, i) => {
                    const x = i * step;
                    const y = H - val * H;
                    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                });
                ctx.stroke();

                // Fill area under line
                ctx.lineTo(W, H);
                ctx.lineTo(0, H);
                ctx.closePath();
                ctx.fillStyle = 'rgba(204, 255, 0, 0.05)';
                ctx.fill();

                rafRef.current = requestAnimationFrame(draw);
            };
            rafRef.current = requestAnimationFrame(draw);
        }

        return () => {
            clearInterval(clockTimer);
            clearInterval(packetTimer);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            left: '24px',
            zIndex: 500,
            background: 'rgba(5, 5, 5, 0.85)',
            border: '1px solid rgba(204, 255, 0, 0.2)',
            backdropFilter: 'blur(12px)',
            padding: '14px 18px',
            width: '200px',
            fontFamily: "'Space Grotesk', monospace",
            pointerEvents: 'none',
        }}>
            {/* Corner accents */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '8px', height: '8px', borderTop: '1px solid #ccff00', borderLeft: '1px solid #ccff00' }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', borderTop: '1px solid #ccff00', borderRight: '1px solid #ccff00' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '8px', height: '8px', borderBottom: '1px solid #ccff00', borderLeft: '1px solid #ccff00' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8px', height: '8px', borderBottom: '1px solid #ccff00', borderRight: '1px solid #ccff00' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '8px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase' }}>SYS/STATUS</span>
                <span style={{ fontSize: '8px', color: '#ccff00', fontWeight: 700 }}>{time}</span>
            </div>

            <canvas ref={canvasRef} width={164} height={32} style={{ display: 'block', marginBottom: '10px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Row label="SIGNAL" value="ACTIVE" accent />
                <Row label="PACKETS" value={packets.toLocaleString()} />
                <Row label="STACK" value="PYTHON / AI" />
                <Row label="MODE" value="FREELANCE" accent />
            </div>
        </div>
    );
};

const Row = ({ label, value, accent }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', fontWeight: 700 }}>
        <span style={{ color: '#444', letterSpacing: '1px' }}>{label}</span>
        <span style={{ color: accent ? '#ccff00' : '#777', letterSpacing: '1px' }}>{value}</span>
    </div>
);

export default HUD;
