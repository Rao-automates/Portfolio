import './About.css';
import profileImg from '../assets/profile_new.jpg';
import { Code, Database, Server, Zap, Braces, Cloud, Bot, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const floatingBadges = [
    { icon: <Braces size={16} />, label: "Python", x: -30, y: -20, delay: 0 },
    { icon: <Server size={16} />, label: "FastAPI", x: 280, y: 10, delay: 0.5 },
    { icon: <Bot size={16} />, label: "AI/RAG", x: -20, y: 280, delay: 1 },
    { icon: <Cloud size={16} />, label: "AWS", x: 260, y: 300, delay: 1.5 },
];

const About = () => {
    return (
        <section id="about" className="about-container">
            <div className="about-content">
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="about-image-glow"></div>
                    <img src={profileImg} alt="Mohyuddin Rao" className="about-image" />

                    {/* Floating tech badges */}
                    {floatingBadges.map((badge, i) => (
                        <motion.div
                            key={i}
                            className="floating-badge"
                            style={{ left: badge.x, top: badge.y }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: badge.delay + 0.5, type: 'spring', stiffness: 200 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -8, 0] }}
                            // @ts-ignore
                            transition2={{ y: { duration: 3, repeat: Infinity, delay: badge.delay } }}
                        >
                            {badge.icon}
                            <span>{badge.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>

                    <p>
                        I am a Computer Science student at <strong>PAF-KIET (3.53 GPA)</strong> specializing in
                        <span className="highlight"> FastAPI</span>,
                        <span className="highlight"> Firebase</span>, and
                        <span className="highlight"> Advanced n8n Automation</span>.
                    </p>

                    <p>
                        Expert in architecting intelligent workflows, including RAG pipelines and autonomous lead qualification systems.
                        I have a proven track record of delivering production-ready backend solutions and distributed network services
                        for global clients via Upwork.
                    </p>

                    <div className="tech-stack">
                        <h3 className="tech-title">Core Technologies</h3>
                        <div className="tech-icons">
                            <motion.div whileHover={{ scale: 1.3, rotate: 5 }} title="Backend"><Server /></motion.div>
                            <motion.div whileHover={{ scale: 1.3, rotate: -5 }} title="Database"><Database /></motion.div>
                            <motion.div whileHover={{ scale: 1.3, rotate: 5 }} title="Automation"><Zap /></motion.div>
                            <motion.div whileHover={{ scale: 1.3, rotate: -5 }} title="Code"><Code /></motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
