import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import TimelineItem from '../components/TimelineItem';
import SocialLinks from '../components/SocialLinks';
import { personalInfo } from '../data/commonData';
import {
    aiMlHero,
    aiMlExperience,
    aiMlProjects,
    aiMlCertifications,
    aiMlSkills,
} from '../data/aiMlData';

export const metadata = {
    title: 'Priyal Sarda | AI / ML Engineer',
    description:
        'AI & Machine Learning portfolio of Priyal Sarda. Specially optimized for GenAI, RAG, and NLP engineering roles.',
    keywords: [
        'Priyal Sarda',
        'AI Engineer',
        'Machine Learning',
        'GenAI',
        'RAG',
        'NLP',
        'Python',
        'Deep Learning',
    ],
};

/** Domain-specific nav items for the /ai-ml page */
const aiMlNavItems = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#skills', label: 'Skills' },
];

export default function AiMlPage() {
    return (
        <>
            <Header navItems={aiMlNavItems} />

            <main className="domain-ai-ml">
                {/* Hero Section */}
                <section className="home" id="home">
                    <div className="home-content">
                        <h3>Hi, I&apos;m</h3>
                        <h1>{personalInfo.name}</h1>
                        <h3>
                            <span className="text">{aiMlHero.role}</span>
                        </h3>
                        <p>{aiMlHero.bio}</p>

                        <SocialLinks className="home-sci" />

                        <div className="btn-group">
                            <a href={personalInfo.resumeUrl} className="btn-box resume-btn" download>
                                Download Resume
                            </a>
                            <a href="/#contact" className="btn-box btn-secondary">
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    <div
                        className="profile-container"
                        role="img"
                        aria-label={`Profile picture of ${personalInfo.name}`}
                    >
                        <div className="profile-box">
                            <img
                                src="/images/profile.JPG"
                                alt={personalInfo.name}
                                className="profile-pic"
                            />
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="experience" id="experience">
                    <SectionHeading title="AI/ML" subtitle="Experience" />
                    <div className="experience-container">
                        {aiMlExperience.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="projects" id="projects">
                    <SectionHeading title="AI/ML" subtitle="Projects" />
                    <div className="projects-container">
                        {aiMlProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="timeline-section" id="certifications">
                    <SectionHeading title="AI/ML" subtitle="Certifications" />
                    <div className="timeline-container">
                        <div className="timeline-line"></div>
                        {aiMlCertifications.map((cert, index) => (
                            <TimelineItem key={index} cert={cert} />
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="skills" id="skills">
                    <SectionHeading title="AI/ML" subtitle="Skills" />
                    <div className="skills-container">
                        {Object.entries(aiMlSkills).map(([category, items]) => (
                            <div key={category} className="skill-category" data-category={category}>
                                <h3>{category}</h3>
                                <div className="skill-list">
                                    {items.map((skill) => (
                                        <span key={skill} className="skill-item">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
