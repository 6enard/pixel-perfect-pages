import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, ShoppingBag, Calendar, BarChart3 } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Websites that stand out",
    description: "Start with a designer template and customize every element to match your vision. Our drag-and-drop editor makes it easy to create a stunning website without any design experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Sell anything, anywhere",
    description: "From physical products to digital downloads, subscriptions to services—our commerce tools help you sell anything online with beautiful storefronts and seamless checkout.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Scheduling made simple",
    description: "Let clients book appointments directly from your website. Automated reminders, payment processing, and calendar sync keep your schedule organized.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Grow with insights",
    description: "Built-in analytics, SEO tools, and marketing integrations help you understand your audience and grow your business with data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];

const FeatureBlock = ({ feature, index }: { feature: Feature; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        isReversed ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* Content */}
      <div className={isReversed ? 'lg:col-start-2' : ''}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-6"
        >
          {feature.icon}
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="heading-md mb-6"
        >
          {feature.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="body-md text-muted-foreground mb-8"
        >
          {feature.description}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          href="#"
          className="inline-flex items-center text-base font-medium link-underline"
        >
          Learn more
        </motion.a>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`relative overflow-hidden ${isReversed ? 'lg:col-start-1' : ''}`}
      >
        <div className="aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const FeatureSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-32"
        >
          <h2 className="heading-lg mb-6">
            Everything you need to grow online
          </h2>
          <p className="body-lg text-muted-foreground">
            Build a website, sell your products, book appointments, and more—all from one platform.
          </p>
        </motion.div>

        {/* Feature Blocks */}
        <div className="space-y-24 lg:space-y-40">
          {features.map((feature, index) => (
            <FeatureBlock key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
