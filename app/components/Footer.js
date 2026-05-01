export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="navbar-logo">
              Tokyo<span className="logo-accent">Fit Meals</span>
            </div>
            <p className="footer-desc">
              Premium Japanese-inspired meal bowls, backed by science
              and crafted by chefs. Fueling India's fitness revolution,
              one bowl at a time.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Menu</h4>
            <div className="footer-links">
              <a href="#menu">Signature Bowls</a>
              <a href="#menu">Premium Bowls</a>
              <a href="#customize">Protein Add-ons</a>
              <a href="#customize">Salad Pairings</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Health Plans</h4>
            <div className="footer-links">
              <a href="#packages">Weight Loss</a>
              <a href="#packages">Heart Health</a>
              <a href="#packages">Muscle Gain</a>
              <a href="#packages">General Wellness</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Support</h4>
            <div className="footer-links">
              <a href="#faq">FAQ</a>
              <a href="#">Contact Us</a>
              <a href="#">Delivery Areas</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 Tokyo Fit Meals. All rights reserved. Made with 🍱 in India.
          </div>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="Instagram">📸</a>
            <a href="#" className="footer-social" aria-label="Twitter">🐦</a>
            <a href="#" className="footer-social" aria-label="WhatsApp">💬</a>
            <a href="#" className="footer-social" aria-label="YouTube">▶️</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
