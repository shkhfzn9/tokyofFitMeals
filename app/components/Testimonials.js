export default function Testimonials() {
  const testimonials = [
    {
      stars: '★★★★★',
      text: 'I\'ve tried every meal plan in the city. Tokyo Fit Meals is the first one where I actually look forward to lunch. Down 6kg in 2 months and I\'m never going back to cooking bland chicken!',
      name: 'Priya Sharma',
      initials: 'PS',
      role: 'Lost 6kg · Weight Loss Plan',
    },
    {
      stars: '★★★★★',
      text: 'As a software engineer, meal prep was always my biggest challenge. These bowls are genuinely restaurant-quality but with gym-bro macros. The Beef Keema bowl is insane.',
      name: 'Rahul Verma',
      initials: 'RV',
      role: 'Muscle Gain · Premium Plan',
    },
    {
      stars: '★★★★★',
      text: 'My cardiologist recommended high omega-3, low sodium meals. The Heart Health package from Tokyo Fit Meals fits perfectly. The fish bowls are spectacular and my lipid profile improved in 45 days.',
      name: 'Dr. Meena Krishnan',
      initials: 'MK',
      role: 'Heart Health · 6-Month Subscriber',
    },
    {
      stars: '★★★★★',
      text: 'The customization is what sold me. Extra protein, a fresh salad on the side, and it arrives hot. Honestly, this is better than 80% of restaurants. My whole office is now subscribed.',
      name: 'Arjun Patel',
      initials: 'AP',
      role: 'General Wellness · 2 Meals/Day',
    },
    {
      stars: '★★★★★',
      text: 'I started with the Weight Loss plan post-pregnancy. The nutritionist helped me customize my meals, and the results have been life-changing. I feel energetic and healthy again!',
      name: 'Sneha Gupta',
      initials: 'SG',
      role: 'Post-Pregnancy · Weight Loss',
    },
    {
      stars: '★★★★★',
      text: 'The Vietnamese Chicken bowl is the best thing I\'ve eaten this year. Period. And knowing it\'s actually good for me? That\'s a game-changer. Worth every rupee of the Premium plan.',
      name: 'Karthik Rajan',
      initials: 'KR',
      role: 'Premium Subscriber · 4 months',
    },
  ];

  return (
    <section className="testimonials-section section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Real Results</div>
          <h2 className="section-title">What Our Subscribers Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied subscribers who transformed their health
            with Tokyo Fit Meals.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">{t.stars}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
