import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { XCircle, Clock } from "lucide-react";

const SlideTheEnd = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="font-manga text-5xl md:text-7xl text-foreground mb-12"
      >
        THE <span className="text-accent">"END"</span>
      </motion.h2>

      {/* Broken icon / To be continued */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <MangaPanel accent className="inline-block relative">
          <div className="flex items-center justify-center gap-4 py-8 px-12">
            <XCircle className="w-16 h-16 text-accent" />
            <div className="text-left">
              <p className="font-manga text-3xl text-foreground">UPDATES STOPPED</p>
              <p className="font-body text-muted-foreground">Development discontinued</p>
            </div>
          </div>
          
          {/* "To Be Continued" stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-4 py-2 border-4 border-foreground"
          >
            <p className="font-manga text-lg">TO BE CONTINUED...</p>
          </motion.div>
        </MangaPanel>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <MangaPanel>
          <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
          <p className="font-manga text-2xl text-foreground">
            "Software doesn't die when the company leaves."
          </p>
          <p className="font-manga text-2xl text-accent mt-2">
            "It lives because of the community."
          </p>
        </MangaPanel>
      </motion.div>
    </div>
  );
};

export default SlideTheEnd;
