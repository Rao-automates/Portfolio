import './About.css';
import profileImg from '../assets/profile_new.jpg';
import { Code, Database, Server, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-container">
            <div className="about-content">
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="about-image-bg"></div>
                    <img src={profileImg} alt="Mohyuddin Rao" className="about-image" />
                </motion.div>

                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>

                    <p>
                        I am a Computer Science student at <strong>PAF-KIET (3.53 GPA)</strong> specializing in
                        <span style={{ color: 'var(--accent-primary)' }}> FastAPI</span>,
                        <span style={{ color: 'var(--accent-primary)' }}> Firebase</span>, and
                        <span style={{ color: 'var(--accent-primary)' }}> Advanced n8n Automation</span>.
                    </p>

                    <p>
                        Expert in architecting intelligent workflows, including RAG pipelines and autonomous lead qualification systems.
                        I have a proven track record of delivering production-ready backend solutions and distributed network services
                        for global clients via Upwork.
                    </p>

                    <div className="tech-stack">
                        <h3 className="tech-title">Core Technologies</h3>
                        <div className="tech-icons">
                            <motion.div whileHover={{ scale: 1.2, color: '#ec4899' }} title="Backend"><Server /></motion.div>
                            <motion.div whileHover={{ scale: 1.2, color: '#ec4899' }} title="Database"><Database /></motion.div>
                            <motion.div whileHover={{ scale: 1.2, color: '#ec4899' }} title="Automation"><Zap /></motion.div>
                            <motion.div whileHover={{ scale: 1.2, color: '#ec4899' }} title="Code"><Code /></motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
