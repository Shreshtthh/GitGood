import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { Smartphone, BookOpen, Heart } from "lucide-react";

const SlideTachiyomi = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-manga text-5xl md:text-7xl text-foreground mb-8"
      >
        THE <span className="text-accent">HOOK</span>
      </motion.h2>

      {/* Manga panel layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {/* Large panel - phone with manga */}
        <MangaPanel delay={0.2} className="col-span-2 row-span-2 flex items-center justify-center p-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="relative inline-block"
            >
              <Smartphone className="w-32 h-32 md:w-48 md:h-48 text-foreground" strokeWidth={1} />
              <BookOpen className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 text-accent" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-manga text-3xl md:text-4xl text-foreground mt-6"
            >
              TACHIYOMI
            </motion.p>
          </div>
        </MangaPanel>

        {/* Small panels */}
        <MangaPanel delay={0.3} tilt="right" accent>
          <Heart className="w-8 h-8 text-accent mb-2" />
          <p className="font-body text-sm text-muted-foreground">
            My love for Manga & Manhwa
          </p>
        </MangaPanel>

        <MangaPanel delay={0.5} tilt="left">
          <p className="font-manga text-lg text-foreground">
            "The tool that changed my daily routine"
          </p>
        </MangaPanel>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8 text-center"
      >
        <p className="font-body text-xl text-muted-foreground italic">
          The discovery that sparked everything...
        </p>
      </motion.div>
    </div>
  );
};

export default SlideTachiyomi;
