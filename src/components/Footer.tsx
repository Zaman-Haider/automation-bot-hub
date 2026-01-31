import { motion } from 'framer-motion';
import { Bot, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a 
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Bot className="w-6 h-6 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/50" />
            </div>
            <span className="font-display font-bold text-lg tracking-wider">
              <span className="text-gradient">AUTOMATE</span>
              <span className="text-foreground">PRO</span>
            </span>
          </motion.a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by Syed Zaman Haider
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
