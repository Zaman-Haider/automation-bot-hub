import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, ShoppingBag, Users, Calendar, Mail, Building, Stethoscope, GraduationCap, Banknote, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce Sales Bot',
    category: 'Lead & Sales',
    description: 'Automated cart recovery system that increased sales by 35% for an online fashion store.',
    icon: ShoppingBag,
    metrics: { recovered: '35%', messages: '10K+' },
    gradient: 'from-primary to-neon-blue',
  },
  {
    title: 'WhatsApp Support Bot',
    category: 'Chat & Communication',
    description: 'AI-powered customer support handling 500+ daily queries with 95% satisfaction rate.',
    icon: MessageCircle,
    metrics: { queries: '500+/day', satisfaction: '95%' },
    gradient: 'from-secondary to-neon-pink',
  },
  {
    title: 'Order Tracking System',
    category: 'Ecommerce',
    description: 'Real-time order tracking with automated status updates via WhatsApp and SMS.',
    icon: ShoppingBag,
    metrics: { orders: '50K+', accuracy: '99.9%' },
    gradient: 'from-neon-pink to-primary',
  },
  {
    title: 'HR Recruitment Bot',
    category: 'HR & Team',
    description: 'CV screening and interview scheduling automation reducing hiring time by 60%.',
    icon: Users,
    metrics: { screening: '1000+', timeSaved: '60%' },
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'Clinic Appointment Bot',
    category: 'Healthcare',
    description: 'Multi-clinic appointment system with automated reminders reducing no-shows by 40%.',
    icon: Stethoscope,
    metrics: { bookings: '5K+/mo', noShowReduction: '40%' },
    gradient: 'from-neon-blue to-primary',
  },
  {
    title: 'Email Campaign Automation',
    category: 'Marketing',
    description: 'Personalized email sequences achieving 45% open rate and 12% conversion.',
    icon: Mail,
    metrics: { openRate: '45%', conversion: '12%' },
    gradient: 'from-secondary to-primary',
  },
  {
    title: 'Real Estate Lead Bot',
    category: 'Real Estate',
    description: 'Property inquiry automation with instant responses and scheduling for site visits.',
    icon: Building,
    metrics: { leads: '2K+/mo', response: '<1min' },
    gradient: 'from-primary to-neon-pink',
  },
  {
    title: 'Course Enrollment Bot',
    category: 'Education',
    description: 'Automated enrollment and fee reminder system for online education platform.',
    icon: GraduationCap,
    metrics: { enrollments: '10K+', collection: '95%' },
    gradient: 'from-neon-pink to-secondary',
  },
  {
    title: 'Invoice & Payment Bot',
    category: 'Finance',
    description: 'Automated invoicing and payment reminders improving collection rate by 50%.',
    icon: Banknote,
    metrics: { invoices: '20K+', improved: '50%' },
    gradient: 'from-neon-blue to-secondary',
  },
  {
    title: 'AI Knowledge Base',
    category: 'AI & Advanced',
    description: 'Custom-trained AI chatbot answering complex product queries with 90% accuracy.',
    icon: Bot,
    metrics: { accuracy: '90%', trained: '10K docs' },
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'Multi-Platform Sync Bot',
    category: 'SaaS & Tech',
    description: 'Cross-platform automation connecting Shopify, WooCommerce, and CRM systems.',
    icon: Calendar,
    metrics: { synced: '100K+', platforms: '5+' },
    gradient: 'from-secondary to-neon-blue',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real automation solutions delivering measurable results for businesses worldwide
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative glass-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground mb-4">
                  <project.icon className="w-3 h-3" />
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex gap-4 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-display text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-border hover:border-primary hover:text-primary group/btn"
                  asChild
                >
                  <a href="#contact">
                    Request Similar Bot
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-semibold"
            asChild
          >
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
