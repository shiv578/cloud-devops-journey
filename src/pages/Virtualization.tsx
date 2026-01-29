import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  Server,
  Cpu,
  HardDrive,
  Layers,
  Box,
  ArrowRight,
  CheckCircle,
  XCircle,
  Zap,
  Clock,
  Scale,
  Shield,
  Play,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";

const Virtualization = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [activeTab, setActiveTab] = useState<"vm" | "container">("vm");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-warning/5 via-transparent to-transparent" />
        
        <div className="section-container">
          <SectionHeader
            icon={Container}
            badge="Infrastructure"
            title="Virtualization & Containers"
            subtitle="Understand how virtualization works, compare VMs with containers, and learn why Docker revolutionized software deployment."
            centered
          />
        </div>
      </section>

      {/* What is Virtualization */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              What is Virtualization?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              <span className="text-primary font-semibold">Virtualization</span> is the technology 
              that lets you run multiple "virtual computers" on a single physical machine. 
              It's like having multiple apartments in one building - each apartment is independent 
              but they all share the same building infrastructure.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Without Virtualization
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>1 physical server = 1 application</p>
                  <p>Most server capacity wasted (only 10-15% used)</p>
                  <p>Need separate hardware for each service</p>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-success/5 border border-success/20">
                <h3 className="font-semibold text-success mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  With Virtualization
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>1 physical server = many virtual servers</p>
                  <p>Use 70-80% of server capacity</p>
                  <p>Run different OS on same hardware</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hypervisor Section */}
      <section className="section-container">
        <SectionHeader
          icon={Cpu}
          badge="Core Technology"
          title="Understanding Hypervisors"
          subtitle="The hypervisor is the magic layer that makes virtualization possible."
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="learning-card"
          >
            <div className="w-14 h-14 rounded-xl bg-info/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-info">T1</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Type 1 Hypervisor</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Also called "Bare Metal" - runs directly on hardware without needing a host OS.
            </p>
            
            {/* Visual representation */}
            <div className="space-y-2 p-4 rounded-lg bg-muted/20">
              <div className="flex gap-2">
                <div className="flex-1 p-2 rounded bg-info/20 text-center text-xs">VM 1</div>
                <div className="flex-1 p-2 rounded bg-info/20 text-center text-xs">VM 2</div>
                <div className="flex-1 p-2 rounded bg-info/20 text-center text-xs">VM 3</div>
              </div>
              <div className="p-2 rounded bg-info/40 text-center text-sm font-medium">Hypervisor</div>
              <div className="p-2 rounded bg-muted text-center text-sm">Hardware</div>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-sm"><span className="font-semibold text-success">Pros:</span> Better performance, more secure, enterprise-grade</p>
              <p className="text-sm"><span className="font-semibold text-muted-foreground">Examples:</span> VMware ESXi, Microsoft Hyper-V, Xen</p>
              <p className="text-sm"><span className="font-semibold text-info">Used by:</span> Data centers, cloud providers</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="learning-card"
          >
            <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-warning">T2</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Type 2 Hypervisor</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Also called "Hosted" - runs on top of an existing operating system.
            </p>
            
            {/* Visual representation */}
            <div className="space-y-2 p-4 rounded-lg bg-muted/20">
              <div className="flex gap-2">
                <div className="flex-1 p-2 rounded bg-warning/20 text-center text-xs">VM 1</div>
                <div className="flex-1 p-2 rounded bg-warning/20 text-center text-xs">VM 2</div>
              </div>
              <div className="p-2 rounded bg-warning/40 text-center text-sm font-medium">Hypervisor</div>
              <div className="p-2 rounded bg-primary/20 text-center text-sm">Host OS (Windows/Mac/Linux)</div>
              <div className="p-2 rounded bg-muted text-center text-sm">Hardware</div>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-sm"><span className="font-semibold text-success">Pros:</span> Easy to install, great for learning, runs on any computer</p>
              <p className="text-sm"><span className="font-semibold text-muted-foreground">Examples:</span> VirtualBox, VMware Workstation, Parallels</p>
              <p className="text-sm"><span className="font-semibold text-info">Used by:</span> Developers, students, testing</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VM vs Container Comparison */}
      <section className="section-container">
        <SectionHeader
          icon={Box}
          badge="Comparison"
          title="Virtual Machines vs Containers"
          subtitle="Two different approaches to running isolated applications. Let's understand when to use each."
          centered
        />

        <div className="flex justify-center gap-4 mt-8 mb-12">
          <Button
            onClick={() => setActiveTab("vm")}
            variant={activeTab === "vm" ? "default" : "outline"}
            className="gap-2"
          >
            <Server className="w-4 h-4" />
            Virtual Machines
          </Button>
          <Button
            onClick={() => setActiveTab("container")}
            variant={activeTab === "container" ? "default" : "outline"}
            className="gap-2"
          >
            <Container className="w-4 h-4" />
            Containers
          </Button>
          <Button
            onClick={() => setShowComparison(!showComparison)}
            variant="outline"
            className="gap-2"
          >
            <Play className="w-4 h-4" />
            {showComparison ? "Hide" : "Show"} Animation
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* VM Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: activeTab === "vm" ? 1 : 0.5, x: 0 }}
            className={`p-6 rounded-2xl bg-card border-2 transition-all ${
              activeTab === "vm" ? "border-info" : "border-border"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-info" />
              <h3 className="text-2xl font-bold text-foreground">Virtual Machine</h3>
            </div>

            {/* Visual Stack */}
            <div className="space-y-2 mb-6">
              <AnimatePresence>
                {showComparison && (
                  <>
                    {["App 1", "App 2", "App 3"].map((app, i) => (
                      <motion.div
                        key={app}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex gap-2"
                      >
                        <div className="flex-1 space-y-1">
                          <div className="p-2 rounded bg-info/30 text-center text-sm font-medium">{app}</div>
                          <div className="p-1 rounded bg-info/20 text-center text-xs">Bins/Libs</div>
                          <div className="p-2 rounded bg-info/40 text-center text-sm">Guest OS</div>
                        </div>
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="p-3 rounded bg-primary/20 text-center font-medium"
              >
                Hypervisor
              </motion.div>
              <div className="p-2 rounded bg-muted/50 text-center text-sm">Host OS</div>
              <div className="p-2 rounded bg-muted text-center text-sm">Hardware</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <span className="text-sm text-muted-foreground">Complete OS isolation - very secure</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <span className="text-sm text-muted-foreground">Can run different OS (Linux VM on Windows)</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                <span className="text-sm text-muted-foreground">Heavy - each VM needs full OS (GBs)</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                <span className="text-sm text-muted-foreground">Slow to start - minutes</span>
              </div>
            </div>
          </motion.div>

          {/* Container Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: activeTab === "container" ? 1 : 0.5, x: 0 }}
            className={`p-6 rounded-2xl bg-card border-2 transition-all ${
              activeTab === "container" ? "border-success" : "border-border"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Container className="w-8 h-8 text-success" />
              <h3 className="text-2xl font-bold text-foreground">Container</h3>
            </div>

            {/* Visual Stack */}
            <div className="space-y-2 mb-6">
              <AnimatePresence>
                {showComparison && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2"
                  >
                    {["App 1", "App 2", "App 3"].map((app, i) => (
                      <motion.div
                        key={app}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-1 space-y-1"
                      >
                        <div className="p-2 rounded bg-success/30 text-center text-sm font-medium">{app}</div>
                        <div className="p-1 rounded bg-success/20 text-center text-xs">Bins/Libs</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="p-3 rounded bg-success/40 text-center font-medium"
              >
                Container Runtime (Docker)
              </motion.div>
              <div className="p-2 rounded bg-muted/50 text-center text-sm">Host OS</div>
              <div className="p-2 rounded bg-muted text-center text-sm">Hardware</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <span className="text-sm text-muted-foreground">Lightweight - share host OS kernel (MBs)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <span className="text-sm text-muted-foreground">Fast to start - seconds</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                <span className="text-sm text-muted-foreground">Consistent across environments</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                <span className="text-sm text-muted-foreground">Must use same OS kernel as host</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/30">
                <th className="p-4 text-left font-semibold text-foreground border-b border-border">Aspect</th>
                <th className="p-4 text-left font-semibold text-info border-b border-border">Virtual Machine</th>
                <th className="p-4 text-left font-semibold text-success border-b border-border">Container</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { aspect: "Size", vm: "Large (GBs)", container: "Small (MBs)" },
                { aspect: "Startup Time", vm: "Minutes", container: "Seconds" },
                { aspect: "OS", vm: "Own full OS", container: "Shares host kernel" },
                { aspect: "Isolation", vm: "Complete", container: "Process-level" },
                { aspect: "Portability", vm: "Less portable", container: "Very portable" },
                { aspect: "Resource Usage", vm: "High", container: "Low" },
                { aspect: "Use Case", vm: "Different OS needed", container: "Microservices, CI/CD" },
              ].map((row, i) => (
                <tr key={row.aspect} className={i % 2 === 0 ? "bg-card" : "bg-muted/10"}>
                  <td className="p-4 font-medium text-foreground border-b border-border">{row.aspect}</td>
                  <td className="p-4 text-muted-foreground border-b border-border">{row.vm}</td>
                  <td className="p-4 text-muted-foreground border-b border-border">{row.container}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* When to Use What */}
      <section className="section-container">
        <SectionHeader
          icon={Zap}
          badge="Decision Guide"
          title="When to Use What?"
          subtitle="Choose the right tool for your specific needs."
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-info/5 border border-info/20"
          >
            <h3 className="text-xl font-bold text-info mb-4 flex items-center gap-2">
              <Server className="w-6 h-6" />
              Use Virtual Machines When:
            </h3>
            <ul className="space-y-3">
              {[
                "You need to run different operating systems",
                "Strong isolation and security is critical",
                "Running legacy applications",
                "You need dedicated resources for an application",
                "Testing OS-level configurations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-info mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-success/5 border border-success/20"
          >
            <h3 className="text-xl font-bold text-success mb-4 flex items-center gap-2">
              <Container className="w-6 h-6" />
              Use Containers When:
            </h3>
            <ul className="space-y-3">
              {[
                "Building microservices architecture",
                "You want fast deployment and scaling",
                "Consistent dev, test, and production environments",
                "Running many instances of the same app",
                "CI/CD pipelines and automation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Docker Basics */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-info/5 via-success/5 to-primary/5 border border-border"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-info/10 flex items-center justify-center">
              <Container className="w-8 h-8 text-info" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Docker - The Container Standard</h3>
              <p className="text-muted-foreground">The most popular container platform</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Docker made containers easy to use. Before Docker, containers existed but were complex. 
            Docker simplified everything with simple commands and a huge library of pre-built images.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Dockerfile</h4>
              <p className="text-sm text-muted-foreground">Recipe for building your container image</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Image</h4>
              <p className="text-sm text-muted-foreground">Blueprint containing your app and dependencies</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-2">Container</h4>
              <p className="text-sm text-muted-foreground">Running instance of an image</p>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Virtualization;
