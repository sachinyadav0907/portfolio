import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
  SiRender,
  SiCloudinary,
  SiDevdotto,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
      { name: "REST APIs", icon: SiExpress, color: "#FFFFFF" },
    ],
  },

  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },

  {
    category: "Currently Exploring",
    items: [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "DevOps", icon: SiDevdotto, color: "#0A0A0A" },
    ],
  },
];

export default skills;