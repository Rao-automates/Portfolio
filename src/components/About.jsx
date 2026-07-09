import profileImg from '../assets/profile_new.jpg';
import { Code, Database, Server, Zap, Bot, Workflow } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'motion/react';
import gsap from 'gsap';

const About = () => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

    // React Spring trail for bento items
    const [trail, api] = useTrail(4, () => ({
        opacity: 0,
        y: 40,
        scale: 0.97,
        config: { mass: 1, tension: 180, friction: 22 }
    }));

    useEffect(() => {
        if (isInView) {
            // Profile image iris reveal via GSAP clip-path
            if (imgRef.current) {
                gsap.fromTo(imgRef.current,
                    { clipPath: 'circle(0% at 50% 50%)', scale: 1.1 },
                    { clipPath: 'circle(60% at 50% 50%)', scale: 1, duration: 1.0, ease: 'power3.out', delay: 0.2 }
                );
            }
            // Stagger bento cards
            api.start(i => ({
                opacity: 1,
                y: 0,
                scale: 1,
                delay: i * 100 + 200,
            }));
        }
    }, [isInView, api]);

    return (
        <div ref={sectionRef} style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="section-header">
                <h2>About</h2>
                <span className="type-badge nonhomo">Profile</span>
            </div>

            <div className="bento-grid">
                {/* Profile card */}
                <animated.div
                    className="bento-item bento-tall"
                    style={{
                        opacity: trail[0].opacity,
                        transform: trail[0].y.to(y => `translateY(${y}px) scale(${trail[0].scale.get()})`),
                        alignItems: 'center', textAlign: 'center', justifyContent: 'center'
                    }}
                >
                    <img
                        ref={imgRef}
                        src={profileImg}
                        alt="Mohyuddin Rao"
                        style={{ width: '100%', maxWidth: '250px', aspectRatio: '1', borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)', marginBottom: '30px' }}
                    />
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>Mohyuddin Rao</h3>
                    <p style={{ color: 'var(--text-light)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '10px' }}>Computer Science</p>
                    <p className="text-accent" style={{ fontWeight: 800 }}>PAF-KIET (3.5 GPA)</p>
                </animated.div>

                {/* Background */}
                <animated.div
                    className="bento-item bento-wide"
                    style={{
                        opacity: trail[1].opacity,
                        transform: trail[1].y.to(y => `translateY(${y}px)`),
                    }}
                >
                    <div className="card-title">Background</div>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '20px', lineHeight: 1.6 }}>
                        Specializing in <strong className="text-accent">FastAPI</strong>, <strong className="text-accent">Firebase</strong>, and <strong className="text-accent">Advanced n8n Automation</strong>.
                    </p>
                    <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Expert in architecting intelligent workflows, including RAG pipelines and autonomous lead qualification systems. I have a proven track record of delivering production-ready backend solutions and distributed network services for global clients.
                    </p>
                </animated.div>

                {/* Core Tech */}
                <animated.div
                    className="bento-item bento-wide"
                    style={{
                        opacity: trail[2].opacity,
                        transform: trail[2].y.to(y => `translateY(${y}px)`),
                    }}
                >
                    <div className="card-title">Core Technologies</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', height: '100%' }}>
                        {[
                            { Icon: Server, label: 'Backend', color: 'var(--text-light)' },
                            { Icon: Database, label: 'Database', color: 'var(--text-light)' },
                            { Icon: Zap, label: 'Automation', color: 'var(--accent)' },
                            { Icon: Code, label: 'Code', color: 'var(--text-light)' },
                            { Icon: Bot, label: 'AI/RAG', color: 'var(--homo)' },
                            { Icon: Workflow, label: 'Workflows', color: 'var(--nonhomo)' },
                        ].map(({ Icon, label, color }) => (
                            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon size={32} color={color} />
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </animated.div>

                {/* Connect */}
                <animated.div
                    className="bento-item bento-wide"
                    style={{
                        opacity: trail[3].opacity,
                        transform: trail[3].y.to(y => `translateY(${y}px)`),
                    }}
                >
                    <div className="card-title">Connect &amp; Links</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', height: '100%', alignContent: 'center' }}>
                        <a href="https://github.com/Rao-automates" target="_blank" rel="noopener noreferrer" className="neu-btn outline" style={{ justifyContent: 'center' }}>GitHub</a>
                        <a href="https://www.linkedin.com/in/mohyuddin-rao-b9aa8337a" target="_blank" rel="noopener noreferrer" className="neu-btn outline" style={{ justifyContent: 'center' }}>LinkedIn</a>
                        <a href="mailto:mohyuddinrao.dev@gmail.com" className="neu-btn outline" style={{ justifyContent: 'center' }}>Email Me</a>
                        <a href="https://www.upwork.com/freelancers/~0126577e0d5102025d" target="_blank" rel="noopener noreferrer" className="neu-btn outline" style={{ justifyContent: 'center' }}>Upwork</a>
                        <a href="https://drive.google.com/file/d/1RN3RIXmvA8jcDu3XAzb_OpVdHkZJ5Xt3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="neu-btn outline" style={{ justifyContent: 'center', gridColumn: '1 / -1', border: '1px solid var(--accent)', color: 'var(--accent)' }}>
                            Download CV
                        </a>
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default About;
