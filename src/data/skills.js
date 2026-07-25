import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";


import { SiC, SiCplusplus } from "react-icons/si";


import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiVite,
} from "react-icons/si";

export const skills = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
        level: "Advanced",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
        level: "Advanced",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
        level: "Advanced",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-purple-500",
        level: "Intermediate",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
        level: "Advanced",
      },
    ],
  },

  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
        level: "Advanced",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-white",
        level: "Advanced",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-400",
        level: "Advanced",
      },
    ],
  },

  {
    category: "Programming",
    technologies: [
      {
        name: "Java",
        icon: FaJava,
        color: "text-red-500",
        level: "Advanced",
      },
      {
        name: "C",
        icon: SiC,
        color: "text-red-500",
        level: "Advanced",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "text-red-500",
        level: "Advanced",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "text-red-500",
        level: "Advanced",
      },
    ],
  },

  {
    category: "Tools",
    technologies: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-500",
        level: "Advanced",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
        level: "Advanced",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-400",
        level: "Intermediate",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-purple-400",
        level: "Advanced",
      },
    ],
  },
];
