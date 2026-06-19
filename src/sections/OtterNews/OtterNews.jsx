import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../../components/Button/Button';
import SectionBadge from '../../components/SectionBadge/SectionBadge';
import styles from './OtterNews.module.css';

const featuredNews = {
    category: 'Lanzamiento',
    date: 'Marzo 2026',
    title: 'Otter.ly sale al mundo',
    desc: 'Nuestra plataforma de desarrollo, consultoría y automatización ya está disponible. Sistemas a medida para empresas que necesitan soluciones reales.',
};

const newsItems = [
    {
        category: 'Producto',
        date: 'Mar 2026',
        title: 'OtterTask entra en fase beta',
        desc: 'Sistema de gestión de stock y ventas en pruebas con primeros usuarios.',
    },
    {
        category: 'Plataforma',
        date: 'Mar 2026',
        title: 'Automatizaciones con n8n',
        desc: 'Nuevo pipeline de notificaciones y reportes automáticos integrado.',
    },
    {
        category: 'Comunidad',
        date: 'Próximamente',
        title: 'Transmisiones en vivo',
        desc: 'Tutoriales, debates y sesiones de código abierto sobre tecnología.',
    },
];

export default function OtterNews() {
    const revealRef = useScrollReveal();
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % newsItems.length);
        }, 3500);
    };

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    const goTo = (index) => {
        clearInterval(intervalRef.current);
        setActiveIndex(index);
    };

    return (
        <section className={styles.section}>
            <div ref={revealRef} className="reveal">
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <SectionBadge text="NOVEDADES Y UPDATES" />
                        <h2 className={styles.title}>
                            Noticias <span>&</span> Updates
                        </h2>
                        <p className={styles.desc}>
                            Las últimas actualizaciones de desarrollo, lanzamientos de productos y novedades de nuestro equipo. Descubrí nuevos proyectos, tecnologías y todo lo que estamos construyendo.
                        </p>
                    </div>
                    <Button variant="action" subVariant="cta" to="/news">
                        Ver todas
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </Button>
                </div>
            </div>

            <div className={styles.content} ref={revealRef}>
                {/* Featured — unique hero design */}
                <article className={styles.featured}>
                    <div className={styles.featuredAccent} />
                    <div className={styles.featuredInner}>
                        <div className={styles.featuredMeta}>
                            <span className={styles.featuredBadge}>★ Destacado</span>
                            <span className={styles.category}>{featuredNews.category}</span>
                            <span className={styles.date}>{featuredNews.date}</span>
                        </div>
                        <h3 className={styles.featuredTitle}>{featuredNews.title}</h3>
                        <p className={styles.featuredDesc}>{featuredNews.desc}</p>
                        <div className={styles.featuredFooter}>
                            <span className={styles.readMore}>
                                Leer más
                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span className={styles.featuredProject}>Otter.ly</span>
                        </div>
                    </div>
                    <div className={styles.featuredDeco}>
                        <span className={styles.decoNum}>01</span>
                    </div>
                </article>

                {/* Secondary items (Desktop) */}
                <div className={styles.secondaryList}>
                    {newsItems.map((item, i) => (
                        <article key={i} className={styles.secondaryItem}>
                            <div className={styles.secondaryMeta}>
                                <span className={styles.category}>{item.category}</span>
                                <span className={styles.date}>{item.date}</span>
                            </div>
                            <h4 className={styles.secondaryTitle}>{item.title}</h4>
                            <p className={styles.secondaryDesc}>{item.desc}</p>
                        </article>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className={styles.mobileCarousel}>
                    <div
                        className={styles.carouselTrack}
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {newsItems.map((item, i) => (
                            <div key={i} className={styles.carouselSlide}>
                                <article className={styles.secondaryItem}>
                                    <div className={styles.secondaryMeta}>
                                        <span className={styles.category}>{item.category}</span>
                                        <span className={styles.date}>{item.date}</span>
                                    </div>
                                    <h4 className={styles.secondaryTitle}>{item.title}</h4>
                                    <p className={styles.secondaryDesc}>{item.desc}</p>
                                </article>
                            </div>
                        ))}
                    </div>

                    <div className={styles.dots}>
                        {newsItems.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                                onClick={() => goTo(i)}
                                aria-label={`Noticia ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
