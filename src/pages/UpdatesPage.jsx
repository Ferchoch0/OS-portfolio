import { useState } from 'react';
import Tag from '../components/Tag/Tag';
import SectionBadge from '../components/SectionBadge/SectionBadge';
import Calendar3D from '../components/Calendar3D/Calendar3D';
import { updates, CATEGORIES, featuredUpdate } from '../data/updates';
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

                <div className={styles.headerRight}>
                    {/* The Calendar IS the hero card now */}
                    <Calendar3D update={featuredUpdate} />
                </div>
            </header>

            {/* Old Hero removed — integrated into Calendar3D */}


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