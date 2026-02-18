import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SideNav.css';

const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const SideNav = () => {
    const [active, setActive] = useState('home');
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach(s => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="side-nav">
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`side-nav-dot ${active === section.id ? 'active' : ''}`}
                    onMouseEnter={() => setHovered(section.id)}
                    onMouseLeave={() => setHovered(null)}
                    title={section.label}
                >
                    <span className="dot-inner"></span>
                    <AnimatePresence>
                        {hovered === section.id && (
                            <motion.span
                                className="dot-label"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {section.label}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </a>
            ))}
        </nav>
    );
};

export default SideNav;
