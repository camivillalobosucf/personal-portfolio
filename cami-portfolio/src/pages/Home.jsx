import styles from './Home.module.css';
import profilePic from '../assets/camiprofilepic2.jpeg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className={styles.home}>
      <motion.h1
        className={styles.homeTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome
      </motion.h1>

      <motion.div
        className={styles.homeContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profilePic} alt="Camila Villalobos" className={styles.profilePic} />

        <p className={styles.homeDescription}>
          Hello and welcome to my portfolio! I'm Camila Villalobos, a web design 
          student and graphic designer based in Orlando, Florida. I'm currently 
          pursuing my B.A. in Digital Media at UCF. In this website, you'll find 
          projects that showcase my work in server-side scripting, mobile development, 
          front-end design, and more. Thanks for visiting!
        </p>
      </motion.div>

      <div className={styles.buttonWrapper}>
        <Link to="/projects" className={styles.cardLink}>See My Projects</Link>
      </div>
    </div>
  );
}

export default Home;
