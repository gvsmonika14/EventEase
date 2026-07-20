import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>📞 Contact Us</h2>
      <p className="contact-subtitle">
        Have questions? We'd love to hear from you!
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <h3>📍 Address</h3>
          <p>HITEC City, Hyderabad, Telangana</p>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>eventease@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>📱 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;