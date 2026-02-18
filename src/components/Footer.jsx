import './Footer.css';
import { Mail, Linkedin, Github, ExternalLink, Server, Terminal, Monitor, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from './Toast';

const Skills = () => {
    const skills = {
        "Automation & AI": { icon: <Cpu size={20} />, items: ["n8n Orchestration", "RAG Pipelines", "AI Agents", "LinkedIn Automation"] },
        "Backend Engineering": { icon: <Server size={20} />, items: ["FastAPI", "Python", "Flask", "Firebase"] },
        "Microsoft Stack": { icon: <Monitor size={20} />, items: [".NET Framework", "C#", "SQL Server", "Windows Apps", "Visual Studio"] },
        "DevOps & Cloud": { icon: <Terminal size={20} />, items: ["Docker", "AWS (EC2)", "GitHub Actions", "Linux"] }
    };

    return (
        <section id="skills" className="skills-container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Skills & Tools
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    style={{ margin: '0.5rem auto 0' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Technologies I work with daily.
                </motion.p>
            </div>

            <div className="skills-grid">
                {Object.entries(skills).map(([category, data], idx) => (
                    <motion.div
                        key={category}
                        className="skill-category"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="skill-category-header">
                            <span style={{ color: 'var(--accent-1)' }}>{data.icon}</span>
                            <h3>{category}</h3>
                        </div>
                        <div className="skill-list">
                            {data.items.map((skill, index) => (
                                <span key={index} className="skill-chip">{skill}</span>
                            ))}
                        </div>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="contact-heading">
                    Let's Build <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Something</span> Together
                </h2>
                <p className="contact-desc">
                    I'm always open to new opportunities and collaborations.
                    Feel free to reach out if you have a project in mind.
                </p>

                <div className="contact-links">
                    <motion.div
                        whileHover={{ y: -3 }}
                        className="social-icon"
                        title="Email"
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            navigator.clipboard.writeText("mohyuddinrao.dev@gmail.com");
                            addToast("Email copied to clipboard!");
                            window.location.href = "mailto:mohyuddinrao.dev@gmail.com";
                        }}
                    >
                        <Mail size={22} />
                    </motion.div>
                    <motion.a whileHover={{ y: -3 }} href="https://www.linkedin.com/in/mohyuddin-rao-b9aa8337a" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
                        <Linkedin size={22} />
                    </motion.a>
                    <motion.a whileHover={{ y: -3 }} href="https://github.com/Rao-automates" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
                        <Github size={22} />
                    </motion.a>
                    <motion.a whileHover={{ y: -3 }} href="https://www.upwork.com/freelancers/~0126577e0d5102025d" target="_blank" rel="noreferrer" className="social-icon" title="Upwork">
                        <ExternalLink size={22} />
                    </motion.a>
                </div>
            </motion.div>

            <footer className="footer-bottom">
                <p>© {new Date().getFullYear()} Mohyuddin Rao. All rights reserved.</p>
            </footer>
        </section>
    );
};

export { Skills, Contact };
