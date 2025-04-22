import styles from './Contact.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // 👈 new state for success message

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true); // 👈 show success screen
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleBack = () => {
    setSubmitted(false); // 👈 back to form
  };

  return (
    <div className={styles.contactPage}>
      <h1 className={styles.contactTitle}>Contact Me</h1>

      <div className={styles.contactContent}>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.successMessage}
          >
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={handleBack} className={styles.submitButton}>
              Back to Form
            </button>
          </motion.div>
        ) : (
          <>
            <div className={styles.contactInfo}>
              <p>
                <a href="https://www.linkedin.com/in/camila-villalobos-ucf023/" className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                  Visit my LinkedIn
                </a>
              </p>
            </div>

            <motion.form 
              onSubmit={handleSubmit} 
              className={styles.contactForm}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
              />
              {errors.name && <p className={styles.errorText}>{errors.name}</p>}

              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
              />
              {errors.email && <p className={styles.errorText}>{errors.email}</p>}

              <motion.textarea 
                whileFocus={{ scale: 1.02 }}
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
              />
              {errors.message && <p className={styles.errorText}>{errors.message}</p>}

              <button type="submit" className={styles.submitButton}>Send Message</button>
            </motion.form>
          </>
        )}
      </div>
    </div>
  );
}

export default Contact;
