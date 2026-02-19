export default function CertificationCard({ cert }) {
    return (
        <article className="cert-card">
            <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.description && <p className="cert-description">{cert.description}</p>}
                <span className="cert-date">{cert.date}</span>
            </div>

            {cert.link && (
                <a
                    href={cert.link}
                    className="cert-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View certificate: ${cert.title}`}
                >
                    <i className="bx bx-link-external"></i>
                    View Certificate
                </a>
            )}
        </article>
    );
}
