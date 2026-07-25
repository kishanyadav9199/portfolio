import { FaLaptopCode, FaCode, FaGraduationCap } from "react-icons/fa";

export const experiences = [
  {
    id: 1,
    title: "Backend Development Trainee",
    company: "Sheryians Coding School",
    duration: "2024",
    icon: FaLaptopCode,
    color: "text-cyan-400",
    description:
      "Completed backend development training focused on Node.js, Express.js, MongoDB, REST APIs, JWT Authentication, and MVC architecture.",
    skills: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
  },

  {
    id: 2,
    title: "Full Stack MERN Developer",
    company: "Personal Projects",
    duration: "2024 - Present",
    icon: FaCode,
    color: "text-green-400",
    description:
      "Built multiple full-stack applications including doctor appointment, e-commerce, weather app, and portfolio website.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Redux"],
  },

  {
    id: 3,
    title: "B.Tech Computer Science",
    company: "Technocrat Institute of Technology",
    duration: "2021 - 2025",
    icon: FaGraduationCap,
    color: "text-purple-400",
    description:
      "Studying Computer Science & Engineering with focus on Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks and Software Engineering.",
    skills: ["Java", "DSA", "DBMS", "OS", "CN"],
  },
];
