import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1 className="home-title">Contact Me</h1>

      <div className="home-content">
        <div className="contact-info">
          <p>Email: <a href="mailto:info@camivillalobos.com" className="contact-link">info@camivillalobos.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/camila-villalobos-ucf023/" className="contact-link" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
