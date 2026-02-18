import './Hero.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-container">
            <div className="hero-blob hero-blob-1"></div>
            <div className="hero-blob hero-blob-2"></div>
            <div className="hero-blob hero-blob-3"></div>

            <div className="hero-content">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="dot"></span>
                    Available for Freelance
                </motion.div>

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    Hi, I'm <br />
                    <span className="gradient-text">Mohyuddin Rao</span>
                </motion.h1>

                <motion.p
                    className="hero-role"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Backend Engineer · Automation Expert
                </motion.p>

                <motion.p
                    className="hero-desc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Specializing in FastAPI, n8n Automation, and RAG Pipelines.
                    Building intelligent workflows and scalable backend solutions.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <a href="#projects" className="btn btn-primary">
                        View My Work <ArrowRight size={18} />
                    </a>
                    <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
