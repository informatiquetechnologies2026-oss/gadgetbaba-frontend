import { navigate } from "../../lib/navigate";

export default function Logo({ tone = "dark" }) {
  return (
    <a
      className={`logo logo--${tone}`}
      href="/"
      aria-label="GadgetBaba home"
      onClick={(event) => {
        event.preventDefault();
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32">
          <rect x="8" y="6" width="16" height="20" rx="3.5" fill="none" stroke="#fff" strokeWidth="1.7" />
          <circle cx="16" cy="13.5" r="2.2" fill="#fff" />
          <path d="M12.5 21.5h7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="logo__word">
        GADGET<span>Baba</span>
      </span>
    </a>
  );
}
