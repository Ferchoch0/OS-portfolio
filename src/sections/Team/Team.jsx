import { useScrollReveal } from '../../hooks/useScrollReveal';
import { team } from '../../data/team';
import styles from './Team.module.css';

function TeamCard({ name, role, desc, image, portfolioUrl, accentColor }) {
    return (
        <div className={styles.card}>
            <div className={styles.otterFrame}>
                <img src={image} alt={`${role} otter`} />
                <div
                    className={styles.glow}
                    style={{
                        background: `radial-gradient(ellipse, ${accentColor.replace('var(--violet2)', 'rgba(107,63,160,.45)').replace('var(--blue)', 'rgba(34,85,204,.45)').replace('var(--red)', 'rgba(192,40,44,.35)')} 0%, transparent 70%)`,
                    }}
                />
            </div>
            <div className={styles.info}>
                <p className={styles.role} style={{ color: accentColor }}>{role}</p>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.desc}>{desc}</p>
                <a href={portfolioUrl} className={styles.link}>
                    Ver portafolio
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default function Team() {
    const revealRef = useScrollReveal();

    return (
        <section className="section-dark" id="equipo" style={{ padding: '120px 56px' }}>
            <p className="s-label reveal" ref={revealRef} style={{ color: 'rgba(245,242,236,.3)' }}>
                El equipo
            </p>
            <h2 className="s-title reveal" ref={revealRef} style={{ marginBottom: 56 }}>
                Tres developers,<br /><em>un solo estándar.</em>
            </h2>

            <div className={styles.grid} ref={revealRef}>
                {team.map((member) => (
                    <TeamCard key={member.id} {...member} />
                ))}
            </div>
        </section>
    );
}
