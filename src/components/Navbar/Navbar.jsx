import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useScrolledNav } from '../../hooks/useScrolledNav';
import { navLinks } from '../../data/navigation';
import GlitchLogo from '../GlitchLogo/GlitchLogo';
import styles from './Navbar.module.css';

export default function Navbar() {
    const scrolled = useScrolledNav();
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, link) => {
        setMenuOpen(false);

        // If it's a hash link (section on home page)
        if (link.to.startsWith('/#')) {
            e.preventDefault();
            const sectionId = link.to.replace('/#', '');

            if (location.pathname === '/') {
                // Already on home, scroll to section
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Navigate to home then scroll
                navigate('/');
                setTimeout(() => {
                    const el = document.getElementById(sectionId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <Link to="/">
                <img src="/img/branding/logo_blanco.png" alt="otter.ly - Desarrollo de Software a Medida" className={styles.logo} />
            </Link>

            <button
                className={`${styles.menuToggle} ${menuOpen ? styles.openToggle : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <div className={styles.hamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
                {navLinks
                    .filter(link => link.to !== '/contact')
                    .map((link, index) => (
                        <li key={link.label} style={{ '--item-index': index }}>
                            {link.to.startsWith('/#') ? (
                                <a href={link.to} onClick={(e) => handleNavClick(e, link)}>
                                    {link.label}
                                </a>
                            ) : (
                                <Link to={link.to} onClick={() => setMenuOpen(false)}>
                                    {link.label}
                                </Link>
                            )}
                        </li>
                ))}
                <li className={styles.mobileCtaWrapper} style={{ '--item-index': navLinks.length }}>
                    <Link
                        to="/contact"
                        className={styles.mobileCta}
                        onClick={() => setMenuOpen(false)}
                    >
                        Hablemos
                    </Link>
                </li>
            </ul>

            <Link
                to="/contact"
                className={styles.desktopCta}
                onClick={() => setMenuOpen(false)}
            >
                Hablemos
            </Link>
        </nav>
    );
}
