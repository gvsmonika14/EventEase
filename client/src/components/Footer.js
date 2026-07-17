import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>🎉 EventEase</h2>

        <p className="footer-text">
          Making Event Management Easy, Beautiful &amp; Hassle-Free.
        </p>

        <div className="footer-info">
          <p>📧 support@eventease.com</p>
          <p>📞 +91 9876543210</p>
          <p>📍 Hyderabad, India</p>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/gvsmonika14"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘 Facebook
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>

        <hr />

        <p className="copyright">
          © 2026 EventEase | Designed with ❤️ using React
        </p>
      </div>
    </footer>
  );
}

export default Footer;