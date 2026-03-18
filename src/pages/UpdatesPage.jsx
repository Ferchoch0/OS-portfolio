import { useState } from 'react';
import Tag from '../components/Tag/Tag';
import { updates } from '../data/updates';
import styles from './UpdatesPage.module.css';

export default function UpdatesPage() {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filteredUpdates = activeFilter === 'Todos'
        ? updates
        : updates.filter(u => u.category === activeFilter);

    const totalCount = updates.length + 1; // +1 for featured

    return (
        <div className={styles.page}>
            {/* ── Header ── */}
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <div className={styles.headerTop}>
                        <SectionBadge text="Lo que estamos construyendo" />
                    </div>
                    <h1 className={styles.title}>
                        Noticias <span>&</span> Updates
                    </h1>
                    <p className={styles.subtitle}>
                        Cada mejora, cada feature, cada lanzamiento — documentado. Seguí de cerca lo que estamos construyendo.
                    </p>
                </div>
            </header>

            {/* ── Featured Hero ── */}
            <article className={styles.hero}>
                <div className={styles.heroAccent} />
                <div className={styles.heroBody}>
                    <div className={styles.heroLeft}>
                        <div className={styles.heroMeta}>
                            <span className={styles.heroBadge}>★ Destacado</span>
                            <span className={styles.heroCategory}>{featuredUpdate.category}</span>
                            <span className={styles.heroDate}>{featuredUpdate.date}</span>
                        </div>
                        <h2 className={styles.heroTitle}>{featuredUpdate.title}</h2>
                        <p className={styles.heroDesc}>{featuredUpdate.desc}</p>
                        <div className={styles.heroFooter}>
                            <div className={styles.heroTags}>
                                {featuredUpdate.tags.map(tag => (
                                    <Tag key={tag} label={tag} dark />
                                ))}
                            </div>
                            <span className={styles.heroProject}>{featuredUpdate.project}</span>
                        </div>
                    </div>
                    <div className={styles.heroDeco}>
                        <span className={styles.heroDecoNum}>01</span>
                        <span className={styles.heroDecoLabel}>Latest</span>
                    </div>
                </div>
            </article>

            {/* ── Filters ── */}
            <div className={styles.filtersRow}>
                <p className={styles.timelineLabel}>Línea de tiempo</p>
                <div className={styles.filters}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Timeline ── */}
            <div className={styles.timeline}>
                {filteredUpdates.map((update, i) => (
                    <article key={update.id} className={styles.entry}>
                        {/* Date column */}
                        <div className={styles.entryDate}>
                            <span className={styles.dateText}>{update.date}</span>
                        </div>

                        {/* Timeline spine */}
                        <div className={styles.spine}>
                            <div className={styles.line} />
                            <span className={styles.dot} />
                        </div>

                        {/* Content card */}
                        <div className={styles.entryContent}>
                            <div className={styles.entryMeta}>
                                <span className={styles.entryCategory}>{update.category}</span>
                                <span className={styles.entryProject}>{update.project}</span>
                            </div>
                            <h3 className={styles.entryTitle}>{update.title}</h3>
                            <p className={styles.entryDesc}>{update.desc}</p>
                            <div className={styles.entryTags}>
                                {update.tags.map((tag) => (
                                    <Tag key={tag} label={tag} dark />
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {filteredUpdates.length === 0 && (
                <div className={styles.emptyState}>
                    <p className={styles.emptyText}>No hay updates en esta categoría.</p>
                </div>
            )}
        </div>
    );
}