/**
 * fullstackData.js
 * All Fullstack domain-specific content.
 * Optimized for fullstack internships, frontend/backend engineering roles, and recruiter readability.
 */

export const fullstackHero = {
    role: "AI Full-Stack Engineer",
    bio: "AI Full-Stack Engineer with 2 years of experience (including 6 months in industry), specializing in LLMs, RAG, and multi-agent systems using Next.js, FastAPI, Node.js, and MongoDB. I build autonomous AI applications, workflow automations, and production-ready full-stack systems.",
    resumeUrl: "/resume-fullstack.pdf",
};

export const fullstackExperience = [
    {
        role: "n8n Automation Engineer",
        company: "Mavence",
        date: "Apr 2026 - Jun 2026",
        bullets: [
            "Built n8n workflows integrating APIs and webhooks, improving operational efficiency by approximately 60%."
        ],
        techStack: ["n8n", "APIs", "Webhooks", "Workflow Automation"],
    },
    {
        role: "React.js Frontend Developer Intern",
        company: "Blue Planet Solutions",
        date: "Aug 2025 - Feb 2026",
        bullets: [
            "Developed React.js interfaces and collaborated across teams to enhance UX.",
            "Promoted to Frontend Team Leader within 2 months."
        ],
        techStack: ["React.js", "JavaScript", "UI/UX"],
    },
];

export const fullstackProjects = [
    {
        title: "Talynx",
        contextNote: "Autonomous talent acquisition platform (May 2026).",
        description: "An autonomous, AI-powered ATS covering candidate sourcing, personalized outreach, and evaluation in one platform.",
        techStack: ["LangGraph", "RAG", "LLMs", "Next.js", "FastAPI", "MongoDB"],
        problem: "Recruitment was bottlenecked by fragmented sourcing, outreach, and evaluation workflows.",
        solution: "Built an AI-powered ATS using LangGraph agents for autonomous sourcing, personalized outreach, and semantic candidate-role matching.",
        impact: "Improved hiring efficiency through end-to-end recruitment automation and AI-driven candidate recommendations.",
        repo: "https://github.com/Priyal-2005/Talynx",
        live: "https://talynx.vercel.app/",
    },
    {
        title: "CrisisGrid AI",
        contextNote: "Multi-agent emergency response system (Jun 2026).",
        description: "A multi-agent emergency response system for autonomous triage, incident fusion, and resource allocation.",
        techStack: ["LangGraph", "LLMs", "Next.js", "FastAPI", "NetworkX", "WebSockets"],
        problem: "Dispatch was delayed by unstructured crisis calls and duplicate incident reports.",
        solution: "Built a multi-agent system that triages calls, fuses duplicate incidents, and allocates resources autonomously.",
        impact: "Enabled real-time severity-based dispatch prioritization and dynamic shortest-path routing for faster response.",
        repo: "https://github.com/Priyal-2005/CrisisGrid-AI",
        live: "https://crisis-grid-ai-three.vercel.app/",
    },
    {
        title: "LibraNet",
        contextNote: "Distributed library management system, team project (Apr 2026).",
        description: "A distributed multi-branch library platform built with DDD, RBAC, and event-driven reservation workflows.",
        techStack: ["Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB", "Redis", "DDD", "RBAC"],
        problem: "Multi-branch library operations ran into concurrency and inventory consistency challenges.",
        solution: "Built a distributed multi-branch platform with DDD, RBAC, and event-driven reservation workflows.",
        impact: "Ensured reliable operations through Redis locking, optimistic concurrency, and automated reservation fulfillment.",
        repo: "https://github.com/Priyal-2005/LibraNet",
        live: "https://shelf-sync-five.vercel.app/",
    },
];

export const fullstackSkills = {
    "Languages": ["Python", "TypeScript", "JavaScript"],
    "AI/ML": ["LLMs", "GenAI", "RAG", "LangChain", "LangGraph", "Multi-Agent Systems", "NLP", "Scikit-learn", "NumPy", "Pandas", "n8n Automation"],
    "Full Stack & Databases": ["Next.js", "React.js", "FastAPI", "Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Tailwind CSS"],
    "Tools & Testing": ["Docker", "Git", "GitHub Actions", "Postman", "Jira", "Jest", "Agile & Scrum"],
};
