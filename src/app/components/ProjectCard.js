export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-image-container">
                <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
                {project.status && (
                    <span className="project-badge">{project.status}</span>
                )}
            </div>

            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {(project.problem || project.solution || project.impact) && (
                    <div className="project-details">
                        {project.problem && (
                            <div className="detail-item">
                                <span className="detail-label">Problem:</span> {project.problem}
                            </div>
                        )}
                        {project.solution && (
                            <div className="detail-item">
                                <span className="detail-label">Solution:</span> {project.solution}
                            </div>
                        )}
                        {project.impact && (
                            <div className="detail-item">
                                <span className="detail-label">Impact:</span> {project.impact}
                            </div>
                        )}
                    </div>
                )}

                {project.techStack && (
                    <div className="tech-tags">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                )}

                <div className="project-links">
                    {project.repo && (
                        <a
                            href={project.repo}
                            className="project-link repo-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code on GitHub`}
                        >
                            <i className="bx bxl-github"></i>
                            <span>Source Code</span>
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            className="project-link demo-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live demo`}
                        >
                            <i className="bx bx-link-external"></i>
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
