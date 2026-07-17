import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2>🎉 EventEase</h2>

        <p className="footer-text">
          Making Event Management Easy, Beautiful & Hassle-Free.
        </p>

        <div className="footer-info">

          <p>📧 support@eventease.com</p>

          <p>📞 +91 9876543210</p>

          <p>📍 Hyderabad, India</p>

        </div>

        <div className="social-icons">

          <a href="https://github.com/gvsmonika14" target="_blank" rel="noreferrer">
            💻 GitHub
          </a>

          <a href="#">
            📘 Facebook
          </a>

          <a href="#">
            📷 Instagram
          </a>

          <a href="#">
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