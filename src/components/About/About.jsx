import { motion } from "framer-motion";
import StatCard from "../StatCard/StatCard";
import { stats } from "../../data/stats";

function About() {
  return (
    <section
      id="about"
      className="
        py-24
        px-6
        relative
        overflow-hidden
        bg-white
        dark:bg-gradient-to-b
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            src="/images/about.png"
            alt="About"
            className="
              rounded-3xl
              shadow-xl
              dark:shadow-[0_0_80px_rgba(34,211,238,.2)]
            "
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest font-semibold text-cyan-500 dark:text-cyan-400">
            About Me
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              mt-4
              text-4xl
              md:text-5xl
              font-extrabold
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            Full Stack MERN Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="
              mt-8
              leading-8
              text-gray-700
              dark:text-gray-300
            "
          >
            I am a passionate Full Stack MERN Developer with experience in
            building responsive, scalable, and user-friendly web applications. I
            specialize in React.js, Node.js, Express.js, and MongoDB while
            following clean coding practices. I enjoy solving real-world
            problems, learning new technologies, and strengthening my Data
            Structures & Algorithms skills through consistent practice.
          </motion.p>

          <div className="grid grid-cols-2 gap-6 mt-12">
            {stats.map((item) => (
              <StatCard key={item.id} stat={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
