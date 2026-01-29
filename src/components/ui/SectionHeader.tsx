import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon?: LucideIcon;
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeader = ({
  icon: Icon,
  badge,
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {Icon && <Icon className="w-4 h-4 text-primary" />}
          <span className="text-sm font-medium text-primary">{badge}</span>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
      >
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {i === title.split(" ").length - 1 ? (
              <span className="text-gradient">{word}</span>
            ) : (
              word + " "
            )}
          </span>
        ))}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg text-muted-foreground ${centered ? "max-w-2xl mx-auto" : "max-w-3xl"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
