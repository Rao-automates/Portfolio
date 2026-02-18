import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                M.<span>Rao</span>
            </div>

            <nav>
                <ul className="nav-links">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                </ul>
            </nav>

            <a href="#contact" className="cta-button">Hire Me</a>
        </header>
    );
};

export default Header;
