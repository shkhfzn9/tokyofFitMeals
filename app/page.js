import Navbar from './components/Navbar';
import TrustBanner from './components/TrustBanner';
import TrustBadges from './components/TrustBadges';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import HealthPackages from './components/HealthPackages';
import SubscriptionPlans from './components/SubscriptionPlans';
import Customization from './components/Customization';
import DetailedMenu from './components/DetailedMenu';
import NutritionPhilosophy from './components/NutritionPhilosophy';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <TrustBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <HowItWorks />
        <DetailedMenu />
        <SubscriptionPlans />
        <HealthPackages />
        <Customization />
        <NutritionPhilosophy />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
