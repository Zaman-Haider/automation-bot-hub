import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Brain, Cpu, Database, Mic, Cloud, Code2, Container, BarChart3,
  Workflow, Shield, Activity, Link2, Wrench, Bot, Star,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

type TechCategory = {
  title: string;
  icon: any;
  color: string;
  items: { name: string; level?: number }[];
};

const categories: TechCategory[] = [
  {
    title: 'LLM & AI Models',
    icon: Brain,
    color: 'from-cyan-400 to-blue-500',
    items: [
      { name: 'GPT (OpenAI)' }, { name: 'Claude (Anthropic)' }, { name: 'Gemini' },
      { name: 'LLM Frameworks' },
    ],
  },
  {
    title: 'AI/ML Frameworks & Libraries',
    icon: Cpu,
    color: 'from-purple-400 to-pink-500',
    items: [
      { name: 'TensorFlow' }, { name: 'PyTorch' }, { name: 'Hugging Face' },
      { name: 'OpenAI APIs' }, { name: 'LangChain' }, { name: 'AutoGen' },
      { name: 'CrewAI' }, { name: 'Pydantic' }, { name: 'FastAPI' },
    ],
  },
  {
    title: 'Vector Databases & Search',
    icon: Database,
    color: 'from-emerald-400 to-cyan-500',
    items: [
      { name: 'Pinecone' }, { name: 'Weaviate' }, { name: 'FAISS' },
      { name: 'Vector Databases' },
    ],
  },
  {
    title: 'Speech Technologies',
    icon: Mic,
    color: 'from-pink-400 to-rose-500',
    items: [
      { name: 'Whisper (OpenAI)' }, { name: 'AWS Polly' },
      { name: 'Google Speech-to-Text' }, { name: 'Text-to-Speech' },
    ],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'from-blue-400 to-indigo-500',
    items: [
      { name: 'AWS' }, { name: 'Azure' }, { name: 'GCP' },
      { name: 'Azure OpenAI' }, { name: 'Azure AI Foundry' }, { name: 'App Service' },
      { name: 'Functions' }, { name: 'Service Bus' }, { name: 'Blob Storage' },
      { name: 'Key Vault' }, { name: 'Application Insights' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'from-yellow-400 to-orange-500',
    items: [
      { name: 'Python' }, { name: 'Go' }, { name: 'TypeScript' },
      { name: 'Rust' }, { name: 'Node.js' }, { name: 'JavaScript' },
      { name: 'Bash/Shell' }, { name: 'Java' },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Container,
    color: 'from-cyan-400 to-teal-500',
    items: [
      { name: 'Docker' }, { name: 'Kubernetes' }, { name: 'CI/CD Pipelines' },
      { name: 'Bicep (IaC)' }, { name: 'Terraform' }, { name: 'GitHub Actions' },
      { name: 'GitLab CI/CD' }, { name: 'Jenkins' },
    ],
  },
  {
    title: 'Data Processing & Analytics',
    icon: BarChart3,
    color: 'from-purple-400 to-violet-500',
    items: [
      { name: 'PySpark' }, { name: 'SQL' }, { name: 'Data Pipelines' },
      { name: 'ETL' }, { name: 'Pandas' }, { name: 'NumPy' },
      { name: 'Apache Spark' },
    ],
  },
  {
    title: 'Message Queues & Events',
    icon: Workflow,
    color: 'from-orange-400 to-red-500',
    items: [
      { name: 'Service Bus' }, { name: 'Kafka' }, { name: 'Redis' },
    ],
  },
  {
    title: 'Workflow Engines',
    icon: Workflow,
    color: 'from-fuchsia-400 to-purple-500',
    items: [
      { name: 'Temporal' }, { name: 'Airflow' }, { name: 'Dagster' },
      { name: 'n8n' }, { name: 'Zapier' }, { name: 'Make (Integromat)' },
      { name: 'IFTTT' },
    ],
  },
  {
    title: 'Security & Compliance',
    icon: Shield,
    color: 'from-red-400 to-pink-500',
    items: [
      { name: 'Vault' }, { name: 'OpenBao' }, { name: 'SSL/TLS' },
      { name: 'OAuth' }, { name: 'API Security' }, { name: 'Prompt Injection Protection' },
    ],
  },
  {
    title: 'Monitoring & Observability',
    icon: Activity,
    color: 'from-green-400 to-emerald-500',
    items: [
      { name: 'Application Insights' }, { name: 'Datadog' }, { name: 'ELK Stack' },
      { name: 'Prometheus' }, { name: 'Grafana' }, { name: 'New Relic' },
      { name: 'CloudWatch' }, { name: 'Splunk' }, { name: 'Tracing Systems' },
    ],
  },
  {
    title: 'Blockchain / Crypto',
    icon: Link2,
    color: 'from-indigo-400 to-blue-500',
    items: [
      { name: 'EigenLayer' }, { name: 'EigenCloud' }, { name: 'Smart Contracts' },
      { name: 'Distributed Ledgers' },
    ],
  },
  {
    title: 'API & Integration',
    icon: Wrench,
    color: 'from-teal-400 to-cyan-500',
    items: [
      { name: 'REST APIs' }, { name: 'GraphQL' }, { name: 'gRPC' },
      { name: 'Postman' }, { name: 'Insomnia' }, { name: 'Swagger/OpenAPI' },
      { name: 'Webhooks' }, { name: 'JSON Schema' }, { name: 'Cedar' },
    ],
  },
  {
    title: 'Automation & Bot Frameworks',
    icon: Bot,
    color: 'from-cyan-400 to-purple-500',
    items: [
      { name: 'Selenium' }, { name: 'Puppeteer' }, { name: 'Playwright' },
      { name: 'Cypress' }, { name: 'UiPath' }, { name: 'Blue Prism' },
      { name: 'Automation Anywhere' }, { name: 'Botpress' }, { name: 'Rasa' },
      { name: 'Dialogflow' }, { name: 'Amazon Lex' }, { name: 'MS Bot Framework' },
    ],
  },
];

const topSkills = [
  { name: 'Python', level: 3 },
  { name: 'REST APIs', level: 3 },
  { name: 'Docker & Containers', level: 3 },
  { name: 'Git & GitHub', level: 2 },
  { name: 'Selenium / Playwright', level: 2 },
  { name: 'Workflow Tools', level: 2 },
  { name: 'Cloud Platforms', level: 2 },
  { name: 'LLM APIs', level: 2 },
  { name: 'SQL & Databases', level: 2 },
  { name: 'CI/CD', level: 2 },
  { name: 'Bot Frameworks', level: 1 },
  { name: 'Linux / Bash', level: 1 },
  { name: 'JSON & Data Formats', level: 1 },
  { name: 'Monitoring & Logging', level: 1 },
  { name: 'API Testing Tools', level: 1 },
];

const TechnologiesSection = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = categories[active].icon;

  return (
    <section id="technologies" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
            Tech Stack
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            <span className="text-gradient">Technologies</span> I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete arsenal of AI, automation, cloud & DevOps tools used to build production-grade bots.
          </p>
        </motion.div>

        {/* Top 15 Must-Have skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-10 neon-border"
        >
          <div className="flex items-center gap-3 mb-5">
            <Star className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg md:text-xl">Top 15 Must-Have Skills</h3>
          </div>
          <ScrollArea className="h-44 pr-4">
            <div className="flex flex-wrap gap-2">
              {topSkills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="px-3 py-1.5 rounded-full bg-muted/40 border border-border text-sm flex items-center gap-2"
                >
                  <span>{s.name}</span>
                  <span className="flex">
                    {Array.from({ length: s.level }).map((_, k) => (
                      <Star key={k} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </motion.div>

        {/* Two-column: categories list + active panel */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar */}
          <div className="glass-card rounded-2xl p-3">
            <ScrollArea className="h-[460px] pr-2">
              <div className="space-y-1">
                {categories.map((c, i) => {
                  const Icon = c.icon;
                  const isActive = i === active;
                  return (
                    <button
                      key={c.title}
                      onClick={() => setActive(i)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl flex items-center gap-3 transition-all border ${
                        isActive
                          ? 'bg-primary/10 border-primary/40 text-primary'
                          : 'border-transparent text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${c.color} bg-opacity-20`}>
                        <Icon className="w-4 h-4 text-background" />
                      </div>
                      <span className="text-sm font-medium truncate">{c.title}</span>
                    </button>
                  );
                })}
              </div>
            </ScrollArea>
          </div>

          {/* Active panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-6 md:p-8 neon-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${categories[active].color}`}>
                <ActiveIcon className="w-6 h-6 text-background" />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl">{categories[active].title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {categories[active].items.length} technologies
                </p>
              </div>
            </div>

            <ScrollArea className="h-[360px] pr-3">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {categories[active].items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="group relative p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/50 transition-all cursor-default"
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${categories[active].color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    <div className="relative flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
