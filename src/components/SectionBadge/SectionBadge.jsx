import styles from './SectionBadge.module.css';

const SectionBadge = ({ text, className = '' }) => {
    return (
        <div className={`${styles.badge} ${className}`}>
            <span className={styles.badgeLine}></span>
            {text}
        </div>
    );
};

export default SectionBadge;
