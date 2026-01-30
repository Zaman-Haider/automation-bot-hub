import { motion } from 'framer-motion';
import { 
  Target, MessageSquare, ShoppingCart, Briefcase, Users, Calendar,
  Mail, Building2, Cloud, DollarSign, Brain, ChevronRight
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
        icon: 'text-primary bg-primary/10',
        glow: 'group-hover:glow-cyan',
        dot: 'bg-primary',
      };
    case 'purple':
      return {
        icon: 'text-secondary bg-secondary/10',
        glow: 'group-hover:glow-purple',
        dot: 'bg-secondary',
      };
    case 'pink':
      return {
        icon: 'text-neon-pink bg-neon-pink/10',
        glow: 'group-hover:shadow-[0_0_20px_rgba(255,0,128,0.4)]',
        dot: 'bg-neon-pink',
      };
    default:
      return {
        icon: 'text-primary bg-primary/10',
        glow: 'group-hover:glow-cyan',
        dot: 'bg-primary',
      };
  }
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
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
            <span className="text-gradient">Automation Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive bot solutions across 11 categories to automate every aspect of your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`group glass-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 ${colors.glow}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Bot List */}
                <div className="space-y-2">
                  {service.bots.map((bot) => (
                    <div key={bot} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {bot}
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-4 pt-4 border-t border-border">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
