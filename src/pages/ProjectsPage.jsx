import { useState, useMemo, useEffect, useRef } from 'react';
import { getProjectsForCatalog } from '../data/projects';
import TechBadge from '../components/TechBadge/TechBadge';
import styles from './ProjectsPage.module.css';
import ProjectModal from '../components/ProjectModal/ProjectModal';
import FilterBar from '../components/FilterBar/FilterBar';


// ── Grid Perspective Background ──
function GridBackground() {
    const canvasRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        let t = 0;
        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            const horizon = H * 0.52;
            const vx = W / 2;
            const vy = horizon;
            const cols = 18;
            const rows = 14;
            const spread = W * 2.2;
            const offset = t % 1;

            // Vertical lines (converging to vanishing point)
            for (let i = 0; i <= cols; i++) {
                const fx = ((i / cols) - 0.5) * spread;
                const nearX = vx + (fx / spread) * W * 2.5;
                const alpha = 0.08 + 0.07 * (1 - Math.abs((i / cols) - 0.5) * 2);
                ctx.beginPath();
                ctx.moveTo(vx, vy);
                ctx.lineTo(nearX, H);
                ctx.strokeStyle = `rgba(107,63,160,${alpha})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }

            // Horizontal lines (receding into distance)
            for (let j = 0; j <= rows; j++) {
                const p = (j + offset) / rows;
                const pf = p * p;
                const y = horizon + (H - horizon) * pf;
                if (y > H) continue;
                const hw = (spread / 2) * pf * 1.4;
                const alpha = 0.04 + 0.1 * pf;
                ctx.beginPath();
                ctx.moveTo(vx - hw, y);
                ctx.lineTo(vx + hw, y);
                ctx.strokeStyle = `rgba(107,63,160,${alpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            // Subtle center glow pulse
            const grd = ctx.createRadialGradient(vx, vy, 0, vx, vy, W * 0.4);
            grd.addColorStop(0, `rgba(107,63,160,${0.04 + 0.02 * Math.sin(t * Math.PI * 2)})`);
            grd.addColorStop(1, 'rgba(107,63,160,0)');
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, W, H);

            t += 0.004;
            animRef.current = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.gridCanvas} />;
}


// ── Scramble Text Hook ──
function useScramble(finalText, delay = 300) {
    const [text, setText] = useState('');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

    useEffect(() => {
        let iter = 0;
        let interval;
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                setText(
                    finalText.split('').map((char, i) => {
                        if (char === ' ') return ' ';
                        if (i < iter) return char;
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join('')
                );
                if (iter >= finalText.length) {
                    clearInterval(interval);
                    setText(finalText);
                }
                iter += 0.6;
            }, 40);
        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [finalText, delay]);

    return text || finalText;
}


// ── Tech Ticker ──
function TechTicker() {
    const techs = [
        'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL',
        'Tailwind', 'AWS', 'Docker', 'Prisma', 'Stripe',
        'Redis', 'Supabase', 'Vercel', 'GraphQL', 'Python',
        'Figma', 'MongoDB', 'Firebase', 'tRPC', 'Zod',
    ];
    const doubled = [...techs, ...techs];

    return (
        <div className={styles.tickerOuter}>
            <div className={styles.tickerTrack}>
                {doubled.map((t, i) => (
                    <span key={i} className={styles.tickerItem}>
                        <span className={styles.tickerDot}></span>
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}


// ── Wave / Slash Divider ──
function HeroDivider() {
    return (
        <div className={styles.heroDivider}>
            {/* Slash grid pattern */}
            <div className={styles.dividerSlashes}>
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className={styles.dividerSlash} style={{ animationDelay: `${i * 0.04}s` }} />
                ))}
            </div>

            {/* SVG wave */}
            <svg
                className={styles.dividerWave}
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
                    fill="rgba(107,63,160,0.06)"
                />
                <path
                    d="M0,55 C200,20 400,70 600,45 C800,20 1000,65 1200,40 C1320,25 1400,50 1440,45 L1440,80 L0,80 Z"
                    fill="rgba(107,63,160,0.04)"
                />
                {/* Animated scanning line */}
                <line x1="0" y1="40" x2="1440" y2="40" stroke="rgba(139,92,200,0.15)" strokeWidth="0.5" />
            </svg>

            {/* Corner markers */}
            <div className={styles.dividerMarker} style={{ left: '5%' }}>
                <span className={styles.markerLine}></span>
                <span className={styles.markerText}>scroll</span>
                <span className={styles.markerLine}></span>
            </div>
            <div className={styles.dividerMarkerRight} style={{ right: '5%' }}>
                <span className={styles.markerLine}></span>
                <span className={styles.markerText}>proyectos</span>
                <span className={styles.markerLine}></span>
            </div>
        </div>
    );
}


// ── 3D Devices Hero Component ──
function DeviceMockups({ projects }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const mockupSlides = useMemo(() => {
        const slides = [];
        projects.forEach((p) => {
            if (p.mockups && p.mockups.length > 0) {
                p.mockups.forEach((m) => {
                    slides.push({
                        desktop: m.desktop,
                        mobile: m.mobile,
                        title: p.title,
                        category: p.category
                    });
                });
            }
        });
        return slides;
    }, [projects]);

    useEffect(() => {
        if (mockupSlides.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % mockupSlides.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [mockupSlides.length]);

    if (mockupSlides.length === 0) return null;

    return (
        <div className={styles.devicesWrapper}>
            {/* ── Monitor ── */}
            <div className={styles.monitorWrap}>
                <div className={styles.monitorInner}>
                    <div className={styles.monitor}>
                        <div className={styles.monitorScreen}>
                            {mockupSlides.map((slide, i) => (
                                <img
                                    key={i}
                                    src={slide.desktop}
                                    alt={slide.title}
                                    className={`${styles.monitorScreenImg} ${currentIndex === i ? styles.monitorScreenImgActive : ''}`}
                                />
                            ))}
                            <div className={styles.monitorReflection}></div>

                            {/* Project Label moved to Monitor */}
                            <div className={styles.monitorProjectLabel}>
                                <span className={styles.monitorLabelDot}></span>
                                <span className={styles.monitorLabelText}>
                                    {mockupSlides[currentIndex]?.title}
                                </span>
                            </div>

                            {/* Indicators moved to Monitor */}
                            <div className={styles.monitorDotsRow}>
                                {mockupSlides.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`${styles.monitorDot} ${currentIndex === i ? styles.monitorDotActive : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.monitorStand}></div>
                    <div className={styles.monitorBase}></div>
                </div>
            </div>

            {/* ── Phone ── */}
            <div className={styles.phoneWrap}>
                <div className={styles.phone}>
                    <div className={styles.phoneNotch}>
                        <div className={styles.phoneSpeaker}></div>
                        <div className={styles.phoneCamera}></div>
                    </div>
                    <div className={styles.phoneBtnPower}></div>
                    <div className={styles.phoneBtnVolUp}></div>
                    <div className={styles.phoneBtnVolDown}></div>
                    <div className={styles.phoneScreen}>
                        {mockupSlides.map((slide, i) => (
                            <img
                                key={i}
                                src={slide.mobile}
                                alt={slide.title}
                                className={`${styles.phoneScreenImg} ${currentIndex === i ? styles.phoneScreenImgActive : ''}`}
                            />
                        ))}
                        <div className={styles.phoneReflection}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// ── Project Carousel Card ──
function ProjectCarousel({ project, hasImage }) {
    const [currentImage, setCurrentImage] = useState(0);
    const maxImages = project.images?.length || 0;

    useEffect(() => {
        if (maxImages <= 1 || !hasImage) return;
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % maxImages);
        }, 4000);
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


// ── Main Page ──
export default function ProjectsPage() {
    const [filter, setFilter] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState(null);
    const allProjects = getProjectsForCatalog();

    const scrambledTitle = useScramble('proyectos', 600);

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
                {/* Animated grid background */}
                <GridBackground />

                <div className={styles.heroInner}>
                    <div className={styles.headerContent}>
                        <p className={styles.eyebrow}>
                            <span className={styles.eyebrowLine}></span>
                            Nuestro trabajo
                        </p>
                        <h1 className={styles.title}>
                            Todos nuestros<br />
                            <em className={styles.scrambleEm}>{scrambledTitle}</em>
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

                    {/* ── 3D Devices ── */}
                    <DeviceMockups projects={allProjects} />
                </div>

                {/* Tech ticker at bottom of hero */}
                <TechTicker />
            </div>

            {/* ── Hero → Content Divider ── */}
            <HeroDivider />

            {/* ── Sidebar filter + grid ── */}
            <div className={styles.pageBody}>
                <FilterBar
                    categories={categories}
                    active={filter}
                    count={filtered.length}
                    allProjects={allProjects}
                    onChange={setFilter}
                />

                <div className={styles.sidebarDivider}></div>

                <div className={styles.gridArea}>
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
                                        <ProjectCarousel project={project} hasImage={hasImage} />
                                        <div className={styles.thumbOverlay}></div>
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
                                                ? project.description.substring(0, 160) + '...'
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
                </div>
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