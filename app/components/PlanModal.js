"use client";

import { useState, useEffect } from "react";
import { signatureMeals, premiumMeals } from "@/config/menuData";

const allDishes = [...signatureMeals, ...premiumMeals];

export default function PlanModal({ isOpen, onClose, pkg, mealsPerDay, durationMonths }) {
  const [selectedDishes, setSelectedDishes] = useState({});
  const [purpose, setPurpose] = useState("Overall Fitness");
  const [message, setMessage] = useState("");
  
  // Local state for dropdown if custom plan
  const [localMealsPerDay, setLocalMealsPerDay] = useState(mealsPerDay);

  // Sync when props change
  useEffect(() => {
    setLocalMealsPerDay(mealsPerDay);
  }, [mealsPerDay]);

  // Lock navbar below modal when open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  if (!isOpen || !pkg) return null;

  const handleAddDish = (dishName) => {
    setSelectedDishes((prev) => ({
      ...prev,
      [dishName]: (prev[dishName] || 0) + 1,
    }));
  };

  const handleRemoveDish = (dishName) => {
    setSelectedDishes((prev) => {
      const newCount = (prev[dishName] || 0) - 1;
      if (newCount <= 0) {
        const { [dishName]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [dishName]: newCount };
    });
  };

  const totalSelected = Object.values(selectedDishes).reduce((a, b) => a + b, 0);

  const handleWhatsApp = () => {
    const phone = "9622032325";
    
    let dishText = Object.entries(selectedDishes)
      .map(([name, count]) => `- ${name} (x${count})`)
      .join("\n");
      
    if (!dishText) {
      dishText = "No specific dishes selected.";
    }

    const text = `Hello! I would like to order a custom meal plan.
    
*Plan:* ${pkg.title}
*Meals per day:* ${pkg.title === "Custom Plan" ? localMealsPerDay : mealsPerDay}
*Duration:* ${durationMonths} Month(s)
*Purpose:* ${purpose}

*Selected Dishes:*
${dishText}

*Personalization Message:*
${message || "None"}
`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content clinical-theme" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', maxHeight: '90vh' }}>
        <div className="modal-header" style={{ position: 'relative', paddingTop: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '-10px' }}>
            <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#666', padding: '0.5rem', lineHeight: '1', borderRadius: '50%' }} aria-label="Close modal">✕</button>
          </div>
          <div className="modal-icon">{pkg.icon}</div>
          <h2 className="modal-title">Customize Your {pkg.title}</h2>
          {pkg.title === "Custom Plan" ? (
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: '0.6rem' }}>Meals Per Day</p>
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    onClick={() => setLocalMealsPerDay(n)}
                    style={{
                      padding: '8px 22px',
                      borderRadius: '999px',
                      border: localMealsPerDay === n ? '2px solid #27AE60' : '2px solid #e0e0e0',
                      background: localMealsPerDay === n ? '#27AE60' : 'white',
                      color: localMealsPerDay === n ? 'white' : '#555',
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {n} Meal{n > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: '#aaa', marginTop: '0.5rem' }}>📅 1 Month Plan</p>
            </div>
          ) : (
            <p className="modal-subtitle">
              {mealsPerDay} Meals / Day • {durationMonths} Month{durationMonths > 1 ? "s" : ""}
            </p>
          )}
        </div>

        <div className="modal-body" style={{ textAlign: 'left' }}>
          {/* PURPOSE SELECTION */}
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Primary Goal</label>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {["Overall Fitness", "Weight Loss", "Muscle Gain", "Other"].map((p) => (
                <label key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="purpose"
                    value={p}
                    checked={purpose === p}
                    onChange={(e) => setPurpose(e.target.value)}
                    style={{ accentColor: '#2ECC71' }}
                  />
                  {p}
                </label>
              ))}
            </div>
          </div>

          {/* DISH SELECTION */}
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Select Dishes (Optional) - Total: {totalSelected}
            </label>
            <div className="dishes-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '250px', overflowY: 'auto', paddingRight: '10px' }}>
              {allDishes.map((dish, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #eee' }}>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{dish.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>{dish.protein} P • {dish.calories} kcal</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <button 
                      onClick={() => handleRemoveDish(dish.name)}
                      disabled={!selectedDishes[dish.name]}
                      style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', background: selectedDishes[dish.name] ? '#ff6b6b' : '#e9ecef', color: 'white', cursor: selectedDishes[dish.name] ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
                    >-</button>
                    <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: '600' }}>
                      {selectedDishes[dish.name] || 0}
                    </span>
                    <button 
                      onClick={() => handleAddDish(dish.name)}
                      style={{ width: '28px', height: '28px', borderRadius: '50%', border: 'none', background: '#2ECC71', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}
                    >+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PERSONALIZATION MESSAGE */}
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Personalization Notes</label>
            <textarea
              placeholder="E.g., No onions, extra spicy, allergies, etc."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', minHeight: '80px', fontFamily: 'inherit' }}
            />
          </div>
        </div>

        <div className="modal-footer" style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button 
            className="btn btn-primary modal-order-btn" 
            onClick={handleWhatsApp}
            style={{ width: '100%', background: '#25D366', borderColor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Send to WhatsApp
          </button>
          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>
            🔒 Secure your spot. No commitments. Cancel anytime.
          </div>
        </div>
      </div>
    </div>
  );
}
