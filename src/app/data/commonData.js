/**
 * commonData.js
 * Single source of truth for shared personal info, homepage content,
 * and the domain registry. All domain pages and the homepage import from here.
 */

/* ── Personal Info (shared across all pages) ── */
export const personalInfo = {
    name: "Priyal Sarda",
    role: "Full-Stack Engineer & AI Innovator",
    bio: "I am a full-stack developer and entrepreneur with a proven track record of building scalable applications and launching successful ventures. I specialize in the MERN stack and Next.js, and I'm passionate about leveraging AI to create impactful solutions.",
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
    subtitle: "Student Entrepreneur & AI Enthusiast",
    paragraphs: [
        "I am passionate about Programming, AI, and solving real-life problems. I founded a startup that helps photographers and newlyweds, and I'm a TiE prototype competition winner who has explored idea validation through IIT & Wadhwani programs.",
        "My AI project for loan prediction won me a Letter of Recommendation from Hewlett Packard Enterprise. I co-founded Coding Champs and taught Python to kids, becoming the youngest IIIT-H certified pedagogy teacher. I donated 50% of my teaching earnings to PM CARE FUND.",
        "I enjoy participating in business and innovation competitions, including one by Tiger Global. Beyond tech, I love modelling and creative exploration!",
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
