import { useScrollReveal } from '../../hooks/useScrollReveal';
import { team } from '../../data/team';
import Button from '../../components/Button/Button';
import SectionBadge from '../../components/SectionBadge/SectionBadge';
import styles from './Team.module.css';

/* ── Tarjeta de Miembro (TeamCard): Fusión de Imagen e Información ── */
function TeamCard({ name, role, desc, image, portfolioUrl, githubUrl, linkedinUrl, mail, accentColor, revealRef, memberId }) {
    const accent = accentColor || 'var(--violet)';

    return (
        <div className={`${styles['tm-card']} ${styles[memberId]} reveal`} style={{ '--c-accent': accent }} ref={revealRef}>
            {/* Imagen del miembro: sin contenedor, flota sobre el resto */}
            {image && <img src={image} alt={name} className={styles['tm-card-img']} loading="lazy" />}

            {/* Información del miembro: se expande al pasar el mouse */}
            <div className={styles['tm-card-info-wrapper']}>
                <div className={styles['tm-card-info']}>
                    <h4 className={styles['tm-card-name']}>{name}</h4>
                    <span className={styles['tm-card-role']}>{role}</span>
                    <p className={styles['tm-card-desc']}>{desc}</p>
                    <div className={styles['tm-card-links']}>
                        {portfolioUrl && portfolioUrl !== '#' && (
                            <Button
                                variant="action"
                                subVariant="team"
                                href={portfolioUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver Portfolio →
                            </Button>
                        )}
                        <div className={styles['tm-card-socials']}>
                            {githubUrl && githubUrl !== '#' && (
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            )}
                             {linkedinUrl && linkedinUrl !== '#' && (
                                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function Team() {
    const revealRef = useScrollReveal();

    return (
        <section className={styles['team-section']} id="equipo">
            <div className={`${styles['team-wrapper']} reveal`} ref={revealRef}>

                {/* ── SUPERIOR: Título de la Sección ── */}
                <div className={styles['team-top']}>
                    <SectionBadge text="Nuestro Equipo & Red de Talento" centered />
                    <h2 className={styles['team-main-title']}>
                        Liderado por expertos, <br />
                        <span className={styles['team-main-em']}>respaldado por talento especializado.</span>
                    </h2>
                </div>

                {/* ── SECCIÓN DE INFORMACIÓN (Visión y Valores) ── */}
                <div className={styles['team-info-section']}>
                    <div className={styles['section-divider']}>
                        <div className={styles['divider-line']}></div>
                        <div className={`${styles['divider-icon']} ${styles['divider-img-wrap']}`}>
                            <img src="/img/icons/vision-valores.png" alt="Visión y Valores" className={styles['divider-img']} />
                        </div>
                        <div className={styles['divider-line']}></div>
                    </div>
                    <h3 className={`${styles['decorated-subtitle']} reveal`} ref={revealRef}>Visión & <span>Valores</span></h3>

                    <div className={styles['trust-grid']}>
                        <div className={`${styles['trust-card']} reveal`} ref={revealRef}>
                            <div className={styles['trust-card-icon']}>
                                <img src="/img/icons/arquitectura.png" alt="Arquitectura Escalable" className={styles['trust-card-img']} />
                            </div>
                            <div className={styles['trust-card-content']}>
                                <h4>Arquitectura Escalable</h4>
                                <p>Diseñamos sistemas robustos preparados para multiplicar tu crecimiento sin comprometer rendimiento ni seguridad.</p>
                            </div>
                        </div>
                        <div className={`${styles['trust-card']} reveal`} ref={revealRef}>
                            <div className={styles['trust-card-icon']}>
                                <img src="/img/icons/soporte.png" alt="Soporte 24/7" className={styles['trust-card-img']} />
                            </div>
                            <div className={styles['trust-card-content']}>
                                <h4>Soporte 24/7</h4>
                                <p>Acompañamiento dedicado y comunicación transparente en cada fase del proyecto.</p>
                            </div>
                        </div>
                        <div className={`${styles['trust-card']} reveal`} ref={revealRef}>
                            <div className={styles['trust-card-icon']}>
                                <img src="/img/icons/user.png" alt="Diseño Centrado en el Usuario" className={styles['trust-card-img']} />
                            </div>
                            <div className={styles['trust-card-content']}>
                                <h4>Diseño Centrado en el Usuario</h4>
                                <p>Interfaces que no solo se ven increíbles, sino que convierten visitantes en clientes reales.</p>
                            </div>
                        </div>
                        <div className={`${styles['trust-card']} reveal`} ref={revealRef}>
                            <div className={styles['trust-card-icon']}>
                                <img src="/img/icons/flash.png" alt="Entrega Ágil" className={styles['trust-card-img']} />
                            </div>
                            <div className={styles['trust-card-content']}>
                                <h4>Entrega Ágil</h4>
                                <p>Sprints cortos, demos frecuentes y entregas puntuales para que veas progreso real cada semana.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── SECCIÓN DE EQUIPO (Miembros) ── */}
                <div className={styles['team-members-section']}>
                    <div className={styles['section-divider']}>
                        <div className={styles['divider-line']}></div>
                        <div className={`${styles['divider-icon']} ${styles['divider-img-wrap']}`}>
                            <img src="/img/icons/team.png" alt="Team" className={styles['divider-img']} />
                        </div>
                        <div className={styles['divider-line']}></div>
                    </div>
                    <h3 className={`${styles['decorated-subtitle']} reveal`} ref={revealRef}>Liderazgo & <span>Dirección Técnica</span></h3>
                    <div className={styles['tm-cards-grid']}>
                        {team.map((member) => (
                            <TeamCard key={member.id} {...member} revealRef={revealRef} memberId={member.name.toLowerCase()} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
