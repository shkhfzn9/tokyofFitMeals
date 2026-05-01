"use client";

import { useState } from "react";

const faqData = [
  {
    q: "How fresh are the meals? Are they frozen?",
    a: "Never frozen. Every Tokyo Fit Meals bowl is prepared fresh daily by our professional chefs using locally sourced ingredients. We cook in the morning and deliver the same day. You will taste the freshness in every bite.",
  },
  {
    q: "Can I switch between meal plans or pause my subscription?",
    a: "Absolutely! You can switch between plans, pause, or cancel anytime from your dashboard. We believe in flexibility \u2014 no lock-in contracts, no hidden penalties. Changes take effect from your next billing cycle.",
  },
  {
    q: "How does the protein add-on work?",
    a: "Each bowl comes with a standard protein portion (approx. 120g). You can add extra protein \u2014 grilled chicken (+\u20B960), grilled fish (+\u20B970), paneer (+\u20B950), egg whites (+\u20B930), or tofu (+\u20B940) \u2014 to any bowl. Great for those on high-protein or muscle-building plans.",
  },
  {
    q: "What is the difference between Signature and Premium bowls?",
    a: "Signature bowls (\u20B9180\u2013\u20B9220) are our everyday favorites with excellent macros. Premium bowls (\u20B9230\u2013\u20B9280) feature elevated ingredients like hummus, Mediterranean toppings, and deluxe preparations with higher protein content and complex flavor profiles.",
  },
  {
    q: "Do you accommodate dietary restrictions (allergies, veg, etc.)?",
    a: "Yes! While our current menu is primarily non-vegetarian, every meal is customizable. You can swap proteins, add veg options like tofu/paneer, and request allergy-specific modifications. We are launching a full vegetarian line soon.",
  },
  {
    q: "How does the Health Package differ from a regular subscription?",
    a: "Health Packages are goal-oriented meal plans designed by certified nutritionists. Your Weight Loss, Heart Health, Muscle Gain, or Wellness package includes specific meal sequencing, macro targets, nutritionist consultations, and progress tracking \u2014 not just meals, but a complete nutrition system.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We currently deliver across major metro areas. Enter your pincode on checkout to confirm availability in your location. We are expanding rapidly \u2014 if we are not in your area yet, join our waitlist to be the first to know!",
  },
  {
    q: "Can I get 1 meal on some days and 2 meals on others?",
    a: "Currently, our plans are structured as either 1 or 2 meals per day for consistency and pricing. However, Premium plan subscribers can skip individual meals with 24-hour notice. We are working on a fully flexible scheduling feature.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <div className="faq-header">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Questions? We Have Got Answers.</h2>
          <p className="section-subtitle">
            Everything you need to know about Tokyo Fit Meals — from freshness
            to flexibility.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                {faq.q}
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p className="faq-answer-text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
