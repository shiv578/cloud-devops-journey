import { motion } from "framer-motion";

interface FlowingLineProps {
  direction?: "horizontal" | "vertical";
  className?: string;
  color?: "primary" | "success" | "info" | "error";
  speed?: number;
}

const colorMap = {
  primary: "from-transparent via-primary to-transparent",
  success: "from-transparent via-success to-transparent",
  info: "from-transparent via-info to-transparent",
  error: "from-transparent via-destructive to-transparent",
};

export const FlowingLine = ({
  direction = "horizontal",
  className = "",
  color = "primary",
  speed = 2,
}: FlowingLineProps) => {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={`relative overflow-hidden ${
        isHorizontal ? "h-0.5 w-full" : "w-0.5 h-full"
      } bg-border ${className}`}
    >
      <motion.div
        className={`absolute ${
          isHorizontal 
            ? "h-full w-8 bg-gradient-to-r" 
            : "w-full h-8 bg-gradient-to-b"
        } ${colorMap[color]}`}
        animate={
          isHorizontal
            ? { x: ["-100%", "calc(100% + 100vw)"] }
            : { y: ["-100%", "calc(100% + 100vh)"] }
        }
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
