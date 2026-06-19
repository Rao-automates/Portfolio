import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero">
            <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            >
                <Sparkles size={14} />
                Available for Freelance
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                Building the <span className="text-accent">Future</span> of Autonomous Systems.
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ fontWeight: 400, color: 'var(--text-color)', fontSize: '1.6rem', marginBottom: '16px' }}
            >
                Hi, I'm Mohyuddin Rao.
            </motion.p>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                Backend Engineer & Automation Expert specializing in FastAPI, n8n Automation, and advanced RAG Pipelines. I engineer highly scalable, intelligent workflows.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, type: 'spring' }}
                style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px', flexWrap: 'wrap' }}
            >
                <button className="neu-btn" onClick={() => scrollToSection('projects')}>
                    View My Work <ArrowRight size={18} />
                </button>
                <button className="neu-btn outline" onClick={() => scrollToSection('about')}>
                    Get in Touch
                </button>
            </motion.div>
        </div>
    );
};

export default Hero;
