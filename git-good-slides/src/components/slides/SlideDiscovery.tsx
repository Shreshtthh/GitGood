import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { GitFork, Users, MessageCircle } from "lucide-react";

const SlideDiscovery = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-manga text-5xl md:text-7xl text-foreground mb-12"
      >
        DISCOVERY OF THE <span className="text-accent">'FORK'</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Fork visualization */}
        <MangaPanel delay={0.2} className="flex items-center justify-center py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="relative"
          >
            <GitFork className="w-40 h-40 text-accent" strokeWidth={1.5} />
            <motion.div
              animate={{ 
                boxShadow: ["0 0 20px hsl(28 100% 47% / 0.3)", "0 0 40px hsl(28 100% 47% / 0.6)", "0 0 20px hsl(28 100% 47% / 0.3)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />
          </motion.div>
        </MangaPanel>

        {/* Content */}
        <div className="space-y-6">
          <MangaPanel delay={0.3} tilt="right" accent>
            <div className="flex items-center gap-4">
              <Users className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-manga text-2xl text-foreground">MIHON</h3>
                <p className="font-body text-muted-foreground">
                  Finding community forks that kept the dream alive
                </p>
              </div>
            </div>
          </MangaPanel>

          <MangaPanel delay={0.5} tilt="left">
            <div className="flex items-center gap-4">
              <MessageCircle className="w-10 h-10 text-accent flex-shrink-0" />
              <p className="font-manga text-xl text-foreground">
                "I saw GitHub issues, not as technical hurdles..."
              </p>
            </div>
          </MangaPanel>

          <MangaPanel delay={0.7}>
            <p className="font-manga text-2xl text-accent text-center">
              "...but as fans talking to fans."
            </p>
          </MangaPanel>
        </div>
      </div>
    </div>
  );
};

export default SlideDiscovery;
