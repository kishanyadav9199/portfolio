import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-100 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top */}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Kishan Kumar
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-4 leading-7">
              Full Stack MERN Developer passionate about building scalable web
              applications and creating beautiful user experiences.
            </p>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition-all duration-300"
            >
              <FaArrowUp />
              Back to Top
            </button>
          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Connect
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Let's connect on social platforms.
            </p>

            <div className="flex gap-4 mt-8">
              {[
                {
                  icon: <FaGithub size={22} />,
                  link: "https://github.com/kishanyadav9199",
                  hover: "hover:bg-gray-900",
                },
                {
                  icon: <FaLinkedin size={22} />,
                  link: "https://www.linkedin.com/in/kishan-kumar9199/",
                  hover: "hover:bg-blue-600",
                },
                {
                  icon: <SiLeetcode size={22} />,
                  link: "https://leetcode.com/u/kishan___yadav/",
                  hover: "hover:bg-yellow-500",
                },
                {
                  icon: <SiCodechef size={22} />,
                  link: "https://www.codechef.com/users/kishan91999",
                  hover: "hover:bg-orange-500",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-700 dark:text-white flex items-center justify-center transition-all duration-300 hover:text-white ${item.hover}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}

        <div className="border-t border-gray-300 dark:border-slate-800 mt-14 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Kishan Kumar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
