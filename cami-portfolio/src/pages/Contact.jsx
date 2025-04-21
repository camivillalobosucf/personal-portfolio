import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

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
      // You can add your email sending logic here later!
      alert('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-content">
        <div className="contact-info">
        <p>
          <a href="https://www.linkedin.com/in/camila-villalobos-ucf023/" className="card-link" target="_blank" rel="noopener noreferrer">
            Visit my LinkedIn
          </a>
        </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
          />
          {errors.message && <p className="error-text">{errors.message}</p>}

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
