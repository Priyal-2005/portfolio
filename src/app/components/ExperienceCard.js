export default function ExperienceCard({ experience }) {
    return (
        <article className="experience-card">
            <div className="experience-header">
                <div>
                    <h3 className="experience-role">{experience.role}</h3>
                    <p className="experience-company">{experience.company}</p>
                </div>
                <span className="experience-date">{experience.date}</span>
            </div>

            <ul className="experience-bullets">
                {experience.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
            </ul>

            {experience.techStack && (
                <div className="tech-tags">
                    {experience.techStack.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>
            )}
        </article>
    );
}
