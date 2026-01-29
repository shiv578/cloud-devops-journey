import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Server,
  Database,
  Shield,
  Layers,
  ArrowRight,
  User,
  Cloud,
  Activity,
  HardDrive,
  Wifi,
  Play,
  Pause,
  RefreshCcw,
  CheckCircle,
  Info,
  AlertCircle,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { FlowingLine } from "@/components/ui/FlowingLine";
import { Button } from "@/components/ui/button";

const architectureComponents = [
  {
    id: "user",
    icon: User,
    label: "User",
    description: "End user accessing your application through a web browser or mobile app",
    whyNeeded: "The starting point of every request. Users interact with your application.",
    whatIfRemoved: "No application would be needed - there would be no one to serve!",
    color: "info",
  },
  {
    id: "dns",
    icon: Globe,
    label: "DNS",
    description: "Translates domain names (like google.com) to IP addresses computers understand",
    whyNeeded: "Humans can't remember IP addresses like 142.250.80.46. DNS makes the web usable.",
    whatIfRemoved: "Users would need to memorize IP addresses for every website they visit.",
    color: "primary",
  },
  {
    id: "loadbalancer",
    icon: Layers,
    label: "Load Balancer",
    description: "Distributes incoming traffic across multiple servers to prevent overload",
    whyNeeded: "One server can't handle millions of requests. Load balancers spread the work.",
    whatIfRemoved: "Single server would crash under heavy traffic. No high availability.",
    color: "warning",
  },
  {
    id: "firewall",
    icon: Shield,
    label: "Firewall / WAF",
    description: "Protects your servers from malicious traffic and attacks",
    whyNeeded: "Blocks hackers, DDoS attacks, and malicious requests before they reach your app.",
    whatIfRemoved: "Your servers would be exposed to all kinds of attacks and security threats.",
    color: "destructive",
  },
  {
    id: "appserver",
    icon: Server,
    label: "Application Server",
    description: "Runs your actual application code - the business logic",
    whyNeeded: "Where your code lives and executes. Processes requests and creates responses.",
    whatIfRemoved: "There would be no application! Just static files with no functionality.",
    color: "success",
  },
  {
    id: "cache",
    icon: HardDrive,
    label: "Cache",
    description: "Stores frequently accessed data in fast memory for quick retrieval",
    whyNeeded: "Reduces database load and speeds up response times dramatically.",
    whatIfRemoved: "Every request would hit the database. Slower responses, more costs.",
    color: "info",
  },
  {
    id: "database",
    icon: Database,
    label: "Database",
    description: "Stores all your persistent data - users, orders, content, etc.",
    whyNeeded: "Applications need to remember things. Databases provide permanent storage.",
    whatIfRemoved: "No data persistence. Users couldn't save anything. App would be useless.",
    color: "primary",
  },
];

