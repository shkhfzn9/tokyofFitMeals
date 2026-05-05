'use client';

import { signatureMeals, premiumMeals, addOns } from '@/config/menuData';

export default function DetailedMenu() {
  return (
    <section className="menu-detailed section" id="full-menu">
      <div className="container">
        
        {/* SECTION 1: SIGNATURE BOWLS */}
        <div className="menu-group">
          <div className="menu-group-header">
            <div className="section-label signature-label">SIGNATURE PROTEIN</div>
            <h2 className="section-title">Tossed Rice Bowls</h2>
            <p className="section-subtitle-premium signature-accent">
              👉 Includes: Flavoured tossed rice + fresh salad
            </p>
          </div>

          <div className="menu-grid">
            {signatureMeals.map((meal, i) => (
              <div key={i} className="meal-card-detailed">
                <div className="meal-card-image-wrapper">
                  <img src={meal.image} alt={meal.name} className="meal-image" />
                  {meal.badge && <div className="meal-badge signature-badge">{meal.badge}</div>}
                  <div className="meal-price-tag">₹{meal.price}</div>
                </div>
                <div className="meal-card-content">
                  <h3 className="meal-title">{meal.name}</h3>
                  <p className="meal-description">{meal.desc}</p>
                  <div className="meal-macros">
                    <span className="macro-tag">🔥 {meal.calories} kcal</span>
                    <span className="macro-tag">💪 {meal.protein}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: PREMIUM BOWLS */}
        <div className="menu-group">
          <div className="menu-group-header">
            <div className="section-label premium-label">🔴 PREMIUM PERFORMANCE</div>
            <h2 className="section-title">Performance Bowls</h2>
            <p className="section-subtitle-premium premium-accent">
              👉 Includes: Premium sides (Mash / Hummus / Roti / Dips / Salads)
            </p>
          </div>

          <div className="menu-grid">
            {premiumMeals.map((meal, i) => (
              <div key={i} className="meal-card-detailed">
                <div className="meal-card-image-wrapper">
                  <img src={meal.image} alt={meal.name} className="meal-image" />
                  {meal.badge && <div className="meal-badge premium-badge">{meal.badge}</div>}
                  <div className="meal-price-tag">₹{meal.price}</div>
                </div>
                <div className="meal-card-content">
                  <h3 className="meal-title">{meal.name}</h3>
                  <div className="included-info-tag">{meal.included}</div>
                  <p className="meal-description">{meal.desc}</p>
                  <div className="meal-macros">
                    <span className="macro-tag">🔥 {meal.calories} kcal</span>
                    <span className="macro-tag">💪 {meal.protein}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: ADD-ONS */}
        <div className="menu-group">
          <div className="menu-group-header">
            <div className="section-label add-ons-label">➕ ADD-ONS</div>
            <h2 className="section-title">Upgrade Your Bowl</h2>
          </div>

          <div className="add-ons-grid">
            {addOns.map((addon, i) => (
              <div key={i} className="add-on-card">
                <div className="add-on-info">
                  <span className="add-on-icon">{addon.icon}</span>
                  <span className="add-on-name">{addon.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
