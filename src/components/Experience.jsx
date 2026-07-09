import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTrail, animated } from '@react-spring/web';
import './Experience.css';


gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const cardsRef = useRef([]);

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

    const [trail, api] = useTrail(experiences.length, () => ({
        opacity: 0,
        y: 40,
        config: { mass: 1, tension: 200, friction: 24 }
    }));

    useEffect(() => {
        // GSAP ScrollTrigger: animate the vertical timeline line drawing
        if (lineRef.current) {
            gsap.fromTo(lineRef.current,
                { scaleY: 0, transformOrigin: 'top center' },
                {
                    scaleY: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        end: 'bottom 50%',
                        scrub: 0.6,
                    }
                }
            );
        }

        // React Spring trail triggered by ScrollTrigger
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
            onEnter: () => {
                api.start((i) => ({
                    opacity: 1,
                    y: 0,
                    delay: i * 120,
                }));
            }
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [api]);

    return (
        <div ref={sectionRef} style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="section-header">
                <h2>Experience</h2>
                <span className="type-badge nonhomo">Professional</span>
            </div>

            <div className="exp-timeline-wrapper">
                {/* Animated vertical line */}
                <div className="exp-timeline-line-track">
                    <div className="exp-timeline-line" ref={lineRef} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', flex: 1 }}>
                    {trail.map((spring, index) => (
                        <animated.div
                            key={index}
                            style={{
                                opacity: spring.opacity,
                                transform: spring.y.to(y => `translateY(${y}px)`),
                                background: 'var(--card-bg)',
                                border: '1px solid var(--border-color)',
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                transition: 'border-color 0.3s ease',
                                position: 'relative',
                            }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                        >
                            {/* Timeline dot */}
                            <div className="exp-dot" />

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                                <div>
                                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)', marginBottom: '8px' }}>
                                        {experiences[index].title}
                                    </h3>
                                    <div className="text-accent" style={{ fontWeight: 600 }}>{experiences[index].company}</div>
                                </div>
                                <div className="type-badge" style={{ fontSize: '11px' }}>
                                    {experiences[index].date}
                                </div>
                            </div>

                            <ul style={{ paddingLeft: '20px', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '1.05rem', lineHeight: 1.6 }}>
                                {experiences[index].description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
