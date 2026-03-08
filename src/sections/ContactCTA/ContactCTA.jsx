import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../../components/Button/Button';
import styles from './ContactCTA.module.css';

export default function ContactCTA() {
    const revealRef = useScrollReveal();

    return (
        <section className={styles.section}>
            <div className={`reveal ${styles.content}`} ref={revealRef}>
                <p className={styles.eyebrow}>
                    <span className={styles.dot}></span>
                    Trabajemos juntos
                </p>
                <h2 className={styles.title}>
                    ¿Tenés un <em>proyecto</em> en mente?
                </h2>
                <p className={styles.desc}>
                    Estamos listos para transformar tu idea en una solución digital de alto impacto. Escribinos y agendemos una llamada.
                </p>
                <div className={styles.actions}>
                    <Button variant="primary" to="/contact">Hablemos ahora</Button>
                </div>
            </div>
        </section>
    );
}
