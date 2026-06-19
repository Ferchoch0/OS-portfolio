import { Link, useNavigate, useLocation } from 'react-router-dom';
import { footerLinks } from '../../data/navigation';
import styles from './Footer.module.css';

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e, link) => {
        if (link.to && link.to.startsWith('/#')) {
            e.preventDefault();
            const sectionId = link.to.replace('/#', '');
            if (location.pathname === '/') {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
                navigate('/');
                setTimeout(() => {
                    const el = document.getElementById(sectionId);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    };

    return (
        <footer className={styles.footer}>
            <span className={styles.logo}>otter.ly</span>
            <div className={styles.links}>
                {footerLinks.map((link) => (
                    link.href ? (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}
                        </a>
                    ) : link.to?.startsWith('/#') ? (
                        <a key={link.label} href={link.to} onClick={(e) => handleClick(e, link)}>
                            {link.label}
                        </a>
                    ) : (
                        <Link key={link.label} to={link.to}>
                            {link.label}
                        </Link>
                    )
                ))}
            </div>
            <span className={styles.copy}>© {new Date().getFullYear()} otter.ly — Desarrollo de software a medida</span>
        </footer>
    );
}
