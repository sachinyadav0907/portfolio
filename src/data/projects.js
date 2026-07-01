import talentPick from "../assets/images/projects/talent-pick-home.png";
import authApi from "../assets/images/projects/secure-auth-api.png";

const projects = [
  {
    id: 1,
    title: "Talent Pick",
    subtitle: "Full Stack MERN Job Portal",
    image: talentPick,

    description:
      "A full-stack job portal connecting recruiters and job seekers with secure authentication, role-based dashboards, resume management, and modern UI.",

    highlights: [
      "Role-Based Authentication",
      "Recruiter & Candidate Dashboards",
      "Resume Upload with Cloudinary",
      "Saved Jobs & Applications",
    ],

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],

    buttons: [
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/sachinyadav0907/TalentPick",
      },
      {
        type: "live",
        label: "Live Demo",
        url: "#",
      },
      {
        type: "video",
        label: "Demo Video",
        url: "https://youtu.be/nkCCIrpewgQ?si=-TaKK6DIXFsir_3C",
      },
    ],
  },

  {
    id: 2,
    title: "Secure Authentication API",
    subtitle: "REST API",
    image: authApi,

    description:
      "Production-ready authentication API featuring JWT, refresh tokens, OTP verification, RBAC, and Swagger documentation.",

    highlights: [
      "JWT Authentication",
      "Refresh Token Rotation",
      "Email OTP Verification",
      "Swagger Documentation",
    ],

    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Swagger",
      "Resend",
    ],

    buttons: [
      {
        type: "github",
        label: "Source Code",
        url: "https://github.com/sachinyadav0907/secure-auth-api",
      },
      {
        type: "swagger",
        label: "API Docs",
        url: "https://secure-auth-api-7mm7.onrender.com/api-docs",
      },
    ],
  },
];

export default projects;
