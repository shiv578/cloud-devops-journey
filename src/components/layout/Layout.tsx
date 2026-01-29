import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.main 
        className="pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">CloudDevOps Lab</h3>
              <p className="text-muted-foreground text-sm">
                Your complete learning platform for Cloud Computing and DevOps. 
                From basics to advanced concepts, learn everything you need.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/architecture" className="hover:text-primary transition-colors">Architecture</a></li>
                <li><a href="/cloud-computing" className="hover:text-primary transition-colors">Cloud Computing</a></li>
                <li><a href="/cicd" className="hover:text-primary transition-colors">CI/CD Pipeline</a></li>
                <li><a href="/devops" className="hover:text-primary transition-colors">DevOps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/security" className="hover:text-primary transition-colors">Security Best Practices</a></li>
                <li><a href="/monitoring" className="hover:text-primary transition-colors">Monitoring & Logging</a></li>
                <li><a href="/scalability" className="hover:text-primary transition-colors">Scalability Patterns</a></li>
                <li><a href="/virtualization" className="hover:text-primary transition-colors">Virtualization</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 CloudDevOps Lab. Built for learning and education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