const ArchitecturePage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [selectedComponent, setSelectedComponent] = useState<typeof architectureComponents[0] | null>(null);

  const runAnimation = async () => {
    setIsAnimating(true);
    setCurrentStep(0);
    
    for (let i = 0; i < architectureComponents.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 1200));
    }
    
    // Show response flow back
    for (let i = architectureComponents.length - 1; i >= 0; i--) {
      setCurrentStep(i + architectureComponents.length);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    setCurrentStep(-1);
    setIsAnimating(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-info/5 via-transparent to-transparent" />
        
        <div className="section-container">
          <SectionHeader
            icon={Server}
            badge="System Design"
            title="Cloud Architecture"
            subtitle="Understand how real-world cloud applications are built. See how each component works together to serve millions of users."
            centered
          />
        </div>
      </section>

      {/* Interactive Architecture Diagram */}
      <section className="section-container">
        <div className="mb-8 flex justify-center gap-4">
          <Button
            onClick={runAnimation}
            disabled={isAnimating}
            className="btn-primary gap-2"
          >
            {isAnimating ? (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
                  <RefreshCcw className="w-4 h-4" />
                </motion.div>
                Simulating Request...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Simulate User Request
              </>
            )}
          </Button>
        </div>

        {/* Architecture Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative p-8 rounded-2xl bg-card border border-border overflow-x-auto"
        >
          <div className="flex items-center justify-between min-w-max gap-4">
            {architectureComponents.map((component, index) => {
              const isActive = currentStep === index || currentStep === (architectureComponents.length * 2 - 1 - index);
              const isPassed = currentStep > index && currentStep < architectureComponents.length;
              const isReturning = currentStep >= architectureComponents.length && currentStep < (architectureComponents.length * 2 - index);
              
              return (
                <div key={component.id} className="flex items-center">
                  <motion.div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setSelectedComponent(component)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`relative w-20 h-20 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-primary/10 shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                          : isPassed
                          ? "border-success bg-success/10"
                          : isReturning
                          ? "border-info bg-info/10"
                          : "border-border bg-muted/20"
                      }`}
                      animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <component.icon className={`w-8 h-8 ${
                        isActive ? "text-primary" :
                        isPassed ? "text-success" :
                        isReturning ? "text-info" :
                        "text-muted-foreground"
                      }`} />
                      
                      {(isPassed || isReturning) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-success flex items-center justify-center"
                        >
                          <CheckCircle className="w-4 h-4 text-background" />
                        </motion.div>
                      )}
                    </motion.div>
                    <span className={`mt-2 text-sm font-medium ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}>
                      {component.label}
                    </span>
                  </motion.div>
                  
                  {/* Connector */}
                  {index < architectureComponents.length - 1 && (
                    <div className="w-12 mx-2 relative">
                      <FlowingLine 
                        color={isActive || isPassed ? "success" : isReturning ? "info" : "primary"} 
                        speed={1.5} 
                      />
                      <ArrowRight className={`absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 ${
                        isActive || isPassed ? "text-success" : "text-muted-foreground"
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Request/Response indicator */}
          <AnimatePresence>
            {isAnimating && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 text-center"
              >
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                  currentStep < architectureComponents.length
                    ? "bg-primary/10 text-primary"
                    : "bg-info/10 text-info"
                }`}>
                  <motion.div
                    animate={{ x: currentStep < architectureComponents.length ? [0, 5, 0] : [0, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <ArrowRight className={`w-4 h-4 ${
                      currentStep >= architectureComponents.length ? "rotate-180" : ""
                    }`} />
                  </motion.div>
                  {currentStep < architectureComponents.length ? "Request flowing →" : "← Response returning"}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Component Details Panel */}
        <AnimatePresence>
          {selectedComponent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <selectedComponent.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{selectedComponent.label}</h3>
                    <button 
                      onClick={() => setSelectedComponent(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-info">
                        <Info className="w-4 h-4" />
                        <span className="font-semibold">What is it?</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{selectedComponent.description}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-success">
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-semibold">Why is it needed?</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{selectedComponent.whyNeeded}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-destructive">
                        <AlertCircle className="w-4 h-4" />
                        <span className="font-semibold">What if removed?</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{selectedComponent.whatIfRemoved}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-muted-foreground mt-4 text-sm">
          Click on any component to learn more about it
        </p>
      </section>

      {/* Component Deep Dives */}
      <section className="section-container">
        <SectionHeader
          icon={Layers}
          badge="Deep Dive"
          title="Understanding Each Component"
          subtitle="Let's break down what each part of the architecture does and why it matters."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {architectureComponents.map((component, index) => (
            <AnimatedCard
              key={component.id}
              icon={component.icon}
              title={component.label}
              description={component.description}
              delay={index * 0.1}
              onClick={() => setSelectedComponent(component)}
            >
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{component.whyNeeded}</span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Real World Example */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-info/5 to-success/5 border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Real-World Example: Ordering Food Online
          </h3>
          
          <div className="space-y-4">
            {[
              { step: "You", text: "Open the food delivery app", icon: User },
              { step: "DNS", text: "App looks up foodapp.com → gets IP address", icon: Globe },
              { step: "Load Balancer", text: "Routes you to the least busy server", icon: Layers },
              { step: "Firewall", text: "Checks if your request is safe", icon: Shield },
              { step: "App Server", text: "Shows you nearby restaurants and menu", icon: Server },
              { step: "Cache", text: "Quickly retrieves popular restaurant images", icon: HardDrive },
              { step: "Database", text: "Stores your order and payment details", icon: Database },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-primary">{item.step}: </span>
                  <span className="text-foreground">{item.text}</span>
                </div>
                {index < 6 && <ArrowRight className="w-4 h-4 text-muted-foreground" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default ArchitecturePage;
