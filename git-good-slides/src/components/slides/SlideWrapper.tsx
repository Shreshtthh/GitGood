import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  slideKey: number;
  direction: number;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const SlideWrapper = ({ children, slideKey, direction }: SlideWrapperProps) => {
  return (
    <AnimatePresence initial={false} custom={direction} mode="wait">
      <motion.div
        key={slideKey}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        className="absolute inset-0 flex items-center justify-center halftone-bg"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideWrapper;
