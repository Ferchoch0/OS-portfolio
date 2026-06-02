import { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';
import InteractiveGrid from '../../components/InteractiveGrid/InteractiveGrid';
import SectionBadge from '../../components/SectionBadge/SectionBadge';
import styles from './Hero.module.css';

const WORDS = ['solution', 'creative', 'reliable', 'different', 'effective'];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [fading, setFading] = useState(false);

    // Intro Splash State
    const [introState, setIntroState] = useState('splash_visible');
    const initialSplash = true; // Force it to true so the CSS delay classes apply

    useEffect(() => {
        const t1 = setTimeout(() => {
            setIntroState('hero_entering');
            const t2 = setTimeout(() => {
                setIntroState('done');
            }, 1200); // Duration of the translation
            return () => clearTimeout(t2);
        }, 1500); // Duration splash screen is fully visible
        return () => clearTimeout(t1);
    }, []);

    const isDone = introState === 'done';

    // Lock body scroll while splash is active
    useEffect(() => {
        if (!isDone) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isDone]);

    // Word rotation effect
    useEffect(() => {
        if (!isDone) return; // Only start rotation after splash is done
        const timer = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setWordIndex(i => (i + 1) % WORDS.length);
                setFading(false);
            }, 400);
        }, 3000);
        return () => clearInterval(timer);
    }, [isDone]);

    return (
        <div className={`${styles.heroContainer} ${!isDone ? styles.introActive : ''} ${initialSplash ? styles.initialSplash : ''}`}>
            <div className={`${styles.heroIntroWrapper} ${introState === 'hero_entering' || isDone ? styles.heroEntering : ''}`}>
                <section className={styles.hero}>
                    <InteractiveGrid />
                    <div className={styles.left}>
                        <SectionBadge text="Desarrollo · Consultoría · Automatización" variant="hero" />

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
                            <Button variant="action" subVariant="hero" to="/contact">Contactanos</Button>
                            <Button variant="uiverse" href="#proyectos">Ver proyectos</Button>
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

                {!isDone && (
                    <div className={styles.splashScreen}>
                        <h2 className={styles.splashText}>Soluciones digitales que marcan la diferencia.</h2>
                    </div>
                )}
            </div>
        </div>
    );
}