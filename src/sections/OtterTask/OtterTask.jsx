import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../../components/Button/Button';
import SectionBadge from '../../components/SectionBadge/SectionBadge';
import styles from './OtterTask.module.css';

const stats = [
    { value: '12+', label: 'Módulos de Gestión' },
    { value: '24/7', label: 'Acceso' },
    { value: 'v0.9', label: 'Beta' },
];

const features = [
    {
        icon: '/img/icons/stock.png',
        name: 'Gestión de Stock',
        desc: 'Control de inventario en tiempo real con alertas automáticas.',
    },
    {
        icon: '/img/icons/ventas.png',
        name: 'Ventas & Compras',
        desc: 'Registro completo de ventas y compras con historial y tickets',
    },
    {
        icon: '/img/icons/reportes.png',
        name: 'Reportes Avanzados',
        desc: 'Gráficos dinámicos con métricas de rendimiento en tiempo real',
    },
    {
        icon: '/img/icons/alert.png',
        name: 'Alertas Inteligentes',
        desc: 'Notificaciones de stock bajo con umbrales configurados.',
    },
];

export default function OtterTask() {
    const revealRef = useScrollReveal();

    return (
        <section className={styles.section}>
            {/* ── Hero: two-column layout ── */}
            <div ref={revealRef} className="reveal">
                <div className={styles.hero}>
                    {/* Left — text content */}
                    <div className={styles.heroLeft}>
                        <SectionBadge text="Producto propio — en desarrollo" />
                        <h2 className={styles.title}>
                            Otter<span>Task</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Sistema de gestión empresarial todo-en-uno. Eliminamos el desorden administrativo con software que escala junto a tu negocio, desde la primera venta hasta la gestión multi-sucursal.
                        </p>



                        {/* CTA */}
                        <div className={styles.cta}>
                            <Button variant="action" subVariant="cta" to="/ottertask">
                                Conocer OtterTask
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                                </svg>
                            </Button>
                            <span className={styles.ctaHint}>¿Querés optimizar la gestión <br />de tu negocio?</span>
                        </div>
                    </div>

                    {/* Right — product showcase */}
                    <div className={styles.heroRight}>
                        <div className={styles.imageFrame}>
                            <div className={styles.imageGlow} />
                            <img
                                src="/img/ottertask.png"
                                alt="OtterTask — Sistema de gestión"
                                className={styles.productImage}
                            />
                            {/* Stats overlay */}
                            <div className={styles.imageStatsOverlay}>
                                {stats.map((s, i) => (
                                    <div key={i} className={styles.overlayStat}>
                                        <span className={styles.overlayStatValue}>{s.value}</span>
                                        <span className={styles.overlayStatLabel}>{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Feature strip ── */}
            <div ref={revealRef} className="reveal">
                <div className={styles.featureStrip}>
                    {features.map((feat, i) => (
                        <div key={i} className={styles.featureItem}>
                            <div className={styles.featureShimmer} />
                            <div className={styles.featureIconContainer}>
                                <img src={feat.icon} alt={feat.name} className={styles.featureIconImg} />
                            </div>
                            <div className={styles.featureText}>
                                <h4 className={styles.featureName}>{feat.name}</h4>
                                <p className={styles.featureDesc}>{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
