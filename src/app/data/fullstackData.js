/**
 * fullstackData.js
 * All Fullstack domain-specific content.
 * Optimized for fullstack internships, frontend/backend engineering roles, and recruiter readability.
 */

export const fullstackHero = {
    role: "Fullstack Engineer & Product Builder",
    bio: "I architect and build end-to-end web products — specializing in Next.js, the MERN stack, and scalable system architectures. Passionate about shipping robust, performant code from database design to modern, responsive interfaces with a developer-first and startup mindset.",
};

export const fullstackExperience = [
    {
        role: "Frontend Developer (React.js)",
        company: "Blue Planet Solutions",
        date: "2023 - Present",
        bullets: [
            "Engineered responsive, component-driven user interfaces using React.js and modern state management tools (Redux/Context API).",
            "Optimized frontend bundle sizes and rendering cycles, achieving a 25% improvement in PageSpeed Insights and Core Web Vitals (LCP, INP).",
            "Integrated complex REST API endpoints with robust error handling, loading states, and data caching mechanisms.",
            "Collaborated in an agile setting, translating UI/UX Figma wireframes into modular, high-fidelity components using plain CSS."
        ],
        techStack: ["React.js", "Redux", "Context API", "JavaScript", "REST APIs", "Figma", "CSS Modules"],
    },
    {
        role: "Co-Founder & Technical Lead",
        company: "Coding Champs",
        date: "2023 - Present",
        bullets: [
            "Architected and delivered internal operational tools and admin dashboards using Next.js, React.js, and MongoDB to manage 500+ active students globally.",
            "Automated administrative and tracking workflows, reducing operational overhead and enhancing class scheduling precision.",
            "Led a small engineering and support team of 5, defining standard git workflows and reviews to ensure clean codebase maintainability."
        ],
        techStack: ["Next.js", "React.js", "Node.js", "MongoDB", "CSS Modules", "Git & GitHub"],
    },
    {
        role: "Founder & Full-Stack Developer",
        company: "PhotoDost",
        date: "2022 - Present",
        bullets: [
            "Designed, developed, and deployed an end-to-end photography booking marketplace using the MERN stack (MongoDB, Express, React, Node.js).",
            "Implemented secure JWT user/photographer authentication, dynamic profile galleries, and a multi-step booking request/approval pipeline.",
            "Successfully onboarded 50+ service providers and facilitated 200+ direct bookings, scaling server structures to maintain high uptime."
        ],
        techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs", "JWT Auth"],
    },
];

export const fullstackProjects = [
    {
        title: "FreelanceFlow",
        description: "A comprehensive SaaS platform helping freelancers manage contracts, track hours, and generate custom invoices instantly.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "CSS Modules"],
        problem: "Freelancers lacked a unified, non-bloated client dashboard to manage contracts, track active project hours, and generate custom invoices instantly.",
        solution: "Developed an end-to-end freelance management application featuring automated invoice generation, real-time visual client progress pipelines, and database search.",
        impact: "Enabled streamlined tracking of multiple parallel client relationships with high UI responsiveness.",
        image: "/images/NotesApp.jpg",
        status: "Work in Progress",
        repo: "https://github.com/Priyal-2005/FreelanceFlow",
        live: null,
    },
    {
        title: "MediConnect",
        description: "A real-time medical clinic scheduling platform bridging patients with qualified consultants.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
        problem: "Traditional patient booking and prescription dispatch interfaces were slow, highly manual, and lacked instant slot status feedback.",
        solution: "Created an online clinic management dashboard that implements live slot state verification, calendar components, and persistent medical profile history.",
        impact: "Allowed users to discover open slots and schedule consultations in under 3 steps, automating calendar availability syncing.",
        image: "/images/AI-chatbot.jpg",
        status: "Work in Progress",
        repo: "https://github.com/Priyal-2005/MediConnect",
        live: null,
    },
    {
        title: "FocusFlow",
        description: "A clean, developer-first productivity dashboard linking Pomodoro cycles with priority-based task tiers.",
        techStack: ["Next.js", "CSS Modules", "Context API", "LocalStorage"],
        problem: "Developers faced constant task fragmentation and lacked a minimal visual platform to structure pomodoro sequences linked with task priority tiers.",
        solution: "Built a high-performance productivity dash using Next.js that synchronizes a sleek workspace timer with active context categorization.",
        impact: "Delivered a premium, high-speed task organizer featuring zero lag, native browser tab alerts, and local data persistence.",
        image: "/images/Calculator.jpg",
        status: "Work in Progress",
        repo: "https://github.com/Priyal-2005/FocusFlow",
        live: null,
    },
    {
        title: "Loan Calculator App",
        description: "An interactive Next.js financial tool demonstrating flat vs. reducing interest schedules over time.",
        techStack: ["Next.js", "CSS Modules", "JavaScript", "HTML5", "CSS3"],
        problem: "Borrowers struggled to understand the structural amortization differences between flat and reducing interest schedules over time.",
        solution: "Created a dynamic Next.js calculation workspace that processes loan principals, interest schedules, and generates clean amortization charts.",
        impact: "Shipped a clean client-side utility with interactive visualizations and intuitive input handling.",
        image: "/images/bmi-calculator.jpg",
        status: "Work in Progress",
        repo: "https://github.com/Priyal-2005/Loan-Calculator-App",
        live: null,
    },
    {
        title: "Smart Notes App",
        description: "A feature-rich notes dashboard featuring cloud synchronization, pins, and rich-text capabilities.",
        techStack: ["React.js", "Firebase", "CSS Modules", "Context API"],
        problem: "Productivity notes lacked reliable real-time cloud backup, pin configurations, and fluid transitions across browser sessions.",
        solution: "Engineered a highly polished, interactive dashboard connected to a live Firebase backend that handles autosaving, category tags, and dynamic pins.",
        impact: "Provided active users with secure cloud synchronization and sub-second write states across multiple devices.",
        image: "/images/NotesApp.jpg",
        repo: "https://github.com/Priyal-2005/Notes-App",
        live: "https://notes-6z9rs42yd-priyal-2005s-projects.vercel.app/",
    },
    {
        title: "PhotoDost Marketplace",
        description: "A full-stack event photography marketplace connecting couples with professional service providers.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
        problem: "Local couples and newlyweds faced high friction in discovering, comparing, and booking freelance event photographers.",
        solution: "Built a premium photography search marketplace supporting profile portfolios, reviews, booking schedules, and admin panels.",
        impact: "Supported over 200 bookings in the first year of launching the platform.",
        image: "/images/Weather-app.jpg",
        repo: "https://github.com/Priyal-2005",
        live: "#",
    },
];

export const fullstackSkills = {
    Frontend: ["React.js", "Next.js", "Redux", "Context API", "Bootstrap", "HTML5", "CSS3", "CSS Modules"],
    Backend: ["Node.js", "Express.js", "REST APIs", "FastAPI", "Django"],
    Databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    "APIs & Auth": ["JWT (JSON Web Tokens)", "Prisma (ORM)", "REST API Design", "Postman", "API Integration"],
    Tools: ["Git & GitHub", "VS Code", "Figma", "Vercel"],
};
