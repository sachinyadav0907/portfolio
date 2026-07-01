import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";


export const contactIntro = {
  title: "Let's Connect",
  description:
    "I'm currently seeking full-time Software Engineer or Full Stack MERN Developer opportunities. I enjoy building scalable web applications, designing robust backend systems, and continuously improving my skills in DevOps and modern software engineering practices. If you'd like to discuss an opportunity, collaborate on a project, or simply connect, I'd love to hear from you.",
};


const contact = [
  {
    title: "Email",
    value: "ysachin8600@gmail.com",
    link: "mailto:ysachin8600@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "GitHub",
    value: "@sachinyadav0907",
    link: "https://github.com/sachinyadav0907",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "Sachin Yadav",
    link: "https://www.linkedin.com/in/sachinyadav0907",
    icon: FaLinkedin,
  },
  {
    title: "Resume",
    value: "Download Resume",
    link: "#",
    icon: FaFileAlt,
  },
];

export default contact;