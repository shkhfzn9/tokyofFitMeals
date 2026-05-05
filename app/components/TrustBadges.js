export default function TrustBadges() {
  return (
    <section className="trust-badges-section">
      <div className="container trust-badges-container">
        
        <div className="trust-badge-item">
          <div className="badge-icon nutritionist">
            👨‍⚕️
          </div>
          <div className="badge-content">
            <div className="badge-title">Nutritionist Approved</div>
            <div className="badge-subtitle">Backed by science</div>
          </div>
        </div>

        <div className="trust-badge-item">
          <div className="badge-icon fresh">
            🥬
          </div>
          <div className="badge-content">
            <div className="badge-title">100% Fresh Ingredients</div>
            <div className="badge-subtitle">Never frozen</div>
          </div>
        </div>

        <div className="trust-badge-item">
          <div className="badge-icon cancel">
            🔒
          </div>
          <div className="badge-content">
            <div className="badge-title">Cancel Anytime</div>
            <div className="badge-subtitle">No long-term commitments</div>
          </div>
        </div>

      </div>
    </section>
  );
}
