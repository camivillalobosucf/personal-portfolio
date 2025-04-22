import styles from './About.module.css';
import img1 from '../assets/photos-for-gallery/about1.jpg';
import img2 from '../assets/photos-for-gallery/about2.jpg';
import img3 from '../assets/photos-for-gallery/about3.jpg';
import img4 from '../assets/photos-for-gallery/about4.jpg';
import img5 from '../assets/photos-for-gallery/about5.jpg';
import img6 from '../assets/photos-for-gallery/about6.jpg';
import img7 from '../assets/photos-for-gallery/about7.jpg';
import img8 from '../assets/photos-for-gallery/about8.jpg';
import img9 from '../assets/photos-for-gallery/about9.jpg';
import img10 from '../assets/photos-for-gallery/about10.jpg';
import { useState } from 'react';
import { motion } from 'framer-motion';

function About() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.about}>
      <motion.h1
        className={styles.homeTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.div
        className={styles.aboutContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.aboutGalleryWrapper}>
          <div className={styles.aboutGalleryImage}>
            <button onClick={handlePrev} className={`${styles.navButton} ${styles.navButtonLeft}`}>←</button>

            <img src={images[currentIndex]} alt={`Gallery ${currentIndex + 1}`} loading="lazy" />

            <button onClick={handleNext} className={`${styles.navButton} ${styles.navButtonRight}`}>→</button>
          </div>
        </div>

        <div className={styles.aboutText}>
          <p>
            I am a UCF Digital Media student and Art Director at a sign company,
            but more than that, I am a devout Catholic who seeks to please my Savior.
            I am married to Ricardo, and we have our kitty Kai. I love spending time
            with my family, being involved at church, and going to the gym.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
