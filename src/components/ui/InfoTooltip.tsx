import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip";

interface InfoTooltipProps {
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

export const InfoTooltip = ({ children, side = "top" }: InfoTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Info className="w-3 h-3" />
        </motion.button>
      </TooltipTrigger>
      <TooltipContent side={side} className="max-w-sm">
        {children}
      </TooltipContent>
    </Tooltip>
  );
};
