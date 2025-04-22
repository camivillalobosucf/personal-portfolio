import styles from './Footer.module.css';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p>© 2025 Camila Villalobos. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;
