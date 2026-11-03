import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';
import { personalInfo } from '../data/commonData';
import {
    dataAnalystHero,
    dataAnalystExperience,
    dataAnalystProjects,
    dataAnalystSkills,
} from '../data/dataAnalystData';

export const metadata = {
    title: 'Priyal Sarda | Data Analyst',
    description:
        'Data analyst portfolio of Priyal Sarda. EDA, SQL, Python, KPI dashboards, and Tableau.',
    keywords: [
        'Priyal Sarda',
        'Data Analyst',
        'SQL',
        'Tableau',
        'Python',
        'Pandas',
    ],
};

/** Domain-specific nav items for the /data-analyst page */
const dataAnalystNavItems = [
    { href: '#home', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
];

export default function DataAnalystPage() {
    return (
        <>
            <Header navItems={dataAnalystNavItems} />

            <main className="domain-data-analyst">
                {/* Hero Section */}
                <section className="home" id="home">
                    <div className="home-content">
                        <h3>Hi, I&apos;m</h3>
                        <h1>{personalInfo.name}</h1>
                        <h3>
                            <span className="text">{dataAnalystHero.role}</span>
                        </h3>
                        <p>{dataAnalystHero.bio}</p>

                        <SocialLinks className="home-sci" />

                        <div className="btn-group">
                            <a href={dataAnalystHero.resumeUrl} className="btn-box resume-btn" download>
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
                            <Image
                                src="/images/profile.JPG"
                                alt={personalInfo.name}
                                className="profile-pic"
                                width={320}
                                height={320}
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="experience" id="experience">
                    <SectionHeading title="Data Analyst" subtitle="Experience" />
                    <div className="experience-container">
                        {dataAnalystExperience.map((exp, index) => (
                            <ExperienceCard key={index} experience={exp} />
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="projects" id="projects">
                    <SectionHeading title="Data Analyst" subtitle="Projects" />
                    <div className="projects-container">
                        {dataAnalystProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="skills" id="skills">
                    <SectionHeading title="Data Analyst" subtitle="Skills" />
                    <div className="skills-container">
                        {Object.entries(dataAnalystSkills).map(([category, items]) => (
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
