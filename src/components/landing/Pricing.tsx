import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const plans: PricingPlan[] = [
  {
    name: "Personal",
    price: "$16",
    period: "/month",
    description: "Perfect for building a portfolio or simple website",
    features: [
      "Free custom domain for one year",
      "Unlimited bandwidth",
      "SSL security",
      "Mobile-optimized websites",
      "24/7 customer support"
    ],
    cta: "Start Free Trial"
  },
  {
    name: "Business",
    price: "$23",
    period: "/month",
    description: "For growing businesses and professional websites",
    features: [
      "Everything in Personal, plus:",
      "Professional email from Google",
      "Advanced website analytics",
      "Fully integrated eCommerce",
      "Promotional pop-ups and banners",
      "Premium integrations and blocks"
    ],
    highlighted: true,
    cta: "Start Free Trial"
  },
  {
    name: "Commerce",
    price: "$33",
    period: "/month",
    description: "For serious online stores with advanced needs",
    features: [
      "Everything in Business, plus:",
      "0% transaction fees",
      "Advanced shipping options",
      "Abandoned cart recovery",
      "Product reviews",
      "Advanced discounting"
    ],
    cta: "Start Free Trial"
  }
];

const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex flex-col p-8 lg:p-10 ${
        plan.highlighted 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-card border border-border'
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 bg-background text-foreground text-xs font-medium uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className={`font-serif text-2xl font-medium mb-2 ${
          plan.highlighted ? 'text-primary-foreground' : 'text-foreground'
        }`}>
          {plan.name}
        </h3>
        <p className={`text-sm mb-4 ${
          plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'
        }`}>
          {plan.description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl lg:text-5xl font-serif font-medium ${
            plan.highlighted ? 'text-primary-foreground' : 'text-foreground'
          }`}>
            {plan.price}
          </span>
          <span className={`text-sm ${
            plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'
          }`}>
            {plan.period}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
              plan.highlighted ? 'text-primary-foreground' : 'text-foreground'
            }`} />
            <span className={`text-sm ${
              plan.highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'
            }`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full py-6 rounded-none text-base font-medium transition-all duration-200 hover:scale-[1.02] ${
          plan.highlighted 
            ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
        }`}
      >
        {plan.cta}
      </Button>
    </motion.div>
  );
};

const Pricing = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="heading-lg mb-6">
            Simple, transparent pricing
          </h2>
          <p className="body-lg text-muted-foreground">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          All plans billed annually. Prices in USD. <a href="#" className="underline">See full comparison</a>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
