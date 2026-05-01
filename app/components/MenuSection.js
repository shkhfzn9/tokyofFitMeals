'use client';

import { useState } from 'react';

import { signatureMeals, premiumMeals } from '@/config/menuData';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('signature');

  const meals = activeTab === 'signature' ? signatureMeals : premiumMeals;

  return (
    <section className="menu-section section" id="menu">
      <div className="container">
        <div className="menu-header">
          <div>
            <div className="section-label">Our Menu</div>
            <h2 className="section-title">Bowls That Fuel Champions</h2>
            <p className="section-subtitle">
              Every bowl is precision-portioned with optimal macros. Fresh. Never frozen.
            </p>
          </div>

          <div className="menu-tabs">
            <button
              className={`menu-tab ${activeTab === 'signature' ? 'active' : ''}`}
              onClick={() => setActiveTab('signature')}
            >
              Signature Bowls
            </button>
            <button
              className={`menu-tab ${activeTab === 'premium' ? 'active' : ''}`}
              onClick={() => setActiveTab('premium')}
            >
              Premium Bowls ✨
            </button>
          </div>
        </div>

        <div className="menu-grid">
          {meals.map((meal, i) => (
            <div key={i} className="meal-card">
              <div className="meal-card-image">
                <img src={meal.image} alt={meal.name} width={400} height={200} />
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
                <div className="meal-card-footer" style={{ marginTop: '16px' }}>
                  <div className="meal-card-price">
                    ₹{meal.price} <span className="per-meal">/bowl</span>
                  </div>
                  <button className="btn btn-sm btn-dark">Add to Plan</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
