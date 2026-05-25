/**
 * commonData.js
 * Single source of truth for shared personal info, homepage content,
 * and the domain registry. All domain pages and the homepage import from here.
 */

/* ── Personal Info (shared across all pages) ── */
export const personalInfo = {
    name: "Priyal Sarda",
    role: "Full-Stack Engineer & AI Innovator",
    bio: "I build end-to-end web products and design intelligent AI systems. Specialized in full-stack engineering, multi-agent LLM systems, and launching scalable digital prototypes.",
    email: "priyal.sarda2005@gmail.com",
    phone: "+91 93911 54230",
    location: "Delhi, India",
    linkedin: "https://www.linkedin.com/in/priyal-sarda-a38793323/",
    github: "https://github.com/Priyal-2005",
    instagram: "https://www.instagram.com/itspriyalsarda/",
    resumeUrl: "/resume.pdf",
};

/* ── Homepage About Section ── */
export const homeAbout = {
    subtitle: "Product Builder, Student Entrepreneur & AI Engineer",
    paragraphs: [
        "My engineering journey is driven by a simple question: how can we translate code into tangible, real-world impact? I don't just write algorithms; I build products and launch startups. Whether creating a booking marketplace for local event photographers (PhotoDost) or winning a prototype competition at TiE Global, I thrive at the intersection of product engineering and entrepreneurship.",
        "My passion for applied AI took shape during an intensive internship with Hewlett Packard Enterprise, where my machine learning model won the top prototype prize and earned me a personal letter of recommendation from HPE leadership. I love bringing high-agency energy to everything I do—from building multi-agent workflows with n8n to teaching programming concepts to children as the youngest certified pedagogy instructor at IIIT Hyderabad.",
        "I'm constantly pushing the boundaries of what I can build—whether architecting scalable system designs or designing custom spatial RAG pipelines at nationwide GenAI hackathons. I thrive in fast-paced startup environments and high-performance teams where shipping clean, robust code solves real problems.",
    ],
};

/* ── Homepage Unified Skills ── */
export const homeSkills = {
    Languages: ["JavaScript (ES6+)", "Python", "Java", "C++", "HTML5", "CSS3"],
    Frontend: ["React.js", "Next.js", "Redux", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "Django", "FastAPI"],
    "AI / ML": ["TensorFlow", "PyTorch", "LangChain", "NLP", "Computer Vision"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    Tools: ["Git & GitHub", "VS Code", "Postman", "Figma", "Vercel", "n8n"],
};

/* ── Homepage Certifications (Entrepreneurship & Cross-Domain) ── */
export const homeCertifications = [
    {
        title: "TiE TYE Entrepreneurship Program",
        issuer: "TiE Global",
        date: "2019 – 2020",
        description: "Won prototype competition — validated a real-world business idea.",
        link: "https://drive.google.com/file/d/1-DDadADmR7RVdAO4m3F2cE_duzkn3eYc/view?usp=sharing",
    },
    {
        title: "IIIT Hyderabad Online Pedagogy Program",
        issuer: "IIIT Hyderabad",
        date: "August 2020",
        description: "Youngest IIIT-certified teacher — taught Python to school students.",
        link: "https://drive.google.com/file/d/18bCx5JyAKdEuECxCjHw0P0DT11JyP8k0/view?usp=sharing",
    },
    {
        title: "Metamorphosis Entrepreneurship Program",
        issuer: "IIT Bhubaneswar",
        date: "August 2020",
        description: "Intensive entrepreneurship and innovation bootcamp.",
        link: "https://drive.google.com/file/d/17Dkd2poG3ZUKJHnr6MuuIoA9T4xsCuoN/view?usp=sharing",
    },
    {
        title: "Wadhwani Foundation Entrepreneurship Program",
        issuer: "Wadhwani Foundation",
        date: "March 2021",
        description: "Structured entrepreneurship curriculum and venture planning.",
        link: "https://drive.google.com/file/d/1gRKhINkr2JhvQ44vQXY7CbI3g6eHfoEQ/view?usp=sharing",
    },
    {
        title: "Applied AI – Best Prototype Award",
        issuer: "Hewlett Packard Enterprise",
        date: "Aug – Oct 2022",
        description: "Won best AI prototype — received Letter of Recommendation from HPE.",
        link: "https://drive.google.com/file/d/1Ia_47xYRQg2q1-NYcg16HbX9dxIqwlNd/view?usp=sharing",
    },
];

/**
 * Domains registry — the single place to register all portfolio domains.
 * Used by the homepage DomainCards section and any future navigation.
 */
export const domains = [
    {
        id: "ai-ml",
        title: "AI / ML Engineer",
        description:
            "Machine learning models, NLP pipelines, and intelligent systems. Exploring the frontier of applied AI.",
        href: "/ai-ml",
        icon: "bx bx-brain",
        tags: ["Python", "NLP", "Machine Learning", "TensorFlow"],
        theme: "ai-ml",
    },
    {
        id: "fullstack",
        title: "Fullstack Engineer",
        description:
            "End-to-end web applications from REST APIs to pixel-perfect frontends. MERN stack and Next.js specialist.",
        href: "/fullstack",
        icon: "bx bx-code-block",
        tags: ["React", "Next.js", "Node.js", "MongoDB"],
        theme: "fullstack",
    },
];
