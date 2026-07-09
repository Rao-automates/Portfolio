import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorTrail = () => {
    const [trails, setTrails] = useState([]);
    const idCounter = useRef(0);

    useEffect(() => {
        const handleMove = (e) => {
            const id = idCounter.current++;
            setTrails(prev => [...prev.slice(-15), { id, x: e.clientX, y: e.clientY }]);
        };

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9997 }}>
            <AnimatePresence>
                {trails.map((t, i) => {
                    const ratio = i / trails.length;
                    const size = 4 + ratio * 8;
                    return (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0.9, scale: 1 }}
                            animate={{ opacity: 0, scale: 0.2 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            style={{
                                position: 'absolute',
                                left: t.x - size / 2,
                                top: t.y - size / 2,
                                width: size,
                                height: size,
                                borderRadius: ratio > 0.7 ? '50%' : '2px',
                                background: `rgba(204, 255, 0, ${0.15 + ratio * 0.5})`,
                                boxShadow: `0 0 ${6 + ratio * 10}px rgba(204, 255, 0, ${ratio * 0.4})`,
                                transform: `rotate(${ratio * 45}deg)`,
                            }}
                        />
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default CursorTrail;
