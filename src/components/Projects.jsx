import { Github, ExternalLink, Server, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="neu-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.5) }}
            viewport={{ once: true }}
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
        >
            <div className="card-title">
                {project.type || "Project"} {index + 1}
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-color)' }}>
                {project.title}
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '20px', flex: 1 }}>
                {project.description}
            </p>
            
            {project.tech && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {project.tech.map((tag, i) => (
                        <span key={i} className="nav-badge" style={{ padding: '4px 10px', fontSize: '11px', fontWeight: 700 }}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'auto' }}>
                {project.links?.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="neu-btn" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', gap: '8px', flex: 1 }}>
                        {link.icon === 'github' && <Github size={16} />}
                        {link.icon === 'server' && <Server size={16} />}
                        {link.icon === 'mobile' && <Smartphone size={16} />}
                        {link.label}
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "HouseMate (Main Project)",
            description: "A comprehensive construction cost estimator and housing management platform. Includes a Kotlin XML front-end and a robust Python API backend.",
            type: "Featured",
            tech: ["Kotlin", "Android XML", "Python", "FastAPI"],
            links: [
                { label: "Frontend Repo", url: "https://github.com/Rao-automates/HouseMate-Kotlin-XML-Front-end", icon: "mobile" },
                { label: "Backend Repo", url: "https://github.com/Rao-automates/HouseMate-Api-Backend", icon: "server" }
            ]
        },
        {
            title: "LinkedIn Content Automation System",
            description: "Automated Lead Qualification & Scheduling Workflow. An intelligent n8n workflow that automates the entire process from Google Sheets to calendar booking.",
            tech: ["n8n", "AI", "Automation"],
            links: [{ label: "Code", url: "https://github.com/Rao-automates/LinkedIn-Content-Automation-System", icon: "github" }]
        },
        {
            title: "Socket Arcade",
            description: "A real-time multiplayer game server built with Flask and Socket.IO. Transforms your local network into a gaming party hub for seamless Wi-Fi play.",
            tech: ["Python", "Flask", "Socket.IO"],
            links: [{ label: "Code", url: "https://github.com/Rao-automates/Socket-Arcade-", icon: "github" }]
        },
        {
            title: "Music Automaton Composer",
            description: "A procedural melody generator built with React and Web Audio API. Uses Finite State Automata principles to generate sequences in real-time.",
            tech: ["React", "Web Audio API", "FSA"],
            links: [{ label: "Code", url: "https://github.com/Rao-automates/Music-Automaton-Composer", icon: "github" }]
        },
        {
            title: "N8N AI Document Processing Chat",
            description: "Two interconnected n8n workflows creating a complete RAG pipeline for document analysis and intelligent querying.",
            tech: ["n8n", "RAG", "LLM"],
            links: [{ label: "Code", url: "https://github.com/Rao-automates/N8N-AI-Document-Processing-Chat-System", icon: "github" }]
        },
        {
            title: "DrChrono Discharge Sheet Generator",
            description: "An n8n workflow automating patient discharge sheets from DrChrono EHR. Fetches data, generates PDF, and uploads it to the patient's chart.",
            tech: ["n8n", "EHR", "PDF Gen"],
            links: [{ label: "Code", url: "https://github.com/Rao-automates/DrChrono-Discharge-Sheet-Generator", icon: "github" }]
        },
        {
            title: "Campus Lost And Found",
            description: "A Python-based application helping students easily report and find lost items on campus.",
            tech: ["Python"],
            links: [{ label: "Code", url: "https://github.com/Rao-automates/Campus-Lost-And-Found", icon: "github" }]
        },
        {
            title: "Job App Auto Responder",
            description: "Intelligent n8n workflow that monitors Gmail for job emails, classifies them using AI, and sends personalized contextual responses.",
            tech: ["n8n", "Gmail API", "AI"],
            links: [{ label: "Code", url: "https://github.com/Rao-automates/N8N-Job-Application-Auto-Responder-Workflow", icon: "github" }]
        },
        {
            title: "AI Powered Grocery Assistant",
            description: "An intelligent chatbot workflow built with n8n that helps users manage their grocery lists through natural language.",
            tech: ["n8n", "Chatbot", "AI"],
            links: [{ label: "Code", url: "https://github.com/Rao-automates/AI-Powered-Grocery-Assistant-Workflow", icon: "github" }]
        },
        {
            title: "Lead Qualification Scheduling",
            description: "Intelligent n8n workflow automating lead qualification and meeting scheduling from Sheets to calendar confirmation.",
            tech: ["n8n", "Automation"],
            links: [{ label: "Code", url: "https://github.com/Rao-automates/Lead-Qualification-Scheduling-Workflow", icon: "github" }]
        }
    ];

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '1rem' }}>
            <div className="section-header">
                <h2>Featured Projects</h2>
                <span className="type-badge homo">Portfolio</span>
            </div>
            <p className="section-desc">
                A selection of recent work in software engineering, automation workflows, and specialized backends.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
