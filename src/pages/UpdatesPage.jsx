import Tag from '../components/Tag/Tag';
import styles from './UpdatesPage.module.css';

const updates = [
    {
        id: 1,
        date: 'Marzo 2025',
        title: 'Nuevo sistema de reportes automáticos',
        project: 'OtterTask',
        desc: 'Implementamos reportes de stock automáticos con generación de PDF y envío programado a stakeholders vía email.',
        tags: ['n8n', 'PDF', 'Email'],
    },
    {
        id: 2,
        date: 'Febrero 2025',
        title: 'Sincronización offline para mobile',
        project: 'App Mobile',
        desc: 'Se agregó soporte completo de sincronización offline con SQLite local y cola de respuestas pendientes.',
        tags: ['React Native', 'SQLite', 'Offline'],
    },
    {
        id: 3,
        date: 'Febrero 2025',
        title: 'Rediseño de ficha técnica digital',
        project: 'CPA Refrigeración',
        desc: 'Rediseño completo del sitio corporativo con nueva sección de ficha técnica digital y optimización responsive.',
        tags: ['React', 'Vite', 'Responsive'],
    },
    {
        id: 4,
        date: 'Enero 2025',
        title: 'Dashboard de métricas en tiempo real',
        project: 'Panel Operativo',
        desc: 'Se implementó un dashboard con métricas en tiempo real, gráficos interactivos y alertas personalizables.',
        tags: ['React', 'WebSocket', 'Charts'],
    },
    {
        id: 5,
        date: 'Enero 2025',
        title: 'Lanzamiento de landing OtterTask',
        project: 'OtterTask',
        desc: 'Diseño y desarrollo de la landing page de presentación de OtterTask con animaciones premium y dark theme.',
        tags: ['React', 'Animation', 'Design'],
    },
];

export default function UpdatesPage() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <p className={styles.eyebrow}>Lo que estamos construyendo</p>
                <h1 className={styles.title}>
                    Updates de <span>proyectos</span>
                </h1>
                <p className={styles.subtitle}>
                    Actualizaciones recientes de nuestros proyectos propios y de clientes. Cada mejora, cada feature, documentada.
                </p>
            </div>

            <div className={styles.timeline}>
                {updates.map((update) => (
                    <div key={update.id} className={styles.update}>
                        <div className={styles.dot} />
                        <p className={styles.date}>{update.date}</p>
                        <h3 className={styles.updateTitle}>{update.title}</h3>
                        <span className={styles.project}>{update.project}</span>
                        <p className={styles.updateDesc}>{update.desc}</p>
                        <div className={styles.tags}>
                            {update.tags.map((tag) => (
                                <Tag key={tag} label={tag} dark />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
