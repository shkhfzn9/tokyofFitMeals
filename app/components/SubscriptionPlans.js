'use client';

import { useState } from 'react';
import PlanModal from './PlanModal';

export default function SubscriptionPlans() {
  const [isTwoMeals, setIsTwoMeals] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const plans = {
    oneMeal: {
      starter: {
        name: 'Essential Plan',
        desc: 'Perfect for beginners — 1 clean meal per day from our Signature menu.',
        basePrice: 4999,
        perMeal: 167,
        features: [
          '1 meal per day (30 meals/month)',
          'Choose from Signature Bowl menu',
          'Standard protein portion',
          'Free fresh salad with every meal',
          'Weekly meal swap flexibility',
          'Nutritionist meal plan access',
        ],
      },
      premium: {
        name: 'Premium Plan',
        desc: 'Elevate your nutrition — 1 Premium bowl per day with extra customizations.',
        basePrice: 6999,
        perMeal: 233,
        features: [
          '1 meal per day (30 meals/month)',
          'Full Signature + Premium menu access',
          'Extra protein add-on included',
          'Free fresh salad + dressing',
          'Priority delivery window',
          'Monthly nutritionist consultation',
          'Custom macro adjustment',
        ],
      },
    },
    twoMeals: {
      starter: {
        name: 'Essential Duo',
        desc: 'Two clean meals daily — lunch and dinner sorted with Signature bowls.',
        basePrice: 8999,
        perMeal: 150,
        features: [
          '2 meals per day (60 meals/month)',
          'Choose from Signature Bowl menu',
          'Standard protein portion each meal',
          'Free fresh salad with every meal',
          'Flexible meal timing',
          'Nutritionist meal plan access',
        ],
      },
      premium: {
        name: 'Premium Duo',
        desc: 'The ultimate plan — 2 Premium bowls daily with maximum customization.',
        basePrice: 12999,
        perMeal: 217,
        features: [
          '2 meals per day (60 meals/month)',
          'Full Signature + Premium menu access',
          'Extra protein on both meals',
          'Premium salad + superfood dressing',
          'Priority delivery slot',
          'Weekly nutritionist check-in',
          'Custom macro & calorie targets',
          'Free weekend Special bowl upgrade',
        ],
      },
    },
    custom: {
      name: 'Custom Plan',
      desc: 'Build your own perfect plan exactly how you want it.',
      basePrice: null,
      perMeal: null,
      features: [
        'Choose your exact number of meals',
        'Hand-pick every single dish',
        'Specify allergies & preferences',
        'Direct WhatsApp ordering',
        'Full control over your macros',
      ],
    }
  };

  const currentPlans = isTwoMeals ? plans.twoMeals : plans.oneMeal;

  return (
    <section className="plans-section section" id="plans">
      <div className="container">
        <div className="plans-header">
          <div className="section-label">Subscription Plans</div>
          <h2 className="section-title">Simple Plans. Serious Results.</h2>
          <p className="section-subtitle">
            Whether you need 1 meal or 2 per day, we have you covered.
            Cancel or pause anytime.
          </p>
        </div>

        <div className="frequency-toggle">
          <span className={`frequency-option ${!isTwoMeals ? 'active' : ''}`}>
            1 Meal / Day
          </span>
          <button
            className={`toggle-switch ${isTwoMeals ? 'active' : ''}`}
            onClick={() => setIsTwoMeals(!isTwoMeals)}
            aria-label="Toggle meal frequency"
          ></button>
          <span className={`frequency-option ${isTwoMeals ? 'active' : ''}`}>
            2 Meals / Day
            <span style={{ 
              background: 'linear-gradient(135deg, #2ECC71, #27AE60)', 
              color: 'white', 
              padding: '3px 10px', 
              borderRadius: '20px', 
              fontSize: '0.7rem', 
              fontWeight: '700', 
              marginLeft: '8px' 
            }}>
              SAVE 10%
            </span>
          </span>
        </div>

        <div className="plans-grid">
          <div className="plan-card">
            <h3 className="plan-name">{currentPlans.starter.name}</h3>
            <p className="plan-desc">{currentPlans.starter.desc}</p>
            <div className="plan-price">
              <span className="currency">₹</span>
              {currentPlans.starter.basePrice.toLocaleString()}
              <span className="period">/month</span>
            </div>
            <div className="plan-per-meal">
              That's just ₹{currentPlans.starter.perMeal}/meal — less than eating out! 🎉
            </div>
            <div className="plan-features">
              {currentPlans.starter.features.map((f, i) => (
                <div key={i} className="plan-feature">
                  <span className="icon">✓</span>
                  {f}
                </div>
              ))}
            </div>
            <button className="btn btn-outline" style={{ width: '100%' }}>
              Get Started
            </button>
          </div>

          <div className="plan-card featured">
            <h3 className="plan-name">{currentPlans.premium.name}</h3>
            <p className="plan-desc">{currentPlans.premium.desc}</p>
            <div className="plan-price">
              <span className="currency">₹</span>
              {currentPlans.premium.basePrice.toLocaleString()}
              <span className="period">/month</span>
            </div>
            <div className="plan-per-meal">
              Just ₹{currentPlans.premium.perMeal}/meal — including premium bowls! 🚀
            </div>
            <div className="plan-features">
              {currentPlans.premium.features.map((f, i) => (
                <div key={i} className="plan-feature">
                  <span className="icon">✓</span>
                  {f}
                </div>
              ))}
            </div>
            <button className="btn btn-primary" style={{ width: '100%' }}>
              Go Premium →
            </button>
          </div>

          <div className="plan-card">
            <h3 className="plan-name">{plans.custom.name}</h3>
            <p className="plan-desc">{plans.custom.desc}</p>
            <div className="plan-price" style={{ fontSize: '2rem' }}>
              Custom
            </div>
            <div className="plan-per-meal">
              Tailored exactly to your goals and budget 🥗
            </div>
            <div className="plan-features">
              {plans.custom.features.map((f, i) => (
                <div key={i} className="plan-feature">
                  <span className="icon" style={{ background: 'rgba(52, 152, 219, 0.12)', color: '#3498DB' }}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <button 
              className="btn btn-outline" 
              style={{ width: '100%', borderColor: '#3498DB', color: '#3498DB' }}
              onClick={() => setSelectedPackage({ title: 'Custom Plan', icon: '✨', desc: 'Build your own perfect plan exactly how you want it.' })}
            >
              Customize Plan
            </button>
          </div>

        </div>
      </div>

      <PlanModal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        pkg={selectedPackage}
        mealsPerDay={isTwoMeals ? 2 : 1}
        durationMonths={1}
      />
    </section>
  );
}
