import Link from 'next/link';

/**
 * DomainCard
 * Navigation card for the homepage domains section.
 *
 * Props:
 *  - title      {string}   Domain title (e.g. "AI / ML Engineer")
 *  - description{string}   Short domain description
 *  - href       {string}   Route to navigate to (e.g. "/ai-ml")
 *  - icon       {string}   Boxicons class name (e.g. "bx bx-brain")
 *  - tags       {string[]} Tech stack tags to display
 */
export default function DomainCard({ title, description, href, icon, tags = [] }) {
    return (
        <Link href={href} className="domain-card" aria-label={`Explore ${title} portfolio`}>
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
            </div>
            <div className="domain-card-arrow">
                <i className="bx bx-right-arrow-alt"></i>
            </div>
        </Link>
    );
}
