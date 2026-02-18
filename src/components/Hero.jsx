import './Hero.css';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: (i) => ({
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { delay: 0.8 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    })
};

const Hero = () => {
    const descWords = "Specializing in FastAPI, n8n Automation, and RAG Pipelines. Building intelligent workflows and scalable backend solutions.".split(' ');

    return (
        <section id="home" className="hero-container">
            {/* Aurora / Northern Lights effect */}
            <div className="aurora">
                <div className="aurora-beam aurora-1"></div>
                <div className="aurora-beam aurora-2"></div>
                <div className="aurora-beam aurora-3"></div>
            </div>

            {/* Floating orbs */}
            <div className="hero-orb hero-orb-1"></div>
            <div className="hero-orb hero-orb-2"></div>
            <div className="hero-orb hero-orb-3"></div>

            {/* Grid pattern */}
            <div className="hero-grid"></div>

            <div className="hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                >
                    <Sparkles size={14} />
                    <span className="dot"></span>
                    Available for Freelance
                </motion.div>

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="hero-greeting">Hi, I'm</span>
                    <span className="gradient-text animated-gradient">Mohyuddin Rao</span>
                </motion.h1>

                <motion.p
                    className="hero-role"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <span className="role-line"></span>
                    Backend Engineer · Automation Expert
                    <span className="role-line"></span>
                </motion.p>

                <div className="hero-desc">
                    {descWords.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={wordVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ display: 'inline-block', marginRight: '0.35em' }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
                >
                    <motion.a
                        href="#projects"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View My Work <ArrowRight size={18} />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
