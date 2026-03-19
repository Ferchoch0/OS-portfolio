import Tag from '../Tag/Tag';
import styles from './Calendar3D.module.css';

/**
 * Vibrant 3D News Calendar component (Refined/Compact version).
 * @param {{ update: { date: string, title: string, desc: string, category: string, project: string, tags: string[] } }} props
 */
export default function Calendar3D({ update }) {
    if (!update) return null;

    // Parse date "18 Mar 2026"
    const parts = update.date.split(' ');
    const day = parts[0];
    const month = parts[1].toUpperCase();
    const year = parts[2];

    return (
        <div className={styles.calendarWrapper}>
            <div className={styles.calendar}>
                {/* Stacked pages behind */}
                <div className={styles.stackedPages} />

                {/* Spiral binding (Vibrant gradient) */}
                <div className={styles.spiralStrip}>
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className={styles.hole} />
                    ))}
                </div>

                {/* Content Area */}
                <div className={styles.pageBody}>
                    {/* Top: Date Header (Compact) */}
                    <div className={styles.dateHeader}>
                        <div className={styles.day}>{day}</div>
                        <div className={styles.dateInfo}>
                            <div className={styles.month}>{month}</div>
                            <div className={styles.year}>{year}</div>
                        </div>
                    </div>

                    {/* Bottom: News Content */}
                    <div className={styles.cardContent}>
                        <div className={styles.meta}>
                            <span className={styles.badge}>★ DESTACADO</span>
                            <span className={styles.category}>{update.category}</span>
                        </div>
                        
                        <h2 className={styles.title}>{update.title}</h2>
                        <p className={styles.desc}>{update.desc}</p>
                        
                        <div className={styles.footer}>
                            <div className={styles.tags}>
                                {update.tags.slice(0, 2).map(tag => (
                                    <Tag key={tag} label={tag} dark />
                                ))}
                            </div>
                            <span className={styles.project}>{update.project}</span>
                        </div>
                    </div>
                </div>

                {/* Paper details */}
                <div className={styles.perforated} />
                <div className={styles.calendarShadow} />
                
                {/* Visual indicator */}
                <div className={styles.bookmark}>
                    <span className={styles.bookmarkText}>LATEST</span>
                </div>
            </div>
        </div>
    );
}
