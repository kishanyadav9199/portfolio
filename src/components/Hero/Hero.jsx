import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-500 dark:text-cyan-400 text-lg">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Kishan Kumar
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Java Developer",
              2000,
              "Frontend Developer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="text-2xl mt-4 text-gray-700 dark:text-gray-300"
          />

          <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
            I build responsive web applications using React, Node.js,
            Express.js, and MongoDB.
          </p>

          <div className="flex gap-5 mt-8">
            <a
              href="/resume.pdf"
              className="
                px-6 py-3 rounded-xl
                bg-cyan-500 text-white
                hover:bg-cyan-600
                transition-all duration-300
              "
            >
              Resume
            </a>

            <a
              href="#projects"
              className="
                px-6 py-3
                rounded-xl
                border-2 border-cyan-500
                text-cyan-500
                dark:text-cyan-400
                hover:bg-cyan-500
                hover:text-white
                transition-all duration-300
              "
            >
              Projects
            </a>
          </div>

          <div className="flex gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/kishanyadav9199"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kishan-kumar9199/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.img
            whileHover={{
              scale: 1.05,
              rotate: 3,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            src="/images/profile.png"
            alt="Profile"
            className="
              w-96
              rounded-full
              border-4 border-cyan-500
              shadow-xl
              dark:shadow-[0_0_60px_rgba(34,211,238,0.35)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
