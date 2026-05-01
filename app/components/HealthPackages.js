"use client";

import { useState } from "react";
import PlanModal from "./PlanModal";
import { healthPackages, getDiscountPercentage } from "@/config/healthPackagesData";

export default function HealthPackages() {
  const [mealsPerDay, setMealsPerDay] = useState(2);
  const [durationMonths, setDurationMonths] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const calculatePricing = (basePrice) => {
    const totalMeals = mealsPerDay * 30 * durationMonths;
    const grossPrice = basePrice * totalMeals;
    const discountPercent = getDiscountPercentage(durationMonths);
    const discountAmount = grossPrice * discountPercent;
    const finalPrice = grossPrice - discountAmount;

    return {
      gross: Math.round(grossPrice),
      final: Math.round(finalPrice),
      isDiscounted: discountPercent > 0,
      monthlyInstallment: Math.round(finalPrice / durationMonths)
    };
  };

  return (
    <section className="packages-section section clinical-theme" id="packages">
      <div className="container" style={{ maxWidth: '100%', paddingLeft: 'max(1rem, calc((100% - 1200px) / 2))', paddingRight: '0' }}>
        {/* We unconstrain the container for the scrolling area to bleed to edge */}
        <div style={{ paddingRight: 'max(1rem, calc((100% - 1200px) / 2))' }}>
          <div className="section-header">
            <div className="section-label" style={{ color: "#2ECC71" }}>Health Plans</div>
            <h2 className="section-title">Specialized Care. Delivered.</h2>
            <p className="section-subtitle">
              Nutritionist-prescribed, targeted meal plans for lifestyle goals and specific medical conditions.
            </p>
          </div>

          {/* --- CALCULATOR CONTROLS --- */}
          <div className="calculator-controls">
            <div className="control-group">
              <span className="control-label">Meals Per Day</span>
              <div className="segment-control">
                <button className={mealsPerDay === 1 ? "active" : ""} onClick={() => setMealsPerDay(1)}>1 Meal</button>
                <button className={mealsPerDay === 2 ? "active" : ""} onClick={() => setMealsPerDay(2)}>2 Meals</button>
                <button className={mealsPerDay === 3 ? "active" : ""} onClick={() => setMealsPerDay(3)}>3 Meals</button>
              </div>
            </div>

            <div className="control-group">
              <span className="control-label">Duration <span className="save-badge">Save ~10%</span></span>
              <div className="segment-control">
                <button className={durationMonths === 1 ? "active" : ""} onClick={() => setDurationMonths(1)}>1 Month</button>
                <button className={durationMonths === 3 ? "active" : ""} onClick={() => setDurationMonths(3)}>3 Months</button>
                <button className={durationMonths === 6 ? "active" : ""} onClick={() => setDurationMonths(6)}>6 Months</button>
              </div>
            </div>
          </div>
        </div>

        {/* --- PACKAGES GRID (SCROLLABLE) --- */}
        <div className="packages-grid horizontal-scroll" style={{ marginTop: "3rem" }}>
          {healthPackages.map((pkg) => {
            const pricing = calculatePricing(pkg.basePricePerMeal);
            return (
              <div key={pkg.title} className={`package-card ${pkg.className}`}>
                <div className="package-icon">{pkg.icon}</div>
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-desc">{pkg.desc}</p>
                <div className="package-bestfor" style={{
                  background: 'rgba(46, 204, 113, 0.1)',
                  padding: '10px 15px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: '#27AE60',
                  fontWeight: '500',
                  margin: '15px 0'
                }}>
                  <span style={{ fontWeight: '700' }}>Who is this for?</span><br />
                  {pkg.bestFor}
                </div>
                <div className="package-features">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="package-feature">
                      <span className="check" style={{ color: "#2ECC71" }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                
                <div className="package-pricing-box" style={{ marginTop: 'auto' }}>
                  {pricing.isDiscounted && (
                    <div className="original-price">
                      <span>₹{pricing.gross.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="package-price" style={{ color: "#E74C3C" }}>
                    ₹{pricing.final.toLocaleString()} 
                    <span className="period" style={{ fontSize: '0.85rem', marginLeft: '6px', color: '#889f92' }}>total</span>
                  </div>
                  {durationMonths > 1 && (
                    <div className="monthly-breakdown">
                      That's ₹{pricing.monthlyInstallment.toLocaleString()} / month
                    </div>
                  )}
                </div>
                <button 
                  className="btn btn-primary" 
                  style={{ width: "100%", marginTop: "1.5rem" }}
                  onClick={() => setSelectedPackage(pkg)}
                >
                  Select Plan
                </button>
              </div>
            );
          })}
          {/* Spacer to make sure the last card has padding on the right when scrolled */}
          <div style={{ flex: '0 0 max(1rem, calc((100vw - 1200px) / 2))' }}></div>
        </div>
      </div>

      <PlanModal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        pkg={selectedPackage}
        mealsPerDay={mealsPerDay}
        durationMonths={durationMonths}
      />
    </section>
  );
}
