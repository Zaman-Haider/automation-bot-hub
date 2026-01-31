import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const whatsappNumber = '+923039943639';
  const email = 'syedzamanhaider8@gmail.com';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <section id="contact" className="relative py-2 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Let's Build Your Bot</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to automate your business? Get in touch for a free consultation and quote.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* WhatsApp Card */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group glass-card rounded-2xl p-8 border border-border hover:border-green-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">Quick Response</p>
                </div>
              </div>
              <p className="text-lg font-medium text-foreground mb-4">{whatsappNumber}</p>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold group/btn">
                Chat on WhatsApp
                <Send className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href={`mailto:${email}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group glass-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">Detailed Inquiries</p>
                </div>
              </div>
              <p className="text-lg font-medium text-foreground mb-4 break-all">{email}</p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold glow-cyan group/btn">
                Send Email
                <Send className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.a>
          </div>

          {/* Additional Info */}
         
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
