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
            <img src="/logo_blanco.png" alt="" className={styles.logo} />

            <button
                className={styles.menuToggle}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
                {navLinks.map((link) => (
                    <li key={link.label}>
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
            </ul>

            <a
                href="/#contacto"
                className={styles.cta}
                onClick={(e) => handleNavClick(e, { to: '/#contacto' })}
            >
                Hablemos
            </a>
        </nav>
    );
}
