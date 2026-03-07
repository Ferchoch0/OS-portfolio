import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../../components/Button/Button';
import styles from './OtterNews.module.css';

const newsItems = [
    {
        name: 'Nuevos Lanzamientos',
        desc: 'Mantente al tanto de los nuevos productos y herramientas que estamos preparando.',
    },
    {
        name: 'Actualizaciones de Plataforma',
        desc: 'Mejoras continuas, nuevas funcionalidades y optimizaciones de rendimiento en nuestras apps.',
    },
    {
        name: 'Comunidad & Eventos',
        desc: 'Únete a nuestras transmisiones, tutoriales y debates sobre tecnología y automatización.',
    },
];

export default function OtterNews() {
    const revealRef = useScrollReveal();

    return (
        <section className={styles.section}>


            <div className={styles.right} ref={revealRef}>
                <ul className={styles.newsList}>
                    {newsItems.map((item, i) => (
                        <li key={i} className={styles.newsItem}>
                            <span className={styles.newsIcon}>→</span>
                            <div>
                                <p className={styles.newsName}>{item.name}</p>
                                <p className={styles.newsDesc}>{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div ref={revealRef} className={`reveal ${styles.left}`}>
                <div>
                    <p className={styles.live}>Novedades y Actualizaciones</p>
                    <h2 className={styles.title}><span>Noticias</span></h2>
                    <p className={styles.desc}>
                        Entérate de las últimas noticias del mundo otter.ly. Descubre nuevos proyectos, actualizaciones y todo lo que estamos construyendo.
                    </p>
                    <Button variant="blue" to="/news">
                        Ver todas las noticias
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </Button>
                </div>
            </div>

        </section>
    );
}
