import styles from './Marquee.module.css';

/**
 * Reusable infinite-scroll marquee.
 * @param {{ items: string[], speed?: number, separator?: string }} props
 */
export default function Marquee({ items = [], speed = 24, separator = '—' }) {
    // Duplicate items for seamless loop
    const renderItems = () =>
        items.flatMap((item, i) => [
            <span key={`item-${i}`} className={styles.item}>{item}</span>,
            <span key={`sep-${i}`} className={`${styles.item} ${styles.accent}`}>{separator}</span>,
        ]);

    return (
        <div className={styles.wrap}>
            <div
                className={styles.track}
                style={{ animation: `marqueeScroll ${speed}s linear infinite` }}
            >
                {renderItems()}
                {renderItems()}
            </div>
        </div>
    );
}
