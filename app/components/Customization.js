export default function Customization() {
  return (
    <section className="customize-section section" id="customize">
      <div className="container">
        <div className="customize-header">
          <div className="section-label">Make It Yours</div>
          <h2 className="section-title">Build Your Perfect Bowl</h2>
          <p className="section-subtitle">
            Every body is different. That's why every Tokyo Fit Meals bowl is customizable —
            add protein, swap grains, or pair with a fresh salad.
          </p>
        </div>

        <div className="customize-grid">
          <div className="customize-card">
            <div className="customize-icon">🥩</div>
            <h3 className="customize-title">Extra Protein Add-Ons</h3>
            <p className="customize-desc">
              Boost your protein intake with premium add-ons. Ideal for muscle
              builders and those on high-protein diets.
            </p>
            <div className="customize-options">
              <span className="option-pill">Grilled Chicken +₹60</span>
              <span className="option-pill">Grilled Fish +₹70</span>
              <span className="option-pill">Paneer Tikka +₹50</span>
              <span className="option-pill">Egg Whites +₹30</span>
              <span className="option-pill">Tofu +₹40</span>
              <span className="option-pill">Boiled Eggs +₹25</span>
            </div>
          </div>

          <div className="customize-card">
            <div className="customize-icon">🥗</div>
            <h3 className="customize-title">Fresh Salad Pairings</h3>
            <p className="customize-desc">
              Complete your meal with a crisp, nutrient-dense salad dressed
              in our house-made vinaigrettes. Fiber + micronutrients in every bite.
            </p>
            <div className="customize-options">
              <span className="option-pill">Garden Fresh Salad</span>
              <span className="option-pill">Greek Salad +₹40</span>
              <span className="option-pill">Asian Slaw +₹35</span>
              <span className="option-pill">Quinoa Tabbouleh +₹50</span>
              <span className="option-pill">Caesar Salad +₹45</span>
              <span className="option-pill">Kale Crunch +₹40</span>
            </div>
          </div>

          <div className="customize-card">
            <div className="customize-icon">⚡</div>
            <h3 className="customize-title">Superfood Boosters</h3>
            <p className="customize-desc">
              Elevate your nutrition with functional superfoods — antioxidants,
              adaptogens, and gut-friendly additions.
            </p>
            <div className="customize-options">
              <span className="option-pill">Chia Seeds +₹20</span>
              <span className="option-pill">Flax Seeds +₹15</span>
              <span className="option-pill">Avocado +₹60</span>
              <span className="option-pill">Hummus +₹35</span>
              <span className="option-pill">Kimchi +₹30</span>
              <span className="option-pill">Extra Veggies +₹25</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
