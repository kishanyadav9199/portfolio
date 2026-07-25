import { motion } from "framer-motion";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gray-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-widest text-cyan-500 dark:text-cyan-400">
            Journey
          </p>

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
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div
            className="
              absolute
              left-5
              md:left-1/2
              top-0
              bottom-0
              w-1
              bg-cyan-500
              -translate-x-1/2
            "
          />

          {experiences.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center mb-16 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Circle */}
                <div
                  className="
                    absolute
                    left-5
                    md:left-1/2
                    -translate-x-1/2
                    w-14
                    h-14
                    rounded-full
                    bg-white
                    dark:bg-slate-950
                    border-4
                    border-cyan-500
                    flex
                    items-center
                    justify-center
                    z-10
                    shadow-lg
                  "
                >
                  <Icon className={`text-2xl ${item.color}`} />
                </div>

                {/* Card */}
                <div
                  className="
                    ml-20
                    md:ml-0
                    w-full
                    md:w-[45%]
                    rounded-3xl
                    p-8
                    shadow-xl
                    border
                    bg-white
                    border-gray-200
                    dark:bg-slate-800/60
                    dark:border-slate-700
                    backdrop-blur-xl
                    transition-colors
                    duration-300
                  "
                >
                  <span className="text-cyan-500 dark:text-cyan-400">
                    {item.duration}
                  </span>

                  <h3 className="text-2xl font-bold mt-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-purple-600 dark:text-purple-400">
                    {item.company}
                  </p>

                  <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          bg-gray-100
                          text-gray-700
                          dark:bg-slate-700
                          dark:text-gray-200
                          transition-colors
                          duration-300
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
