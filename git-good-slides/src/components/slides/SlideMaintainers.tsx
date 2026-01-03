import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import StaggeredText from "./StaggeredText";
import { MessageSquare, GitPullRequest, Heart } from "lucide-react";

const SlideMaintainers = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-manga text-4xl md:text-6xl text-foreground mb-12"
      >
        WHAT MAINTAINERS <span className="text-accent">ACTUALLY WANT</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Main message */}
        <MangaPanel delay={0.2} accent className="md:row-span-2">
          <div className="text-center py-8">
            <MessageSquare className="w-20 h-20 text-accent mx-auto mb-6" />
            <h3 className="font-manga text-4xl text-foreground mb-4">
              COMMUNICATION
            </h3>
            <div className="font-manga text-6xl text-accent">&gt;</div>
            <h3 className="font-manga text-4xl text-foreground mt-4">
              CLEVERNESS
            </h3>
          </div>
        </MangaPanel>

        <StaggeredText className="space-y-4">
          <MangaPanel tilt="right">
            <div className="flex items-start gap-4">
              <GitPullRequest className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <p className="font-body text-foreground">
                "Small, clear PRs are better than massive, confusing rewrites."
              </p>
            </div>
          </MangaPanel>

          <MangaPanel tilt="left">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <p className="font-body text-foreground">
                "Respect the workflow. Read the contributing guide."
              </p>
            </div>
          </MangaPanel>
        </StaggeredText>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-center"
      >
        <MangaPanel className="inline-block">
          <p className="font-manga text-xl text-accent">
            They're humans, not code-reviewing robots.
          </p>
        </MangaPanel>
      </motion.div>
    </div>
  );
};

export default SlideMaintainers;
