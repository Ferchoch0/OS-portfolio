import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import Tag from '../components/Tag/Tag';
import styles from './ProjectsPage.module.css';

const categories = ['Todos', ...new Set(projects.map((p) => p.category))];

function getStatusClass(status) {
    if (status === 'Activo') return styles.statusActive;
    if (status === 'En desarrollo') return styles.statusDev;
    return styles.statusDone;
}

export default function ProjectsPage() {
    const [filter, setFilter] = useState('Todos');

    const filtered = useMemo(() => {
        if (filter === 'Todos') return projects;
        return projects.filter((p) => p.category === filter);
    }, [filter]);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <p className={styles.eyebrow}>Nuestro trabajo</p>
                <h1 className={styles.title}>
                    Todos los <em>proyectos</em>
                </h1>
                <p className={styles.subtitle}>
                    Sistemas, aplicaciones y soluciones digitales que construimos para clientes reales con necesidades reales.
                </p>
            </div>

            <div className={styles.filters}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filtered.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.thumb}>
                            <div
                                className={styles.thumbBg}
                                style={{ background: project.gradient }}
                            />
                            <span className={styles.cat}>{project.category}</span>
                            {project.status && (
                                <span className={`${styles.status} ${getStatusClass(project.status)}`}>
                                    {project.status}
                                </span>
                            )}
                            <span className={styles.thumbLabel}>{project.label}</span>
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{project.name}</h3>
                            <p className={styles.blurb}>{project.blurb}</p>
                            {project.tags && (
                                <div className={styles.tags}>
                                    {project.tags.map((tag) => (
                                        <Tag key={tag} label={tag} dark />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
