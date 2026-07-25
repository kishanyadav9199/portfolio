import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        overflow-hidden
        rounded-3xl
        bg-white
        dark:bg-slate-900/70
        backdrop-blur-xl
        border
        border-gray-200
        dark:border-slate-700
        shadow-xl
        transition-all
        duration-300
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-60
            object-cover
            hover:scale-110
            transition-transform
            duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span
          className="
            px-4
            py-1
            rounded-full
            bg-cyan-100
            dark:bg-cyan-500/20
            text-cyan-600
            dark:text-cyan-400
            text-sm
            font-medium
          "
        >
          {project.category}
        </span>

        <h3
          className="
            text-2xl
            font-bold
            mt-4
            text-gray-900
            dark:text-white
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-4
            leading-7
            text-gray-600
            dark:text-gray-300
          "
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                text-sm
                bg-gray-100
                text-gray-700
                dark:bg-slate-800
                dark:text-gray-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-8">
          <Link
            to={`/project/${project.id}`}
            className="
              font-semibold
              text-cyan-600
              dark:text-cyan-400
              hover:text-cyan-700
              dark:hover:text-cyan-300
              transition-colors
            "
          >
            View Details →
          </Link>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                text-2xl
                text-gray-700
                dark:text-gray-300
                hover:text-cyan-500
                transition-colors
              "
            >
              <FaGithub />
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                text-2xl
                text-gray-700
                dark:text-gray-300
                hover:text-cyan-500
                transition-colors
              "
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
