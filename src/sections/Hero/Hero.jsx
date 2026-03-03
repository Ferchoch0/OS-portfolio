import Button from '../../components/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.left}>
                <p className={styles.eyebrow}>Desarrollo · Consultoría · Automatización</p>
                <h1 className={styles.title}>
                    Software<br />
                    <em>que resuelve</em><br />
                    <span className={styles.accent}>de verdad.</span>
                </h1>
                <p className={styles.sub}>
                    Sistemas a medida, aplicaciones y automatizaciones para empresas que necesitan soluciones reales — no templates.
                </p>
                <div className={styles.actions}>
                    <Button variant="primary" href="#servicios">Ver servicios</Button>
                    <Button variant="text" href="#proyectos">Ver proyectos</Button>
                </div>
            </div>

            <div className={styles.otter}>
                
            </div>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.statNum}>12<sup>+</sup></span>
                    <span className={styles.statLabel}>Proyectos</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNum}>3</span>
                    <span className={styles.statLabel}>Developers</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNum}>1</span>
                    <span className={styles.statLabel}>Producto propio</span>
                </div>
            </div>
        </section>
    );
}
