import './Footer.css';
import { Mail, Linkedin, Github, ExternalLink, Database, Server, Terminal, Monitor, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from './Toast';

const Skills = () => {
    const skills = {
        "Automation & AI": ["n8n Orchestration", "RAG Pipelines", "AI Agents", "LinkedIn Automation"],
        "Backend Engineering": ["FastAPI", "Python", "Flask", "Firebase"],
        "Microsoft Stack": [".NET Framework", "C#", "SQL Server", "Windows Apps", "Visual Studio"],
        "DevOps & Cloud": ["Docker", "AWS (EC2)", "GitHub Actions", "Linux"]
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="skills-container">
            <motion.h2
                className="section-title"
                style={{ textAlign: 'center', marginBottom: '4rem' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Tech Arsenal
            </motion.h2>

            <div className="skills-grid">
                {Object.entries(skills).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        className="skill-category"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                    >
                        {/* Icon based on category could be added here */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                            {category.includes("Microsoft") ? <Monitor color="#0078D4" /> :
                                category.includes("Backend") ? <Server color="#22c55e" /> :
                                    category.includes("Automation") ? <Cpu color="#ec4899" /> : <Terminal color="#eab308" />}
                            <h3 style={{ margin: 0, border: 'none' }}>{category}</h3>
                        </div>

                        <motion.div
                            className="skill-list"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {items.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="skill-item"
                                    variants={item}
                                    whileHover={{ x: 5, color: "var(--accent-primary)", backgroundColor: "rgba(14, 165, 233, 0.1)" }}
                                >
                                    <span style={{ marginRight: '8px', color: 'var(--accent-secondary)' }}>▹</span>
                                    <span className="skill-name">{skill}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const Contact = () => {
    const addToast = useToast();
    return (
        <section id="contact" className="contact-container">
            <motion.div
                className="contact-content"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h2 className="glitch-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>INITIALIZE CONNECTION</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontFamily: 'monospace' }}>
                    // READY TO COLLABORATE ON NEXT-GEN PROJECTS
                </p>

                <div className="contact-links">
                    <motion.div
                        whileHover={{ y: -5, scale: 1.1, color: "#ea580c" }}
                        className="social-icon"
                        title="Email (Click to Copy)"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            navigator.clipboard.writeText("mohyuddinrao.dev@gmail.com");
                            addToast("Email copied to clipboard!");
                            window.location.href = "mailto:mohyuddinrao.dev@gmail.com";
                        }}
                    >
                        <Mail size={32} />
                    </motion.div>
                    <motion.a whileHover={{ y: -5, scale: 1.1, color: "#0077b5" }} href="https://www.linkedin.com/in/mohyuddin-rao-b9aa8337a" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
                        <Linkedin size={32} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.1, color: "#ffffff" }} href="https://github.com/Rao-automates" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
                        <Github size={32} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.1, color: "#14a800" }} href="https://www.upwork.com/freelancers/~0126577e0d5102025d" target="_blank" rel="noreferrer" className="social-icon" title="Upwork">
                        <ExternalLink size={32} />
                    </motion.a>
                </div>
            </motion.div>

            <footer className="footer-bottom">
                <p style={{ fontFamily: 'monospace', opacity: 0.5 }}>SYSTEM.EXIT(0) // © {new Date().getFullYear()} MOHYUDDIN RAO</p>
            </footer>
        </section>
    );
};

export { Skills, Contact };
