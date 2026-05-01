export default function NutritionPhilosophy() {
  return (
    <section className="nutrition-section section" id="nutrition">
      <div className="container">
        <div className="nutrition-grid">
          <div className="nutrition-content">
            <div className="section-label">Our Promise</div>
            <h2 className="section-title">
              Not Just Meals.<br />A Nutrition System.
            </h2>
            <p className="nutrition-text">
              At Tokyo Fit Meals, every bowl is designed by certified nutritionists
              and prepared by professional chefs. We don't believe in fad diets —
              we believe in science-backed, sustainable nutrition that transforms
              your body from the inside out.
            </p>
            <p className="nutrition-text">
              Our meals are built on the principles of macro-balanced nutrition:
              the right ratio of protein, complex carbs, and healthy fats to fuel
              your specific goals — whether that's shedding fat, building lean muscle,
              or supporting heart health.
            </p>

            <div className="nutrition-facts">
              <div className="nutrition-fact">
                <div className="nutrition-fact-icon">🧪</div>
                <div className="nutrition-fact-value">100%</div>
                <div className="nutrition-fact-label">Lab-Tested Ingredients</div>
              </div>
              <div className="nutrition-fact">
                <div className="nutrition-fact-icon">🚫</div>
                <div className="nutrition-fact-value">Zero</div>
                <div className="nutrition-fact-label">Preservatives Added</div>
              </div>
              <div className="nutrition-fact">
                <div className="nutrition-fact-icon">👨‍🍳</div>
                <div className="nutrition-fact-value">5-Star</div>
                <div className="nutrition-fact-label">Professional Chefs</div>
              </div>
              <div className="nutrition-fact">
                <div className="nutrition-fact-icon">📊</div>
                <div className="nutrition-fact-value">Precise</div>
                <div className="nutrition-fact-label">Macro Tracking</div>
              </div>
            </div>
          </div>

          <div className="nutrition-visual">
            <div className="nutrition-image-card">
              <img
                src="/premium-bowl.png"
                alt="Premium butter garlic chicken power bowl"
                width={400}
                height={500}
              />
            </div>
            <div className="nutrition-image-card">
              <img
                src="/mediterranean-bowl.png"
                alt="Mediterranean chicken hummus bowl"
                width={400}
                height={250}
              />
            </div>
            <div className="nutrition-image-card">
              <img
                src="/vietnamese-bowl.png"
                alt="Vietnamese chicken deluxe bowl"
                width={400}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
