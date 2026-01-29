import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Code,
  Layers,
  Building,
  Users,
  Lock,
  Globe,
  Cpu,
  HardDrive,
  Network,
  ArrowRight,
  CheckCircle,
  XCircle,
  DollarSign,
  Zap,
  Shield,
  Scale,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const serviceModels = [
  {
    id: "iaas",
    name: "IaaS",
    fullName: "Infrastructure as a Service",
    icon: Server,
    description: "Rent virtual machines, storage, and networks. You manage everything from OS upwards.",
    examples: ["AWS EC2", "Azure VMs", "Google Compute Engine"],
    analogy: "Like renting an empty apartment - you get the space but bring your own furniture",
    youManage: ["Applications", "Data", "Runtime", "Middleware", "OS"],
    providerManages: ["Virtualization", "Servers", "Storage", "Networking"],
    bestFor: "Companies needing full control over their infrastructure",
    color: "info",
  },
  {
    id: "paas",
    name: "PaaS",
    fullName: "Platform as a Service",
    icon: Code,
    description: "Get a ready platform to deploy code. No worrying about servers or OS.",
    examples: ["Heroku", "Google App Engine", "Azure App Service"],
    analogy: "Like renting a furnished apartment - just bring your clothes and live",
    youManage: ["Applications", "Data"],
    providerManages: ["Runtime", "Middleware", "OS", "Virtualization", "Servers", "Storage", "Networking"],
    bestFor: "Developers who want to focus on code, not infrastructure",
    color: "success",
  },
  {
    id: "saas",
    name: "SaaS",
    fullName: "Software as a Service",
    icon: Cloud,
    description: "Use ready-made software over the internet. Just log in and use.",
    examples: ["Gmail", "Salesforce", "Netflix", "Slack"],
    analogy: "Like staying at a hotel - everything is done for you",
    youManage: ["Your data and settings"],
    providerManages: ["Everything else"],
    bestFor: "End users who just want to use software",
    color: "primary",
  },
];

const deploymentModels = [
  {
    id: "public",
    name: "Public Cloud",
    icon: Globe,
    description: "Resources shared among multiple organizations on the internet",
    pros: ["Cost-effective (pay as you go)", "Highly scalable", "No maintenance required"],
    cons: ["Less control", "Shared infrastructure", "Data privacy concerns"],
    example: "A startup using AWS to host their app - shared data centers with other companies",
    bestFor: "Startups, small businesses, variable workloads",
  },
  {
    id: "private",
    name: "Private Cloud",
    icon: Lock,
    description: "Dedicated infrastructure for a single organization",
    pros: ["Full control", "Better security", "Customization"],
    cons: ["Higher cost", "Maintenance required", "Limited scalability"],
    example: "A bank running their own data center for customer data",
    bestFor: "Banks, healthcare, government - where security is critical",
  },
  {
    id: "hybrid",
    name: "Hybrid Cloud",
    icon: Layers,
    description: "Combination of public and private clouds working together",
    pros: ["Flexibility", "Cost optimization", "Best of both worlds"],
    cons: ["Complex to manage", "Integration challenges"],
    example: "Hospital stores patient records privately but uses public cloud for their website",
    bestFor: "Organizations needing both security and scalability",
  },
];

