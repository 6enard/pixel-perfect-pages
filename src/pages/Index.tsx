import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import FeatureSection from '@/components/landing/FeatureSection';
import Templates from '@/components/landing/Templates';
import Pricing from '@/components/landing/Pricing';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <Templates />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
