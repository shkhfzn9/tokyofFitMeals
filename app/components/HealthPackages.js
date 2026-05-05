"use client";

import { healthPackages } from "@/config/healthPackagesData";

export default function HealthPackages() {

  return (
    <section className="packages-section section clinical-theme" id="packages">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ color: "#2ECC71", justifyContent: 'center' }}>Health Plans</div>
          <h2 className="section-title">Specialized Care. Delivered.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Nutritionist-prescribed, targeted meal plans for lifestyle goals and specific medical conditions.
          </p>
          <div style={{ 
            marginTop: '1.5rem', 
            display: 'inline-block', 
            background: 'rgba(231, 76, 60, 0.1)', 
            color: '#E74C3C', 
            padding: '8px 20px', 
            borderRadius: '50px', 
            fontWeight: '700',
            fontSize: '0.9rem',
            letterSpacing: '0.05em'
          }}>
            🚀 COMING SOON
          </div>
        </div>

        {/* --- PACKAGES GRID --- */}
        <div className="packages-grid" style={{ 
          marginTop: "4rem", 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {healthPackages.map((pkg) => {
            return (
              <div key={pkg.title} className={`package-card ${pkg.className}`} style={{ opacity: 0.8, filter: 'grayscale(0.2)' }}>
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
                
                <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                  <button 
                    className="btn btn-outline" 
                    style={{ width: "100%", cursor: 'not-allowed', opacity: 0.6 }}
                    disabled
                  >
                    Launching Soon
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>


    </section>
  );
}
