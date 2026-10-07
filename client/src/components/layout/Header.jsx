import { useEffect, useState } from "react";
import { categories, navLinks } from "../../data/home";
import { useStore } from "../../context/StoreContext";
import { navigate } from "../../lib/navigate";
import Logo from "../ui/Logo";
import Icon from "../ui/Icons";

function goSection(href) {
  if (window.location.pathname !== "/") navigate("/");
  window.setTimeout(() => {
    const node = href ? document.querySelector(href) : null;
    if (node) node.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, 40);
}

export default function Header() {
  const { query, setQuery, count, wishlist, openAuth, user } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);

  useEffect(() => {
    const close = () => setCatsOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  const onSearch = (event) => {
    event.preventDefault();
    goSection("#deals");
  };

  return (
    <header className="header" id="top">
      <div className="container header__main">
        <button
          className="icon-btn header__burger"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>

        <Logo />

        <form className="search" onSubmit={onSearch} role="search">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for mobiles, laptops, headphones, smart watches, cameras and more."
            aria-label="Search products"
          />
          <button className="search__btn" type="submit" aria-label="Search">
            <Icon name="search" />
          </button>
        </form>

        <div className="header__actions">
          <button className="header__login" type="button" onClick={() => openAuth("login")}>
            <Icon name="user" />
            <span>{user ? user.name : "Login / Sign Up"}</span>
          </button>

          <button className="header__wish" type="button" onClick={() => goSection("#deals")}>
            <span className="header__cart-icon">
              <Icon name="heart" />
              {wishlist.length ? <span className="count-badge">{wishlist.length}</span> : null}
            </span>
            <span>Wishlist</span>
          </button>

          <button className="header__cart" type="button" onClick={() => navigate("/cart")}>
            <span className="header__cart-icon">
              <Icon name="cart" />
              <span className="count-badge">{count}</span>
            </span>
            <span>Cart</span>
          </button>
        </div>
      </div>

      <nav className={`nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
        <div className="container nav__row">
          <div className="cats">
            <button
              className="cats__btn"
              type="button"
              aria-expanded={catsOpen}
              onClick={() => setCatsOpen((open) => !open)}
            >
              <Icon name="menu" />
              All Categories
            </button>
            {catsOpen ? (
              <ul className="cats__menu">
                {categories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        setCatsOpen(false);
                        goSection(`#${category.id}`);
                      }}
                    >
                      {category.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    setMenuOpen(false);
                    goSection(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
