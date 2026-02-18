import { useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className, ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = useCallback((e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.3, y: y * 0.3 });
    }, []);

    const handleLeave = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            className={className}
            style={{ display: 'inline-block' }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
