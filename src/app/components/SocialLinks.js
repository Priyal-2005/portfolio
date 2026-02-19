const socials = [
    {
        href: 'https://www.linkedin.com/in/priyal-sarda-a38793323/',
        icon: 'bx bxl-linkedin',
        label: 'LinkedIn',
    },
    {
        href: 'https://github.com/Priyal-2005',
        icon: 'bx bxl-github',
        label: 'GitHub',
    },
    {
        href: 'mailto:priyal.sarda2005@gmail.com',
        icon: 'bx bxl-gmail',
        label: 'Email',
    },
    {
        href: 'https://www.instagram.com/itspriyalsarda/',
        icon: 'bx bxl-instagram',
        label: 'Instagram',
    },
];

export default function SocialLinks({ className = '' }) {
    return (
        <div className={`social-links ${className}`}>
            {socials.map((s) => (
                <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="social-link"
                >
                    <i className={s.icon}></i>
                </a>
            ))}
        </div>
    );
}
