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
                    }, 1000);
                    return 100;
                }
                return prev + Math.random() * 12 + 2;
            });
        }, 40);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <motion.div
                    className="preloader"
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Animated grid lines */}
                    <div className="preloader-grid"></div>

                    <div className="preloader-content">
                        <motion.div
                            className="preloader-logo"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="preloader-name">MR<span>.</span></span>
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
                            transition={{ delay: 0.2 }}
                        >
                            {Math.min(Math.floor(progress), 100)}%
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
