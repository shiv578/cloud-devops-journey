import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Bell,
  BarChart3,
  LineChart,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  Server,
  Database,
  Cpu,
  HardDrive,
  Wifi,
  Zap,
  Eye,
  RefreshCcw,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";

const Monitoring = () => {
  const [cpuUsage, setCpuUsage] = useState(45);
  const [memoryUsage, setMemoryUsage] = useState(62);
  const [requestsPerSec, setRequestsPerSec] = useState(1250);
  const [errorRate, setErrorRate] = useState(0.2);
  const [showAlert, setShowAlert] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);

  // Simulate live metrics
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setCpuUsage(prev => Math.min(99, Math.max(20, prev + (Math.random() - 0.5) * 20)));
      setMemoryUsage(prev => Math.min(95, Math.max(30, prev + (Math.random() - 0.5) * 10)));
      setRequestsPerSec(prev => Math.max(100, prev + (Math.random() - 0.5) * 500));
      
      // Randomly trigger high error rate
      if (Math.random() > 0.9) {
        setErrorRate(prev => Math.min(15, prev + 5));
        setShowAlert(true);
      } else {
        setErrorRate(prev => Math.max(0.1, prev - 0.5));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const simulateIncident = () => {
    setCpuUsage(95);
    setMemoryUsage(88);
    setErrorRate(12.5);
    setShowAlert(true);
    
    setTimeout(() => {
      setCpuUsage(45);
      setMemoryUsage(62);
      setErrorRate(0.2);
      setShowAlert(false);
    }, 5000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-warning/5 via-transparent to-transparent" />
        
        <div className="section-container">
          <SectionHeader
            icon={Activity}
            badge="Observability"
            title="Monitoring & Logging"
            subtitle="Watch your systems in real-time. Detect issues before users notice. Learn about logs, metrics, and alerts."
            centered
          />
        </div>
      </section>

      {/* Why Monitoring Matters */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why Monitoring Matters
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Imagine driving a car without a dashboard - no speedometer, no fuel gauge, no warning lights. 
              That's what running applications without monitoring is like. You'd have no idea if something 
              is wrong until you crash.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Eye, title: "Visibility", description: "See what's happening inside your systems" },
                { icon: Bell, title: "Early Warning", description: "Know about problems before users do" },
                { icon: Zap, title: "Quick Recovery", description: "Fix issues faster with the right data" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-muted/30 text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars of Observability */}
      <section className="section-container">
        <SectionHeader
          icon={BarChart3}
          badge="The Three Pillars"
          title="Logs, Metrics, Traces"
          subtitle="The foundation of understanding your systems."
          centered
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <AnimatedCard
            icon={FileText}
            title="Logs"
            description="Detailed records of events. Like a diary of what happened and when."
            variant="info"
          >
            <div className="space-y-2 text-xs font-mono bg-muted/30 p-3 rounded">
              <p className="text-info">[INFO] User john logged in</p>
              <p className="text-warning">[WARN] High memory usage</p>
              <p className="text-destructive">[ERROR] Database timeout</p>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <span className="font-semibold">Best for:</span> Debugging, audit trails, understanding specific events
            </p>
          </AnimatedCard>

          <AnimatedCard
            icon={LineChart}
            title="Metrics"
            description="Numbers that show the health of your system over time."
            variant="success"
            delay={0.1}
          >
            <div className="space-y-2">
              {[
                { label: "CPU Usage", value: "45%" },
                { label: "Memory", value: "62%" },
                { label: "Requests/sec", value: "1,250" },
              ].map((metric) => (
                <div key={metric.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span className="font-mono text-foreground">{metric.value}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <span className="font-semibold">Best for:</span> Dashboards, trends, alerting on thresholds
            </p>
          </AnimatedCard>

          <AnimatedCard
            icon={Wifi}
            title="Traces"
            description="Follow a request through your entire system."
            variant="warning"
            delay={0.2}
          >
            <div className="space-y-1 text-xs">
              {[
                { service: "API Gateway", time: "5ms" },
                { service: "Auth Service", time: "12ms" },
                { service: "User Service", time: "45ms" },
                { service: "Database", time: "23ms" },
              ].map((trace, i) => (
                <div key={trace.service} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-warning" />
                  <span className="text-muted-foreground">{trace.service}</span>
                  <span className="ml-auto font-mono text-foreground">{trace.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <span className="font-semibold">Best for:</span> Finding slow services, debugging distributed systems
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* Live Dashboard Simulation */}
      <section className="section-container">
        <SectionHeader
          icon={BarChart3}
          badge="Interactive Demo"
          title="Live Dashboard"
          subtitle="See how monitoring dashboards display real-time system health."
          centered
        />

        <div className="flex justify-center gap-4 mt-8 mb-8">
          <Button
            onClick={() => setIsSimulating(!isSimulating)}
            variant={isSimulating ? "destructive" : "default"}
            className="gap-2"
          >
            {isSimulating ? (
              <>Stop Simulation</>
            ) : (
              <>
                <RefreshCcw className="w-4 h-4" />
                Start Live Simulation
              </>
            )}
          </Button>
          <Button
            onClick={simulateIncident}
            variant="outline"
            className="gap-2"
          >
            <AlertTriangle className="w-4 h-4" />
            Simulate Incident
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-5xl mx-auto p-6 rounded-2xl bg-card border border-border"
        >
          {/* Alert Banner */}
          <AnimatePresence>
            {showAlert && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center gap-3"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <Bell className="w-6 h-6 text-destructive" />
                </motion.div>
                <div>
                  <p className="font-semibold text-destructive">Alert: High Error Rate Detected</p>
                  <p className="text-sm text-muted-foreground">Error rate exceeded threshold of 5%</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { icon: Cpu, label: "CPU Usage", value: `${cpuUsage.toFixed(1)}%`, threshold: 80, current: cpuUsage },
              { icon: HardDrive, label: "Memory", value: `${memoryUsage.toFixed(1)}%`, threshold: 85, current: memoryUsage },
              { icon: Activity, label: "Requests/sec", value: requestsPerSec.toFixed(0), threshold: null, current: 0 },
              { icon: AlertTriangle, label: "Error Rate", value: `${errorRate.toFixed(1)}%`, threshold: 5, current: errorRate },
            ].map((metric) => (
              <motion.div
                key={metric.label}
                className={`p-4 rounded-xl border ${
                  metric.threshold && metric.current > metric.threshold
                    ? "border-destructive bg-destructive/5"
                    : "border-border bg-muted/20"
                }`}
                animate={metric.threshold && metric.current > metric.threshold ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.5, repeat: metric.threshold && metric.current > metric.threshold ? Infinity : 0 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <metric.icon className={`w-5 h-5 ${
                    metric.threshold && metric.current > metric.threshold ? "text-destructive" : "text-muted-foreground"
                  }`} />
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                </div>
                <p className={`text-2xl font-bold ${
                  metric.threshold && metric.current > metric.threshold ? "text-destructive" : "text-foreground"
                }`}>
                  {metric.value}
                </p>
                {metric.threshold && (
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        metric.current > metric.threshold ? "bg-destructive" : "bg-success"
                      }`}
                      animate={{ width: `${Math.min(metric.current, 100)}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Service Health */}
          <div className="p-4 rounded-xl bg-muted/20 border border-border">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Server className="w-5 h-5" />
              Service Health
            </h4>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { name: "API Server", status: cpuUsage < 80 ? "healthy" : "degraded" },
                { name: "Database", status: "healthy" },
                { name: "Cache", status: "healthy" },
                { name: "Auth Service", status: errorRate > 5 ? "critical" : "healthy" },
                { name: "Payment Gateway", status: "healthy" },
                { name: "Email Service", status: "healthy" },
              ].map((service) => (
                <div key={service.name} className="flex items-center gap-2 p-2 rounded-lg bg-card">
                  <div className={`w-2 h-2 rounded-full ${
                    service.status === "healthy" ? "bg-success" :
                    service.status === "degraded" ? "bg-warning" : "bg-destructive"
                  }`} />
                  <span className="text-sm text-foreground">{service.name}</span>
                  <span className={`ml-auto text-xs ${
                    service.status === "healthy" ? "text-success" :
                    service.status === "degraded" ? "text-warning" : "text-destructive"
                  }`}>
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Alerting */}
      <section className="section-container">
        <SectionHeader
          icon={Bell}
          badge="Alerting"
          title="When Things Go Wrong"
          subtitle="Alerts notify you when metrics cross thresholds, before users are affected."
          centered
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          {[
            {
              severity: "critical",
              title: "Critical Alert",
              description: "Service is down or severely degraded. Immediate action required.",
              examples: ["Database connection failed", "API returning 500 errors", "Memory exhausted"],
              color: "destructive",
            },
            {
              severity: "warning",
              title: "Warning Alert",
              description: "Something needs attention soon but isn't critical yet.",
              examples: ["CPU above 80%", "Disk space below 20%", "Response time increasing"],
              color: "warning",
            },
            {
              severity: "info",
              title: "Info Alert",
              description: "Informational notification for tracking purposes.",
              examples: ["Deployment completed", "Backup finished", "New user registered"],
              color: "info",
            },
          ].map((alert, index) => (
            <motion.div
              key={alert.severity}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl bg-${alert.color}/5 border border-${alert.color}/20`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg bg-${alert.color}/10 flex items-center justify-center flex-shrink-0`}>
                  {alert.severity === "critical" ? (
                    <XCircle className={`w-5 h-5 text-${alert.color}`} />
                  ) : alert.severity === "warning" ? (
                    <AlertTriangle className={`w-5 h-5 text-${alert.color}`} />
                  ) : (
                    <Bell className={`w-5 h-5 text-${alert.color}`} />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold text-foreground mb-1`}>{alert.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{alert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {alert.examples.map((example) => (
                      <span key={example} className="px-2 py-1 rounded bg-muted text-xs text-muted-foreground">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Incident Response */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-info/5 via-warning/5 to-success/5 border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Incident Response Workflow
          </h3>
          
          <div className="space-y-4">
            {[
              { step: 1, title: "Detect", description: "Alert fires, on-call engineer notified", icon: Bell },
              { step: 2, title: "Triage", description: "Assess severity, gather initial data from dashboards", icon: Eye },
              { step: 3, title: "Investigate", description: "Use logs and traces to find root cause", icon: FileText },
              { step: 4, title: "Fix", description: "Apply solution (rollback, scale up, fix config)", icon: CheckCircle },
              { step: 5, title: "Verify", description: "Confirm metrics return to normal", icon: Activity },
              { step: 6, title: "Learn", description: "Post-mortem to prevent recurrence", icon: Zap },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Monitoring;
