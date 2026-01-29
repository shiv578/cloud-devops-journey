import { motion } from "framer-motion";
import {
  Workflow,
  Code,
  Hammer,
  TestTube,
  Rocket,
  Activity,
  Users,
  ArrowRight,
  RefreshCcw,
  CheckCircle,
  XCircle,
  Target,
  Zap,
  MessageSquare,
  GitBranch,
  Repeat,
  Clock,
  Heart,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { FlowingLine } from "@/components/ui/FlowingLine";

const devopsLifecycle = [
  { id: "plan", icon: Target, label: "Plan", description: "Define requirements and plan sprints" },
  { id: "code", icon: Code, label: "Code", description: "Write and review code" },
  { id: "build", icon: Hammer, label: "Build", description: "Compile and package" },
  { id: "test", icon: TestTube, label: "Test", description: "Automated testing" },
  { id: "release", icon: GitBranch, label: "Release", description: "Prepare for deployment" },
  { id: "deploy", icon: Rocket, label: "Deploy", description: "Push to production" },
  { id: "operate", icon: Workflow, label: "Operate", description: "Manage infrastructure" },
  { id: "monitor", icon: Activity, label: "Monitor", description: "Watch and improve" },
];

const DevOps = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-success/5 via-transparent to-transparent" />
        
        <div className="section-container">
          <SectionHeader
            icon={Workflow}
            badge="Culture & Practice"
            title="DevOps Explained"
            subtitle="DevOps is not just tools - it's a culture of collaboration, automation, and continuous improvement that bridges development and operations."
            centered
          />
        </div>
      </section>

      {/* What is DevOps */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What is DevOps?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              <span className="text-primary font-semibold">DevOps</span> = Development + Operations. 
              It's a set of practices that combines software development (Dev) and IT operations (Ops) 
              to shorten the development lifecycle and deliver high-quality software continuously.
            </p>
            
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-muted-foreground italic">
                <span className="font-semibold text-foreground">Simple Analogy: </span>
                Think of a restaurant. Dev is the kitchen (making food), Ops is the front-of-house 
                (serving customers). DevOps means both teams communicate constantly, share responsibilities, 
                and work together to give customers the best experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem DevOps Solves */}
      <section className="section-container">
        <SectionHeader
          icon={XCircle}
          badge="The Problem"
          title="Before DevOps: The Wall"
          subtitle="Development and Operations teams worked in silos, causing delays and conflicts."
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-info/5 border border-info/20"
          >
            <div className="w-14 h-14 rounded-xl bg-info/10 flex items-center justify-center mb-4">
              <Code className="w-7 h-7 text-info" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Development Team Says:</h3>
            <ul className="space-y-3">
              {[
                '"It works on my machine!"',
                '"Just ship the new features"',
                '"Why does deployment take so long?"',
                '"Operations is too slow"',
              ].map((quote) => (
                <li key={quote} className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="w-4 h-4 text-info flex-shrink-0" />
                  <span className="italic">{quote}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-warning/5 border border-warning/20"
          >
            <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center mb-4">
              <Workflow className="w-7 h-7 text-warning" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Operations Team Says:</h3>
            <ul className="space-y-3">
              {[
                '"Dev keeps breaking things!"',
                '"We need stability, not features"',
                '"The code isn\'t production-ready"',
                '"Development doesn\'t understand our constraints"',
              ].map((quote) => (
                <li key={quote} className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="w-4 h-4 text-warning flex-shrink-0" />
                  <span className="italic">{quote}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This conflict slowed down delivery, created blame culture, and led to longer release cycles.
          </p>
        </motion.div>
      </section>

      {/* DevOps Lifecycle */}
      <section className="section-container">
        <SectionHeader
          icon={Repeat}
          badge="The Lifecycle"
          title="DevOps Infinite Loop"
          subtitle="A continuous cycle of planning, building, testing, deploying, and monitoring."
          centered
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-card border border-border"
        >
          {/* Circular representation */}
          <div className="relative max-w-3xl mx-auto">
            {/* Center infinity symbol concept */}
            <div className="flex items-center justify-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center"
              >
                <Repeat className="w-10 h-10 text-primary" />
              </motion.div>
            </div>

            {/* Lifecycle stages in a flow */}
            <div className="grid grid-cols-4 gap-4">
              {devopsLifecycle.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-2 ${
                      index < 4 ? "bg-info/10" : "bg-success/10"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <stage.icon className={`w-6 h-6 ${index < 4 ? "text-info" : "text-success"}`} />
                  </motion.div>
                  <span className="font-semibold text-foreground text-sm">{stage.label}</span>
                  <span className="text-xs text-muted-foreground mt-1">{stage.description}</span>
                </motion.div>
              ))}
            </div>

            {/* Labels for Dev and Ops sides */}
            <div className="flex justify-between mt-6">
              <div className="text-center">
                <span className="text-sm font-semibold text-info">← Development</span>
              </div>
              <div className="text-center">
                <span className="text-sm font-semibold text-success">Operations →</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Principles */}
      <section className="section-container">
        <SectionHeader
          icon={Heart}
          badge="Core Principles"
          title="The CALMS Framework"
          subtitle="Five pillars that define DevOps culture and practices."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {[
            {
              letter: "C",
              title: "Culture",
              description: "Break silos. Dev and Ops work as one team. Shared responsibility for outcomes.",
              icon: Users,
            },
            {
              letter: "A",
              title: "Automation",
              description: "Automate everything possible. Less manual work = fewer errors = faster delivery.",
              icon: Zap,
            },
            {
              letter: "L",
              title: "Lean",
              description: "Eliminate waste. Focus on value. Small batch sizes. Continuous improvement.",
              icon: Target,
            },
            {
              letter: "M",
              title: "Measurement",
              description: "Measure everything. Track metrics. Data-driven decisions. Know your performance.",
              icon: Activity,
            },
            {
              letter: "S",
              title: "Sharing",
              description: "Share knowledge. Share tools. Share responsibility. Transparent communication.",
              icon: MessageSquare,
            },
          ].map((principle, index) => (
            <motion.div
              key={principle.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="learning-card text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">{principle.letter}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{principle.title}</h3>
              <p className="text-sm text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Practices */}
      <section className="section-container">
        <SectionHeader
          icon={Workflow}
          badge="Practices"
          title="Key DevOps Practices"
          subtitle="The techniques that make DevOps work."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: GitBranch,
              title: "Continuous Integration",
              description: "Merge code frequently (multiple times a day). Run automated tests on every merge.",
              variant: "info" as const,
            },
            {
              icon: Rocket,
              title: "Continuous Delivery",
              description: "Code is always ready to deploy. One click can push to production.",
              variant: "success" as const,
            },
            {
              icon: Hammer,
              title: "Infrastructure as Code",
              description: "Define infrastructure in code files. Version control your servers and networks.",
              variant: "warning" as const,
            },
            {
              icon: Activity,
              title: "Monitoring & Logging",
              description: "Track everything. Know when issues happen. Understand system behavior.",
              variant: "info" as const,
            },
            {
              icon: MessageSquare,
              title: "Collaboration & Communication",
              description: "Shared chat channels. Stand-ups. Retrospectives. Everyone knows what's happening.",
              variant: "default" as const,
            },
            {
              icon: RefreshCcw,
              title: "Continuous Feedback",
              description: "Learn from production. Use data to improve. Fast feedback loops.",
              variant: "success" as const,
            },
          ].map((practice, index) => (
            <AnimatedCard
              key={practice.title}
              icon={practice.icon}
              title={practice.title}
              description={practice.description}
              variant={practice.variant}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-success/5 via-primary/5 to-info/5 border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            DevOps by the Numbers
          </h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "200x", label: "More frequent deployments" },
              { metric: "24x", label: "Faster recovery from failures" },
              { metric: "3x", label: "Lower change failure rate" },
              { metric: "22%", label: "Less time on unplanned work" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-primary mb-2">{stat.metric}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 text-sm">
            * Based on DORA (DevOps Research and Assessment) State of DevOps reports
          </p>
        </motion.div>
      </section>

      {/* Real World Team Workflow */}
      <section className="section-container">
        <SectionHeader
          icon={Users}
          badge="Real Example"
          title="A Day in a DevOps Team"
          subtitle="How a modern DevOps team works together."
          centered
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {[
            { time: "9:00 AM", event: "Daily standup - team syncs on progress and blockers", icon: Users },
            { time: "9:30 AM", event: "Developer pushes code, CI pipeline runs tests automatically", icon: Code },
            { time: "10:00 AM", event: "Code review and merge to main branch", icon: GitBranch },
            { time: "10:30 AM", event: "Automated deployment to staging environment", icon: Rocket },
            { time: "11:00 AM", event: "QA tests on staging, reports bugs in shared channel", icon: TestTube },
            { time: "2:00 PM", event: "Bug fixed, new pipeline run, automatic deploy to staging", icon: Hammer },
            { time: "3:00 PM", event: "One-click deploy to production", icon: CheckCircle },
            { time: "3:30 PM", event: "Monitoring dashboard shows healthy metrics", icon: Activity },
            { time: "5:00 PM", event: "Team reviews deployment metrics and plans improvements", icon: Target },
          ].map((item, index) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
            >
              <div className="flex-shrink-0 w-20 text-sm font-mono text-primary">{item.time}</div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default DevOps;
