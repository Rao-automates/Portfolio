import { motion } from 'framer-motion';
import './TechMarquee.css';

const allTech = [
    "Python", "FastAPI", "Firebase", "n8n", "Docker", "AWS",
    "React", "RAG", "LLM", "AI Agents", ".NET", "C#",
    "SQL Server", "Flask", "Linux", "GitHub Actions", "OCR", "Vector DB"
];

const TechMarquee = () => {
    // Duplicate for seamless loop
    const items = [...allTech, ...allTech];

    return (
        <div className="marquee-container">
            <div className="marquee-fade marquee-fade-left"></div>
            <div className="marquee-fade marquee-fade-right"></div>
            <motion.div
                className="marquee-track"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
            >
                {items.map((tech, i) => (
                    <span key={i} className="marquee-item">{tech}</span>
                ))}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
