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
  },
  {
    title: 'WhatsApp Support Bot',
    category: 'Chat & Communication',
    description: 'AI-powered customer support handling 500+ daily queries with 95% satisfaction rate.',
    icon: MessageCircle,
    image: whatsappImg,
    metrics: { queries: '500+/day', satisfaction: '95%' },
    gradient: 'from-secondary to-neon-pink',
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
    title: 'Course Enrollment Bot',
    category: 'Education',
    description: 'Automated enrollment and fee reminder system for online education platform.',
    icon: GraduationCap,
    image: educationImg,
    metrics: { enrollments: '10K+', collection: '95%' },
    gradient: 'from-neon-pink to-secondary',
  },
  {
    title: 'Invoice & Payment Bot',
    category: 'Finance',
    description: 'Automated invoicing and payment reminders improving collection rate by 50%.',
    icon: Banknote,
    image: invoiceImg,
    metrics: { invoices: '20K+', improved: '50%' },
    gradient: 'from-neon-blue to-secondary',
  },
  {
    title: 'AI Knowledge Base',
    category: 'AI & Advanced',
    description: 'Custom-trained AI chatbot answering complex product queries with 90% accuracy.',
    icon: Bot,
    image: aiImg,
    metrics: { accuracy: '90%', trained: '10K docs' },
    gradient: 'from-primary to-secondary',
  },
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
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    }
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
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ perspective: 1000 }}
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent`} />
                
                {/* Category Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute top-4 left-4"
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium`}>
                    <project.icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-foreground">{project.category}</span>
                  </div>
                </motion.div>

                {/* Floating Glow */}
                <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r ${project.gradient} opacity-40 blur-3xl group-hover:opacity-60 transition-opacity duration-500`} />
              </div>
              
              <div className="p-6 relative">
                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 tracking-wide">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted-foreground text-base mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-6 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <motion.div 
                      key={key} 
                      className="text-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={`font-display text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-muted-foreground capitalize font-medium tracking-wide">{key}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full border-border hover:border-primary hover:bg-primary/10 hover:text-primary group/btn font-display text-sm tracking-wider transition-all duration-300"
                  asChild
                >
                  <a href="#contact">
                    Request Similar Bot
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-[0.08]`} />
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
