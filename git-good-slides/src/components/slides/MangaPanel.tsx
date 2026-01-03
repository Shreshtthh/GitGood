import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MangaPanelProps {
  children: ReactNode;
  className?: string;
  tilt?: "left" | "right" | "none";
  delay?: number;
  accent?: boolean;
}

const MangaPanel = ({ 
  children, 
  className = "", 
  tilt = "none", 
  delay = 0,
  accent = false 
}: MangaPanelProps) => {
  const tiltClass = tilt === "left" 
    ? "-rotate-1" 
    : tilt === "right" 
    ? "rotate-1" 
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay, 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }}
      className={`
        relative p-6 border-4 border-foreground bg-card
        ${accent ? "manga-shadow-accent" : "manga-shadow"}
        ${tiltClass}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default MangaPanel;
