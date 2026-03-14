import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './ProjectModal.module.css';
import TechBadge from '../TechBadge/TechBadge';
import Button from '../Button/Button';

export default function ProjectModal({ project, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
    const [isVertical, setIsVertical] = useState(false);
    const mainImageRef = useRef(null);

    const hasImages = project.images && project.images.length > 0;
    const images = project.images || [];

    const handleManualChange = (index) => {
        setCurrentImageIndex(index);
        setAutoPlayEnabled(false);
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (lightboxOpen) setLightboxOpen(false);
                else handleClose();
            }
            if (e.key === 'ArrowRight' && images.length > 1) {
                handleManualChange((currentImageIndex + 1) % images.length);
            }
            if (e.key === 'ArrowLeft' && images.length > 1) {
                handleManualChange((currentImageIndex - 1 + images.length) % images.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, images.length, currentImageIndex]);

    // Autoplay logic
    useEffect(() => {
        if (!hasImages || images.length <= 1 || lightboxOpen || !autoPlayEnabled) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [hasImages, images.length, lightboxOpen, autoPlayEnabled]);

    if (!project) return null;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 400);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        setIsVertical(naturalHeight > naturalWidth);
    };

    // Check orientation immediately if image is already cached
    useEffect(() => {
        if (mainImageRef.current && mainImageRef.current.complete) {
            const { naturalWidth, naturalHeight } = mainImageRef.current;
            if (naturalWidth && naturalHeight) {
                setIsVertical(naturalHeight > naturalWidth);
            }
        }
    }, [currentImageIndex]);

    // Action logic
    const isLive = !!project.live_url;
    const hasGithub = !!project.github_url;

    const modalContent = (
        <div className={`${styles.backdrop} ${isClosing ? styles.fadeOut : styles.fadeIn}`} onClick={handleBackdropClick}>
            <div className={`${styles.modal} ${isClosing ? styles.slideOut : styles.slideIn}`}>
                {/* Close Button */}
                <button className={styles.closeBtn} onClick={handleClose} aria-label="Cerrar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className={styles.content}>
                    {/* ── Left Column: Gallery ── */}
                    <div className={styles.galleryColumn}>
                        {hasImages ? (
                            <div className={styles.galleryWrapper}>
                                <div className={`${styles.mainImageWrapper} ${isVertical ? styles.verticalMode : ''}`} onClick={() => setLightboxOpen(true)}>
                                    {isVertical && (
                                        <div className={styles.blurredBg} style={{ backgroundImage: `url(${images[currentImageIndex]})` }} />
                                    )}
                                    <div className={styles.imageCounter}>
                                        <span className={styles.counterCurrent}>{currentImageIndex + 1}</span>
                                        <span className={styles.counterSeparator}>/</span>
                                        <span className={styles.counterTotal}>{images.length}</span>
                                    </div>
                                    <img
                                        ref={mainImageRef}
                                        src={images[currentImageIndex]}
                                        alt={project.title}
                                        className={styles.mainImage}
                                        onLoad={handleImageLoad}
                                    />
                                    <div className={styles.expandHint}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <polyline points="9 21 3 21 3 15"></polyline>
                                            <line x1="21" y1="3" x2="14" y2="10"></line>
                                            <line x1="3" y1="21" x2="10" y2="14"></line>
                                        </svg>
                                        <span className={styles.expandText}>Click para ampliar</span>
                                    </div>
                                </div>

                                {images.length > 1 && (
                                    <div className={styles.thumbnailsContainer}>
                                        {images.map((src, idx) => (
                                            <div
                                                key={idx}
                                                className={`${styles.thumbnail} ${currentImageIndex === idx ? styles.activeThumbnail : ''}`}
                                                onClick={() => handleManualChange(idx)}
                                            >
                                                <img src={src} alt={`Vista ${idx + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className={styles.noImage}>
                                <div className={styles.noImageBg} />
                                <span className={styles.noImageLabel}>{project.title.substring(0, 3).toUpperCase()}</span>
                            </div>
                        )}
                    </div>

                    {/* ── Right Column: Info ── */}
                    <div className={styles.infoColumn}>
                        <div className={styles.infoScrollable}>
                            <div className={styles.header}>
                                <span className={styles.categoryBadge}>
                                    <span className={styles.catDot}></span>
                                    {project.category}
                                </span>
                                <h2 className={styles.modalTitle}>{project.title}</h2>
                            </div>

                            <div className={styles.description}>
                                <p>{project.description}</p>
                            </div>

                            {project.stack && project.stack.length > 0 && (
                                <div className={styles.techStack}>
                                    <h4 className={styles.sectionLabel}>Stack Tecnológico</h4>
                                    <div className={styles.tags}>
                                        {project.stack.map(tech => <TechBadge key={tech} tech={tech} />)}
                                    </div>
                                </div>
                            )}

                            {/* ── Actions ── */}
                            <div className={styles.actions}>

                                {/* Status indicator */}
                                <div className={styles.statusRow}>
                                    <span className={`${styles.statusDot} ${isLive ? styles.statusDotLive : styles.statusDotPrivate}`} />
                                    <span className={`${styles.statusText} ${isLive ? styles.statusTextLive : styles.statusTextPrivate}`}>
                                        {isLive ? 'En Producción' : 'Proyecto Privado'}
                                    </span>
                                </div>

                                {/* CTA row */}
                                <div className={styles.ctaRow}>

                                    {/* CASO 1 & 2: tiene live_url → "Ver Demo" (con o sin GitHub) */}
                                    {isLive && (
                                        <Button
                                            href={project.live_url}
                                            variant="modal"
                                            subVariant="primary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Ver Demo
                                            <span className={styles.btnArrow}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </span>
                                        </Button>
                                    )}

                                    {/* CASO 3 & 4: no tiene live_url → "Solicitar Demo" */}
                                    {!isLive && (
                                        <Button
                                            href={`mailto:${project.contact_email || 'tu@email.com'}?subject=Demo request — ${project.title}`}
                                            variant="modal"
                                            subVariant="ghost"
                                        >
                                            Solicitar Demo
                                            <span className={styles.btnArrow}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                    <polyline points="22,6 12,13 2,6"></polyline>
                                                </svg>
                                            </span>
                                        </Button>
                                    )}

                                    {/* GitHub: solo si existe (casos 1 y 3) */}
                                    {hasGithub && (
                                        <Button
                                            href={project.github_url}
                                            variant="modal"
                                            subVariant="ghost"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Ver código fuente"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </Button>
                                    )}
                                </div>

                                {/* CASO 4: sin live ni github → nota sutil */}
                                {!isLive && !hasGithub && (
                                    <p className={styles.privateNote}>
                                        El código fuente no está disponible públicamente. Puede solicitar detalles técnicos por email.
                                    </p>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Lightbox ── */}
            {lightboxOpen && hasImages && (
                <div className={styles.lightbox} onClick={() => setLightboxOpen(false)}>
                    <button className={styles.closeBtn} onClick={() => setLightboxOpen(false)} aria-label="Cerrar">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className={styles.imageCounter}>
                        <span className={styles.counterCurrent}>{currentImageIndex + 1}</span>
                        <span className={styles.counterSeparator}>/</span>
                        <span className={styles.counterTotal}>{images.length}</span>
                    </div>

                    <img
                        src={images[currentImageIndex]}
                        alt="Vista completa"
                        className={styles.lightboxImg}
                        onClick={(e) => e.stopPropagation()}
                    />

                    {images.length > 1 && (
                        <>
                            <button
                                className={`${styles.lightboxNav} ${styles.prev}`}
                                onClick={(e) => { e.stopPropagation(); handleManualChange((currentImageIndex - 1 + images.length) % images.length); }}
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button
                                className={`${styles.lightboxNav} ${styles.next}`}
                                onClick={(e) => { e.stopPropagation(); handleManualChange((currentImageIndex + 1) % images.length); }}
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );

    return createPortal(modalContent, document.body);
}