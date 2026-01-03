import { motion } from "framer-motion";
import MangaPanel from "./MangaPanel";
import { Search, MessageCircle, FileText, Wrench } from "lucide-react";

const SlideActionPlan = () => {
  const days = [
    { day: "DAY 1", icon: Search, task: "EXPLORE", desc: "Find a project you love" },
    { day: "DAY 2", icon: MessageCircle, task: "JOIN", desc: "Engage in discussions" },
    { day: "DAY 3", icon: FileText, task: "DOCUMENT", desc: "Improve the docs" },
    { day: "DAY 4-7", icon: Wrench, task: "FIX", desc: "Tackle small issues" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-8">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-manga text-4xl md:text-6xl text-foreground mb-8"
      >
        YOUR <span className="text-accent">7-DAY</span> ACTION PLAN
      </motion.h2>

      {/* Chapter list style */}
      <div className="space-y-4">
        {days.map((item, index) => {
          const Icon = item.icon;
          const isHighlight = index === 3;
          
          return (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              <MangaPanel 
                accent={isHighlight}
                className="flex items-center gap-4 md:gap-6 py-4"
              >
                <div className="w-20 md:w-24 flex-shrink-0">
                  <span className="font-manga text-lg md:text-xl text-accent">{item.day}</span>
                </div>
                <div className="w-px h-12 bg-foreground/30" />
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-manga text-xl md:text-2xl text-foreground">{item.task}</h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground">{item.desc}</p>
                </div>
                <div className="hidden md:block font-manga text-4xl text-foreground/10">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </MangaPanel>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center"
      >
        <p className="font-body text-muted-foreground italic">
          Small steps lead to big contributions.
        </p>
      </motion.div>
    </div>
  );
};

export default SlideActionPlan;
