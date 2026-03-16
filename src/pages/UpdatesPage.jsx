import Tag from '../components/Tag/Tag';
import styles from './UpdatesPage.module.css';

const updates = [
    {
        id: 1,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 2,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 3,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 4,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 5,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 6,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 7,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 8,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 9,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 10,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 11,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 12,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 13,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 14,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 15,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 16,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 17,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 18,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 19,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 20,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 21,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 22,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    },
    {
        id: 23,
        date: '08/03/2026',
        title: 'Lanzamiento de Otter.ly',
        desc: 'Lanzamiento oficial de Otter.ly, nuestra plataforma de desarrollo y consultoría.',
        project: 'Otter.ly',
        tags: ['web', 'lanzamiento']
    }
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
