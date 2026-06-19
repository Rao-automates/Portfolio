import profileImg from '../assets/profile_new.jpg';
import { Code, Database, Server, Zap, Bot, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="section-header">
                <h2>About</h2>
                <span className="type-badge nonhomo">Profile</span>
            </div>
            
            <div className="bento-grid">
                <motion.div
                    className="bento-item bento-tall"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-50px" }}
                    style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}
                >
                    <img 
                        src={profileImg} 
                        alt="Mohyuddin Rao" 
                        style={{ width: '100%', maxWidth: '250px', aspectRatio: '1', borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)', marginBottom: '30px' }} 
                    />
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>Mohyuddin Rao</h3>
                    <p style={{ color: 'var(--text-light)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '10px' }}>Computer Science</p>
                    <p className="text-accent" style={{ fontWeight: 800 }}>PAF-KIET (3.53 GPA)</p>
                </motion.div>

                <motion.div
                    className="bento-item bento-wide"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="card-title">Background</div>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '20px', lineHeight: 1.6 }}>
                        Specializing in <strong className="text-accent">FastAPI</strong>, <strong className="text-accent">Firebase</strong>, and <strong className="text-accent">Advanced n8n Automation</strong>.
                    </p>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Expert in architecting intelligent workflows, including RAG pipelines and autonomous lead qualification systems. I have a proven track record of delivering production-ready backend solutions and distributed network services for global clients.
                    </p>
                </motion.div>

                <motion.div
                    className="bento-item bento-wide"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="card-title">Core Technologies</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                            <Server size={32} color="var(--text-light)" />
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-light)' }}>Backend</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                            <Database size={32} color="var(--text-light)" />
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-light)' }}>Database</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                            <Zap size={32} className="text-accent" />
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}>Automation</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                            <Code size={32} color="var(--text-light)" />
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-light)' }}>Code</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                            <Bot size={32} color="var(--homo)" />
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--homo)' }}>AI/RAG</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                            <Workflow size={32} color="var(--nonhomo)" />
                            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--nonhomo)' }}>Workflows</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="bento-item bento-wide"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <div className="card-title">Connect & Links</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', height: '100%', alignContent: 'center' }}>
                        <a href="https://github.com/Rao-automates" target="_blank" rel="noopener noreferrer" className="neu-btn outline" style={{ justifyContent: 'center' }}>
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/mohyuddin-rao" target="_blank" rel="noopener noreferrer" className="neu-btn outline" style={{ justifyContent: 'center' }}>
                            LinkedIn
                        </a>
                        <a href="mailto:raomohyuddin75@gmail.com" className="neu-btn outline" style={{ justifyContent: 'center' }}>
                            Email Me
                        </a>
                        <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="neu-btn outline" style={{ justifyContent: 'center' }}>
                            Upwork
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
