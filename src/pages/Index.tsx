import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cloud,
  Server,
  GitBranch,
  Shield,
  Activity,
  Layers,
  Container,
  Workflow,
  ArrowRight,
  Zap,
  BookOpen,
  Users,
  Target,
  Award,
  CheckCircle,
  Play,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { FlowingLine } from "@/components/ui/FlowingLine";
import { Button } from "@/components/ui/button";

const learningModules = [
  {
    title: "Cloud Architecture",
    description: "Understand end-to-end system design with animated request flows",
    icon: Server,
    path: "/architecture",
    color: "info",
    topics: ["DNS", "Load Balancer", "Application Servers", "Databases"],
  },
  {
    title: "Cloud Computing",
    description: "Learn IaaS, PaaS, SaaS and deployment models from scratch",
    icon: Cloud,
    path: "/cloud-computing",
    color: "primary",
    topics: ["Service Models", "Deployment Types", "Real Examples"],
  },
  {
    title: "Virtualization",
    description: "VMs vs Containers, Hypervisors, and resource management",
    icon: Container,
    path: "/virtualization",
    color: "warning",
    topics: ["Virtual Machines", "Docker", "Kubernetes Basics"],
  },
  {
    title: "DevOps Lifecycle",
    description: "Complete DevOps culture, practices, and automation",
    icon: Workflow,
    path: "/devops",
    color: "success",
    topics: ["Culture", "Automation", "Collaboration", "Monitoring"],
  },
  {
    title: "CI/CD Pipeline",
    description: "Interactive pipeline simulation with real-time animations",
    icon: GitBranch,
    path: "/cicd",
    color: "info",
    topics: ["Build", "Test", "Deploy", "Rollback"],
  },
  {
    title: "Security",
    description: "IAM, encryption, secrets management, and best practices",
    icon: Shield,
    path: "/security",
    color: "destructive",
    topics: ["Authentication", "Authorization", "Encryption"],
  },
  {
    title: "Monitoring & Logging",
    description: "Metrics, alerts, dashboards, and incident response",
    icon: Activity,
    path: "/monitoring",
    color: "warning",
    topics: ["Logs", "Metrics", "Alerts", "Dashboards"],
  },
  {
    title: "Scalability",
    description: "Auto-scaling, load balancing, and high availability",
    icon: Layers,
    path: "/scalability",
    color: "success",
    topics: ["Horizontal Scaling", "Load Balancing", "Failover"],
  },
];

const stats = [
  { label: "Topics Covered", value: "50+", icon: BookOpen },
  { label: "Interactive Demos", value: "15+", icon: Play },
  { label: "Visual Diagrams", value: "30+", icon: Target },
  { label: "Real Examples", value: "25+", icon: Award },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_60%)]" />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div className="section-container relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-primary">
                Complete Learning Platform
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Master{" "}
              <span className="text-gradient">Cloud & DevOps</span>
              <br />
              From Zero to Hero
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              Learn cloud architecture, DevOps practices, and modern infrastructure 
              with interactive animations and real-world examples.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/architecture">
                <Button className="btn-primary text-lg px-8 py-6 gap-2">
                  Start Learning
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/cicd">
                <Button variant="outline" className="text-lg px-8 py-6 gap-2">
                  <Play className="w-5 h-5" />
                  Try CI/CD Demo
                </Button>
              </Link>
            </motion.div>

            {/* Flowing line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-lg mx-auto pt-8"
            >
              <FlowingLine color="primary" speed={3} />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who Is This <span className="text-gradient">For?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student, developer, or career switcher, this platform is designed for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Students",
              description: "Preparing for exams, viva, or interviews? Learn concepts with visual explanations and real examples.",
              features: ["Exam preparation", "Viva practice", "Interview prep"],
            },
            {
              icon: Users,
              title: "Beginners",
              description: "New to cloud and DevOps? Start from zero with step-by-step guides and simple explanations.",
              features: ["Zero prerequisites", "Simple language", "Gradual learning"],
            },
            {
              icon: Target,
              title: "Professionals",
              description: "Looking to upskill? Understand modern practices and architecture patterns used in industry.",
              features: ["Industry patterns", "Best practices", "Real scenarios"],
            },
          ].map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="learning-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{audience.title}</h3>
              <p className="text-muted-foreground mb-4">{audience.description}</p>
              <ul className="space-y-2">
                {audience.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Modules */}
      <section className="section-container bg-gradient-to-b from-transparent via-muted/5 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Learning Modules</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore All <span className="text-gradient">Topics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive coverage of cloud computing and DevOps concepts with 
            interactive visualizations and practical examples.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningModules.map((module, index) => (
            <motion.div
              key={module.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={module.path} className="block h-full">
                <div className="learning-card h-full group hover:border-primary/30 transition-all">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <module.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {module.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Learn <span className="text-gradient">Here?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Play,
              title: "Interactive Animations",
              description: "Watch concepts come alive with animated diagrams and real-time simulations. See how requests flow through systems.",
            },
            {
              icon: BookOpen,
              title: "Simple Explanations",
              description: "Complex topics explained in plain English. Every concept broken down step-by-step with real-world analogies.",
            },
            {
              icon: Target,
              title: "Industry-Ready Content",
              description: "Learn exactly what's used in real companies. Patterns and practices from top tech organizations.",
            },
            {
              icon: Award,
              title: "Complete Coverage",
              description: "From cloud basics to advanced DevOps. Everything you need for exams, interviews, and real work.",
            },
          ].map((feature, index) => (
            <AnimatedCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-info/10 border border-primary/20 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Cloud className="w-16 h-16 text-primary mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Dive into the world of cloud computing and DevOps. 
              Interactive lessons, visual explanations, and hands-on simulations await.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/architecture">
                <Button className="btn-primary text-lg px-8 py-6 gap-2">
                  Begin with Architecture
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
