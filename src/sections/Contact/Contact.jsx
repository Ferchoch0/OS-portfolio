import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../../components/Button/Button';
import styles from './Contact.module.css';

export default function Contact() {
    const revealRef = useScrollReveal();

    return (
        <section className={styles.section} id="contacto">
            <div ref={revealRef} className="reveal">
                <p className="s-label" style={{ color: 'rgba(245,242,236,.3)' }}>Trabajemos juntos</p>
                <h2 className={styles.title}>
                    ¿Tenés un<br />
                    <em>proyecto</em><br />
                    en mente?
                </h2>
                <p className={styles.desc}>
                    Contanos qué necesitás. Respondemos en menos de 24 horas con una propuesta o una llamada de 30 minutos.
                </p>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <span className={styles.contactItemLabel}>Email</span>
                        <a href="mailto:otterly.consultas@gmail.com" className={styles.contactItemVal}>
                            otterly.consultas@gmail.com
                        </a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.contactItemLabel}>WhatsApp</span>
                        <a href="#" className={styles.contactItemVal}>+54 9 11 53424345</a>
                    </div>
                    {/* <div className={styles.contactItem}>
                        <span className={styles.contactItemLabel}>LinkedIn</span>
                        <a href="#" className={styles.contactItemVal}>OtterSolutions</a>
                    </div> */}
                </div>
            </div>

            <div className={styles.form} ref={revealRef}>
                <div className={styles.formRow}>
                    <label>Nombre</label>
                    <input type="text" placeholder="Tu nombre completo" />
                </div>
                <div className={styles.formRow}>
                    <label>Empresa</label>
                    <input type="text" placeholder="Nombre de tu empresa" />
                </div>
                <div className={styles.formRow}>
                    <label>Tipo de proyecto</label>
                    <select defaultValue="">
                        <option value="" disabled>Seleccioná una opción</option>
                        <option>Sistema web a medida</option>
                        <option>Aplicación mobile</option>
                        <option>Solución inmobiliaria</option>
                        <option>Web app / SaaS</option>
                        <option>Mantenimiento mensual</option>
                        <option>Automatización</option>
                        <option>Otro</option>
                    </select>
                </div>
                <div className={styles.formRow}>
                    <label>Mensaje</label>
                    <textarea rows="3" placeholder="Contanos brevemente qué necesitás..." />
                </div>
                <div className={styles.submitRow}>
                    <Button variant="action" subVariant="primary" href="#">Enviar mensaje</Button>
                    <p className={styles.formNote}>Respondemos en<br />menos de 24 hs.</p>
                </div>
            </div>
        </section>
    );
}
