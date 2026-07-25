import { motion } from "framer-motion";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-yan-400 to-purple-500 bg-clip-text text-transparent ">
          My Skills
        </h2>

        <p className="text-center text-gray-400 mt-5">
          Technologies I use to build modern web applications.
        </p>

        <div className="space-y-16 mt-20">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-3xl font-semibold mb-8 text-cyan-400">
                {group.category}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                      }}
                      className=" bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                    >
                      <Icon
                        className={`text-7xl drop-shadow-xl ${tech.color}`}
                      />

                      <h4 className="text-2xl font-semibold mt-6">
                        {tech.name}
                      </h4>

                      
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
