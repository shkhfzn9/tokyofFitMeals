export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        
        <div className="hero-badges-container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Nutrition-Backed · Chef-Crafted
          </div>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            100% Fresh Ingredients
          </div>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Zero Preservatives
          </div>
        </div>

        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Fuel Your Body,<br />
              <span className="highlight">Transform</span> Your Life.
            </h1>

            <p className="hero-description">
              Japanese-inspired meal bowls crafted by professional chefs and backed by
              certified nutritionists. Fresh ingredients, precision macros, zero compromise.
              Delivered to your door daily.
            </p>

            <div className="hero-actions">
              <a href="#plans" className="btn btn-primary btn-lg">
                Explore Plans →
              </a>
              <a href="#menu" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>
                View Menu
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">2,500+</div>
                <div className="hero-stat-label">Active Subscribers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">14+</div>
                <div className="hero-stat-label">Chef-Crafted Bowls</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">4.9★</div>
                <div className="hero-stat-label">Customer Rating</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <div className="hero-image-container">
                <img
                  src="/hero-bowl.png"
                  alt="Premium Japanese-inspired grilled chicken rice bowl with fresh vegetables"
                  width={520}
                  height={520}
                />
              </div>

              <div className="hero-float-card card-calories">
                <div className="float-card-icon">🔥</div>
                <div className="float-card-label">Calories</div>
                <div className="float-card-value">420 <span className="unit">kcal</span></div>
              </div>

              <div className="hero-float-card card-protein">
                <div className="float-card-icon">💪</div>
                <div className="float-card-label">Protein</div>
                <div className="float-card-value">38g <span className="unit">per bowl</span></div>
              </div>

              <div className="hero-float-card card-rating">
                <div className="float-card-icon">⭐</div>
                <div className="float-card-label">Rating</div>
                <div className="float-card-value">4.9/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
