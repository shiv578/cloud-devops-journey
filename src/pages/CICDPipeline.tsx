import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitCommit,
  Hammer,
  TestTube,
  Shield,
  Rocket,
  Activity,
  RefreshCcw,
  Play,
  Pause,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Code,
  Zap,
  Clock,
  Users,
  GitBranch,
  Package,
  Server,
  Eye,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { PipelineNode, NodeStatus } from "@/components/ui/PipelineNode";
import { FlowingLine } from "@/components/ui/FlowingLine";
import { InfoTooltip } from "@/components/ui/InfoTooltip";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const pipelineStages = [
  {
    id: "commit",
    icon: GitCommit,
    label: "Code Commit",
    description: "Developer pushes code changes to the repository. This triggers the entire pipeline automatically.",
    details: [
      "Git push to main branch",
      "Webhook triggers pipeline",
      "Source code is fetched",
    ],
  },
  {
    id: "build",
    icon: Hammer,
    label: "Build",
    description: "Code is compiled and dependencies are installed. Creates deployable artifacts.",
    details: [
      "Install dependencies",
      "Compile source code",
      "Create Docker image",
    ],
  },
  {
    id: "test",
    icon: TestTube,
    label: "Test",
    description: "Automated tests run to ensure code quality. Includes unit tests, integration tests, and more.",
    details: [
      "Run unit tests",
      "Run integration tests",
      "Code coverage check",
    ],
  },
  {
    id: "security",
    icon: Shield,
    label: "Security Scan",
    description: "Security vulnerabilities are scanned. Ensures no known security issues in dependencies.",
    details: [
      "Dependency vulnerability scan",
      "SAST analysis",
      "Secret detection",
    ],
  },
  {
    id: "deploy",
    icon: Rocket,
    label: "Deploy",
    description: "Application is deployed to the target environment. Can be staging or production.",
    details: [
      "Deploy to staging",
      "Run smoke tests",
      "Promote to production",
    ],
  },
  {
    id: "monitor",
    icon: Activity,
    label: "Monitor",
    description: "Application is monitored for health and performance. Alerts if issues are detected.",
    details: [
      "Health checks",
      "Performance metrics",
      "Error tracking",
    ],
  },
];

