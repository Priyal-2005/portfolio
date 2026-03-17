export const personalInfo = {
    name: "Priyal Sarda",
    role: "Full-Stack Engineer | AI Enthusiast",
    bio: "I am a full-stack developer and entrepreneur with a proven track record of building scalable applications and launching successful ventures. I specialize in the MERN stack and Next.js, and I'm passionate about leveraging AI to create impactful solutions.",
    email: "priyal.sarda2005@gmail.com",
    phone: "+91 93911 54230",
    location: "Delhi, India",
    linkedin: "https://www.linkedin.com/in/priyal-sarda-a38793323/",
    github: "https://github.com/Priyal-2005",
    instagram: "https://www.instagram.com/itspriyalsarda/",
    resumeUrl: "/resume.pdf", 
};

export const experience = [
    {
        role: "Co-Founder & Technical Lead",
        company: "Coding Champs",
        date: "2023 - Present",
        img: "/images/coding-champs-logo.png", 
        bullets: [
            "Co-founded an ed-tech platform reaching over 500+ students globally.",
            "Designed and implemented the core curriculum and managed a team of 5 instructors.",
            "Architected internal tools to streamline student progress tracking and operational workflows.",
        ],
        techStack: ["Leadership", "Curriculum Design", "Management", "Operations"],
    },
    {
        role: "Founder & Full-Stack Developer",
        company: "PhotoDost",
        date: "2022 - Present",
        img: "/images/photodost-logo.png", 
        bullets: [
            "Designed and built a comprehensive photography service marketplace from scratch.",
            "Developed the full-stack web application using React, Node.js, and MongoDB.",
            "Successfully onboarded 50+ photographers and facilitated 200+ bookings in the first year.",
        ],
        techStack: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    },
];

export const projects = [
    {
        title: "AI Chatbot Assistant",
        description: "An intelligent chatbot capable of understanding natural language queries and providing accurate responses. Built with Python and NLP libraries.",
        problem: "Users needed a quick, automated way to get answers to common queries without human intervention.",
        solution: "Developed an NLP-powered chatbot using Python that classifies intents and generates dynamic responses.",
        impact: "Reduced manual query handling time and improved user engagement.",
        image: "/images/AI-chatbot.jpg",
        techStack: ["Python", "NLP", "Machine Learning", "NLTK"],
        repo: "https://github.com/Priyal-2005",
        live: "#",
    },
    {
        title: "Smart Notes App",
        description: "A feature-rich notes application with rich text editing, tagging, and cloud sync capabilities. Designed for productivity.",
        problem: "Existing note apps lacked seamless cloud syncing combined with an intuitive categorization system.",
        solution: "Built a React application with Firebase backend to ensure real-time data synchronization.",
        impact: "Enabled users to securely access and organize their notes across multiple devices seamlessly.",
        image: "/images/NotesApp.jpg",
        techStack: ["React", "Firebase", "CSS Modules", "Context API"],
        repo: "https://github.com/Priyal-2005",
        live: "#",
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather forecasting app with location tracking and detailed meteorological data visualization.",
        problem: "Users needed a fast and reliable way to check multi-day forecasts based on dynamic locations.",
        solution: "Integrated a third-party Weather API with a responsive JavaScript/HTML/CSS frontend.",
        impact: "Provided accurate, real-time weather updates with an intuitive and clean user interface.",
        image: "/images/Weather-app.jpg",
        techStack: ["JavaScript", "Weather API", "HTML5", "CSS3"],
        repo: "https://github.com/Priyal-2005",
        live: "#",
    },
];

export const certifications = [
    {
        title: "Full Stack Web Development",
        issuer: "Udemy",
        date: "2023",
        description: "Comprehensive bootcamp covering the complete MERN stack (MongoDB, Express, React, Node).",
        link: "#",
    },
    {
        title: "Introduction to Artificial Intelligence",
        issuer: "Coursera",
        date: "2022",
        description: "Mastered fundamental concepts of AI, Machine Learning, and practical applications.",
        link: "#",
    },
    {
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "2023",
        description: "Deep dive into advanced React concepts, performance optimization, and architectural patterns.",
        link: "#",
    }
];

export const skills = {
    Languages: ["JavaScript (ES6+)", "Python", "Java", "C++", "HTML5", "CSS3"],
    Frontend: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "Django", "FastAPI"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    Tools: ["Git & GitHub", "VS Code", "Postman", "Figma", "Vercel"],
};
