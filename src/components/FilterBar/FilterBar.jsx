import { useState, useEffect, useMemo, useRef } from 'react';
import styles from './FilterBar.module.css';

export default function FilterBar({ categories, active, count, allProjects = [], onChange }) {
    const [displayCount, setDisplayCount] = useState(count);
    const [flash, setFlash] = useState(false);
    const sidebarRef = useRef(null);

    // Per-category project counts
    const catCounts = useMemo(() => {
        const map = {};
        categories.forEach((cat) => {
            map[cat] = cat === 'Todos'
                ? allProjects.length
                : allProjects.filter((p) => p.category === cat).length;
        });
        return map;
    }, [categories, allProjects]);

    // Animate the count number on change
    useEffect(() => {
        setFlash(true);
        const t = setTimeout(() => {
            setDisplayCount(count);
            setFlash(false);
        }, 300);
        return () => clearTimeout(t);
    }, [count]);

    // Magnetic effect logic
    const handleMouseMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) * 0.15;
        const deltaY = (y - centerY) * 0.15;

        btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        const inner = btn.querySelector(`.${styles.btnInner}`);
        if (inner) {
            inner.style.transform = `translate(${deltaX * 0.5}px, ${deltaY * 0.5}px)`;
        }
    };

    const handleMouseLeave = (e) => {
        const btn = e.currentTarget;
        btn.style.transform = '';
        const inner = btn.querySelector(`.${styles.btnInner}`);
        if (inner) {
            inner.style.transform = '';
        }
    };

    return (
        <aside className={styles.sidebar} ref={sidebarRef}>
            {/* Ambient Background Glows */}
            <div className={styles.sidebarAmbient} aria-hidden="true">
                <div className={styles.ambientBlob1} />
                <div className={styles.ambientBlob2} />
            </div>

            <div className={styles.sidebarHeader}>
                <span className={styles.sidebarLabel}>Explorar</span>
                <div className={styles.sidebarHeaderLine} />
            </div>

            <nav className={styles.filterList}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${active === cat ? styles.active : ''}`}
                        onClick={() => onChange(cat)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        aria-pressed={active === cat}
                    >
                        {/* Background glass layer */}
                        <div className={styles.btnGlass} />

                        <div className={styles.btnInner}>
                            <div className={styles.btnLeft}>
                                <div className={styles.indicatorWrap}>
                                    <span className={styles.btnDot} />
                                    <div className={styles.activeRing} />
                                </div>
                                <span className={styles.btnName}>{cat}</span>
                            </div>
                            <span className={styles.btnCount}>
                                {catCounts[cat] ?? 0}
                            </span>
                        </div>

                        {/* Interactive hover glow */}
                        <div className={styles.btnGlow} />
                    </button>
                ))}
            </nav>

            <div className={styles.statsFooter}>
                <div className={styles.totalCountBox}>
                    <div className={styles.countNumberWrap}>
                        <span className={`${styles.countNumber} ${flash ? styles.flash : ''}`}>
                            {displayCount}
                        </span>
                        <div className={styles.countSuffix}>
                            Proyectos <span>{active}</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
