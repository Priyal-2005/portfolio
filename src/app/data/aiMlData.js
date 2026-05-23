/**
 * aiMlData.js
 * All AI/ML domain-specific content.
 * Seed data is populated from existing portfolio projects/certs where applicable.
 * Replace / expand with real content as the domain grows.
 */

export const aiMlHero = {
    role: "AI / ML Engineer",
    bio: "I build intelligent systems — from NLP pipelines and chatbots to predictive models. Passionate about making AI practical, explainable, and impactful.",
};

export const aiMlExperience = [
    {
        role: "AI Research & Development",
        company: "Independent Projects",
        date: "2022 - Present",
        bullets: [
            "Designed and trained NLP models for intent classification and sentiment analysis.",
            "Experimented with transformer-based architectures (BERT, GPT) for text generation tasks.",
            "Integrated ML inference pipelines into production web applications.",
        ],
        techStack: ["Python", "PyTorch", "Hugging Face", "NLTK", "scikit-learn"],
    },
    {
        role: "Co-Founder & Technical Lead",
        company: "Coding Champs",
        date: "2023 - Present",
        bullets: [
            "Designed AI/ML curriculum modules covering supervised learning, NLP, and neural networks.",
            "Mentored 500+ students through hands-on ML projects and competitions.",
            "Built automated assessment tools using Python to evaluate student code submissions.",
        ],
        techStack: ["Python", "Machine Learning", "Curriculum Design", "Automation"],
    },
];

export const aiMlProjects = [
    {
        title: "AI Chatbot Assistant",
        description:
            "An intelligent chatbot capable of understanding natural language queries and providing accurate responses. Built with Python and NLP libraries.",
        problem:
            "Users needed a quick, automated way to get answers to common queries without human intervention.",
        solution:
            "Developed an NLP-powered chatbot using Python that classifies intents and generates dynamic responses.",
        impact:
            "Reduced manual query handling time and improved user engagement significantly.",
        image: "/images/AI-chatbot.jpg",
        techStack: ["Python", "NLP", "Machine Learning", "NLTK"],
        repo: "https://github.com/Priyal-2005",
        live: "#",
    },
    {
        title: "Sentiment Analysis Pipeline",
        description:
            "An end-to-end sentiment analysis system for social media data, classifying posts as positive, negative, or neutral.",
        problem:
            "Manual review of large volumes of social media data was inefficient and inconsistent.",
        solution:
            "Built a preprocessing and classification pipeline using scikit-learn with TF-IDF vectorization.",
        impact:
            "Achieved 87% accuracy on benchmark datasets, enabling automated content moderation at scale.",
        image: "/images/Weather-app.jpg",
        techStack: ["Python", "scikit-learn", "Pandas", "TF-IDF"],
        repo: "https://github.com/Priyal-2005",
        live: "#",
    },
];

export const aiMlCertifications = [
    {
        title: "Introduction to Artificial Intelligence",
        issuer: "Coursera",
        date: "2022",
        description:
            "Mastered fundamental concepts of AI, Machine Learning, and practical applications.",
        link: "#",
    },
    {
        title: "Deep Learning Specialization",
        issuer: "deeplearning.ai",
        date: "2023",
        description:
            "Completed 5-course specialization covering neural networks, CNN, RNN, and sequence models.",
        link: "#",
    },
];

export const aiMlSkills = {
    Languages: ["Python", "R", "SQL"],
    "ML Frameworks": ["PyTorch", "TensorFlow", "scikit-learn", "Keras"],
    NLP: ["NLTK", "spaCy", "Hugging Face Transformers", "BERT"],
    Tools: ["Jupyter", "NumPy", "Pandas", "Matplotlib", "Google Colab"],
};
