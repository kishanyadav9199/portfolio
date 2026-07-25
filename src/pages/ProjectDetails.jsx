import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

import { projects } from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">Project Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} | Kishan Kumar`}
        description={project.description}
        keywords={project.technologies.join(", ")}
        image={project.image}
        url={`${import.meta.env.VITE_SITE_URL}/project/${project.id}`}
      />
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
      min-h-screen
      bg-slate-950
      text-white
      py-20
      px-6
      "
      >
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="
          inline-flex
          items-center
          gap-2
          text-cyan-400
          mb-10
          hover:text-cyan-300
          "
          >
            <FaArrowLeft />
            Back
          </Link>

          <motion.img
            initial={{
              scale: 0.9,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            src={project.image}
            alt={project.title}
            className="
          rounded-3xl
          w-full
          h-[450px]
          object-cover
          shadow-xl
          "
          />

          <div className="mt-12">
            <span
              className="
            bg-cyan-500/20
            text-cyan-400
            px-5
            py-2
            rounded-full
            "
            >
              {project.category}
            </span>

            <h1
              className="
            text-5xl
            font-bold
            mt-6
            "
            >
              {project.title}
            </h1>

            <p
              className="
            text-gray-400
            mt-8
            leading-8
            "
            >
              {project.description}
            </p>

            <h2
              className="
            text-3xl
            font-bold
            mt-12
            "
            >
              Technologies Used
            </h2>

            <div
              className="
            flex
            flex-wrap
            gap-3
            mt-6
            "
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                px-5
                py-2
                rounded-full
                bg-slate-800
                "
                >
                  {tech}
                </span>
              ))}
            </div>

            <h2
              className="
            text-3xl
            font-bold
            mt-14
            "
            >
              Features
            </h2>

            <ul
              className="
            mt-6
            space-y-4
            "
            >
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="
                bg-slate-900
                rounded-xl
                p-5
                "
                >
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <div
              className="
            flex
            flex-wrap
            gap-6
            mt-14
            "
            >
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-xl
              bg-slate-800
              hover:bg-slate-700
              "
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
              flex
              items-center
              gap-2
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-600
              "
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default ProjectDetails;
