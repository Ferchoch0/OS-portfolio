import { useState } from 'react';
import Tag from '../components/Tag/Tag';
import SectionBadge from '../components/SectionBadge/SectionBadge';
import styles from './UpdatesPage.module.css';

const CATEGORIES = ['Todos', 'Lanzamiento', 'Feature', 'Mejora', 'Automatización', 'Comunidad'];

const featuredUpdate = {
    date: '18 Mar 2026',
    title: 'Lanzamiento oficial de Otter.ly',
    desc: 'Nuestra plataforma de desarrollo, consultoría y automatización ya está disponible para empresas que buscan soluciones reales. Diseño, código y automatización — todo bajo un mismo equipo.',
    project: 'Otter.ly',
    category: 'Lanzamiento',
    tags: ['web', 'plataforma', 'lanzamiento'],
};

const updates = [
    {
        id: 2,
        date: '15 Mar 2026',
        title: 'OtterTask entra en beta cerrada',
        desc: 'El sistema de gestión de stock y ventas está en pruebas con los primeros usuarios seleccionados.',
        project: 'OtterTask',
        category: 'Lanzamiento',
        tags: ['producto', 'beta'],
    },
    {
        id: 3,
        date: '12 Mar 2026',
        title: 'Pipeline de automatización con n8n',
        desc: 'Nuevo sistema de notificaciones automáticas, reportes generados y publicaciones en redes sociales vía n8n.',
        project: 'OtterTask',
        category: 'Automatización',
        tags: ['n8n', 'integración'],
    },
    {
        id: 4,
        date: '10 Mar 2026',
        title: 'Módulo de reportes avanzados',
        desc: 'Reportes de inventario con gráficos dinámicos, exportación a PDF y programación de envío automático.',
        project: 'OtterTask',
        category: 'Feature',
        tags: ['reportes', 'analytics'],
    },
    {
        id: 5,
        date: '08 Mar 2026',
        title: 'Optimización de rendimiento web',
        desc: 'Reducción del 40% en tiempos de carga del portfolio mediante lazy loading, code splitting y optimización de assets.',
        project: 'Otter.ly',
        category: 'Mejora',
        tags: ['performance', 'web'],
    },
    {
        id: 6,
        date: '05 Mar 2026',
        title: 'Sistema de alertas de stock bajo',
        desc: 'Notificaciones automáticas cuando el inventario baja de los umbrales configurados por el usuario.',
        project: 'OtterTask',
        category: 'Feature',
        tags: ['alertas', 'stock'],
    },
    {
        id: 7,
        date: '01 Mar 2026',
        title: 'Integración con proveedores',
        desc: 'Flujo completo de órdenes de compra conectado directamente con los proveedores principales.',
        project: 'OtterTask',
        category: 'Feature',
        tags: ['proveedores', 'compras'],
    }
];

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
