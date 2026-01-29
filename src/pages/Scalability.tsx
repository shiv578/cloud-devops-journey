import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Scale,
  Server,
  Users,
  ArrowUp,
  ArrowDown,
  Activity,
  CheckCircle,
  XCircle,
  RefreshCcw,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Database,
  Globe,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const Scalability = () => {
  const [trafficLevel, setTrafficLevel] = useState([50]);
  const [serverCount, setServerCount] = useState(2);
  const [isAutoScaling, setIsAutoScaling] = useState(false);
  const [failedServer, setFailedServer] = useState<number | null>(null);

  // Auto-scaling simulation
  useEffect(() => {
    if (isAutoScaling) {
      const traffic = trafficLevel[0];
      if (traffic > 80 && serverCount < 8) {
        setServerCount(prev => Math.min(8, prev + 1));
      } else if (traffic < 30 && serverCount > 1) {
        setServerCount(prev => Math.max(1, prev - 1));
      }
    }
  }, [trafficLevel, isAutoScaling]);

  const simulateFailure = () => {
    const randomServer = Math.floor(Math.random() * serverCount) + 1;
    setFailedServer(randomServer);
    
    setTimeout(() => {
      setFailedServer(null);
      if (serverCount > 1) {
        setServerCount(prev => prev); // Maintain count (failover handled)
      }
    }, 3000);
  };

  const loadPerServer = Math.round(trafficLevel[0] / serverCount);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-success/5 via-transparent to-transparent" />
        
        <div className="section-container">
          <SectionHeader
            icon={Layers}
            badge="Architecture"
            title="Scalability & High Availability"
            subtitle="Build systems that handle any load and never go down. Learn auto-scaling, load balancing, and fault tolerance."
            centered
          />
        </div>
      </section>

      {/* What is Scalability */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What is Scalability?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              <span className="text-primary font-semibold">Scalability</span> is a system's ability 
              to handle growing traffic by adding resources. It's like a restaurant that can add 
              more tables and waiters during rush hour, then remove them when it's quiet.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-info/5 border border-info/20">
                <h3 className="font-semibold text-info mb-3 flex items-center gap-2">
                  <ArrowUp className="w-5 h-5" />
                  Vertical Scaling (Scale Up)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Make your existing server more powerful (more CPU, RAM, storage).
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="text-success flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Simple to implement
                  </li>
                  <li className="text-destructive flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Has limits (can't scale forever)
                  </li>
                  <li className="text-destructive flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Single point of failure
                  </li>
                </ul>
              </div>
              
              <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                <h3 className="font-semibold text-success mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5" />
                  Horizontal Scaling (Scale Out)
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Add more servers to share the load.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="text-success flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Unlimited scaling potential
                  </li>
                  <li className="text-success flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Better fault tolerance
                  </li>
                  <li className="text-warning flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> More complex to manage
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Auto-Scaling Demo */}
      <section className="section-container">
        <SectionHeader
          icon={Scale}
          badge="Interactive Demo"
          title="Auto-Scaling Simulation"
          subtitle="See how systems automatically add or remove servers based on traffic."
          centered
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-5xl mx-auto mt-12 p-8 rounded-2xl bg-card border border-border"
        >
          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Traffic Level:</span>
              <div className="w-48">
                <Slider
                  value={trafficLevel}
                  onValueChange={setTrafficLevel}
                  max={100}
                  min={10}
                  step={5}
                />
              </div>
              <span className="text-sm font-mono text-foreground w-12">{trafficLevel[0]}%</span>
            </div>

            <Button
              onClick={() => setIsAutoScaling(!isAutoScaling)}
              variant={isAutoScaling ? "default" : "outline"}
              className="gap-2"
            >
              <RefreshCcw className={`w-4 h-4 ${isAutoScaling ? "animate-spin" : ""}`} />
              {isAutoScaling ? "Auto-Scaling ON" : "Enable Auto-Scaling"}
            </Button>

            <Button onClick={simulateFailure} variant="outline" className="gap-2">
              <XCircle className="w-4 h-4" />
              Simulate Failure
            </Button>
          </div>

          {/* Traffic indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Incoming Traffic</span>
              <span className="text-sm font-mono text-foreground">{trafficLevel[0]}% capacity</span>
            </div>
            <div className="h-4 bg-muted rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${
                  trafficLevel[0] > 80 ? "bg-destructive" :
                  trafficLevel[0] > 60 ? "bg-warning" : "bg-success"
                }`}
                animate={{ width: `${trafficLevel[0]}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Load Balancer */}
          <div className="text-center mb-6">
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20"
              animate={{ scale: trafficLevel[0] > 80 ? [1, 1.02, 1] : 1 }}
              transition={{ duration: 0.5, repeat: trafficLevel[0] > 80 ? Infinity : 0 }}
            >
              <Layers className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Load Balancer</span>
              <span className="text-sm text-muted-foreground">
                (distributing to {serverCount} servers)
              </span>
            </motion.div>
          </div>

          {/* Servers Grid */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <AnimatePresence mode="popLayout">
              {Array.from({ length: serverCount }).map((_, i) => {
                const isFailed = failedServer === i + 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    layout
                    className={`relative p-4 rounded-xl border-2 ${
                      isFailed
                        ? "border-destructive bg-destructive/10"
                        : loadPerServer > 80
                        ? "border-warning bg-warning/10"
                        : "border-success bg-success/10"
                    }`}
                  >
                    <Server className={`w-8 h-8 mx-auto mb-2 ${
                      isFailed ? "text-destructive" :
                      loadPerServer > 80 ? "text-warning" : "text-success"
                    }`} />
                    <p className="text-sm font-medium text-center">Server {i + 1}</p>
                    <p className="text-xs text-muted-foreground text-center">
                      {isFailed ? "FAILED" : `${loadPerServer}% load`}
                    </p>
                    
                    {/* Health indicator */}
                    <motion.div
                      className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                        isFailed ? "bg-destructive" : "bg-success"
                      }`}
                      animate={isFailed ? { scale: [1, 0.8, 1] } : { opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Manual scaling controls */}
          {!isAutoScaling && (
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => setServerCount(prev => Math.max(1, prev - 1))}
                variant="outline"
                size="sm"
                disabled={serverCount <= 1}
              >
                <ArrowDown className="w-4 h-4 mr-1" /> Scale Down
              </Button>
              <Button
                onClick={() => setServerCount(prev => Math.min(8, prev + 1))}
                variant="outline"
                size="sm"
                disabled={serverCount >= 8}
              >
                <ArrowUp className="w-4 h-4 mr-1" /> Scale Up
              </Button>
            </div>
          )}

          {/* Status Messages */}
          <AnimatePresence>
            {failedServer && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 rounded-lg bg-warning/10 border border-warning/20 text-center"
              >
                <p className="text-warning font-semibold">
                  Server {failedServer} failed! Traffic rerouted to healthy servers.
                </p>
                <p className="text-sm text-muted-foreground">
                  This is high availability in action - users don't notice the failure.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Load Balancing */}
      <section className="section-container">
        <SectionHeader
          icon={Layers}
          badge="Traffic Distribution"
          title="Load Balancing"
          subtitle="Distribute traffic across multiple servers for better performance and reliability."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              title: "Round Robin",
              description: "Sends each request to the next server in line, cycling through all servers equally.",
              example: "Request 1 → Server A, Request 2 → Server B, Request 3 → Server C, repeat",
            },
            {
              title: "Least Connections",
              description: "Sends new requests to the server with fewest active connections.",
              example: "Server A has 10 connections, B has 5 → next request goes to B",
            },
            {
              title: "IP Hash",
              description: "Same user always goes to the same server (useful for sessions).",
              example: "User from IP 192.168.1.1 always connects to Server A",
            },
            {
              title: "Weighted",
              description: "More powerful servers get more traffic based on their capacity.",
              example: "Server A (8 cores): 70% traffic, Server B (2 cores): 30% traffic",
            },
          ].map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="learning-card"
            >
              <h4 className="font-bold text-foreground mb-2">{method.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
              <div className="p-2 rounded bg-muted/30 text-xs text-muted-foreground font-mono">
                {method.example}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* High Availability */}
      <section className="section-container">
        <SectionHeader
          icon={Shield}
          badge="Reliability"
          title="High Availability"
          subtitle="Design systems that keep running even when components fail."
          centered
        />

        <div className="max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { nines: "99%", downtime: "3.65 days/year", label: "Two Nines" },
                { nines: "99.9%", downtime: "8.76 hours/year", label: "Three Nines" },
                { nines: "99.99%", downtime: "52.6 min/year", label: "Four Nines" },
              ].map((level) => (
                <div key={level.nines} className="text-center p-4 rounded-lg bg-muted/30">
                  <p className="text-3xl font-bold text-primary">{level.nines}</p>
                  <p className="text-sm text-muted-foreground">{level.downtime}</p>
                  <p className="text-xs text-muted-foreground mt-1">{level.label}</p>
                </div>
              ))}
            </div>

            <h4 className="font-semibold text-foreground mb-4">Key Strategies for High Availability:</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Server, title: "Redundancy", description: "Multiple copies of every component" },
                { icon: RefreshCcw, title: "Failover", description: "Automatic switch to backup when primary fails" },
                { icon: Globe, title: "Multi-Region", description: "Deploy across geographic regions" },
                { icon: Database, title: "Data Replication", description: "Keep copies of data in sync" },
                { icon: Activity, title: "Health Checks", description: "Continuously monitor component health" },
                { icon: Clock, title: "Fast Recovery", description: "Minimize time to recover from failures" },
              ].map((strategy) => (
                <div key={strategy.title} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                  <strategy.icon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{strategy.title}</p>
                    <p className="text-sm text-muted-foreground">{strategy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real World Examples */}
      <section className="section-container">
        <SectionHeader
          icon={TrendingUp}
          badge="Real Examples"
          title="Scalability in Action"
          subtitle="How major companies handle massive scale."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              company: "Netflix",
              scale: "250+ million subscribers",
              approach: "Microservices, multi-region deployment, auto-scaling based on viewing patterns",
            },
            {
              company: "Amazon",
              scale: "Billions of requests/day",
              approach: "Massive horizontal scaling, CDN for static content, database sharding",
            },
            {
              company: "Flipkart",
              scale: "Big Billion Days sale",
              approach: "Pre-scales 10x before sales, uses queue-based architecture to handle bursts",
            },
          ].map((example, index) => (
            <motion.div
              key={example.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-success/5 border border-border"
            >
              <h4 className="text-xl font-bold text-foreground mb-2">{example.company}</h4>
              <p className="text-sm text-primary font-medium mb-3">{example.scale}</p>
              <p className="text-sm text-muted-foreground">{example.approach}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Scalability;
