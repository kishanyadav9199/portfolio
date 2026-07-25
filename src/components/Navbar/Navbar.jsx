import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-slate-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}

        <h1 className="text-3xl font-bold text-cyan-500 dark:text-cyan-400">
          Kishan
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-800 dark:text-white transition-colors"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
