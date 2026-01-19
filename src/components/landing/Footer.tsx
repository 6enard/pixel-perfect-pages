import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';

const footerLinks = {
  products: {
    title: "Products",
    links: [
      { name: "Websites", href: "#" },
      { name: "Domains", href: "#" },
      { name: "Online Stores", href: "#" },
      { name: "Scheduling", href: "#" },
      { name: "Marketing", href: "#" },
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Forum", href: "#" },
      { name: "Developers", href: "#" },
    ]
  },
  company: {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Investors", href: "#" },
      { name: "Contact", href: "#" },
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" },
    ]
  }
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                StudioMkenya
              </span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Everything you need to create a stunning website, sell online, and grow your business.
            </p>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-6">
              <button className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                English
              </button>
              <span className="text-primary-foreground/30">|</span>
              <button className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Kiswahili
              </button>
            </div>

            {/* Copyright */}
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} StudioMkenya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
