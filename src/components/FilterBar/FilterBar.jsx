import { useMemo, useRef } from 'react';
import styles from './FilterBar.module.css';

export default function FilterBar({ categories, active, count, allProjects = [], onChange, searchQuery, onSearchChange }) {
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

            <div className={styles.controlsRow}>
                {/* Mobile Search & Select combo */}
                <div className={styles.searchWrapper}>
                    <div className={styles.searchIcon}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar stack, proyecto..."
                        className={styles.searchInput}
                        value={searchQuery || ''}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                <div className={styles.mobileSelectWrapper}>
                    <select
                        className={styles.mobileSelect}
                        value={active}
                        onChange={(e) => onChange(e.target.value)}
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat} ({catCounts[cat] ?? 0})
                            </option>
                        ))}
                    </select>
                    <div className={styles.selectArrow}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Desktop Filter List */}
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
                <span className={styles.totalStats}>
                    Total: {allProjects.length} proyectos
                </span>
            </div>
        </aside>
    );
}
