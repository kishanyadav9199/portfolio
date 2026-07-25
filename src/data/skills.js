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
        
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
        
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
    
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
        
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-purple-500",
        
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
        
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
        
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-white",
        
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-400",
     
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
       
      },
      {
        name: "C",
        icon: SiC,
        color: "text-red-500",
       
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "text-red-500",
        
      },
      {
        name: "Python",
        icon: FaPython,
        color: "text-red-500",
       
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
        
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
        
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-400",
        
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-purple-400",
        
      },
    ],
  },
];
