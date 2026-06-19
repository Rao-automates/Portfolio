import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <div className="hero">
            <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
                <Sparkles size={14} />
                Available for Freelance
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                Hi, I'm <span className="text-gradient">Mohyuddin Rao</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ marginBottom: '24px', fontWeight: 600 }}
            >
                Backend Engineer · Automation Expert
            </motion.p>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                Specializing in FastAPI, n8n Automation, and RAG Pipelines. Building intelligent workflows and scalable backend solutions.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, type: 'spring' }}
                style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}
            >
                <button className="neu-btn" style={{ gap: '8px' }}>
                    View My Work <ArrowRight size={18} />
                </button>
                <button className="neu-btn" style={{ fontWeight: 600, color: 'var(--text-light)' }}>
                    Get in Touch
                </button>
            </motion.div>
            
            <div className="hero-book">Building the future of autonomous systems.</div>
        </div>
    );
};

export default Hero;
