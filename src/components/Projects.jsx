import './Projects.css';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    }, []);

    const handleMouseLeave = useCallback(() => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }, []);

    return (
        <motion.div
            ref={cardRef}
            className="project-card spotlight-card gradient-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.15s ease-out' }}
        >
            <span className="project-number">Project 0{index + 1}</span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
                {project.tech.map((tag, i) => (
                    <motion.span
                        key={i}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        viewport={{ once: true }}
                    >
                        {tag}
                    </motion.span>
                ))}
            </div>
            <div className="project-links">
                {project.links.github === '#' ? (
                    <span className="project-link" style={{ cursor: 'not-allowed', opacity: 0.4 }}>
                        <Github size={16} /> Code
                    </span>
                ) : (
                    <a href={project.links.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> Code
                    </a>
                )}
                {project.links.live === '#' ? (
                    <span className="project-link" style={{ cursor: 'not-allowed', opacity: 0.4 }}>
                        <ExternalLink size={16} /> Live Demo
                    </span>
                ) : (
                    <a href={project.links.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> Live Demo
                    </a>
                )}
            </div>
        </motion.div>
    );
};

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
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    style={{ margin: '0.5rem auto 0' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    A selection of recent work in automation and backend engineering.
                </motion.p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
