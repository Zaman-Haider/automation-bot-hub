import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, Sparkles, Zap, CircuitBoard, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const floatingIcons = [
    { Icon: Bot, delay: 0, x: -120, y: -80 },
    { Icon: Zap, delay: 0.2, x: 140, y: -60 },
    { Icon: CircuitBoard, delay: 0.4, x: -160, y: 80 },
    { Icon: Cpu, delay: 0.6, x: 180, y: 100 },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 py-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card neon-border mb-10"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="font-body text-base text-muted-foreground">
              50+ Custom Automation Bots Available
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="font-display text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.1] mb-8 tracking-wide"
          >
            <motion.span 
              className="block text-foreground"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Automate Your
            </motion.span>
            <motion.span 
              className="block text-gradient mt-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Business Workflow
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            From lead generation to customer support, we build intelligent automation bots
            that save time, reduce costs, and scale your business operations effortlessly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 glow-cyan font-display text-base tracking-wider px-10 py-7 group"
                asChild
              >
                <a href="#contact">
                  Get Free Consultation
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-border hover:border-primary hover:text-primary font-display text-base tracking-wider px-10 py-7 backdrop-blur-sm"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:mt-28"
          >
            {[ 
              { value: '50+', label: 'Bot Types' },
              { value: '100+', label: 'Happy Clients' },
              { value: '10M+', label: 'Tasks Automated' },
              { value: '24/7', label: 'Bot Uptime' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.08, y: -5 }}
                className="glass-card rounded-2xl p-6 md:p-8 neon-border group cursor-default"
              >
                <motion.div 
                  className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2"
                  animate={{ 
                    textShadow: ["0 0 20px rgba(0,255,255,0)", "0 0 30px rgba(0,255,255,0.6)", "0 0 20px rgba(0,255,255,0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="font-body text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Bot Icons - Upgraded */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
  <motion.div
    key={index}
    className="absolute top-1/2 left-1/2 hidden lg:block"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.7, 1], // fade-in smoothly
      scale: [0, 0.9, 1],   // pop-in effect
      x: x,
      y: y,
    }}
    transition={{
      duration: 1,
      delay: 0.5 + delay,
      type: "spring" as const,
      stiffness: 50,
      damping: 10,
    }}
    style={{ pointerEvents: "none" }} // so it doesn't block text
  >
    <motion.div
      animate={{
        y: [0, -15, 0, 10, 0], // floating effect
        rotate: [0, 5, -5, 0],  // subtle rotation
        scale: [1, 1.05, 1],    // slight breathing effect
        opacity: [0.1, 1, 0.1], // soft flicker
      }}
      transition={{
        duration: 6 + index * 0.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay,
      }}
      className={`glass-card p-4 rounded-2xl backdrop-blur-lg shadow-lg border border-white/20 ${
        index % 2 === 0 ? "glow-cyan" : "glow-purple"
      }`}
      style={{ zIndex: 10 - index }} // depth layering
    >
      <Icon
        className={`w-8 h-8 ${
          index % 2 === 0 ? "text-primary" : "text-secondary"
        }`}
      />
    </motion.div>
  </motion.div>
))}

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
