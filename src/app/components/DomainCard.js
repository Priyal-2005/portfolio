import Link from 'next/link';

/**
 * DomainCard
 * Premium navigation card for the homepage domains section.
 *
 * Props:
 *  - title       {string}   Domain title (e.g. "AI / ML Engineer")
 *  - description {string}   Short domain description
 *  - href        {string}   Route to navigate to (e.g. "/ai-ml")
 *  - icon        {string}   Boxicons class name (e.g. "bx bx-brain")
 *  - tags        {string[]} Tech stack tags to display
 *  - theme       {string}   "ai-ml" | "fullstack" — applies per-card accent colors
 */
export default function DomainCard({ title, description, href, icon, tags = [], theme = '' }) {
    const themeClass = theme ? `domain-card--${theme}` : '';

    return (
        <Link href={href} className={`domain-card ${themeClass}`} aria-label={`Explore ${title} portfolio`}>
            <div className="domain-card-icon">
                <i className={icon}></i>
            </div>
            <div className="domain-card-content">
                <h3 className="domain-card-title">{title}</h3>
                <p className="domain-card-description">{description}</p>
                {tags.length > 0 && (
                    <div className="domain-card-tags">
                        {tags.map((tag) => (
                            <span key={tag} className="domain-card-tag">{tag}</span>
                        ))}
                    </div>
                )}
                <span className="domain-card-cta">
                    Explore Portfolio <i className="bx bx-right-arrow-alt"></i>
                </span>
            </div>
        </Link>
    );
}
