import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import StaggeredText from "./StaggeredText";
import { User, AlertCircle, Shield } from "lucide-react";

const SlideWhoAmI = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-manga text-5xl md:text-7xl text-foreground mb-12"
      >
        WHO AM <span className="text-accent">I?</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        <MangaPanel delay={0.2} tilt="left" className="flex flex-col items-center text-center">
          <User className="w-16 h-16 text-accent mb-4" />
          <h3 className="font-manga text-2xl text-foreground mb-2">A Student</h3>
          <p className="font-body text-muted-foreground">
            Not an expert. Just someone who's been where you are.
          </p>
        </MangaPanel>

        <MangaPanel delay={0.4} accent className="flex flex-col items-center text-center">
          <AlertCircle className="w-16 h-16 text-accent mb-4" />
          <h3 className="font-manga text-2xl text-foreground mb-2">The Fear</h3>
          <p className="font-body text-muted-foreground">
            I felt overwhelmed by public mistakes.
          </p>
        </MangaPanel>

        <MangaPanel delay={0.6} tilt="right" className="flex flex-col items-center text-center">
          <Shield className="w-16 h-16 text-accent mb-4" />
          <h3 className="font-manga text-2xl text-foreground mb-2">The Myth</h3>
          <p className="font-body text-muted-foreground">
            I thought Open Source was for "Elite" developers only.
          </p>
        </MangaPanel>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <MangaPanel className="inline-block">
          <p className="font-manga text-xl text-accent">
            Spoiler: It's not.
          </p>
        </MangaPanel>
      </motion.div>
    </div>
  );
};

export default SlideWhoAmI;
