import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../../components/Button/Button';
import styles from './ProjectsPreview.module.css';
import { useScrollShrink } from '../../components/Image/ShrinkingHeader';
import { useProjectData } from '../../hooks/useProjectData';
import { useEffect } from 'react';

export default function ProjectsPreview() {
    const { sectionRef, targetRef, progress, hasShrunk, rects } = useScrollShrink();
    const revealRef = useScrollReveal();
    const { projects, loading, fetchProjectsByPosition } = useProjectData();

    useEffect(() => {
        fetchProjectsByPosition();
    }, [fetchProjectsByPosition]);

    const previewProjects = projects.slice(0, 3).map(p => ({
        ...p,
        large: p.home_position === "1" || p.home_position === 1,
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
            style={{ padding: '120px 56px', position: 'relative' }}
        >
            <p className="s-label reveal" ref={revealRef}>Trabajo real</p>
            <h2 className="s-title reveal" ref={revealRef}>
                Proyectos que <em>hablan</em><br />por nosotros.
            </h2>

            <div className={styles.gallery} ref={revealRef}>
                {!loading && previewProjects.map((project) => {
                    const isLarge = project.large;
                    const isPlaceholder = isLarge && !hasShrunk;
                    const folderName = project.cover_url ? project.cover_url.split('/').filter(Boolean).pop() : '';

                    return (
                        <div
                            key={project.id}
                            ref={isLarge ? targetRef : null}
                            className={`${styles.card} ${isLarge ? styles.large : ''}`}
                            style={{ opacity: isPlaceholder ? 0 : 1 }}
                        >
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
                                <span className={styles.thumbLabel}>{project.label}</span>
                            </div>
                            <div className={styles.info}>
                                <h4 className={styles.name}>{project.name}</h4>
                                <p className={styles.blurb}>{project.blurb}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {!loading && (
                <div className={styles.cta} ref={revealRef}>
                    <span className={styles.count}>Mostrando 3 de {projects.length}+ proyectos</span>
                    <Button variant="ink" to="/project">Ver todos los proyectos</Button>
                </div>
            )}

            {!loading && !hasShrunk && largeProject && (
    <div style={floatingStyle} className={`${styles.card} ${styles.large}`}>
        <div className={styles.thumb}>
            {largeProject.cover_url ? (
                <img
                    src={`/${largeProject.cover_url}${largeProject.cover_url.split('/').filter(Boolean).pop()}-1.png`}
                    alt={largeProject.name || largeProject.title}
                    className={styles.coverImage}
                    // ← imagen siempre visible, el contenedor es el que shrinka
                />
            ) : (
                <div className={styles.thumbBg} />
            )}
            <span className={styles.cat}>{largeProject.category}</span>
            {/* ← sin transform, sin transition override, sin opacity */}
            <span className={styles.thumbLabel}>{largeProject.label}</span>
        </div>
        <div className={styles.info} style={{ opacity: progress }}>
            <h4 className={styles.name}>{largeProject.name}</h4>
            <p className={styles.blurb}>{largeProject.blurb}</p>
        </div>
    </div>
)}
        </section>
    );
}