import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { Users, HardDrive, Bug, Lightbulb } from "lucide-react";

const SlideContributions = () => {
  const contributions = [
    {
      icon: Users,
      title: "HELPING FRIENDS",
      description: "Walking others through setup and configuration",
    },
    {
      icon: HardDrive,
      title: "LOCAL STORAGE",
      description: "Teaching users about backups and data management",
    },
    {
      icon: Bug,
      title: "UI BUGS",
      description: "Identifying visual glitches and UX issues",
    },
    {
      icon: Lightbulb,
      title: "QoL FEATURES",
      description: "Brainstorming auto-refresh and improvements",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-manga text-4xl md:text-6xl text-foreground mb-8"
      >
        CONTRIBUTIONS <span className="text-accent">BEYOND CODE</span>
      </motion.h2>

      {/* 2x2 Manga Panel Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {contributions.map((item, index) => {
          const Icon = item.icon;
          const tilts: Array<"left" | "right" | "none"> = ["left", "right", "right", "left"];
          const isAccent = index === 1 || index === 2;
          
          return (
            <MangaPanel
              key={item.title}
              delay={0.2 + index * 0.15}
              tilt={tilts[index]}
              accent={isAccent}
              className="p-4 md:p-6"
            >
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-accent mb-3" />
              <h3 className="font-manga text-lg md:text-xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm md:text-base text-muted-foreground">
                {item.description}
              </p>
            </MangaPanel>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="font-manga text-xl text-muted-foreground">
          No PRs. No commits. Just <span className="text-accent">community.</span>
        </p>
      </motion.div>
    </div>
  );
};

export default SlideContributions;
