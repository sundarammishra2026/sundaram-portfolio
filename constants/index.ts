export const PROFILE = {
  name: "Sundaram Mishra",
  role: ".NET Core Developer",
  email: "msundaram640@gmail.com",
  phone: "9555237601",
  phoneLink: "tel:+919555237601",
  location: "Noida Sector 62, India",
  github: "https://github.com/sundarammishra2026",
  linkedin: "https://www.linkedin.com/in/sundaram-mishra-8b0791421",
  summary:
    ".NET Core Developer with 1 year of experience in RESTful APIs and web apps using C#, ASP.NET Core, EF Core, and SQL Server. Skilled in SQL optimization, JWT, and Agile.",
} as const;

export const NAV_LINKS = [
  { title: "About", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
] as const;

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    skills: ["Java", "C#"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      ".NET Core",
      ".NET Framework",
      "ASP.NET MVC",
      "Web API",
      "Entity Framework Core",
      "Repository Pattern",
      "Dependency Injection",
      "SOLID Principles",
    ],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    title: "Databases",
    skills: ["SQL Server", "MySQL", "Stored Procedures", "Query Optimization"],
  },
  {
    title: "Tools",
    skills: ["Postman", "Git", "GitHub"],
  },
  {
    title: "Cloud",
    skills: ["Azure"],
  },
] as const;

export const EXPERIENCE = {
  role: ".NET Core Developer",
  company: "Skyblue WebSolutions Pvt. Ltd.",
  period: "August 2025 – August 2026",
  highlights: [
    "Developed RESTful APIs and MVC applications using .NET Core, C#, and EF Core.",
    "Optimized complex SQL queries and stored procedures to boost application performance.",
    "Collaborated in Agile sprints, ensuring timely feature delivery and bug resolution.",
    "Maintained code quality via Git version control and thorough unit testing.",
  ],
} as const;

export const EDUCATION = [
  {
    degree: "B.Tech (Computer Science & Engineering)",
    institution: "Kanpur Institute of Technology, Kanpur (AKTU, Lucknow)",
    period: "2025",
    detail: "Kanpur, India · 78.00%",
  },
  {
    degree: "B.Sc. (PCM)",
    institution: "Dr. Ram Manohar Lohiya Avadh University, Ayodhya",
    period: "2022",
    detail: "Ayodhya, India",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "U.P. Board",
    period: "2019",
    detail: "",
  },
  {
    degree: "High School (X)",
    institution: "U.P. Board",
    period: "2017",
    detail: "",
  },
] as const;

export const PROJECTS = [
  {
    title: "CRM Management System",
    technologies: [".NET Core Web API", "React.js", "SQL Server", "JWT"],
    description:
      "A full-stack CRM application for managing leads, contacts, tasks, and sales reporting. Developed 15+ REST API endpoints with JWT authentication and role-based authorization. Built reusable React components (Forms, Tables, Modals) to ensure a consistent UI.",
  },
  {
    title: "Employee Management System",
    technologies: [".NET Core MVC", "EF Core", "MySQL"],
    description:
      "A web application to manage employee records, attendance, and department data. Implemented Repository Pattern and Dependency Injection for clean, maintainable code. Wrote optimized stored procedures in SQL Server for fast and complex reporting queries.",
  },
] as const;

export const CERTIFICATIONS = [".NET & React Developer"] as const;
export const INTERESTS = ["Listening to Music", "Reading & Traveling"] as const;
