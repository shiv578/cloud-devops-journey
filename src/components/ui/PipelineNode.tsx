import { motion } from "framer-motion";
import { LucideIcon, Check, X, Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export type NodeStatus = "pending" | "running" | "success" | "error" | "skipped";

interface PipelineNodeProps {
  icon: LucideIcon;
  label: string;
  description: string;
  status: NodeStatus;
  delay?: number;
  size?: "sm" | "md" | "lg";
}

const statusStyles: Record<NodeStatus, string> = {
  pending: "border-muted bg-muted/20 text-muted-foreground",
  running: "border-info bg-info/10 text-info animate-pulse",
  success: "border-success bg-success/10 text-success",
  error: "border-destructive bg-destructive/10 text-destructive",
  skipped: "border-muted/50 bg-muted/10 text-muted-foreground/50",
};

const sizeStyles = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20",
};

const iconSizes = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export const PipelineNode = ({
  icon: Icon,
  label,
  description,
  status,
  delay = 0,
  size = "md",
}: PipelineNodeProps) => {
  const StatusIcon = status === "success" ? Check : status === "error" ? X : null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            className={`relative ${sizeStyles[size]} rounded-xl border-2 flex items-center justify-center ${statusStyles[status]} transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
          >
            {status === "running" ? (
              <Loader2 className={`${iconSizes[size]} animate-spin`} />
            ) : (
              <Icon className={iconSizes[size]} />
            )}
            
            {/* Status indicator */}
            {StatusIcon && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                  status === "success" ? "bg-success" : "bg-destructive"
                }`}
              >
                <StatusIcon className="w-3 h-3 text-background" />
              </motion.div>
            )}

            {/* Glow effect for running status */}
            {status === "running" && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-info/20"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.div>
          <span className={`text-xs font-medium text-center ${
            status === "skipped" ? "text-muted-foreground/50" : "text-foreground"
          }`}>
            {label}
          </span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="max-w-xs">
        <div className="space-y-1">
          <p className="font-semibold">{label}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
          <p className="text-xs capitalize">
            Status: <span className={
              status === "success" ? "text-success" :
              status === "error" ? "text-destructive" :
              status === "running" ? "text-info" : "text-muted-foreground"
            }>{status}</span>
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
