import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';
import { personalInfo } from '../data/commonData';
import {
    fullstackHero,
    fullstackExperience,
    fullstackProjects,
    fullstackSkills,
} from '../data/fullstackData';

export const metadata = {
    title: 'Priyal Sarda | Fullstack Engineer',
    description:
        'Fullstack engineering portfolio of Priyal Sarda. MERN stack, Next.js, and end-to-end web applications.',
    keywords: [
        'Priyal Sarda',
        'Fullstack Engineer',
        'React',
        'Next.js',
        'Node.js',
        'MERN Stack',
        'Web Developer',
    ],
};

/** Domain-specific nav items for the /fullstack page */
const fullstackNavItems = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
];

export default function FullstackPage() {
    return (
        <>
            <Header navItems={fullstackNavItems} />

            <main className="domain-fullstack">
                {/* Hero Section */}
                <section className="home" id="home">
                    <div className="home-content">
                        <h3>Hi, I&apos;m</h3>
                        <h1>{personalInfo.name}</h1>
                        <h3>
                            <span className="text">{fullstackHero.role}</span>
                        </h3>
                        <p>{fullstackHero.bio}</p>

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
                    <SectionHeading title="Fullstack" subtitle="Experience" />
                    <div className="experience-container">
                        {fullstackExperience.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="projects" id="projects">
                    <SectionHeading title="Fullstack" subtitle="Projects" />
                    <div className="projects-container">
                        {fullstackProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="skills" id="skills">
                    <SectionHeading title="Fullstack" subtitle="Skills" />
                    <div className="skills-container">
                        {Object.entries(fullstackSkills).map(([category, items]) => (
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
