import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../../components/Button/Button';
import styles from './OtterTask.module.css';

const features = [
    {
        name: 'Gestión de Stock',
        desc: 'Control de inventario en tiempo real con alertas y reportes automáticos.',
    },
    {
        name: 'Ventas & Compras',
        desc: 'Flujo completo desde orden hasta entrega, integrado con proveedores.',
    },
    {
        name: 'Automatización vía n8n',
        desc: 'Notificaciones, reportes y publicaciones en redes automatizadas.',
    },
];

export default function OtterTask() {
    const revealRef = useScrollReveal();

    return (
        <section className={styles.section}>
            <div ref={revealRef} className="reveal">
                <p className={styles.live}>Producto propio — en desarrollo</p>
                <h2 className={styles.title}>Otter<span>Task</span></h2>
                <p className={styles.desc}>
                    Sistema de gestión de stock, ventas y compras construido por el mismo equipo que lo opera. No vendemos lo que no usamos.
                </p>
                <Button variant="blue" href="#">
                    Conocer OtterTask
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                </Button>
            </div>

            <div className={styles.right} ref={revealRef}>
                <ul className={styles.features}>
                    {features.map((feat, i) => (
                        <li key={i} className={styles.feature}>
                            <span className={styles.featureIcon}>→</span>
                            <div>
                                <p className={styles.featureName}>{feat.name}</p>
                                <p className={styles.featureDesc}>{feat.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
