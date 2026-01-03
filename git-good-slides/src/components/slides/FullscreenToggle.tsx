import { useState, useEffect } from "react";
import { Maximize, Minimize } from "lucide-react";
import { motion } from "framer-motion";

const FullscreenToggle = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={toggleFullscreen}
      className="fixed top-4 right-4 z-50 p-3 bg-card border-2 border-foreground hover:bg-accent hover:border-accent transition-colors group"
      aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
    >
      {isFullscreen ? (
        <Minimize className="w-5 h-5 text-foreground group-hover:text-accent-foreground" />
      ) : (
        <Maximize className="w-5 h-5 text-foreground group-hover:text-accent-foreground" />
      )}
    </motion.button>
  );
};

export default FullscreenToggle;
