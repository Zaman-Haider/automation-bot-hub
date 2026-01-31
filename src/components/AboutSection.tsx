import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock, Headphones } from 'lucide-react';
import zhLogo from '@/assets/projects/zaman.jpeg'; // replace with your actual image

const features = [
  {
    icon: CheckCircle2,
    title: 'Custom Solutions',
    description: 'Every bot is tailored to your specific business needs and workflows.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Rigorous testing ensures reliable, error-free automation systems.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising on quality.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Continuous support and maintenance for all deployed bots.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">AutomatePro?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With years of experience in automation development, I specialize in creating 
              intelligent bots that transform how businesses operate. From simple task automation 
              to complex AI-powered systems, I deliver solutions that drive real results.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 neon-border relative z-10">
              <div className="text-center mb-8">
                {/* Profile Image with Hover Effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{
                    scale: 1.3,
                    y: -40,
                    boxShadow:
                      '0 0 40px rgba(0,255,255,0.6), 0 0 80px rgba(0,255,255,0.3), 0 0 120px rgba(0,255,255,0.2)',
                  }}
                  whileTap={{
                    scale: 1.2,
                    y: -30,
                    boxShadow:
                      '0 0 30px rgba(0,255,255,0.6), 0 0 60px rgba(0,255,255,0.3)',
                  }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 overflow-hidden cursor-pointer relative z-20"
                >
                  <img
                    src={zhLogo}
                    alt="ZH Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>

                <h3 className="font-display text-2xl font-bold text-foreground">Syed Zaman Haider</h3>
                <p className="text-primary font-medium">Automation Expert</p>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Years of Experience', value: '5+' },
                  { label: 'Bots Delivered', value: '200+' },
                  { label: 'Happy Clients', value: '100+' },
                  { label: 'Countries Served', value: '15+' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex justify-between items-center p-4 rounded-xl bg-muted/50"
                  >
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-display text-xl font-bold text-primary">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating decorations */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-br from-secondary/20 to-neon-pink/20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
