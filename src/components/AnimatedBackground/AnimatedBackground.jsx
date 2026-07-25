import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-white dark:bg-slate-950 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-96 h-96 rounded-full
        bg-cyan-500/20 blur-3xl
        top-20 left-20"
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 120, -120, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-96 h-96 rounded-full
        bg-purple-500/20 blur-3xl
        bottom-20 right-20"
      />
    </div>
  );
}

export default AnimatedBackground;
