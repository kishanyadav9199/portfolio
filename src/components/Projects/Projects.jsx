import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

const filters = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300"
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
          <p className="uppercase tracking-widest text-cyan-500 dark:text-cyan-400">
            Portfolio
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
            Featured Projects
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Here are some of the projects I have built using modern web
            technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}

        <div className="flex justify-center flex-wrap gap-4 mt-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6
                py-3
                rounded-full
                font-medium
                transition-all
                duration-300

                ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}

        <motion.div
          layout
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-2
            gap-10
            mt-16
          "
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
