import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-muted z-50">
      <motion.div
        className="h-full bg-accent"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-body">
        {current + 1} / {total}
      </div>
    </div>
  );
};

export default ProgressBar;
