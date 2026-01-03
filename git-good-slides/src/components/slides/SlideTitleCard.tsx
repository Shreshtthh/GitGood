import { motion } from "framer-motion";
import { useMemo } from "react";

// Floating ember particle component
const EmberParticle = ({ delay, x, duration }: { delay: number; x: number; duration: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-accent/60"
    style={{ left: `${x}%`, bottom: "-5%" }}
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [0, -800],
      x: [0, Math.random() * 40 - 20],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

// Decorative corner frame component
const CornerFrame = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
  const positionClasses = {
    tl: "top-8 left-8",
    tr: "top-8 right-8 rotate-90",
    bl: "bottom-8 left-8 -rotate-90",
    br: "bottom-8 right-8 rotate-180",
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} w-16 h-16`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
    >
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <motion.path
          d="M 0 32 L 0 0 L 32 0"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
};

const SlideTitleCard = () => {
  // Generate ember particles
  const embers = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    })), []
  );

  const titleLetters = {
    git: "GIT".split(""),
    good: "GOOD".split(""),
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[8%] bg-black z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black z-20" />

      {/* Radial background glow */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--accent) / 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Floating ember particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {embers.map((ember) => (
          <EmberParticle key={ember.id} {...ember} />
        ))}
      </div>

      {/* Corner frames */}
      <CornerFrame position="tl" />
      <CornerFrame position="tr" />
      <CornerFrame position="bl" />
      <CornerFrame position="br" />

      {/* Main content */}
      <div className="relative z-10 text-center px-8">
        {/* GIT */}
        <div className="flex justify-center gap-4 md:gap-6 mb-2">
          {titleLetters.git.map((letter, i) => (
            <motion.span
              key={`git-${i}`}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="font-manga text-6xl md:text-8xl lg:text-9xl text-foreground tracking-[0.3em]"
              style={{ textShadow: "0 0 60px hsl(var(--accent) / 0.3)" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-4 my-4"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
          <motion.div
            className="w-2 h-2 rotate-45 border border-accent"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ delay: 1.3, duration: 0.4 }}
          />
          <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        </motion.div>

        {/* GOOD */}
        <div className="flex justify-center gap-3 md:gap-5">
          {titleLetters.good.map((letter, i) => (
            <motion.span
              key={`good-${i}`}
              custom={i + 3}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="font-manga text-7xl md:text-9xl lg:text-[11rem] text-accent tracking-[0.2em] accent-glow"
              style={{
                WebkitTextStroke: "1px hsl(var(--foreground) / 0.3)",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-muted-foreground mt-12 mb-16 tracking-wide max-w-xl mx-auto"
        >
          Breaking the Fear of Your First Open Source Contribution
        </motion.p>

        {/* Diamond separator */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="w-16 md:w-24 h-[1px] bg-muted-foreground/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-accent" />
          <div className="w-16 md:w-24 h-[1px] bg-muted-foreground/30" />
        </motion.div>

        {/* Author info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="space-y-2"
        >
          <p className="font-manga text-sm md:text-base tracking-[0.4em] text-foreground/80 uppercase">
            Shreshth Sharma
          </p>
          <p className="font-body text-xs md:text-sm text-muted-foreground tracking-widest uppercase">
            GitHub Campus Expert
          </p>
        </motion.div>
      </div>

      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone-bg pointer-events-none opacity-50" />
    </div>
  );
};

export default SlideTitleCard;
