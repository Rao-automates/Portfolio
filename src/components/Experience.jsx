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
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="section-header">
                <h2>Experience</h2>
                <span className="type-badge nonhomo">Professional</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        style={{
                            background: 'var(--card-bg)',
                            border: '1px solid var(--border-color)',
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            transition: 'border-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                            <div>
                                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '8px' }}>{exp.title}</h3>
                                <div className="text-accent" style={{ fontWeight: 600 }}>{exp.company}</div>
                            </div>
                            <div className="type-badge" style={{ fontSize: '11px' }}>
                                {exp.date}
                            </div>
                        </div>
                        
                        <ul style={{ paddingLeft: '20px', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '1.05rem', lineHeight: 1.6 }}>
                            {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
