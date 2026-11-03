/**
 * dataAnalystData.js
 * All Data Analyst domain-specific content (from the Data Analyst resume).
 */

export const dataAnalystHero = {
    role: "Data Analyst",
    bio: "Data-driven AI/ML Engineer with 3 years of hands-on experience (11 months in industry internships) who turns messy data into clear business insights. Strong in data cleaning, exploratory analysis (EDA), KPI pivots, and Tableau dashboards using Python, SQL, and Google Sheets, with AI-assisted workflows that are always checked by hand.",
    resumeUrl: "/resume-data-analyst.pdf",
};

export const dataAnalystExperience = [
    {
        role: "AI/ML Intern",
        company: "Leoforce, Hyderabad (In-Office)",
        date: "Jul 2026 - Oct 2026",
        bullets: [
            "Trained and optimized a neural network model, improving accuracy by 10%.",
            "Refined system prompts to achieve an additional 7% accuracy improvement."
        ],
        techStack: ["Neural Networks", "Prompt Engineering", "LLMs", "Python"],
    },
    {
        role: "n8n Automation Engineer",
        company: "Mavence (Remote)",
        date: "Apr 2026 - Jun 2026",
        bullets: [
            "Built n8n workflows integrating APIs and webhooks, improving operational efficiency by approximately 60%."
        ],
        techStack: ["n8n", "APIs", "Webhooks", "Workflow Automation"],
    },
];

export const dataAnalystProjects = [
    {
        title: "Real Estate Market Analytics Dashboard",
        contextNote: "Team project (Feb 2026).",
        description: "A dashboard analyzing 18,072 Connecticut property sales by price segment, town, and assessed-versus-sale value.",
        techStack: ["Google Sheets", "TRIM/CLEAN", "Data Cleaning", "Pivot Tables", "KPI Analysis"],
        problem: "Buyers and investors lacked a clear view of Connecticut's real estate market.",
        solution: "Sourced the data, then cleaned and segmented 18,072 sales. Contributed to the KPI pivots and dashboard covering price segments, town-level revenue concentration, and the gap between assessed and sale prices.",
        impact: "Showed that premium homes were 5.7% of sales but 28.3% of revenue and that homes sold at about 67% of assessed value, leading the team to recommend reducing geographic concentration risk.",
        repo: "https://github.com/Priyal-2005/SectionD_Group6_RealEstate",
        dashboard: "https://docs.google.com/spreadsheets/d/1HueiZPksX8cCUHJH2mlQvdDpqbMjlfEHz8OYLA7XE0U/edit?usp=sharing",
    },
    {
        title: "Olist Customer Churn Analysis",
        image: "/images/projects/olist-churn.jpg",
        contextNote: "Team project (Apr 2026).",
        description: "Churn and retention analysis of 99K+ orders from a Brazilian e-commerce marketplace, with a Tableau Public dashboard.",
        techStack: ["Python", "Pandas", "Seaborn", "Jupyter", "Tableau Public"],
        problem: "Olist needed to understand why customers did not come back after their first order.",
        solution: "As Analysis Lead, wrote a 10-section EDA notebook on 99K+ orders and contributed to the churn and retention KPIs behind the team's Tableau Public dashboard.",
        impact: "Found 97% of customers never reorder, but voucher users reorder at about 5.9% versus 2.8% overall, leading the team to recommend voucher and review-recovery campaigns (an estimated R$1.04M impact).",
        repo: "https://github.com/iampraneeth1116/SectionD_Group-9_Customer_Churn_Analysis",
        dashboard: "https://public.tableau.com/app/profile/atharva.sharma1638/viz/CustomerChurn_17769513030030/Retention",
    },
    {
        title: "Cookie Cats A/B Test: Player Retention",
        image: "/images/projects/cookie-cats.jpg",
        contextNote: "AI-assisted project (Oct 2026).",
        description: "An A/B test of moving a mobile puzzle game's first progression gate from level 30 to level 40, measured on 90K players.",
        techStack: ["SQL", "SQLite", "Python", "Pandas", "Claude Code", "Tableau Public"],
        problem: "A mobile puzzle game wanted to know whether moving its first progression gate from level 30 to level 40 would keep more players coming back.",
        solution: "Wrote the SQL for day-1 and day-7 retention on 90K players and used Claude Code for cleaning and charts, checking every figure against a separate Pandas calculation and adding a split-balance check the AI had skipped.",
        impact: "Found day-7 retention fell from 19.0% to 18.2% with the later gate, a gap unlikely to be chance, while day-1 showed no clear change, suggesting the gate stays at level 30 (the group split was slightly uneven, so it was flagged).",
        repo: "https://github.com/Priyal-2005/cookie-cats-ab-test",
        dashboard: "https://public.tableau.com/app/profile/priyal.sarda/viz/CookieCatsABTestPlayerRetention/ABResult",
    },
];

export const dataAnalystSkills = {
    "Languages": ["Python", "SQL", "JavaScript", "TypeScript"],
    "Data & Analytics": ["Pandas", "NumPy", "Matplotlib", "EDA", "Data Cleaning", "Excel / Google Sheets (Pivot Tables, XLOOKUP)", "Tableau"],
    "AI/ML": ["LLMs", "GenAI", "RAG", "LangChain", "LangGraph", "Scikit-learn", "PyTorch", "n8n Automation"],
    "Full Stack & Databases": ["Next.js", "React.js", "FastAPI", "Node.js", "Express.js", "MongoDB", "MySQL"],
    "Tools": ["Git", "GitHub", "Jupyter", "Docker", "Postman", "AWS", "Azure", "Claude Code"],
};
