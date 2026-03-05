import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import styles from './Hero.module.css';

const WORDS = ['solution', 'creative', 'reliable', 'different', 'effective'];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setWordIndex(i => (i + 1) % WORDS.length);
                setFading(false);
            }, 400);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.left}>
                <p className={styles.eyebrow}>Desarrollo · Consultoría · Automatización</p>

                <div className={styles.titleWrap}>
                    <h1 className={styles.glitch} data-text="Otter.ly">
                        <span className={styles.glitchLetter}>
                            <span className={styles.letterO}>O</span>
                            <span className={styles.letterU}>U</span>
                        </span>tter<span className={styles.dot}>.</span>ly
                    </h1>
                    <p className={`${styles.rotatingWord} ${fading ? styles.fading : ''}`}>
                        {WORDS[wordIndex]}
                    </p>
                </div>

                <p className={styles.sub}>
                    Sistemas a medida, aplicaciones y automatizaciones para empresas que necesitan soluciones reales — no templates.
                </p>
                <div className={styles.actions}>
                    <Button variant="primary" href="#servicios">Ver servicios</Button>
                    <Button variant="text" href="#proyectos">Ver proyectos</Button>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.heroSphere} />

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
            </div>
        </section>
    );
}