import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
      fixed
      inset-0
      z-[999]
      bg-slate-950
      flex
      items-center
      justify-center
      "
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          w-16
          h-16
          rounded-full
          border-4
          border-cyan-500
          border-t-transparent
          "
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
          className="
          mt-8
          text-2xl
          font-bold
          text-white
          "
        >
          Loading...
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default Loader;
