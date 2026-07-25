import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function StatCard({ stat }) {
  const Icon = stat.icon;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{
        y: -10,
        scale: 1.04,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      p-[1px]
      bg-gradient-to-r
      from-cyan-500
      via-purple-500
      to-pink-500
      "
    >
      <div
        className="
        rounded-3xl
        bg-slate-900/80
        backdrop-blur-xl
        p-8
        h-full
        "
      >
        <Icon className={`text-5xl ${stat.color}`} />

        <h2 className="text-5xl font-bold mt-6">
          {inView && stat.number} {stat.suffix}
        </h2>

        <p className="mt-4 text-gray-400">{stat.title}</p>
      </div>
    </motion.div>
  );
}

export default StatCard;
