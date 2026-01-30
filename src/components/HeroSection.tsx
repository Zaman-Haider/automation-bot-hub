import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card neon-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              50+ Custom Automation Bots Available
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Automate Your</span>
            <br />
            <span className="text-gradient">Business Workflow</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            From lead generation to customer support, we build intelligent automation bots
            that save time, reduce costs, and scale your business operations effortlessly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-semibold text-lg px-8 py-6 group"
              asChild
            >
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:border-primary hover:text-primary font-semibold text-lg px-8 py-6"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24"
          >
            {[
              { value: '50+', label: 'Bot Types' },
              { value: '100+', label: 'Happy Clients' },
              { value: '10M+', label: 'Tasks Automated' },
              { value: '24/7', label: 'Bot Uptime' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="glass-card rounded-xl p-4 md:p-6 neon-border"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Bot Icons */}
        <motion.div
          className="absolute top-32 left-10 hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="glass-card p-4 rounded-2xl glow-cyan">
            <Bot className="w-8 h-8 text-primary" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-48 right-16 hidden lg:block"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="glass-card p-4 rounded-2xl glow-purple">
            <Zap className="w-8 h-8 text-secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
