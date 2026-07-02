import { useState } from 'react';
import './HamburgerMenu.css';

const NAV_ITEMS = [
  { label: 'Advantages', href: '#advantages' },
  { label: 'My Process', href: '#my-process' },
  { label: 'About', href: '#about' },
  { label: 'Inquire', href: '#inquire' },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hamburger-nav">
      <button
        className={`hamburger-btn${open ? ' open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`dropdown-menu${open ? ' visible' : ''}`} role="menu">
        {NAV_ITEMS.map((item) => (
          <li key={item.label} role="menuitem">
            <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
