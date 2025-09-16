import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/growth-full-circle-agencies-8a9633322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
            <img width="35px" height="35px" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
            </a>
            <a
              href="https://www.facebook.com/share/1BDBVig4fE/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img width="35" height="35" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>
            </a>
            <a
              href="https://www.instagram.com/growth360_ke?utm_source=qr&igsh=MWlneXF5YW12a2k1OA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img width="35" height="35" src="https://img.icons8.com/3d-fluency/94/instagram-logo.png" alt="instagram-logo"/>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© {new Date().getFullYear()} Growth Full Circle Agencies. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;