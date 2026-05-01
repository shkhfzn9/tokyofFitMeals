export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '🎯',
      title: 'Choose Your Goal',
      desc: 'Select from weight loss, heart health, muscle gain, or general wellness. We tailor your meals to match your body\'s needs.',
    },
    {
      number: '02',
      icon: '🍱',
      title: 'Customize Your Bowl',
      desc: 'Pick your protein, add extra toppings, include a fresh salad — make every meal uniquely yours. 1 or 2 meals per day.',
    },
    {
      number: '03',
      icon: '🚀',
      title: 'Fresh Daily Delivery',
      desc: 'Chef-prepared meals delivered fresh to your doorstep. No frozen food. No preservatives. Pure, clean nutrition.',
    },
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Three Steps to a Healthier You</h2>
          <p className="section-subtitle">
            Getting started with Tokyo Fit Meals is effortless. No calorie counting,
            no meal prep, no stress — just clean, delicious nutrition.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
