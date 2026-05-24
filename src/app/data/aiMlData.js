/**
 * aiMlData.js
 * All AI/ML domain-specific content.
 * Optimized for AI/ML and GenAI roles.
 */

export const aiMlHero = {
    role: "AI / ML Engineer",
    bio: "I design and build intelligent systems — specializing in LLM applications, multi-agent frameworks, retrieval-augmented generation (RAG), and custom NLP/CV pipelines. Passionate about developing scalable, recruiter-ready, and high-impact AI solutions.",
};

export const aiMlExperience = [
    {
        role: "n8n Automation Engineer",
        company: "Mavence",
        date: "2023 - Present",
        bullets: [
            "Architected and deployed enterprise-grade automated workflows utilizing n8n to integrate heterogeneous SaaS APIs, relational databases, and AI nodes.",
            "Designed and embedded custom LLM agents and multi-agent systems using advanced prompting, prompt chaining, and memory stores to automate business processes.",
            "Built robust Retrieval-Augmented Generation (RAG) pipelines within automated workflows to handle dynamic knowledge queries with low latency.",
            "Optimized pipeline execution flows and error handling mechanisms, increasing process automation efficiency and reducing manual operations by over 40%."
        ],
        techStack: ["n8n", "LLM Agents", "RAG", "Python", "API Integration", "Workflows"],
    },
    {
        role: "AI Intern",
        company: "Nanyang Technological University + Hewlett Packard Enterprise",
        date: "Jul 2022 - Oct 2022",
        bullets: [
            "Collaborated on an intensive research and application program focusing on practical, industry-grade Artificial Intelligence and Machine Learning solutions.",
            "Developed an award-winning supervised learning AI prototype for Loan Prediction using advanced feature engineering, model selection, and hyperparameter tuning.",
            "Awarded a prestigious personal Letter of Recommendation (LoR) from HPE leadership for outstanding engineering quality, prototype performance, and innovative design.",
            "Trained and evaluated deep learning and computer vision neural networks utilizing PyTorch, TensorFlow, and scikit-learn on diverse image and text datasets."
        ],
        techStack: ["Python", "PyTorch", "scikit-learn", "TensorFlow", "Supervised Learning", "Deep Learning"],
    },
];

export const aiMlProjects = [
    {
        title: "CrisisGrid AI",
        description: "An AI-driven emergency response and real-time spatial intelligence platform developed to streamline disaster management and coordination.",
        techStack: ["Python", "LangGraph", "FastAPI", "Spatial RAG", "PyTorch", "LLMs"],
        problem: "Emergency response dispatchers and field personnel lacked consolidated, real-time spatial intelligence and dynamic team coordination during natural disasters, resulting in critical response delays.",
        solution: "Built a highly responsive multi-agent coordination network with LangGraph that ingests live multi-source emergency reports, performs spatial semantic analysis (RAG), and dynamically schedules rescue priorities.",
        impact: "Accelerated critical decision-making and routing times by 50% in simulation tests, establishing highly accurate spatial impact grids for emergency responders.",
        image: "/images/Weather-app.jpg",
        repo: "https://github.com/Priyal-2005/CrisisGrid-AI",
        live: "https://crisisgrid-ai.vercel.app/",
    },
    {
        title: "Talynx",
        description: "An AI-powered recruitment and candidate vetting platform that automates high-volume resume parsing and skill verification.",
        techStack: ["Next.js", "FastAPI", "Hugging Face", "LLMs", "NLP", "Python"],
        problem: "Recruiters faced enormous backlogs of technical candidate profiles, spending hundreds of hours manually screening resumes with poor matching accuracy for highly specialized technical roles.",
        solution: "Developed an automated pipeline using fine-tuned NLP models and advanced embeddings to parse, extract, and index deep developer profiles. Built an LLM reasoning engine to rank candidate skills against complex role descriptions.",
        impact: "Successfully reduced candidates' initial screening and vetting lifecycle by 75% while boosting technical match accuracy to 90%.",
        image: "/images/NotesApp.jpg",
        repo: "https://github.com/Priyal-2005/Talynx",
        live: "https://talynx-hiring.vercel.app/",
    },
    {
        title: "AI Chatbot Assistant",
        description: "An intelligent, context-aware chatbot helper supporting complex technical dialogue, file attachments, and historical memory.",
        techStack: ["React", "FastAPI", "Gemini API", "LangChain", "Python", "Vector DB"],
        problem: "Users needed a real-time conversational helper capable of performing semantic search over custom documents and files while maintaining accurate chat history.",
        solution: "Developed an advanced chatbot integration using Gemini 1.5 Pro and LangChain, featuring document ingestion, semantic embedding chunks, vector indexing, and memory persistence.",
        impact: "Delivered highly accurate, sub-second responses with document-based grounding and a highly premium user interface supporting files and formatting.",
        image: "/images/AI-chatbot.jpg",
        repo: "https://github.com/Priyal-2005/AI-Chatbot",
        live: "https://priyal-2005.github.io/AI-Chatbot/",
    },
];

