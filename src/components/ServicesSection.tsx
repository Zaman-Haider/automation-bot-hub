import { motion } from 'framer-motion';
import { 
  Target, MessageSquare, ShoppingCart, Briefcase, Users, Calendar,
  Mail, Building2, Cloud, DollarSign, Brain, ChevronRight, Sparkles
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Lead & Sales Automation',
    description: 'Automate lead generation, cold outreach, follow-ups, CRM pipelines, and cart recovery.',
    bots: ['Lead Generation Bot', 'Cold Email Outreach Bot', 'CRM Automation Bot', 'Cart Recovery Bot'],
    color: 'cyan',
  },
  {
    icon: MessageSquare,
    title: 'Chat & Communication',
    description: 'WhatsApp, Messenger, website chat, AI support, and FAQ automation bots.',
    bots: ['WhatsApp Bot', 'Messenger Bot', 'Live Chat Bot', 'AI Support Bot'],
    color: 'purple',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Automation',
    description: 'Order processing, inventory alerts, tracking, COD confirmation, and review collection.',
    bots: ['Order Processing Bot', 'Inventory Alert Bot', 'Tracking Bot', 'Review Collection Bot'],
    color: 'pink',
  },
  {
    icon: Briefcase,
    title: 'Business Operations',
    description: 'Workflow automation, invoicing, payment reminders, spreadsheet sync, and reporting.',
    bots: ['Workflow Bot', 'Invoice Bot', 'Payment Reminder Bot', 'Reporting Bot'],
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'HR & Team Automation',
    description: 'Recruitment, CV screening, interview scheduling, onboarding, and attendance tracking.',
    bots: ['Recruitment Bot', 'CV Screening Bot', 'Onboarding Bot', 'Attendance Bot'],
    color: 'purple',
  },
  {
    icon: Calendar,
    title: 'Appointment & Booking',
    description: 'Automated booking, calendar sync, reminders, and reschedule management.',
    bots: ['Booking Bot', 'Calendar Sync Bot', 'Reminder Bot', 'Reschedule Bot'],
    color: 'pink',
  },
  {
    icon: Mail,
    title: 'Marketing Automation',
    description: 'Email campaigns, SMS/WhatsApp marketing, social DMs, and performance reports.',
    bots: ['Email Campaign Bot', 'SMS Bot', 'Social DM Bot', 'Report Bot'],
    color: 'cyan',
  },
  {
    icon: Building2,
    title: 'Industry-Specific',
    description: 'Real estate, healthcare, education, and custom industry automation solutions.',
    bots: ['Real Estate Bot', 'Clinic Bot', 'Education Bot', 'Custom Industry Bot'],
    color: 'purple',
  },
  {
    icon: Cloud,
    title: 'SaaS & Tech',
    description: 'User onboarding, trial follow-ups, support tickets, and bug reporting automation.',
    bots: ['Onboarding Bot', 'Trial Follow-up Bot', 'Support Ticket Bot', 'Bug Report Bot'],
    color: 'pink',
  },
  {
    icon: DollarSign,
    title: 'Finance & Compliance',
    description: 'Expense tracking, financial summaries, and compliance deadline reminders.',
    bots: ['Expense Bot', 'Financial Summary Bot', 'Compliance Bot'],
    color: 'cyan',
  },
  {
    icon: Brain,
    title: 'AI & Advanced',
    description: 'AI knowledge base, data analysis, report generation, and multi-platform automation.',
    bots: ['AI Knowledge Bot', 'Data Analysis Bot', 'Report Generator', 'Multi-Platform Bot'],
    color: 'purple',
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'cyan':
      return {
        icon: 'text-primary bg-primary/10 group-hover:bg-primary/20',
        glow: 'group-hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]',
        dot: 'bg-primary',
        border: 'group-hover:border-primary/50',
      };
    case 'purple':
      return {
        icon: 'text-secondary bg-secondary/10 group-hover:bg-secondary/20',
        glow: 'group-hover:shadow-[0_0_40px_rgba(138,43,226,0.3)]',
        dot: 'bg-secondary',
        border: 'group-hover:border-secondary/50',
      };
    case 'pink':
      return {
        icon: 'text-neon-pink bg-neon-pink/10 group-hover:bg-neon-pink/20',
        glow: 'group-hover:shadow-[0_0_40px_rgba(255,0,128,0.3)]',
        dot: 'bg-neon-pink',
        border: 'group-hover:border-neon-pink/50',
      };
    default:
      return {
        icon: 'text-primary bg-primary/10',
        glow: 'group-hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]',
        dot: 'bg-primary',
        border: 'group-hover:border-primary/50',
      };
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    }
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            What We Offer
          </motion.span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            <span className="text-gradient">Automation Services</span>
          </h2>
          <p className="font-body text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive bot solutions across 11 categories to automate every aspect of your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  transition: { type: "spring", stiffness: 300 } 
                }}
                className={`group glass-card rounded-2xl p-7 border border-border transition-all duration-500 ${colors.glow} ${colors.border}`}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl ${colors.icon} flex items-center justify-center mb-5 transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <service.icon className="w-8 h-8" />
                </motion.div>

                {/* Title & Description */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-base mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Bot List */}
                <div className="space-y-2.5 mb-5">
                  {service.bots.map((bot, i) => (
                    <motion.div 
                      key={bot} 
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-2 h-2 rounded-full ${colors.dot}`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <span className="font-body">{bot}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="pt-5 border-t border-border">
                  <motion.a 
                    href="#contact" 
                    className="inline-flex items-center text-sm font-display font-medium text-primary hover:gap-4 transition-all tracking-wide group/link"
                    whileHover={{ x: 5 }}
                  >
                    Learn More 
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
