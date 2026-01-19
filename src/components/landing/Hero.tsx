import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background-secondary opacity-50" />
      
      <div className="container-wide relative z-10 pt-20 lg:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Now with AI-powered design tools
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="heading-xl mb-6 text-balance"
          >
            Design your future
            <br />
            <span className="text-muted-foreground">with StudioMkenya</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="body-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Create a stunning website, launch an online store, or grow your 
            business with our all-in-one platform. No coding required.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-none text-base font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
            <a
              href="#templates"
              className="group flex items-center gap-2 text-base font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Explore templates
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16 pt-10 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by millions of entrepreneurs worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
              {['Forbes', 'TechCrunch', 'Wired', 'FastCompany', 'Inc.'].map((brand) => (
                <span 
                  key={brand} 
                  className="text-lg md:text-xl font-serif font-semibold text-muted-foreground"
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
