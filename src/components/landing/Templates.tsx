import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface Template {
  name: string;
  category: string;
  image: string;
}

const templates: Template[] = [
  {
    name: "Horizon",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
  },
  {
    name: "Meridian",
    category: "Business",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80"
  },
  {
    name: "Oasis",
    category: "Store",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
  },
  {
    name: "Aurora",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&q=80"
  },
  {
    name: "Summit",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80"
  },
  {
    name: "Cascade",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80"
  }
];

const TemplateCard = ({ template, index }: { template: Template; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
        <img
          src={template.image}
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="px-6 py-3 bg-background text-foreground text-sm font-medium">
            Preview
          </span>
        </motion.div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif text-lg font-medium">{template.name}</h3>
          <p className="text-sm text-muted-foreground">{template.category}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </motion.div>
  );
};

const Templates = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="templates" className="section-padding bg-background-secondary">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16"
        >
          <div>
            <h2 className="heading-lg mb-4">
              Start with a designer template
            </h2>
            <p className="body-md text-muted-foreground max-w-xl">
              Choose from hundreds of beautiful, mobile-optimized templates and customize them to fit your brand.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-base font-medium whitespace-nowrap link-underline"
          >
            Browse all templates
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Template Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {templates.map((template, index) => (
            <TemplateCard key={template.name} template={template} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
