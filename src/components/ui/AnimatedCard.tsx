import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children?: ReactNode;
  delay?: number;
  variant?: "default" | "success" | "info" | "warning" | "error";
  onClick?: () => void;
  className?: string;
}

const variantStyles = {
  default: "border-border hover:border-primary/50",
  success: "border-success/30 hover:border-success",
  info: "border-info/30 hover:border-info",
  warning: "border-warning/30 hover:border-warning",
  error: "border-destructive/30 hover:border-destructive",
};

const iconVariantStyles = {
  default: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  info: "bg-info/10 text-info",
  warning: "bg-warning/10 text-warning",
  error: "bg-destructive/10 text-destructive",
};

export const AnimatedCard = ({
  title,
  description,
  icon: Icon,
  children,
  delay = 0,
  variant = "default",
  onClick,
  className = "",
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`learning-card ${variantStyles[variant]} transition-all duration-300 cursor-pointer group ${className}`}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${iconVariantStyles[variant]} transition-all duration-300`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {children && (
        <motion.div 
          className="mt-4 pt-4 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};