const CICDPipeline = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [simulateFailure, setSimulateFailure] = useState(false);
  const [currentStage, setCurrentStage] = useState(-1);
  const [stageStatuses, setStageStatuses] = useState<NodeStatus[]>(
    pipelineStages.map(() => "pending")
  );
  const [showRollback, setShowRollback] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const runPipeline = async () => {
    setIsRunning(true);
    setLogs([]);
    setShowRollback(false);
    setStageStatuses(pipelineStages.map(() => "pending"));
    addLog("Pipeline started...");

    for (let i = 0; i < pipelineStages.length; i++) {
      setCurrentStage(i);
      setStageStatuses((prev) => {
        const newStatuses = [...prev];
        newStatuses[i] = "running";
        return newStatuses;
      });
      addLog(`Stage: ${pipelineStages[i].label} - Running...`);

      // Simulate stage duration
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Check for simulated failure at test stage
      if (simulateFailure && pipelineStages[i].id === "test") {
        setStageStatuses((prev) => {
          const newStatuses = [...prev];
          newStatuses[i] = "error";
          for (let j = i + 1; j < prev.length; j++) {
            newStatuses[j] = "skipped";
          }
          return newStatuses;
        });
        addLog(`Stage: ${pipelineStages[i].label} - FAILED!`);
        addLog("Pipeline stopped due to test failure.");
        addLog("Initiating rollback to previous stable version...");
        setShowRollback(true);
        setIsRunning(false);
        setCurrentStage(-1);
        return;
      }

      setStageStatuses((prev) => {
        const newStatuses = [...prev];
        newStatuses[i] = "success";
        return newStatuses;
      });
      addLog(`Stage: ${pipelineStages[i].label} - Success ✓`);
    }

    addLog("Pipeline completed successfully! 🎉");
    setIsRunning(false);
    setCurrentStage(-1);
  };

  const resetPipeline = () => {
    setStageStatuses(pipelineStages.map(() => "pending"));
    setLogs([]);
    setShowRollback(false);
    setCurrentStage(-1);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">Automated Delivery Pipeline</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            >
              CI/CD{" "}
              <span className="text-gradient">Pipeline</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Watch code travel automatically from commit to production. 
              Understand each stage of the delivery pipeline with interactive animations.
            </motion.p>

            {/* Animated flowing line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-md mx-auto"
            >
              <FlowingLine color="primary" speed={2} />
            </motion.div>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-muted-foreground italic"
            >
              "Code moves automatically from commit to production"
            </motion.p>
          </div>
        </div>
      </section>

      {/* CI and CD Cards */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Continuous Integration Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="learning-card group"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="w-14 h-14 rounded-xl bg-info/10 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCcw className="w-7 h-7 text-info" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Continuous Integration
                </h3>
                <p className="text-muted-foreground">
                  Merge code frequently. Test automatically. Catch bugs early.
                </p>
              </div>
            </div>

            {/* Step by step list */}
            <div className="space-y-4">
              {[
                { step: 1, text: "Developer pushes code", icon: Code },
                { step: 2, text: "Build starts automatically", icon: Hammer },
                { step: 3, text: "Tests run in parallel", icon: TestTube },
                { step: 4, text: "Feedback sent to developer", icon: CheckCircle },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-info/20 flex items-center justify-center text-info font-bold text-sm">
                    {item.step}
                  </div>
                  <item.icon className="w-5 h-5 text-info" />
                  <span className="text-foreground">{item.text}</span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="ml-auto"
                  >
                    <CheckCircle className="w-5 h-5 text-success" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Hover diagram */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileHover={{ opacity: 1, height: "auto" }}
              className="mt-6 overflow-hidden"
            >
              <div className="flex items-center justify-center gap-2 p-4 bg-muted/20 rounded-lg">
                <Users className="w-5 h-5 text-muted-foreground" />
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <GitBranch className="w-5 h-5 text-info" />
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <Hammer className="w-5 h-5 text-warning" />
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <TestTube className="w-5 h-5 text-primary" />
              </div>
            </motion.div>
          </motion.div>

          {/* Continuous Deployment Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="learning-card group"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket className="w-7 h-7 text-success" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Continuous Deployment
                </h3>
                <p className="text-muted-foreground">
                  Deploy automatically. No manual steps. Fast delivery to users.
                </p>
              </div>
            </div>

            {/* Deployment flow */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-success/5 border border-success/20">
                <Package className="w-6 h-6 text-success" />
                <div>
                  <p className="font-semibold text-foreground">Build Artifact</p>
                  <p className="text-sm text-muted-foreground">Ready for deployment</p>
                </div>
                <ArrowRight className="w-5 h-5 text-success ml-auto" />
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-warning/5 border border-warning/20">
                <Server className="w-6 h-6 text-warning" />
                <div>
                  <p className="font-semibold text-foreground">Staging Environment</p>
                  <p className="text-sm text-muted-foreground">Testing in production-like setup</p>
                </div>
                <ArrowRight className="w-5 h-5 text-warning ml-auto" />
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <Rocket className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Production</p>
                  <p className="text-sm text-muted-foreground">Live for end users</p>
                </div>
                <CheckCircle className="w-5 h-5 text-success ml-auto" />
              </div>
            </div>

            {/* Rollback animation on error */}
            <div className="mt-6 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="font-semibold text-destructive">Rollback Available</span>
              </div>
              <p className="text-sm text-muted-foreground">
                If something goes wrong, automatic rollback reverts to the previous stable version.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Pipeline Section */}
      <section className="section-container">
        <SectionHeader
          icon={GitBranch}
          badge="Interactive Demo"
          title="Live Pipeline Simulation"
          subtitle="Watch a CI/CD pipeline execute in real-time. Toggle failure simulation to see how the pipeline handles errors."
          centered
        />

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 mb-12">
          <Button
            onClick={runPipeline}
            disabled={isRunning}
            className="btn-primary gap-2"
          >
            {isRunning ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <RefreshCcw className="w-4 h-4" />
                </motion.div>
                Running...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Run Pipeline
              </>
            )}
          </Button>

          <Button
            onClick={resetPipeline}
            variant="outline"
            disabled={isRunning}
            className="gap-2"
          >
            <RefreshCcw className="w-4 h-4" />
            Reset
          </Button>

          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-destructive/10 border border-destructive/20">
            <Switch
              checked={simulateFailure}
              onCheckedChange={setSimulateFailure}
              disabled={isRunning}
            />
            <span className="text-sm font-medium text-destructive">Simulate Failure</span>
            <InfoTooltip>
              <p>When enabled, the test stage will fail, demonstrating how CI/CD handles errors and initiates rollback.</p>
            </InfoTooltip>
          </div>
        </div>

        {/* Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative p-8 rounded-2xl bg-card border border-border overflow-x-auto"
        >
          <div className="flex items-center justify-between min-w-max gap-4">
            {pipelineStages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <PipelineNode
                    icon={stage.icon}
                    label={stage.label}
                    description={stage.description}
                    status={stageStatuses[index]}
                    delay={index * 0.1}
                    size="lg"
                  />
                  
                  {/* Stage details */}
                  <AnimatePresence>
                    {currentStage === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 p-3 rounded-lg bg-info/10 border border-info/20 max-w-[150px]"
                      >
                        <ul className="space-y-1">
                          {stage.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.2 }}
                              className="text-xs text-muted-foreground flex items-center gap-1"
                            >
                              <div className="w-1 h-1 rounded-full bg-info" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Connector line */}
                {index < pipelineStages.length - 1 && (
                  <div className="w-16 mx-2 relative">
                    <FlowingLine
                      color={
                        stageStatuses[index] === "success" ? "success" :
                        stageStatuses[index] === "error" ? "error" :
                        currentStage === index ? "info" : "primary"
                      }
                      speed={1}
                    />
                    <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Rollback Animation */}
          <AnimatePresence>
            {showRollback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute inset-x-8 bottom-4 flex items-center justify-center"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1, repeat: 3 }}
                  >
                    <RefreshCcw className="w-4 h-4 text-destructive" />
                  </motion.div>
                  <span className="text-sm font-medium text-destructive">Rolling back to previous version...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pipeline Logs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-4 rounded-xl bg-muted/30 border border-border"
        >
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold text-foreground">Pipeline Logs</span>
          </div>
          <div className="font-mono text-sm space-y-1 max-h-48 overflow-y-auto">
            {logs.length === 0 ? (
              <p className="text-muted-foreground">Click "Run Pipeline" to see logs...</p>
            ) : (
              logs.map((log, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${
                    log.includes("FAILED") || log.includes("stopped")
                      ? "text-destructive"
                      : log.includes("Success") || log.includes("successfully")
                      ? "text-success"
                      : log.includes("Running")
                      ? "text-info"
                      : "text-muted-foreground"
                  }`}
                >
                  {log}
                </motion.p>
              ))
            )}
          </div>
        </motion.div>
      </section>

      {/* Why CI/CD Section */}
      <section className="section-container">
        <SectionHeader
          icon={Zap}
          badge="Benefits"
          title="Why CI/CD Matters"
          subtitle="Understanding the importance of automated pipelines in modern software development."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Clock,
              title: "Faster Delivery",
              description: "Deploy multiple times a day instead of once a month. Automation removes manual bottlenecks.",
              variant: "success" as const,
            },
            {
              icon: Shield,
              title: "Fewer Bugs",
              description: "Automated tests catch issues before they reach production. Quality is built into the process.",
              variant: "info" as const,
            },
            {
              icon: Users,
              title: "Team Confidence",
              description: "Developers can merge code without fear. The pipeline validates everything automatically.",
              variant: "default" as const,
            },
            {
              icon: RefreshCcw,
              title: "Easy Rollbacks",
              description: "If something goes wrong, instantly revert to the previous working version.",
              variant: "warning" as const,
            },
            {
              icon: Activity,
              title: "Better Visibility",
              description: "Everyone sees the pipeline status. No surprises about what's deployed where.",
              variant: "info" as const,
            },
            {
              icon: Rocket,
              title: "Competitive Edge",
              description: "Ship features faster than competitors. Respond quickly to market demands.",
              variant: "success" as const,
            },
          ].map((benefit, index) => (
            <AnimatedCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              variant={benefit.variant}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* What If No CI/CD Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  What Happens Without CI/CD?
                </h3>
                <p className="text-muted-foreground">
                  Understanding the problems that CI/CD solves
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Manual deployments take hours",
                "Bugs found late in production",
                "Fear of deploying on Fridays",
                "Inconsistent environments",
                "No audit trail of changes",
                "Difficult to rollback changes",
              ].map((problem, index) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-destructive/5"
                >
                  <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-foreground">{problem}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CICDPipeline;
