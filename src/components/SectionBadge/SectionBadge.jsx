import styles from './SectionBadge.module.css';

const SectionBadge = ({ text, centered = false, className = '' }) => {
    return (
        <div className={`${styles.badge} ${centered ? styles.centered : ''} ${className}`}>
            <span className={`${styles.badgeLine} ${styles.lineLeft}`}></span>
            {text}
            {centered && <span className={`${styles.badgeLine} ${styles.lineRight}`}></span>}
        </div>
    );
};

export default SectionBadge;
