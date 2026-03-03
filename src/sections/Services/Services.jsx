import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useServiceSelector } from '../../hooks/useServiceSelector';
import Tag from '../../components/Tag/Tag';
import styles from './Services.module.css';

export default function Services() {
    const revealRef = useScrollReveal();
    const { activeIndex, activeService, isHiding, setService, services } = useServiceSelector();

    return (
        <section className="section-light" id="servicios">
            <p className="s-label reveal" ref={revealRef}>Lo que construimos</p>
            <h2 className="s-title reveal" ref={revealRef}>
                Soluciones que <em>escalan</em><br />con tu negocio.
            </h2>

            <div className={styles.split} ref={revealRef}>
                {/* Left: service selector */}
                <div className={styles.nav}>
                    {services.map((svc, i) => (
                        <button
                            key={svc.id}
                            className={`${styles.btn} ${i === activeIndex ? styles.active : ''}`}
                            onClick={() => setService(i)}
                        >
                            <span className={styles.btnNum}>{svc.num}</span>
                            <span className={styles.btnName}>{svc.name}</span>
                            <span className={styles.btnArrow}>→</span>
                        </button>
                    ))}
                </div>

                {/* Right: detail panel */}
                <div className={styles.panel}>
                    <div className={`${styles.panelContent} ${isHiding ? styles.hiding : ''}`}>
                        <div className={styles.panelNum}>{activeService.num}</div>
                        <h3 className={styles.panelName}>{activeService.name}</h3>
                        <p className={styles.panelDesc}>{activeService.desc}</p>
                        <div className={styles.tags}>
                            {activeService.tags.map((tag) => (
                                <Tag key={tag} label={tag} />
                            ))}
                            {activeService.soon && <Tag label="" soon />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
