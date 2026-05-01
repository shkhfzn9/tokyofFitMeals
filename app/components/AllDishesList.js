'use client';

import { signatureMeals, premiumMeals } from '@/config/menuData';

export default function AllDishesList() {
  const allMeals = [...signatureMeals, ...premiumMeals];

  return (
    <section className="menu-section section" id="all-dishes">
      <div className="container">
        <div className="menu-header">
          <div>
            <div className="section-label">Complete Menu</div>
            <h2 className="section-title">All Our Delicious Options</h2>
            <p className="section-subtitle">
              Explore every bowl we offer. Packed with nutrition, crafted for your goals.
            </p>
          </div>
        </div>

        <div className="menu-grid">
          {allMeals.map((meal, i) => (
            <div key={i} className="meal-card">
              <div className="meal-card-image">
                <img src={meal.image} alt={meal.name} width={400} height={200} style={{ objectFit: 'cover' }} />
                {meal.badge && <div className="meal-card-badge">{meal.badge}</div>}
              </div>
              <div className="meal-card-body">
                <h3 className="meal-card-title">{meal.name}</h3>
                <p className="meal-card-desc">{meal.desc}</p>
                <div className="meal-card-macros">
                  <span className="macro-tag">🔥 {meal.calories} kcal</span>
                  <span className="macro-tag">💪 {meal.protein}</span>
                  <span className="macro-tag">🌾 {meal.carbs}</span>
                </div>
                {/* No price or Add to Plan button here as requested */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