const CloudComputing = () => {
  const [activeServiceModel, setActiveServiceModel] = useState("iaas");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="section-container">
          <SectionHeader
            icon={Cloud}
            badge="Fundamentals"
            title="Cloud Computing"
            subtitle="Learn what cloud computing is, why it exists, and how it powers modern applications. From basic concepts to service models."
            centered
          />
        </div>
      </section>

      {/* What is Cloud Computing */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What is Cloud Computing?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              <span className="text-primary font-semibold">Cloud computing</span> means using 
              computers, storage, and software over the internet instead of owning them. 
              Think of it like electricity - you don't own a power plant, you just use power 
              when you need it and pay for what you use.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
                <h3 className="font-semibold text-destructive mb-2 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Traditional IT (Old Way)
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                    Buy expensive servers upfront
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                    Hire team to maintain hardware
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                    Guess capacity needs years ahead
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5" />
                    Pay even when not using resources
                  </li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                <h3 className="font-semibold text-success mb-2 flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  Cloud Computing (New Way)
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    Pay only for what you use
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    Provider manages hardware
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    Scale up or down instantly
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                    Access from anywhere with internet
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Cloud is Needed */}
      <section className="section-container">
        <SectionHeader
          icon={Zap}
          badge="Benefits"
          title="Why Cloud Computing?"
          subtitle="Understanding the key advantages that make cloud computing essential for modern businesses."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: DollarSign,
              title: "Cost Savings",
              description: "No upfront hardware costs. Pay monthly like a subscription. Convert capital expense to operational expense.",
            },
            {
              icon: Scale,
              title: "Scalability",
              description: "Need more power? Get it in minutes. Black Friday traffic? Scale up. Quiet period? Scale down.",
            },
            {
              icon: Zap,
              title: "Speed",
              description: "Launch new servers in minutes instead of weeks. Deploy globally without building data centers.",
            },
            {
              icon: Shield,
              title: "Reliability",
              description: "Cloud providers have 99.99% uptime. Data backed up across multiple locations automatically.",
            },
          ].map((benefit, index) => (
            <AnimatedCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
              variant="success"
            />
          ))}
        </div>
      </section>

      {/* Service Models */}
      <section className="section-container">
        <SectionHeader
          icon={Layers}
          badge="Service Models"
          title="IaaS, PaaS, SaaS"
          subtitle="Three different ways to use cloud services, depending on how much control you need."
          centered
        />

        <Tabs defaultValue="iaas" className="mt-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            {serviceModels.map((model) => (
              <TabsTrigger key={model.id} value={model.id} className="gap-2">
                <model.icon className="w-4 h-4" />
                {model.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceModels.map((model) => (
            <TabsContent key={model.id} value={model.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <model.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{model.fullName}</h3>
                      <p className="text-primary font-medium">{model.name}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground">{model.description}</p>

                  <div className="p-4 rounded-lg bg-muted/30">
                    <p className="text-sm text-muted-foreground italic">
                      <span className="font-semibold text-foreground">Analogy: </span>
                      {model.analogy}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {model.examples.map((example) => (
                        <span key={example} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                    <p className="text-sm">
                      <span className="font-semibold text-success">Best for: </span>
                      <span className="text-muted-foreground">{model.bestFor}</span>
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-semibold text-foreground mb-4">Responsibility Model</h4>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground mb-2">You Manage:</div>
                    {model.youManage.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 p-2 rounded bg-info/10"
                      >
                        <Users className="w-4 h-4 text-info" />
                        <span className="text-sm text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="my-4 border-t border-border" />

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground mb-2">Provider Manages:</div>
                    {model.providerManages.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (model.youManage.length + i) * 0.1 }}
                        className="flex items-center gap-2 p-2 rounded bg-success/10"
                      >
                        <Cloud className="w-4 h-4 text-success" />
                        <span className="text-sm text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Deployment Models */}
      <section className="section-container">
        <SectionHeader
          icon={Network}
          badge="Deployment Models"
          title="Public, Private, Hybrid"
          subtitle="Different ways to deploy cloud infrastructure based on your security and control needs."
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {deploymentModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="learning-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <model.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{model.name}</h3>
              <p className="text-muted-foreground mb-4">{model.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-success mb-2">Advantages:</h4>
                  <ul className="space-y-1">
                    {model.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-destructive mb-2">Challenges:</h4>
                  <ul className="space-y-1">
                    {model.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Example: </span>
                    {model.example}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Real World Examples */}
      <section className="section-container">
        <SectionHeader
          icon={Building}
          badge="Real Examples"
          title="Cloud in Everyday Life"
          subtitle="You're already using cloud computing every day without realizing it."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              title: "Netflix",
              description: "Streams videos from AWS servers. Scales up during peak hours, saves millions on infrastructure.",
              type: "Entertainment",
            },
            {
              title: "Your College",
              description: "Uses cloud for student portals, online exams, and video lectures. No server room needed.",
              type: "Education",
            },
            {
              title: "UPI Payments",
              description: "Handles millions of transactions. Cloud scales instantly during festivals and sales.",
              type: "Banking",
            },
            {
              title: "Instagram",
              description: "Stores billions of photos in cloud storage. You never worry about running out of space.",
              type: "Social Media",
            },
          ].map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                {example.type}
              </span>
              <h3 className="text-lg font-bold text-foreground mt-3 mb-2">{example.title}</h3>
              <p className="text-sm text-muted-foreground">{example.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CloudComputing;
