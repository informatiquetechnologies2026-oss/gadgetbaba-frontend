import { footerColumns } from "../../data/home";
import Logo from "../ui/Logo";

const socials = [
  { label: "Facebook", path: "M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13V9c0-.6.4-1 1-1Z" },
  { label: "Instagram", path: "M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm8.2 2.2h-1.2V8h1.2V6.2ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" },
  { label: "YouTube", path: "M5 8.5c4.5-1 9.5-1 14 0 .8.2 1.4 1 1.5 1.8.3 1.6.3 3.3 0 4.9-.1.8-.7 1.6-1.5 1.8-4.5 1-9.5 1-14 0-.8-.2-1.4-1-1.5-1.8-.3-1.6-.3-3.3 0-4.9.1-.8.7-1.6 1.5-1.8ZM11 10.2v3.6l3.2-1.8-3.2-1.8Z" },
  { label: "LinkedIn", path: "M7 9H4v11h3V9ZM5.5 4A1.8 1.8 0 1 0 5.5 7.6 1.8 1.8 0 0 0 5.5 4ZM20 13.2c0-2.4-1.3-4-3.6-4-1.2 0-2.2.6-2.6 1.5h-.1V9H11v11h3v-5.6c0-1.5.7-2.4 1.9-2.4 1.1 0 1.8.8 1.8 2.4V20h3v-6.8Z" },
  { label: "X", path: "M6 5h3.2l3.1 4.4L16.2 5H20l-5.4 6.7L20.4 19h-3.2l-3.5-4.9L9 19H5.2l5.8-7.2L6 5Z" },
];

export default function Footer() {
  return (
    <footer className="footer" id="track-order">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo tone="light" />
          <p className="footer__tag">Gadgets for a Smarter Tomorrow</p>
          <p>
            GadgetBaba is India's trusted multi-vendor platform for electronics and gadgets. We bring
            you the latest tech from top brands at the best prices.
          </p>
          <div className="socials">
            {socials.map((item) => (
              <a key={item.label} href="#top" aria-label={item.label}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={item.path} fill="currentColor" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#top">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__apps" id="help">
          <h3>Download Our App</h3>
          <p>Get the best shopping experience on the go.</p>
          <a className="store-badge" href="#top">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M4 4.8c0-.9 1-1.5 1.8-1L19.2 11c.8.5.8 1.6 0 2.1L5.8 20.3c-.8.5-1.8-.1-1.8-1V4.8Z" />
            </svg>
            <span>
              <small>GET IT ON</small>
              Google Play
            </span>
          </a>
          <a className="store-badge" href="#top">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.6.8-3.3.8s-1.7-.8-2.9-.7c-1.5 0-2.8.9-3.6 2.2-1.5 2.7-.4 6.6 1.1 8.8.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7 1.9-1.1 2.6-2.1c.8-1.2 1.2-2.3 1.2-2.4-.1 0-2.2-.9-2.2-3.7ZM14.6 6.8c.6-.7 1-1.7.9-2.8-1 .1-2.1.7-2.7 1.5-.6.7-1.1 1.7-.9 2.7 1 .1 2.1-.5 2.7-1.4Z" />
            </svg>
            <span>
              <small>Download on the</small>
              App Store
            </span>
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2024 GadgetBaba. All rights reserved.</p>
        <p>
          Made with <span aria-label="love">❤</span> in India
        </p>
      </div>
    </footer>
  );
}
