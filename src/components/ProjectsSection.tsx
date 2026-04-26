import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, ShoppingBag, Users, Calendar, Mail, Building, Stethoscope, GraduationCap, Banknote, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import project images
import ecommerceImg from '@/assets/projects/ecommerce-bot.jpg';
import whatsappImg from '@/assets/projects/whatsapp-bot.jpg';
import orderTrackingImg from '@/assets/projects/order-tracking.jpg';
import hrImg from '@/assets/projects/hr-bot.jpg';
import clinicImg from '@/assets/projects/clinic-bot.jpg';
import emailImg from '@/assets/projects/email-bot.jpg';
import realestateImg from '@/assets/projects/realestate-bot.jpg';
import educationImg from '@/assets/projects/education-bot.jpg';
import invoiceImg from '@/assets/projects/invoice-bot.jpg';
import aiImg from '@/assets/projects/ai-bot.jpg';
import multiplatformImg from '@/assets/projects/multiplatform-bot.jpg';

const projects = [
  {
    title: 'E-commerce Sales Bot',
    category: 'Lead & Sales',
    description: 'Automated cart recovery system that increased sales by 35% for an online fashion store.',
    icon: ShoppingBag,
    image: ecommerceImg,
    metrics: { recovered: '35%', messages: '10K+' },
    gradient: 'from-primary to-neon-blue',
    demoUrl: 'https://whatsappbot.dukan.pk',
  },
  {
    title: 'WhatsApp Support Bot',
    category: 'Chat & Communication',
    description: 'AI-powered customer support handling 500+ daily queries with 95% satisfaction rate.',
    icon: MessageCircle,
    image: whatsappImg,
    metrics: { queries: '500+/day', satisfaction: '95%' },
    gradient: 'from-secondary to-neon-pink',
    demoUrl: 'https://whatsappbotfaysal.dukan.pk',
  },
  {
    title: 'Order Tracking System',
    category: 'Ecommerce',
    description: 'Real-time order tracking with automated status updates via WhatsApp and SMS.',
    icon: ShoppingBag,
    image: orderTrackingImg,
    metrics: { orders: '50K+', accuracy: '99.9%' },
    gradient: 'from-neon-pink to-primary',
  },
  {
    title: 'HR Recruitment Bot',
    category: 'HR & Team',
    description: 'CV screening and interview scheduling automation reducing hiring time by 60%.',
    icon: Users,
    image: hrImg,
    metrics: { screening: '1000+', timeSaved: '60%' },
    gradient: 'from-primary to-secondary',
    demoUrl: 'https://wa.me/923064646464',
  },
  {
    title: 'Clinic Appointment Bot',
    category: 'Healthcare',
    description: 'Multi-clinic appointment system with automated reminders reducing no-shows by 40%.',
    icon: Stethoscope,
    image: clinicImg,
    metrics: { bookings: '5K+/mo', noShowReduction: '40%' },
    gradient: 'from-neon-blue to-primary',
  },
  {
    title: 'Email Campaign Automation',
    category: 'Marketing',
    description: 'Personalized email sequences achieving 45% open rate and 12% conversion.',
    icon: Mail,
    image: emailImg,
    metrics: { openRate: '45%', conversion: '12%' },
    gradient: 'from-secondary to-primary',
    demoUrl: 'https://outreach.dukan.pk',
  },
  {
    title: 'Real Estate Lead Bot',
    category: 'Real Estate',
    description: 'Property inquiry automation with instant responses and scheduling for site visits.',
    icon: Building,
    image: realestateImg,
    metrics: { leads: '2K+/mo', response: '<1min' },
    gradient: 'from-primary to-neon-pink',
  },
  {
    title: 'Food Ordering Bot',
    category: 'Food & Beverage',
    description: 'Conversational food ordering bot allowing customers to browse menus, place orders, and track delivery — all via WhatsApp.',
    icon: ShoppingBag,
    image: educationImg,
    metrics: { orders: '5K+/mo', satisfaction: '98%' },
    gradient: 'from-neon-pink to-secondary',
    demoUrl: 'https://menubot.dukan.pk/dashboard',
  },
  {
    title: 'Invoice & Payment Bot',
    category: 'Finance',
    description: 'Automated invoicing and payment reminders improving collection rate by 50%.',
    icon: Banknote,
    image: invoiceImg,
    metrics: { invoices: '20K+', improved: '50%' },
    gradient: 'from-neon-blue to-secondary',
    demoUrl: 'https://whatsappbpt.dukan.pk',
  },
  // {
  //   title: 'AI Knowledge Base',
  //   category: 'AI & Advanced',
  //   description: 'Custom-trained AI chatbot answering complex product queries with 90% accuracy.',
  //   icon: Bot,
  //   image: aiImg,
  //   metrics: { accuracy: '90%', trained: '10K docs' },
  //   gradient: 'from-primary to-secondary',
  // },
  {
    title: 'Multi-Platform Sync Bot',
    category: 'SaaS & Tech',
    description: 'Cross-platform automation connecting Shopify, WooCommerce, and CRM systems.',
    icon: Calendar,
    image: multiplatformImg,
    metrics: { synced: '100K+', platforms: '5+' },
    gradient: 'from-secondary to-neon-blue',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

import { Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const, // <-- cast to literal
      stiffness: 100,
      damping: 15,
    },
  },
};


const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6"
          >
            ✨ Our Portfolio
          </motion.span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="font-body text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Real automation solutions delivering measurable results for businesses worldwide
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -16,
                scale: 1.04,
                rotateY: 3,
                rotateX: 2,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-transparent hover:shadow-[0_10px_30px_0_rgba(0,255,255,0.2)] transition-all duration-500"
              style={{ perspective: 1200 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-3xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent`} />
              </div>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, rotate: -2 }}
                className="absolute top-4 left-4"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-md border border-border text-xs font-medium shadow-sm">
                  <project.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-foreground">{project.category}</span>
                </div>
              </motion.div>

              {/* Card Content */}
              <div className="p-6 relative">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 tracking-wide">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground text-base mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <motion.div
                      key={key}
                      className="bg-background/30 rounded-xl px-4 py-2 shadow-sm text-center flex-1 min-w-[70px]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={`font-display text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-muted-foreground capitalize font-medium tracking-wide">{key}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r ${project.gradient} text-white font-display text-sm tracking-wider transition-all duration-300 py-3 shadow-md hover:shadow-lg hover:opacity-90`}
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        🚀 Live Demo
                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gradient-to-r from-primary to-secondary hover:from-neon-blue hover:to-neon-pink text-primary font-display text-sm tracking-wider transition-all duration-300 py-3"
                    asChild
                  >
                    <a href="#contact" className="flex items-center justify-center gap-2">
                      Request Similar Bot
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-10 animate-pulse`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 glow-cyan font-display text-base tracking-wider px-10 py-7"
            asChild
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Discuss Your Project
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
