import { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import styles from './ProjectsPreview.module.css';
import { useScrollShrink } from '../../components/Image/ShrinkingHeader';
import { getFeaturedProjects, getTotalProjectCount } from '../../data/projects';
import TechBadge from '../../components/TechBadge/TechBadge';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import Button from '../../components/Button/Button';
import SectionBadge from '../../components/SectionBadge/SectionBadge';

export default function ProjectsPreview() {
    const { sectionRef, targetRef, progress, hasShrunk, rects } = useScrollShrink();
    const revealRef = useScrollReveal();
    const [selectedProject, setSelectedProject] = useState(null);

    const allFeatured = getFeaturedProjects();
    const totalCount = getTotalProjectCount();
    const featuredCount = allFeatured.length;

    const previewProjects = allFeatured.map((p, i) => ({
        ...p,
        large: i === 0,
    }));
    const largeProject = previewProjects.find(p => p.large);

    const floatingStyle = {
        position: 'absolute',
        top: `${rects.targetTop * progress}px`,
        left: `${rects.targetLeft * progress}px`,
        width: typeof rects.sectionWidth === 'number'
            ? `${rects.sectionWidth - (rects.sectionWidth - rects.targetWidth) * progress}px`
            : '100%',
        height: typeof rects.sectionHeight === 'number'
            ? `${rects.sectionHeight - (rects.sectionHeight - rects.targetHeight) * progress}px`
            : '100%',
        zIndex: 50,
        pointerEvents: progress === 1 ? 'auto' : 'none',
        overflow: 'hidden',
    };

    return (
        <section
            className="section-light"
            ref={sectionRef}
            id="proyectos"
            style={{position: 'relative' }}
        >
            <div className={styles.header} ref={revealRef}>
                <SectionBadge text="NUESTRO TRABAJO" />
                <h2 className={styles.title}>
                    Proyectos que <span className={styles.titleEm}>hablan</span><br />por nosotros.
                </h2>
            </div>

            <div className={styles.gallery} ref={revealRef}>
                {previewProjects.map((project) => {
                    const isLarge = project.large;
                    const isPlaceholder = isLarge && !hasShrunk;
                    const hasImage = project.images && project.images.length > 0;

                    return (
                        <div
                            key={project.id}
                            ref={isLarge ? targetRef : null}
                            className={`${styles.card} ${isLarge ? styles.large : ''}`}
                            style={{ opacity: isPlaceholder ? 0 : 1, cursor: 'pointer' }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className={styles.thumb}>
                                {hasImage ? (
                                    <img
                                        src={project.images[0]}
                                        alt={project.name || project.title}
                                        className={styles.coverImage}
                                    />
                                ) : (
                                    <div className={styles.thumbBg} />
                                )}
                                <div className={styles.overlay} />
                                <span className={styles.cat}>{project.category}</span>
                                <span className={styles.thumbLabel}>{project.label}</span>

                                <div className={styles.hoverContent}>
                                    <h4 className={styles.hoverTitle}>{project.name || project.title}</h4>
                                    <p className={styles.hoverDesc}>
                                        {project.description
                                            ? project.description.length > 92
                                                ? project.description.substring(0, 92) + '...'
                                                : project.description
                                            : project.description}
                                    </p>
                                    {project.stack && project.stack.length > 0 && (
                                        <div className={styles.hoverTechs}>
                                            {project.stack.map((tech) => (
                                                <TechBadge key={tech} tech={tech} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ── CTA ── */}
            <div className={styles.cta} ref={revealRef}>
                <div className={styles.counterCard}>
                    <div className={styles.counterStat}>
                        <div className={styles.counterMeta}>
                            <span className={styles.counterNum}>{featuredCount} mostrados</span>
                            <span className={styles.counterLabel}>En vitrina ahora</span>
                        </div>
                    </div>
                    <div className={styles.counterStat}>
                        <div className={styles.counterMeta}>
                            <span className={styles.counterNum}>{totalCount} proyectos</span>
                            <span className={styles.counterLabel}>En el catálogo</span>
                        </div>
                    </div>
                </div>

                <Button variant="action" subVariant="cta" to="/project">
                    Ver catálogo completo
                    <span className={styles.ctaArrow}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </span>
                </Button>
            </div>

            {!hasShrunk && largeProject && (
                <div
                    style={{ ...floatingStyle, cursor: 'pointer' }}
                    className={`${styles.card} ${styles.large}`}
                    onClick={() => setSelectedProject(largeProject)}
                >
                    <div className={styles.thumb}>
                        {largeProject.images && largeProject.images.length > 0 ? (
                            <img
                                src={largeProject.images[0]}
                                alt={largeProject.name || largeProject.title}
                                className={styles.coverImage}
                            />
                        ) : (
                            <div className={styles.thumbBg} />
                        )}
                        <div className={styles.overlay} />
                        <span className={styles.cat}>{largeProject.category}</span>
                        <span className={styles.thumbLabel}>{largeProject.label}</span>

                        <div className={styles.hoverContent}>
                            <h4 className={styles.hoverTitle}>{largeProject.name || largeProject.title}</h4>
                            <p className={styles.hoverDesc}>
                                {largeProject.description
                                    ? largeProject.description.length > 100
                                        ? largeProject.description.substring(0, 100) + '...'
                                        : largeProject.description
                                    : largeProject.description}
                            </p>
                            {largeProject.stack && largeProject.stack.length > 0 && (
                                <div className={styles.hoverTechs}>
                                    {largeProject.stack.map((tech) => (
                                        <TechBadge key={tech} tech={tech} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}