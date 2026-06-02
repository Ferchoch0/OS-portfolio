import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useScrollPinReveal } from '../../hooks/useScrollPinReveal';
import { useServiceSelector } from '../../hooks/useServiceSelector';
import { serviceIcons } from '../../data/services';
import Tag from '../../components/Tag/Tag';
import SectionBadge from '../../components/SectionBadge/SectionBadge';
import styles from './Services.module.css';

export default function Services() {
    const revealRef = useScrollReveal();
    const { wrapperRef, visibleCount } = useScrollPinReveal(6);
    const { activeIndex, activeService, isHiding, setService, services } = useServiceSelector();
    const prevVisibleCount = useRef(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-switch the right panel to match the latest revealed service
    useEffect(() => {
        if (!isMobile && visibleCount > prevVisibleCount.current && visibleCount > 0) {
            setService(visibleCount - 1);
        }
        prevVisibleCount.current = visibleCount;
    }, [visibleCount, setService, isMobile]);

    return (
        <div className={styles.pinWrapper} ref={wrapperRef}>
            <section className={`section-light ${styles.pinned}`} id="servicios">
                <div className={styles.header} ref={revealRef}>
                    <SectionBadge text="LO QUE CONSTRUIMOS" />
                    <h2 className={styles.title}>
                        Soluciones que <span className={styles.titleEm}>escalan</span><br />con tu negocio.
                    </h2>
                </div>

                <div className={styles.split}>
                    {/* Left: service selector */}
                    <div className={styles.nav}>
                        {services.map((svc, i) => {
                            const Icon = serviceIcons[svc.id];
                            const isVisible = isMobile || i < visibleCount;
                            const isDisabled = !isMobile && i >= visibleCount;

                            return (
                                <button
                                    key={svc.id}
                                    className={`${styles.btn} ${i === activeIndex ? styles.active : ''} ${isVisible ? styles.btnVisible : ''}`}
                                    onClick={() => setService(i)}
                                    disabled={isDisabled}
                                >
                                    <span className={styles.btnIcon}>
                                        {Icon && <Icon />}
                                    </span>
                                    <span className={styles.btnNum}>{svc.num}</span>
                                    <span className={styles.btnName}>{svc.name}</span>
                                    <span className={styles.btnArrow}>→</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: detail panel */}
                    <div className={`${styles.panel} ${isMobile || visibleCount > 0 ? styles.panelVisible : ''}`}>
                        {services.map((svc, i) => (
                            <div 
                                key={svc.id}
                                className={`${styles.panelContent} ${i === activeIndex ? styles.activePanel : styles.hiddenPanel} ${isHiding && i === activeIndex ? styles.hiding : ''}`}
                            >
                                <div className={styles.panelNum}>{svc.num}</div>
                                <h3 className={styles.panelName}>{svc.name}</h3>
                                <p className={styles.panelDesc}>{svc.desc}</p>
                                <div className={styles.tags}>
                                    {svc.tags.map((tag) => (
                                        <Tag key={tag} label={tag} />
                                    ))}
                                    {svc.soon && <Tag label="" soon />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
