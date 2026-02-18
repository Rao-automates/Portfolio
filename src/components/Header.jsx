import { useState, useEffect } from 'react';
import './Header.css';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuVars = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] }
        },
        exit: {
            scaleY: 0,
            transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
    };

    const mobileLinkVars = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
        open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                M.<span>Rao</span>
            </div>

            <nav className="desktop-nav">
                <ul className="nav-links">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#reviews" className="nav-link">Reviews</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                </ul>
            </nav>

            <a href="#contact" className="cta-button desktop-cta">Hire Me</a>

            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <motion.div
                            className="mobile-nav-links"
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                        >
                            <div className="mobile-menu-header">
                                <span className="logo">M.<span>Rao</span></span>
                                <div onClick={toggleMenu}><X size={24} /></div>
                            </div>

                            {['About', 'Experience', 'Projects', 'Reviews', 'Skills', 'Contact'].map((item) => (
                                <div key={item} className="overflow-hidden">
                                    <motion.div variants={mobileLinkVars} className="mobile-link-wrapper">
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="mobile-nav-link"
                                        >
                                            {item}
                                        </a>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
