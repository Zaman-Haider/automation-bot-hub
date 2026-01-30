import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "👋 Hi! I'm AutoBot, your automation assistant. How can I help you today?",
    isBot: true,
  },
];

const botResponses: Record<string, string> = {
  'hello': "Hello! Great to have you here. Are you looking to automate something specific for your business?",
  'hi': "Hi there! 👋 How can I help you with automation today?",
  'price': "Our pricing depends on the complexity of your project. Simple bots start from $100, while advanced AI bots can range from $500-2000. Want a custom quote? Contact us on WhatsApp!",
  'cost': "Pricing varies by project scope. Basic bots: $100-300, Advanced: $500-1500, AI-powered: $1000-3000. Let's discuss your specific needs!",
  'whatsapp': "You can reach us on WhatsApp at +923039943639 for immediate assistance! 📱",
  'contact': "Best ways to reach us:\n📱 WhatsApp: +923039943639\n📧 Email: syedzamanhaider8@gmail.com",
  'bot': "We create 50+ types of bots including: Lead Gen, WhatsApp, E-commerce, HR, Marketing, AI Chatbots, and more! Which category interests you?",
  'lead': "Our Lead Generation bots can automate prospecting, cold outreach, follow-ups, and CRM management. They typically increase leads by 40-60%!",
  'ecommerce': "For e-commerce, we offer: Cart Recovery, Order Processing, Inventory Alerts, COD Confirmation, and Review Collection bots. Which one would help your store?",
  'help': "I can help you with:\n• Understanding our bot services\n• Getting pricing info\n• Explaining how bots work\n• Connecting you with our team\n\nWhat would you like to know?",
  'default': "Thanks for your message! For detailed inquiries, please reach out via WhatsApp (+923039943639) or email (syedzamanhaider8@gmail.com). I'm here to answer quick questions about our automation services!",
};

const getResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  for (const [keyword, response] of Object.entries(botResponses)) {
    if (keyword !== 'default' && lowerInput.includes(keyword)) {
      return response;
    }
  }
  
  return botResponses.default;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getResponse(input),
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg glow-cyan flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              className="relative"
            >
              <MessageCircle className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-primary animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] glass-card rounded-2xl overflow-hidden border border-border shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AutoBot</h3>
                  <p className="text-xs text-white/80">Online • Quick Replies</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                      message.isBot
                        ? 'bg-muted text-foreground rounded-bl-md'
                        : 'bg-primary text-primary-foreground rounded-br-md'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted rounded-2xl rounded-bl-md p-3 flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-muted border-none focus-visible:ring-primary"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={!input.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
