import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorTrail = () => {
    const [trails, setTrails] = useState([]);
    const idCounter = useRef(0);

    useEffect(() => {
        const handleMove = (e) => {
            const id = idCounter.current++;
            setTrails(prev => [...prev.slice(-12), { id, x: e.clientX, y: e.clientY }]);
        };

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9998 }}>
            <AnimatePresence>
                {trails.map((t, i) => (
                    <motion.div
                        key={t.id}
                        initial={{ opacity: 0.6, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            left: t.x - 4,
                            top: t.y - 4,
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: `rgba(167, 139, 250, ${0.3 + (i / trails.length) * 0.3})`,
                            boxShadow: '0 0 6px rgba(167, 139, 250, 0.3)',
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CursorTrail;
