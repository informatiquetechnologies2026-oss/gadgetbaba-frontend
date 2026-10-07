import { topLinks } from "../../data/home";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__row">
        <p>India's Trusted Electronics Marketplace</p>
        <div className="topbar__links">
          {topLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <span className="topbar__lang">
            EN
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
