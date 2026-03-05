import { useState, useMemo, useEffect } from 'react';
import { useProjectData } from '../hooks/useProjectData';
import Tag from '../components/Tag/Tag';
import styles from './ProjectsPage.module.css';

function getStatusClass(status) {
    if (status === 'Activo') return styles.statusActive;
    if (status === 'En desarrollo') return styles.statusDev;
    return styles.statusDone;
}

export default function ProjectsPage() {
    const { fetchProjects, projects, loading, error } = useProjectData();
    const [filter, setFilter] = useState('Todos');

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const categories = useMemo(() => {
        return ['Todos', ...new Set(projects.map((p) => p.category))];
    }, [projects]);

    const filtered = useMemo(() => {
        if (filter === 'Todos') return projects;
        return projects.filter((p) => p.category === filter);
    }, [filter, projects]);

    if (loading) return null;
    if (error) return null;

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
                {filtered.map((project) => {
                    const folderName = project.cover_url
                        ? project.cover_url.split('/').filter(Boolean).pop()
                        : '';

                    return (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.thumb}>
                                {project.cover_url ? (
                                    <img
                                        src={`/${project.cover_url}${folderName}-1.png`}
                                        alt={project.name || project.title}
                                        className={styles.coverImage}
                                    />
                                ) : (
                                    <div className={styles.thumbBg} />
                                )}
                                <span className={styles.cat}>{project.category}</span>
                                {project.status && (
                                    <span className={`${styles.status} ${getStatusClass(project.status)}`}>
                                        {project.status}
                                    </span>
                                )}
                                <span className={styles.thumbLabel}>{project.slug}</span>
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.name}>{project.title}</h3>
                                <p className={styles.blurb}>{project.description}</p>
                                {project.stack && (
                                    <div className={styles.tags}>
                                        {JSON.parse(project.stack).map((tag) => (
                                            <Tag key={tag} label={tag} dark />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}