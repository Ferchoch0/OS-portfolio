import Tag from '../components/Tag/Tag';
import styles from './UpdatesPage.module.css';

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
