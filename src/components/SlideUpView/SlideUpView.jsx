import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './SlideUpView.module.css';

const MotionDiv = motion.div;

export default function SlideUpView({ children, onClose }) {

  // Solo bloquear scroll del body mientras ESTE panel está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <MotionDiv
        className={styles.panel}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </MotionDiv>
    </div>
  );
}
