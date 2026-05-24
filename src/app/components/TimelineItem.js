export default function TimelineItem({ cert }) {
    return (
        <article className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <div className="timeline-header-meta">
                    <span className="timeline-date">{cert.date}</span>
                    {cert.category && (
                        <span className="timeline-category-badge">{cert.category}</span>
                    )}
                </div>
                <h3 className="timeline-title">{cert.title}</h3>
                <p className="timeline-issuer">{cert.issuer}</p>
                {cert.description && (
                    <p className="timeline-description">{cert.description}</p>
                )}
                {cert.link && cert.link !== '#' && (
                    <a
                        href={cert.link}
                        className="timeline-certificate"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View certificate for ${cert.title}`}
                    >
                        <i className="bx bx-certificate"></i>
                        <span>View Certificate</span>
                    </a>
                )}
            </div>
        </article>
    );
}
