import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { GitFork, Heart, Rocket } from "lucide-react";

const SlideConclusion = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-8 text-center">
      {/* Main message */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <MangaPanel accent className="inline-block max-w-3xl">
          <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
          <p className="font-manga text-2xl md:text-3xl text-foreground leading-relaxed">
            "If you care about the tool, you're already{" "}
            <span className="text-accent">halfway</span> to being a contributor."
          </p>
        </MangaPanel>
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="mb-12"
      >
        <div className="relative inline-block">
          <motion.div
            animate={{ rotate: [0, 2, 0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MangaPanel className="py-8 px-12">
              <GitFork className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="font-manga text-4xl md:text-5xl text-foreground">
                GO FORK YOUR
              </h3>
              <h3 className="font-manga text-4xl md:text-5xl text-accent mt-2">
                FAVORITE HOBBY
              </h3>
            </MangaPanel>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -top-4 -right-4"
          >
            <Rocket className="w-8 h-8 text-accent" />
          </motion.div>
        </div>
      </motion.div>

      {/* Thank you */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-4"
      >
        <p className="font-manga text-3xl text-foreground">THANK YOU!</p>
        <p className="font-body text-muted-foreground">
          Questions? Let's talk!
        </p>
      </motion.div>
    </div>
  );
};

export default SlideConclusion;
