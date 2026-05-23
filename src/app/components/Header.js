'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

/**
 * Default nav items used on the main dashboard (/).
 * Domain pages pass their own navItems to override these.
 */
const defaultNavItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#domains', label: 'Domains' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Header — shared across all pages.
 *
 * Props:
 *  - navItems {Array<{href: string, label: string}>}
 *    Optional. Overrides default nav links. Pass domain-specific
 *    hash links when rendering a domain page (e.g. /ai-ml, /fullstack).
 */
export default function Header({ navItems = defaultNavItems }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" role="banner">
      <Link href="/" className="logo" aria-label="Priyal Sarda — Home">
        Priyal<span className="logo-dot">.</span>
      </Link>

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={pathname === item.href ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
