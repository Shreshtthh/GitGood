import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import StaggeredText from "./StaggeredText";
import { RefreshCw } from "lucide-react";

const SlideTheCycle = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-manga text-5xl md:text-7xl text-foreground mb-12"
      >
        THE <span className="text-accent">CYCLE</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Loop Graphic */}
        <MangaPanel delay={0.2} className="relative aspect-square flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Circular loop with labels */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <RefreshCw className="w-full h-full text-accent/20" strokeWidth={0.5} />
            </motion.div>
            
            {/* Cycle points */}
            {[
              { label: "Motivation", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-4" },
              { label: "Fear", position: "top-1/2 right-0 translate-x-4 -translate-y-1/2" },
              { label: "Hesitation", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-4" },
              { label: "Inaction", position: "top-1/2 left-0 -translate-x-4 -translate-y-1/2" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className={`absolute ${item.position} bg-card border-2 border-foreground px-3 py-1`}
              >
                <span className="font-manga text-sm text-accent">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </MangaPanel>

        {/* Text content */}
        <StaggeredText className="space-y-6">
          <MangaPanel tilt="right" accent>
            <p className="font-body text-lg text-muted-foreground">
              The GSoC & Summer of Bitcoin hype hits every year...
            </p>
          </MangaPanel>
          
          <MangaPanel>
            <p className="font-manga text-2xl text-foreground">
              "Why do we <span className="text-accent">star 100 repos</span> but fork zero?"
            </p>
          </MangaPanel>
        </StaggeredText>
      </div>
    </div>
  );
};

export default SlideTheCycle;
