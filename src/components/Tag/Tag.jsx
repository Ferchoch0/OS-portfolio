import { memo } from 'react';
import styles from './Tag.module.css';

/**
 * @param {{ label: string, soon?: boolean, dark?: boolean }} props
 */
const Tag = ({ label, soon = false, dark = false }) => {
    const cls = [
        styles.tag,
        soon && styles.soon,
        dark && styles.dark,
    ].filter(Boolean).join(' ');

    return <span className={cls}>{soon ? 'Próximamente' : label}</span>;
}

export default memo(Tag);
