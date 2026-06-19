import { motion } from 'framer-motion';

const allTech = [
    "Python", "FastAPI", "Firebase", "n8n", "Docker", "AWS",
    "React", "RAG", "LLM", "AI Agents", ".NET", "C#",
    "SQL Server", "Flask", "Linux", "GitHub Actions", "OCR", "Vector DB"
];

const TechMarquee = () => {
    const items = [...allTech, ...allTech];

    return (
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%', position: 'relative', marginTop: '2rem', padding: '10px 0' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--bg-color), transparent)', zIndex: 2 }}></div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--bg-color), transparent)', zIndex: 2 }}></div>
            
            <motion.div
                style={{ display: 'inline-flex', gap: '20px' }}
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            >
                {items.map((tech, i) => (
                    <div key={i} className="nav-badge" style={{ fontSize: '0.9rem', fontWeight: 700, padding: '8px 16px' }}>
                        {tech}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
