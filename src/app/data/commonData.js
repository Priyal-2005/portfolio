/**
 * commonData.js
 * Single source of truth for personal information shared across all domain pages.
 * Import from here instead of portfolioData.js for domain pages.
 */

export const personalInfo = {
    name: "Priyal Sarda",
    email: "priyal.sarda2005@gmail.com",
    phone: "+91 93911 54230",
    location: "Delhi, India",
    linkedin: "https://www.linkedin.com/in/priyal-sarda-a38793323/",
    github: "https://github.com/Priyal-2005",
    instagram: "https://www.instagram.com/itspriyalsarda/",
    resumeUrl: "/resume.pdf",
};

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
    },
    {
        id: "fullstack",
        title: "Fullstack Engineer",
        description:
            "End-to-end web applications from REST APIs to pixel-perfect frontends. MERN stack and Next.js specialist.",
        href: "/fullstack",
        icon: "bx bx-code-block",
        tags: ["React", "Next.js", "Node.js", "MongoDB"],
    },
];
