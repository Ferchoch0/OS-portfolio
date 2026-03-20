import styles from './SectionBadge.module.css';

const SectionBadge = ({ text, centered = false, variant = '', className = '' }) => {
    return (
        <div className={`${styles.badge} ${centered ? styles.centered : ''} ${variant ? styles[variant] : ''} ${className}`}>
            <span className={`${styles.badgeLine} ${styles.lineLeft}`}></span>
            {text}
            <span className={`${styles.badgeLine} ${styles.lineRight} ${!centered ? styles.desktopHidden : ''}`}></span>
        </div>
    );
};

export default SectionBadge;
