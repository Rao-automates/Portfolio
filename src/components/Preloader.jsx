import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading'); // loading -> reveal -> done

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setPhase('reveal'), 300);
                    setTimeout(() => {
                        setPhase('done');
                        onComplete();
                    }, 1200);
                    return 100;
                }
                return prev + Math.random() * 8 + 2;
            });
        }, 50);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <motion.div
                    className="preloader"
                    exit={{ clipPath: 'circle(0% at 50% 50%)' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="preloader-content">
                        <motion.div
                            className="preloader-logo"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <span className="preloader-name">MR</span>
                        </motion.div>

                        <div className="preloader-bar-track">
                            <motion.div
                                className="preloader-bar-fill"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                        </div>

                        <motion.p
                            className="preloader-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {Math.min(Math.floor(progress), 100)}%
                        </motion.p>
                    </div>

                    {/* Animated grid lines */}
                    <div className="preloader-grid"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
