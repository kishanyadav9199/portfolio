import { motion } from "framer-motion";
import { education } from "../../data/education";

function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-950 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-widest text-cyan-400">Education</p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-extrabold
            mt-4
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            Academic Journey
          </h2>
        </motion.div>

        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-20
          "
        >
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-8
                shadow-xl
                "
              >
                <Icon className={`text-5xl ${item.color}`} />

                <span
                  className="
                  inline-block
                  mt-6
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/20
                  text-cyan-400
                  "
                >
                  {item.duration}
                </span>

                <h3
                  className="
                  text-2xl
                  font-bold
                  mt-6
                  "
                >
                  {item.degree}
                </h3>

                <p
                  className="
                  text-purple-400
                  mt-3
                  "
                >
                  {item.institute}
                </p>

                <p
                  className="
                  text-gray-400
                  leading-8
                  mt-6
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
