/**
 * fullstackData.js
 * All Fullstack domain-specific content.
 * Seed data populated from existing portfolio experience/projects.
 * Replace / expand with real content as the domain grows.
 */

export const fullstackHero = {
    role: "Fullstack Engineer",
    bio: "I architect and ship complete web products — from database schema to polished UI. Specializing in the MERN stack and Next.js with a focus on performance and scalability.",
};

export const fullstackExperience = [
    {
        role: "Founder & Full-Stack Developer",
        company: "PhotoDost",
        date: "2022 - Present",
        bullets: [
            "Designed and built a photography service marketplace from the ground up.",
            "Developed the full-stack web application using React, Node.js, and MongoDB.",
            "Successfully onboarded 50+ photographers and facilitated 200+ bookings in the first year.",
            "Implemented real-time booking, notifications, and payment flow end-to-end.",
        ],
        techStack: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    },
    {
        role: "Co-Founder & Technical Lead",
        company: "Coding Champs",
        date: "2023 - Present",
        bullets: [
            "Architected internal tools to streamline student progress tracking and operations.",
            "Built a custom admin dashboard for managing 500+ students across multiple cohorts.",
            "Implemented automated workflows to reduce operational overhead by 40%.",
        ],
        techStack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
];

export const fullstackProjects = [
    {
        title: "Smart Notes App",
        description:
            "A feature-rich notes application with rich text editing, tagging, and cloud sync capabilities. Designed for productivity.",
        problem:
            "Existing note apps lacked seamless cloud syncing combined with an intuitive categorization system.",
        solution:
            "Built a React application with Firebase backend to ensure real-time data synchronization.",
        impact:
            "Enabled users to securely access and organize their notes across multiple devices seamlessly.",
        image: "/images/NotesApp.jpg",
        techStack: ["React", "Firebase", "CSS Modules", "Context API"],
        repo: "https://github.com/Priyal-2005",
        live: "#",
    },
    {
        title: "Weather Dashboard",
        description:
            "Real-time weather forecasting app with location tracking and detailed meteorological data visualization.",
        problem:
            "Users needed a fast and reliable way to check multi-day forecasts based on dynamic locations.",
        solution:
            "Integrated a third-party Weather API with a responsive JavaScript/HTML/CSS frontend.",
        impact:
            "Provided accurate, real-time weather updates with an intuitive and clean user interface.",
        image: "/images/Weather-app.jpg",
        techStack: ["JavaScript", "Weather API", "HTML5", "CSS3"],
        repo: "https://github.com/Priyal-2005",
        live: "#",
    },
    {
        title: "PhotoDost Marketplace",
        description:
            "End-to-end photography service marketplace connecting photographers with clients. Full booking and payment flow.",
        problem:
            "No streamlined platform existed for discovering, comparing, and booking local photographers.",
        solution:
            "Built a full-stack MERN marketplace with real-time availability, messaging, and payment integration.",
        impact:
            "50+ photographers onboarded, 200+ bookings facilitated in the first year of launch.",
        image: "/images/AI-chatbot.jpg",
        techStack: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
        repo: "https://github.com/Priyal-2005",
        live: "#",
    },
];

export const fullstackSkills = {
    Frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "CSS Modules"],
    Backend: ["Node.js", "Express.js", "REST APIs", "Django", "FastAPI"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python"],
    Tools: ["Git & GitHub", "Postman", "Figma", "Vercel", "VS Code"],
};
