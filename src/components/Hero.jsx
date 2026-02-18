import { useEffect, useState } from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Backend Engineer | Automation \nExpert";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText.charAt(index));
                setIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    // Generate particles
    const particles = Array.from({ length: 20 });

    return (
        <section id="home" className="hero-container">
            <div className="hero-background"></div>
            <div className="glow-orb"></div>

            {particles.map((_, i) => (
                <div
                    key={i}
                    className="particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 5 + 2}px`,
                        height: `${Math.random() * 5 + 2}px`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 10 + 10}s`
                    }}
                ></div>
            ))}

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        Hi, I'm <br />
                        <span className="glitch-wrapper">
                            <span className="glitch" data-text="MOHYUDDIN">MOHYUDDIN</span>
                        </span>
                    </h1>
                </motion.div>

                <p className="hero-subtitle">
                    <span className="role-text">{text}</span><span className="cursor-blink">_</span>
                </p>

                <motion.p
                    style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Specializing in FastAPI, n8n Automation, and RAG Pipelines.
                    Building intelligent workflows and scalable backend solutions.
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <a href="#projects" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
