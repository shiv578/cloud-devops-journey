import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Key,
  User,
  Users,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Server,
  Database,
  Globe,
  Code,
  FileKey,
  Fingerprint,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";

const Security = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-transparent to-transparent" />
        
        <div className="section-container">
          <SectionHeader
            icon={Shield}
            badge="Essential Knowledge"
            title="Cloud Security"
            subtitle="Protect your applications and data. Learn authentication, authorization, encryption, and security best practices."
            centered
          />
        </div>
      </section>

      {/* Why Security Matters */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-10 h-10 text-destructive flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Why Security Can't Be Ignored
                </h2>
                <p className="text-muted-foreground">
                  Security breaches cost companies millions. In 2023, the average data breach cost 
                  $4.45 million. Beyond money, breaches destroy customer trust and can end businesses.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { stat: "4.45M", label: "Average breach cost (USD)" },
                { stat: "277 days", label: "Average time to identify breach" },
                { stat: "83%", label: "Companies had more than one breach" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-lg bg-card/50">
                  <p className="text-2xl font-bold text-destructive">{item.stat}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authentication vs Authorization */}
      <section className="section-container">
        <SectionHeader
          icon={Key}
          badge="Core Concepts"
          title="Authentication vs Authorization"
          subtitle="Two different security concepts that are often confused."
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
              <User className="w-7 h-7 text-info" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Authentication</h3>
            <p className="text-xl text-info font-medium mb-4">"Who are you?"</p>
            <p className="text-muted-foreground mb-4">
              Verifying that you are who you claim to be. Proves your identity.
            </p>

            <div className="space-y-3 mb-6">
              <p className="font-semibold text-foreground">Examples:</p>
              <ul className="space-y-2">
                {[
                  "Username + Password",
                  "Fingerprint scan",
                  "OTP sent to phone",
                  "Face ID",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-info" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-info/5 border border-info/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Real-life analogy: </span>
                Showing your ID card at the building entrance to prove you're an employee.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="learning-card"
          >
            <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-4">
              <Lock className="w-7 h-7 text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Authorization</h3>
            <p className="text-xl text-success font-medium mb-4">"What can you do?"</p>
            <p className="text-muted-foreground mb-4">
              Determining what you're allowed to access. Grants or denies permissions.
            </p>

            <div className="space-y-3 mb-6">
              <p className="font-semibold text-foreground">Examples:</p>
              <ul className="space-y-2">
                {[
                  "Admin can delete users",
                  "Manager can view reports",
                  "User can only see own data",
                  "Guest can only read",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-success/5 border border-success/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Real-life analogy: </span>
                Your keycard only opens doors you're authorized to enter - not every door in the building.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IAM - Identity and Access Management */}
      <section className="section-container">
        <SectionHeader
          icon={Users}
          badge="Cloud Security"
          title="IAM - Identity & Access Management"
          subtitle="The system that manages who can access what in cloud environments."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12 p-8 rounded-2xl bg-card border border-border"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: User,
                title: "Users",
                description: "Individual people who need access (developers, admins)",
              },
              {
                icon: Users,
                title: "Groups",
                description: "Collections of users (developers, managers, interns)",
              },
              {
                icon: Key,
                title: "Roles",
                description: "Temporary credentials for services and applications",
              },
              {
                icon: FileKey,
                title: "Policies",
                description: "Rules that define what actions are allowed",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-warning/5 border border-warning/20">
            <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Principle of Least Privilege
            </h4>
            <p className="text-muted-foreground text-sm">
              Always give the minimum permissions needed. A developer working on the payment 
              system shouldn't have access to HR data. Start with no access and add only what's necessary.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Secrets Management */}
      <section className="section-container">
        <SectionHeader
          icon={FileKey}
          badge="Best Practices"
          title="Secrets Management"
          subtitle="How to safely store passwords, API keys, and other sensitive data."
          centered
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20"
          >
            <h3 className="text-xl font-bold text-destructive mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              Never Do This ❌
            </h3>
            
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-card font-mono text-sm">
                <code className="text-destructive">
                  // BAD: Hardcoded in code<br/>
                  const API_KEY = "sk-1234567890";<br/>
                  const DB_PASSWORD = "admin123";
                </code>
              </div>
              
              <ul className="space-y-2">
                {[
                  "Hardcode secrets in source code",
                  "Commit secrets to Git",
                  "Share secrets via email/chat",
                  "Use same password everywhere",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-success/5 border border-success/20"
          >
            <h3 className="text-xl font-bold text-success mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Do This Instead ✓
            </h3>
            
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-card font-mono text-sm">
                <code className="text-success">
                  // GOOD: From environment<br/>
                  const API_KEY = process.env.API_KEY;<br/>
                  const DB_PASSWORD = process.env.DB_PASS;
                </code>
              </div>
              
              <ul className="space-y-2">
                {[
                  "Use environment variables",
                  "Use secret management tools (Vault, AWS Secrets Manager)",
                  "Rotate secrets regularly",
                  "Use different secrets per environment",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HTTPS/TLS */}
      <section className="section-container">
        <SectionHeader
          icon={Lock}
          badge="Encryption"
          title="HTTPS & TLS Encryption"
          subtitle="How data is protected while traveling over the internet."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-destructive/10">
                <Globe className="w-8 h-8 text-destructive" />
                <p className="text-xs mt-1 text-center">HTTP</p>
              </div>
              <div className="flex-1 text-center">
                <p className="text-muted-foreground text-sm">vs</p>
              </div>
              <div className="p-4 rounded-xl bg-success/10">
                <Lock className="w-8 h-8 text-success" />
                <p className="text-xs mt-1 text-center">HTTPS</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-destructive/5">
                <h4 className="font-semibold text-destructive mb-2">HTTP (Not Secure)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data sent as plain text</li>
                  <li>• Anyone can read the data</li>
                  <li>• No verification of website identity</li>
                  <li>• Like sending a postcard - everyone can read it</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-success/5">
                <h4 className="font-semibold text-success mb-2">HTTPS (Secure)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Data encrypted with TLS</li>
                  <li>• Only sender and receiver can read</li>
                  <li>• Website identity verified</li>
                  <li>• Like sending a locked box - only you have the key</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">What TLS Does:</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">🔐 Encryption</p>
                  <p>Scrambles data so hackers can't read it</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">✅ Authentication</p>
                  <p>Verifies you're talking to the real website</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">🛡️ Integrity</p>
                  <p>Ensures data wasn't modified in transit</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Security in CI/CD */}
      <section className="section-container">
        <SectionHeader
          icon={Code}
          badge="DevSecOps"
          title="Security in CI/CD"
          subtitle="Building security into the development pipeline, not as an afterthought."
          centered
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-4">
          {[
            {
              stage: "Code",
              checks: ["Secret scanning in commits", "Security linting", "Dependency vulnerability check"],
              color: "info",
            },
            {
              stage: "Build",
              checks: ["Container image scanning", "SAST (Static Analysis)", "License compliance"],
              color: "warning",
            },
            {
              stage: "Test",
              checks: ["DAST (Dynamic Analysis)", "Penetration testing", "Security unit tests"],
              color: "success",
            },
            {
              stage: "Deploy",
              checks: ["Infrastructure security check", "Configuration validation", "Secrets injection"],
              color: "primary",
            },
          ].map((item, index) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border"
            >
              <div className={`w-20 h-20 rounded-xl bg-${item.color}/10 flex items-center justify-center flex-shrink-0`}>
                <span className="font-bold text-foreground">{item.stage}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Security checks at {item.stage}:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.checks.map((check) => (
                    <span key={check} className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                      {check}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Happens Without Security */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-destructive/5 border border-destructive/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <AlertTriangle className="w-8 h-8 text-destructive" />
            What Happens If Security Is Ignored?
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { issue: "Data Breach", impact: "Customer data stolen, massive fines (GDPR: up to €20M)" },
              { issue: "Ransomware", impact: "Systems locked, business halted, ransom demanded" },
              { issue: "Service Downtime", impact: "DDoS attacks take your service offline" },
              { issue: "Reputation Damage", impact: "Customers lose trust, stock price drops" },
              { issue: "Legal Consequences", impact: "Lawsuits, regulatory penalties" },
              { issue: "Financial Loss", impact: "Average breach costs $4.45 million" },
            ].map((item) => (
              <div key={item.issue} className="p-4 rounded-lg bg-card/50">
                <p className="font-semibold text-destructive">{item.issue}</p>
                <p className="text-sm text-muted-foreground">{item.impact}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Security;
