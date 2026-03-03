import styles from './Tag.module.css';

/**
 * @param {{ label: string, soon?: boolean, dark?: boolean }} props
 */
export default function Tag({ label, soon = false, dark = false }) {
    const cls = [
        styles.tag,
        soon && styles.soon,
        dark && styles.dark,
    ].filter(Boolean).join(' ');

    return <span className={cls}>{soon ? 'Próximamente' : label}</span>;
}
