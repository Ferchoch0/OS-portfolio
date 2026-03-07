import { useState, useMemo, useEffect, useRef } from 'react';
import { getProjectsForCatalog } from '../data/projects';
import TechBadge from '../components/TechBadge/TechBadge';
import styles from './ProjectsPage.module.css';
import ProjectModal from '../components/ProjectModal/ProjectModal';

// Carousel component for each card
function ProjectCarousel({ project, hasImage }) {
    const [currentImage, setCurrentImage] = useState(0);
    const maxImages = project.images?.length || 0;

    useEffect(() => {
        if (maxImages <= 1 || !hasImage) return;

        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % maxImages);
        }, 3000 + Math.random() * 2000); // 3-5s random to stagger them

        return () => clearInterval(interval);
    }, [maxImages, hasImage]);

    if (!hasImage) {
        return (
            <div className={styles.thumbFallback}>
                <span className={styles.fallbackLabel}>{project.label}</span>
                <div className={styles.fallbackPattern}></div>
            </div>
        );
    }

    return (
        <div className={styles.carouselContainer}>
            {project.images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`${project.name || project.title} image ${i + 1}`}
                    className={`${styles.coverImage} ${currentImage === i ? styles.activeImage : ''}`}
                />
            ))}

            {maxImages > 1 && (
                <div className={styles.carouselIndicators}>
                    {Array.from({ length: maxImages }).map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.indicator} ${currentImage === i ? styles.activeIndicator : ''}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ProjectsPage() {
    const [filter, setFilter] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState(null);
    const allProjects = getProjectsForCatalog();

    const categories = useMemo(() => {
        return ['Todos', ...new Set(allProjects.map((p) => p.category))];
    }, [allProjects]);

    const filtered = useMemo(() => {
        if (filter === 'Todos') return allProjects;
        return allProjects.filter((p) => p.category === filter);
    }, [filter, allProjects]);

    return (
        <div className={styles.page}>
            {/* ── Hero Header ── */}
            <div className={styles.hero}>
                <div className={styles.heroGlow}></div>
                <div className={styles.headerContent}>
                    <p className={styles.eyebrow}>
                        <span className={styles.eyebrowLine}></span>
                        Nuestro trabajo
                    </p>
                    <h1 className={styles.title}>
                        Todos nuestros<br />
                        <em>proyectos</em>
                    </h1>
                    <p className={styles.subtitle}>
                        Sistemas, aplicaciones y soluciones digitales que construimos para clientes reales con necesidades reales.
                    </p>

                    {/* ── Stats Row ── */}
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>{allProjects.length}</span>
                            <span className={styles.statLabel}>Proyectos</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>{categories.length - 1}</span>
                            <span className={styles.statLabel}>Categorías</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>{allProjects.filter(p => p.live_url).length}</span>
                            <span className={styles.statLabel}>En producción</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Filter Bar ── */}
            <div className={styles.filtersWrap}>
                <div className={styles.filters}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            <span className={styles.filterDot}></span>
                            {cat}
                        </button>
                    ))}
                </div>
                <span className={styles.filterCount}>
                    {filtered.length} {filtered.length === 1 ? 'proyecto' : 'proyectos'}
                </span>
            </div>

            {/* ── Projects Grid ── */}
            <div className={styles.grid}>
                {filtered.map((project, index) => {
                    const hasImage = project.images && project.images.length > 0;
                    const stackArr = project.stack || [];

                    return (
                        <div
                            key={project.id}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.08}s`, cursor: 'pointer' }}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Thumbnail */}
                            <div className={styles.thumb}>
                                <ProjectCarousel
                                    project={project}
                                    hasImage={hasImage}
                                />

                                {/* Overlay gradient */}
                                <div className={styles.thumbOverlay}></div>

                                {/* Header Badges */}
                                <div className={styles.badgesWrapper}>
                                    <span className={styles.cat}>
                                        <span className={styles.catDot}></span>
                                        {project.category}
                                    </span>

                                    {project.featured && (
                                        <div className={styles.featuredBadgeWrapper}>
                                            <div className={styles.featuredGlow}></div>
                                            <span className={styles.featuredBadge}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                Destacado
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Hover reveal */}
                                <div className={styles.thumbReveal}>
                                    <div className={styles.viewMoreBtn}>
                                        <span>Ver Más</span>
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className={styles.info}>
                                <div className={styles.infoTop}>
                                    <h3 className={styles.name}>{project.title}</h3>
                                    <span className={styles.projectIndex}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <p className={styles.blurb}>
                                    {project.description && project.description.length > 140
                                        ? project.description.substring(0, 140) + '...'
                                        : project.description}
                                </p>
                                {stackArr.length > 0 && (
                                    <div className={styles.tags}>
                                        {stackArr.map((tech) => (
                                            <TechBadge key={tech} tech={tech} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}