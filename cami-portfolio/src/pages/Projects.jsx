import styles from './Projects.module.css';
import project1 from '../assets/project1_moviereview.png';
import project2 from '../assets/project2_billingsapp.jpg';
import project3 from '../assets/project3_taskio.png';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.projectsTitle}>Web Design Projects</h1>

      <div className={styles.cardsContainer}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={project1} alt="Project 1" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <div className={styles.textContent}>
              <h2 className={styles.cardTitle}>Movie Review CMS</h2>
              <p className={styles.cardDescription}>
                CMS project that allows users to explore and comment on movie reviews.
                Built with PHP, MySQL, and HTML/CSS, it features user authentication and
                alphabetical sorting, creating an interactive and organized experience for 
                movie reviewers. If you want to try it out, click "See Project" and 
                login with the user and password "review"    
              </p>
              <a href="https://students.gaim.ucf.edu/~ca575679/dig3134c/assignment05/login.php" className={styles.cardLink} target="_blank" rel="noopener noreferrer">See Project</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={project2} alt="Project 2" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <div className={styles.textContent}>
              <h2 className={styles.cardTitle}>Billings App Re-Design</h2>
              <p className={styles.cardDescription}>
                UX/UI case study focused on redesigning the Billings Ovulation Tracking App
                to enhance usability, modernize the visual design, and improve the user journey for individuals tracking fertility.
              </p>
              <a href="https://www.behance.net/gallery/200864449/Case-Study-Billings-Ovulation-App-Redesign" className={styles.cardLink} target="_blank" rel="noopener noreferrer">See Project</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={project3} alt="Project 3" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <div className={styles.textContent}>
              <h2 className={styles.cardTitle}>React Native To-Do App</h2>
              <p className={styles.cardDescription}>
                A React Native TODO app allowing users to create, view, and complete tasks dynamically,
                demonstrating list rendering and user input handling in real time.
              </p>
              <a href="https://camivillalobosucf.github.io/expo-todo-list" className={styles.cardLink} target="_blank" rel="noopener noreferrer">See Project</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
