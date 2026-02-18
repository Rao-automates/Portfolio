import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "Full-stack Automation Freelancer",
            company: "Upwork",
            date: "Oct 2025 – Present",
            description: [
                "Delivering 5+ custom automation solutions involving LLM orchestration and complex API integrations.",
                "Engineered RAG pipelines and automated data reconciliation systems, improving processing efficiency by 30%.",
                "Implementing real-time data persistence using Firebase for client-facing automation dashboards."
            ]
        },
        {
            title: "Founding Partner & Lead Engineer",
            company: "AI Automation Agency",
            date: "Jun 2024 – Sept 2024",
            description: [
                "Launched a specialized agency focused on business process optimization via n8n and FastAPI.",
                "Architected autonomous workflows for client lead qualification and CRM data synchronization.",
                "Managed end-to-end technical delivery and client requirements gathering for 4 months."
            ]
        },
        {
            title: "Senior Business Developer",
            company: "Winklin",
            date: "Oct 2023 – Jan 2024",
            description: [
                "Spearheaded technical lead qualification, aligning complex service offerings with enterprise requirements.",
                "Optimized communication funnels and outreach strategies to improve conversion rates."
            ]
        },
        {
            title: "Founder & Lead Strategist",
            company: "Content Writing Startup",
            date: "Jun 2023 – Sept 2023",
            description: [
                "Managed a cross-functional team to deliver technical content, utilizing internal automation to streamline production."
            ]
        }
    ];

    return (
        <section id="experience" className="experience-container">
            <motion.h2
                className="section-title"
                style={{ textAlign: 'center', marginBottom: '4rem' }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Professional Experience
            </motion.h2>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-content">
                            <span className="date">{exp.date}</span>
                            <h3 className="job-title">{exp.title}</h3>
                            <h4 className="company">{exp.company}</h4>
                            <ul className="job-desc">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
