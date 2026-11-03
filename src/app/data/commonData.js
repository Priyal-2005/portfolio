/**
 * commonData.js
 * Single source of truth for shared personal info, homepage content,
 * and the domain registry. All domain pages and the homepage import from here.
 */

/* ── Personal Info (shared across all pages) ── */
export const personalInfo = {
    name: "Priyal Sarda",
    role: "AI/ML Engineer, Full-Stack Developer & Data Analyst",
    bio: "I build end-to-end web products and design intelligent AI systems. Specialized in full-stack engineering, multi-agent LLM systems, and launching scalable digital prototypes.",
    email: "priyal.sarda2005@gmail.com",
    phone: "+91 93911 53240",
    location: "Delhi, India",
    linkedin: "https://www.linkedin.com/in/priyalsarda/",
    github: "https://github.com/Priyal-2005",
    kaggle: "https://www.kaggle.com/priyalsarda",
    instagram: "https://www.instagram.com/itspriyalsarda/",
    resumeUrl: "/resume.pdf",
};

/* ── Homepage About Section ── */
export const homeAbout = {
    subtitle: "Product Builder, Student Entrepreneur & AI Engineer",
    paragraphs: [
        "My engineering journey is driven by a simple question: how can we translate code into tangible, real-world impact? I don't just write algorithms; I build products and launch startups. Whether creating a booking marketplace for local event photographers (PhotoDost) or winning a prototype competition at TiE Global, I thrive at the intersection of product engineering and entrepreneurship.",
        "My passion for applied AI took shape through Azure-based ML, NLP, and computer vision projects that earned me a Letter of Recommendation from Hewlett Packard Enterprise. I love bringing high-agency energy to everything I do—from building multi-agent workflows with n8n to teaching programming concepts to children as the youngest certified pedagogy instructor at IIIT Hyderabad.",
        "I'm constantly pushing the boundaries of what I can build—whether architecting scalable system designs or designing custom spatial RAG pipelines at nationwide GenAI hackathons. I thrive in fast-paced startup environments and high-performance teams where shipping clean, robust code solves real problems.",
    ],
};

/* ── Homepage Experience Journey (most recent first) ── */
export const homeJourney = [
    {
        title: "AI/ML Intern",
        issuer: "Leoforce, Hyderabad (In-Office)",
        date: "Jul 2026 – Oct 2026",
        category: "AI / ML",
        description: "Trained and optimized a neural network model, improving accuracy by 10%, and refined system prompts for an additional 7% accuracy improvement.",
    },
    {
        title: "n8n Automation Engineer",
        issuer: "Mavence (Remote)",
        date: "Apr 2026 – Jun 2026",
        category: "Automation",
        description: "Built n8n workflows integrating APIs and webhooks, improving operational efficiency by approximately 60%.",
    },
    {
        title: "Frontend Developer (React.js)",
        issuer: "Blue Planet Solutions (Remote)",
        date: "Aug 2025 – Feb 2026",
        category: "Frontend",
        description: "Developed and optimized responsive user interfaces using React.js and modern front-end frameworks, collaborating with designers and backend developers on interactive features. Made Frontend Team Leader within 2 months of joining.",
    },
    {
        title: "Learner's Profile",
        issuer: "Rishihood University, Sonipat",
        date: "Feb 2025 – Apr 2025",
        category: "Product",
        description: "CVs and interviews overlook key soft skills like resilience, curiosity, and diligence. This solution identifies top talent by accurately assessing these traits.",
    },
    {
        title: "AI Intern (AIYA Program)",
        issuer: "Nanyang Technological University + Hewlett Packard Enterprise",
        date: "Jul 2022 – Oct 2022",
        category: "AI / ML",
        description: "Where the AI journey began: built a supervised-learning loan prediction prototype and trained deep learning and computer vision models, earning a Letter of Recommendation from HPE for Azure-based ML, NLP, and CV projects.",
        link: "https://drive.google.com/file/d/1ip90MEjix5103m7aKQ_7lTmvNAlXKyMe/view?usp=sharing",
    },
];

/* ── Homepage Unified Skills ── */
export const homeSkills = {
    Languages: ["Python", "TypeScript", "JavaScript"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "FastAPI"],
    "AI / ML": ["LLMs", "GenAI", "RAG", "LangChain", "LangGraph", "TensorFlow", "PyTorch"],
    Databases: ["MongoDB", "MySQL"],
    Tools: ["Git", "Docker", "Postman", "Jira", "Azure", "AWS", "n8n"],
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
            "LLM applications, RAG pipelines, and multi-agent systems built with LangGraph and LangChain.",
        href: "/ai-ml",
        icon: "bx bx-brain",
        tags: ["LangGraph", "LangChain", "RAG", "LLMs", "Multi-Agent Systems", "PyTorch", "Python"],
        theme: "ai-ml",
    },
    {
        id: "fullstack",
        title: "AI Full-Stack Engineer",
        description:
            "LLM, RAG, and multi-agent applications built end to end with Next.js, FastAPI, Node.js, and MongoDB.",
        href: "/fullstack",
        icon: "bx bx-code-block",
        tags: ["Next.js", "React.js", "FastAPI", "Node.js", "TypeScript", "MongoDB", "Docker"],
        theme: "fullstack",
    },
    {
        id: "data-analyst",
        title: "Data Analyst",
        description:
            "Data cleaning, EDA, SQL, KPI analysis, and Tableau dashboards that turn messy data into clear business insights.",
        href: "/data-analyst",
        icon: "bx bx-bar-chart-alt-2",
        tags: ["SQL", "Python", "Pandas", "Tableau", "EDA", "A/B Testing", "Google Sheets"],
        theme: "data-analyst",
    },
];
