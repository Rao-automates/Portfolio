import './Projects.css';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "RAG Document Analysis Pipeline",
            description: "Architected a two-stage Retrieval-Augmented Generation (RAG) pipeline using n8n for automated document ingestion and intelligent analysis. Processes unstructured files via OCR.",
            tech: ["n8n", "LLM", "OCR", "Vector DB"],
            links: { github: "https://github.com/Rao-automates/N8N-AI-Document-Processing-Chat-System", live: "#" }
        },
        {
            title: "LinkedIn Content Automation",
            description: "Developed an end-to-end autonomous n8n workflow for content generation, scheduling, and community engagement using LLMs to generate high-authority technical posts.",
            tech: ["n8n", "AI Agents", "LinkedIn API"],
            links: { github: "https://github.com/Rao-automates/LinkedIn-Content-Automation-System", live: "#" }
        },
        {
            title: "Autonomous Lead Qualification",
            description: "Engineered an intelligent n8n workflow that automates the lead qualification process from Google Sheets to calendar booking.",
            tech: ["n8n", "Google Sheets", "Calendar API"],
            links: { github: "https://github.com/Rao-automates/Lead-Qualification-Scheduling-Workflow", live: "#" }
        },
        {
            title: "House-Mate: Cost Estimator",
            description: "Built a FastAPI + Firebase backend that automates construction budgeting based on real-time market data. Deployed on AWS EC2 with Docker.",
            tech: ["FastAPI", "Firebase", "Docker", "AWS"],
            links: { github: "https://github.com/TaskeenZehra/HouseMate-Api-Backend", live: "#" }
        }
    ];

    return (
        <section id="projects" className="projects-container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Featured Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{
                            y: -10,
                            boxShadow: "0 0 25px var(--accent-glow)",
                            borderColor: "var(--accent-primary)"
                        }}
                    >
                        <div style={{ marginBottom: '1rem', color: 'var(--accent-secondary)', position: 'relative', zIndex: 2 }}>
                            <Folder size={40} />
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((tag, i) => (
                                <span key={i} className="tech-tag">{tag}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.links.github === '#' ? (
                                <span
                                    className="project-link"
                                    style={{ cursor: 'not-allowed', opacity: 0.7 }}
                                    onClick={() => alert("Repository is private or not linked yet!")}
                                >
                                    <Github size={18} /> Code
                                </span>
                            ) : (
                                <a
                                    href={project.links.github}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={18} /> Code
                                </a>
                            )}

                            {project.links.live === '#' ? (
                                <span
                                    className="project-link"
                                    style={{ cursor: 'not-allowed', opacity: 0.7 }}
                                    onClick={() => alert("Live demo coming soon!")}
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </span>
                            ) : (
                                <a
                                    href={project.links.live}
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
