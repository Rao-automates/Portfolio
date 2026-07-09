import { useRef } from 'react';
import { Github, ExternalLink, Server, Smartphone } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useSpring, animated } from '@react-spring/web';

// 3D tilt card powered by React Spring
const TiltCard = ({ children, className, style }) => {
    const cardRef = useRef(null);
    const [springs, api] = useSpring(() => ({
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        glare: 0,
        config: { mass: 1, tension: 200, friction: 20 }
    }));

    const handleMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        api.start({
            rotateX: (y - 0.5) * -14,
            rotateY: (x - 0.5) * 14,
            scale: 1.02,
            glare: x,
        });
    };

    const handleLeave = () => api.start({ rotateX: 0, rotateY: 0, scale: 1, glare: 0.5 });

    return (
        <animated.div
            ref={cardRef}
            className={className}
            style={{
                ...style,
                transformStyle: 'preserve-3d',
                rotateX: springs.rotateX,
                rotateY: springs.rotateY,
                scale: springs.scale,
                position: 'relative',
                overflow: 'hidden',
            }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
        >
            {/* Glare overlay */}
            <animated.div style={{
                position: 'absolute',
                inset: 0,
                background: springs.glare.to(g =>
                    `radial-gradient(circle at ${g * 100}% 50%, rgba(204,255,0,0.06), transparent 60%)`
                ),
                pointerEvents: 'none',
                zIndex: 1,
            }} />
            <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {children}
            </div>
        </animated.div>
    );
};

// Motion.dev scroll reveal wrapper
const ScrollReveal = ({ children, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{
                duration: 0.7,
                delay: (index % 2) * 0.15,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <ScrollReveal index={index}>
            <TiltCard className="project-card">
                <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px' }}>
                        {project.type || `Project 0${index + 1}`}
                    </div>
                    <h3 className="card-title">
                        {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: 1.6 }}>
                        {project.description}
                    </p>

                    {project.tech && (
                        <div className="badge-group">
                            {project.tech.map((tag, i) => (
                                <span key={i} className="type-badge">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '40px' }}>
                    {project.links?.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={`neu-btn ${i > 0 ? 'outline' : ''}`} style={{ flex: 1 }}>
                            {link.icon === 'github' && <Github size={18} />}
                            {link.icon === 'server' && <Server size={18} />}
                            {link.icon === 'mobile' && <Smartphone size={18} />}
                            {link.label}
                        </a>
                    ))}
                </div>
            </TiltCard>
        </ScrollReveal>
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
                { label: "Frontend", url: "https://github.com/Rao-automates/HouseMate-Kotlin-XML-Front-end", icon: "mobile" },
                { label: "Backend", url: "https://github.com/Rao-automates/HouseMate-Api-Backend", icon: "server" }
            ]
        },
        {
            title: "LinkedIn Content Automation",
            description: "Automated Lead Qualification & Scheduling Workflow. An intelligent n8n workflow that automates the entire process from Google Sheets to calendar booking.",
            tech: ["n8n", "AI", "Automation"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/LinkedIn-Content-Automation-System", icon: "github" }]
        },
        {
            title: "Socket Arcade",
            description: "A real-time multiplayer game server built with Flask and Socket.IO. Transforms your local network into a gaming party hub for seamless Wi-Fi play.",
            tech: ["Python", "Flask", "Socket.IO"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/Socket-Arcade-", icon: "github" }]
        },
        {
            title: "Music Automaton Composer",
            description: "A procedural melody generator built with React and Web Audio API. Uses Finite State Automata principles to generate sequences in real-time.",
            tech: ["React", "Web Audio API", "FSA"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/Music-Automaton-Composer", icon: "github" }]
        },
        {
            title: "N8N AI Document Chat",
            description: "Two interconnected n8n workflows creating a complete RAG pipeline for document analysis and intelligent querying.",
            tech: ["n8n", "RAG", "LLM"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/N8N-AI-Document-Processing-Chat-System", icon: "github" }]
        },
        {
            title: "DrChrono Automator",
            description: "An n8n workflow automating patient discharge sheets from DrChrono EHR. Fetches data, generates PDF, and uploads it to the patient's chart.",
            tech: ["n8n", "EHR", "PDF Gen"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/DrChrono-Discharge-Sheet-Generator", icon: "github" }]
        },
        {
            title: "Campus Lost & Found",
            description: "A Python-based application helping students easily report and find lost items on campus.",
            tech: ["Python"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/Campus-Lost-And-Found", icon: "github" }]
        },
        {
            title: "Job App Auto Responder",
            description: "Intelligent n8n workflow that monitors Gmail for job emails, classifies them using AI, and sends personalized contextual responses.",
            tech: ["n8n", "Gmail API", "AI"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/N8N-Job-Application-Auto-Responder-Workflow", icon: "github" }]
        },
        {
            title: "Grocery AI Assistant",
            description: "An intelligent chatbot workflow built with n8n that helps users manage their grocery lists through natural language.",
            tech: ["n8n", "Chatbot", "AI"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/AI-Powered-Grocery-Assistant-Workflow", icon: "github" }]
        },
        {
            title: "Lead Qualification Agent",
            description: "Intelligent n8n workflow automating lead qualification and meeting scheduling from Sheets to calendar confirmation.",
            tech: ["n8n", "Automation"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/Lead-Qualification-Scheduling-Workflow", icon: "github" }]
        },
        {
            title: "FlowPlan",
            description: "Industrial-Grade Project Management Suite. Features a robust workspace architecture for managing sprints, databases, and canvases.",
            tech: ["Kotlin", "Android", "Jetpack Compose"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/FlowPlan", icon: "github" }]
        },
        {
            title: "IQ-Warp",
            description: "A cognitive training game with various domains and levels, featuring Room database and Jetpack Compose UI.",
            tech: ["Kotlin", "Android", "Jetpack Compose"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/IQ-Warp", icon: "github" }]
        },
        {
            title: "Jobber",
            description: "Next-Gen Job Search Aggregator & Application Tracker.",
            tech: ["TypeScript", "Web"],
            links: [{ label: "Repository", url: "https://github.com/Rao-automates/jobber", icon: "github" }]
        }
    ];

    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="section-header">
                <h2>Featured Work</h2>
                <span className="type-badge homo">Portfolio</span>
            </div>
            <p className="section-desc">
                A selection of high-impact engineering, autonomous workflows, and specialized backends.
            </p>

            <div className="staggered-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