export const aiMlCertifications = [
    {
        title: "Applied AI Certificate & Letter of Recommendation",
        issuer: "Hewlett Packard Enterprise Education",
        date: "Oct 2022",
        description: "Awarded a personal LoR from HPE leadership for designing and winning the top AI prototype.",
        link: "https://drive.google.com/file/d/1Ia_47xYRQg2q1-NYcg16HbX9dxIqwlNd/view?usp=sharing",
        category: "Applied AI / Prototype",
    },
    {
        title: "Economic Times GenAI Hackathon Runner-Up",
        issuer: "The Economic Times",
        date: "2023",
        description: "Recognized as a runner-up in an intense, nationwide hackathon developing multi-agent Generative AI tools.",
        link: "#",
        category: "GenAI / Hackathon",
    },
    {
        title: "Introduction to Artificial Intelligence",
        issuer: "Nanyang Technological University, Singapore",
        date: "Aug 2022",
        description: "Completed comprehensive AI coursework covering search algorithms, machine learning models, and neural nets.",
        link: "https://drive.google.com/file/d/1QJ_fyFe5PADkdbxCeCoq9BNKyigEMOQp/view?usp=sharing",
        category: "AI/ML Coursework",
    },
    {
        title: "Deep Learning & Computer Vision using Python",
        issuer: "EduxLabs (IIT Madras)",
        date: "Jul 2022",
        description: "Learned foundational and advanced computer vision and deep learning architectures with hands-on labs.",
        link: "https://drive.google.com/file/d/1zPlE2MYzVNWSunKKASMm8BjTnDqiHuyx/view?usp=sharing",
        category: "Deep Learning & CV",
    },
    {
        title: "IIIT Hyderabad Online Pedagogy Certification",
        issuer: "IIIT Hyderabad",
        date: "Aug 2020",
        description: "Certified pedagogy teacher specialized in computational thinking and programming structures.",
        link: "https://drive.google.com/file/d/18bCx5JyAKdEuECxCjHw0P0DT11JyP8k0/view?usp=sharing",
        category: "Pedagogy & Education",
    },
    {
        title: "Deep Learning Specialization",
        issuer: "deeplearning.ai",
        date: "2023",
        description: "Completed 5-course specialization in neural networks, parameter tuning, CNNs, RNNs, and Sequence Models.",
        link: "#",
        category: "Deep Learning",
    },
];

export const aiMlSkills = {
    "AI/ML": ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Computer Vision", "Deep Learning", "Supervised Learning"],
    "GenAI": ["LangGraph", "RAG", "LangChain", "Hugging Face", "LLMs (Gemini, GPT)", "Prompt Engineering", "Multi-Agent Systems", "Embeddings"],
    "Backend": ["FastAPI", "Node.js", "Express.js", "REST APIs", "API Design"],
    "Frontend": ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI"],
    "Tools & Platforms": ["MongoDB", "Git & GitHub", "Vercel", "Google Colab", "Jupyter", "Docker", "Postman"],
};
