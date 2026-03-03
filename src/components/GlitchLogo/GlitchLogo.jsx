import { Link } from 'react-router-dom';
import styles from './GlitchLogo.module.css';

/**
 * @param {{ word: string, glitchWord: string, to?: string }} props
 */
export default function GlitchLogo({ word = 'ottersolutions', glitchWord = 'othersolutions', to = '/' }) {
    return (
        <Link to={to} className={styles.logo}>
            <span className={styles.base}>{word}</span>
            <span className={styles.glitch} aria-hidden="true">{glitchWord}</span>
        </Link>
    );
}
