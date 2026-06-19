import profileImg from '../assets/profile_new.jpg';
import { Code, Database, Server, Zap, Braces, Cloud, Bot, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '1rem' }}>
            <div className="section-header">
                <h2>About Me</h2>
                <span className="type-badge nonhomo">Profile</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <motion.div
                    className="neu-card"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                >
                    <img 
                        src={profileImg} 
                        alt="Mohyuddin Rao" 
                        style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', boxShadow: 'var(--neu-shadow)', marginBottom: '20px' }} 
                    />
                    <h3 className="text-gradient" style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>Mohyuddin Rao</h3>
                    <p style={{ color: 'var(--text-light)', fontWeight: 600 }}>Computer Science Student</p>
                    <p style={{ color: 'var(--accent)', fontWeight: 800 }}>PAF-KIET (3.53 GPA)</p>
                </motion.div>

                <motion.div
                    className="neu-card"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="card-title">Background</div>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', marginBottom: '20px', lineHeight: 1.6 }}>
                        Specializing in <strong style={{ color: 'var(--accent)' }}>FastAPI</strong>, <strong style={{ color: 'var(--accent)' }}>Firebase</strong>, and <strong style={{ color: 'var(--accent)' }}>Advanced n8n Automation</strong>.
                    </p>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', marginBottom: '30px', lineHeight: 1.6 }}>
                        Expert in architecting intelligent workflows, including RAG pipelines and autonomous lead qualification systems. I have a proven track record of delivering production-ready backend solutions and distributed network services for global clients via Upwork.
                    </p>

                    <div className="card-title">Core Technologies</div>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <div className="nav-num" style={{ width: '40px', height: '40px', fontSize: '18px' }} title="Backend"><Server size={18}/></div>
                        <div className="nav-num" style={{ width: '40px', height: '40px', fontSize: '18px' }} title="Database"><Database size={18}/></div>
                        <div className="nav-num" style={{ width: '40px', height: '40px', fontSize: '18px', color: 'var(--accent)' }} title="Automation"><Zap size={18}/></div>
                        <div className="nav-num" style={{ width: '40px', height: '40px', fontSize: '18px' }} title="Code"><Code size={18}/></div>
                        <div className="nav-num" style={{ width: '40px', height: '40px', fontSize: '18px', color: 'var(--homo)' }} title="AI"><Bot size={18}/></div>
                        <div className="nav-num" style={{ width: '40px', height: '40px', fontSize: '18px', color: 'var(--nonhomo)' }} title="Workflows"><Workflow size={18}/></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
