import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../components/Button/Button';
import SectionBadge from '../components/SectionBadge/SectionBadge';
import styles from './ContactPage.module.css';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
    const revealRef = useScrollReveal();
    const formRef = useRef(null);

    const [sending, setSending] = useState(false);
    const [status, setStatus]   = useState(null); // 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            setStatus('success');
            formRef.current.reset();
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        } finally {
            setSending(false);
        }
    };

    return (
        <div className={styles.page}>
        <section className={styles.section} id="contacto">
            <div ref={revealRef} className="reveal">
                <SectionBadge text="Trabajemos juntos" />
                <h2 className={styles.title}>
                    ¿Tenés un <span>proyecto</span> en mente?
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

                    <div className={styles.contactItem}>
                        <span className={styles.contactItemLabel}>Instagram</span>
                        <a href="https://instagram.com/otterly.ar" className={styles.contactItemVal}>
                            @otterly.ar
                        </a>
                    </div>
                </div>

            </div>

            <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                    <label>Nombre</label>
                    <input type="text" name="user_name" placeholder="Tu nombre completo" required />
                    <span className={styles.highlight}></span>
                </div>
                <div className={styles.formRow}>
                    <label>Empresa</label>
                    <input type="text" name="user_company" placeholder="Nombre de tu empresa" />
                    <span className={styles.highlight}></span>
                </div>
                <div className={styles.formRow}>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="tu@email.com" required />
                    <span className={styles.highlight}></span>
                </div>
                <div className={styles.formRow}>
                    <label>Tipo de proyecto</label>
                    <select name="project_type" defaultValue="">
                        <option value="" disabled>Seleccioná una opción</option>
                        <option>Sistema web a medida</option>
                        <option>Aplicación mobile</option>
                        <option>Solución inmobiliaria</option>
                        <option>Web app / SaaS</option>
                        <option>Mantenimiento mensual</option>
                        <option>Automatización</option>
                        <option>Otro</option>
                    </select>
                    <span className={styles.highlight}></span>
                </div>
                <div className={styles.formRow}>
                    <label>Mensaje</label>
                    <textarea rows="3" name="message" placeholder="Contanos brevemente qué necesitás..." required />
                    <span className={styles.highlight}></span>
                </div>
                <div className={styles.submitRow}>
                    <Button variant="action" subVariant='primary' type="submit" disabled={sending}>
                        {sending ? 'Enviando...' : 'Enviar mensaje'}
                    </Button>
                    {status === 'success' && (
                        <p className={styles.formNote} style={{ color: '#4caf86' }}>
                            ¡Mensaje enviado!<br />Te respondemos pronto.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className={styles.formNote} style={{ color: '#e57373' }}>
                            Error al enviar.<br />Intentá de nuevo.
                        </p>
                    )}
                    {!status && (
                        <p className={styles.formNote}>Respondemos en<br />menos de 24 hs.</p>
                    )}
                </div>
            </form>
        </section>
    </div>
    );
}
