import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projects } from '../../data/projects';
import Button from '../../components/Button/Button';
import styles from './ProjectsPreview.module.css';

export default function ProjectsPreview() {
    const revealRef = useScrollReveal();
    const previewProjects = projects.slice(0, 3);

    return (
        <section className="section-light" id="proyectos" style={{ padding: '120px 56px' }}>
            <p className="s-label reveal" ref={revealRef}>Trabajo real</p>
            <h2 className="s-title reveal" ref={revealRef}>
                Proyectos que <em>hablan</em><br />por nosotros.
            </h2>

            <div className={styles.gallery} ref={revealRef}>
                {previewProjects.map((project) => (
                    <div
                        key={project.id}
                        className={`${styles.card} ${project.large ? styles.large : ''}`}
                    >
                        <div className={styles.thumb}>
                            <div
                                className={styles.thumbBg}
                                style={{ background: project.gradient }}
                            />
                            <span className={styles.cat}>{project.category}</span>
                            <span className={styles.thumbLabel}>{project.label}</span>
                        </div>
                        <div className={styles.info}>
                            <h4 className={styles.name}>{project.name}</h4>
                            <p className={styles.blurb}>{project.blurb}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.cta} ref={revealRef}>
                <span className={styles.count}>Mostrando 3 de {projects.length}+ proyectos</span>
                <Button variant="ink" to="/project">Ver todos los proyectos</Button>
            </div>
        </section>
    );
}
