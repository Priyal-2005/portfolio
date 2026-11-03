/**
 * aiMlData.js
 * All AI/ML domain-specific content.
 * Optimized for AI/ML and GenAI roles.
 */

export const aiMlHero = {
    role: "AI / ML Engineer",
    resumeUrl: "/resume-ai-ml.pdf",
    bio: "AI/ML Engineer with 4+ years of hands-on experience (since 2022) in Generative AI, LLMs, RAG, and multi-agent systems, including 11 months in industry internships. I build AI applications, optimize prompts, automate workflows, and ship production-ready AI systems using Python, LangGraph, FastAPI, and modern LLM frameworks.",
};

export const aiMlExperience = [
    {
        role: "AI/ML Intern",
        company: "Leoforce",
        date: "Jul 2026 - Oct 2026",
        bullets: [
            "Trained and optimized a neural network model, improving accuracy by 10%.",
            "Refined system prompts to achieve an additional 7% accuracy improvement."
        ],
        techStack: ["Neural Networks", "Prompt Engineering", "LLMs", "Python"],
    },
    {
        role: "n8n Automation Engineer",
        company: "Mavence",
        date: "Apr 2026 - Jun 2026",
        bullets: [
            "Built n8n workflows integrating APIs and webhooks, improving operational efficiency by approximately 60%."
        ],
        techStack: ["n8n", "APIs", "Webhooks", "Workflow Automation"],
    },
];

export const aiMlProjects = [
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
];

export const aiMlCertifications = [
    {
        title: "ET GenAI Hackathon Semi-Finalist",
        issuer: "Economic Times",
        date: "May 2026",
        description: "Semi-Finalist in a national GenAI hackathon for developing an AI-driven solution.",
        link: "https://drive.google.com/file/d/1ATMQqXtDZxCGgyQOYenZkJk9UYYYXNYQ/view?usp=sharing",
        category: "GenAI / Hackathon",
    },
    {
        title: "HPE Letter of Recommendation",
        issuer: "Hewlett Packard Enterprise",
        date: "Oct 2022",
        description: "Recognized for outstanding performance in Azure-based ML, NLP, and CV projects.",
        link: "https://drive.google.com/file/d/1Ia_47xYRQg2q1-NYcg16HbX9dxIqwlNd/view?usp=sharing",
        category: "Applied AI / Prototype",
    },
    {
        title: "Applied Deep Learning & Computer Vision",
        issuer: "IIT Madras (Mechanica) & EduxLabs",
        date: "Jul 2022",
        description: "Completed hands-on training in deep learning and computer vision using Python.",
        link: "https://drive.google.com/file/d/1zPlE2MYzVNWSunKKASMm8BjTnDqiHuyx/view?usp=sharing",
        category: "Deep Learning & CV",
    },
];

export const aiMlSkills = {
    "Languages": ["Python", "TypeScript", "JavaScript"],
    "AI/ML": ["LLMs", "GenAI", "RAG", "LangChain", "LangGraph", "Multi-Agent Systems", "NLP", "Scikit-learn", "NumPy", "Pandas", "n8n Automation", "TensorFlow", "PyTorch"],
    "Full Stack & Databases": ["Next.js", "React.js", "FastAPI", "Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Tailwind CSS"],
    "Tools & Testing": ["Docker", "Git", "MLOps", "Postman", "Jira", "Jest", "Agile & Scrum", "Azure", "AWS"],
};
