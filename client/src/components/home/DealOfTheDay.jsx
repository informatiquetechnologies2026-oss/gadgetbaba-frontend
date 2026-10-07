import { useEffect, useState } from "react";
import { deals } from "../../data/home";
import { useStore } from "../../context/StoreContext";
import { navigate } from "../../lib/navigate";
import { formatInr } from "../../utils/currency";
import Icon from "../ui/Icons";
import Stars from "../ui/Stars";
import Shot from "../ui/Shot";

const START = 12 * 3600 + 36 * 60 + 24;

function useCountdown(start) {
  const [left, setLeft] = useState(start);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLeft((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const hours = String(Math.floor(left / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const seconds = String(left % 60).padStart(2, "0");
  return [
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];
}

export default function DealOfTheDay() {
  const parts = useCountdown(START);
  const { query, wishlist, toggleWishlist, addToCart } = useStore();
  const needle = query.trim().toLowerCase();
  const visible = needle
    ? deals.filter((deal) => deal.name.toLowerCase().includes(needle))
    : deals;

  return (
    <section className="section" id="deals">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>
              <Icon name="bolt" className="icon icon--bolt" />
              Deal of the Day
            </h2>
            <p>Limited time. Unbeatable prices!</p>
          </div>
          <div className="timer" aria-label="Offer ends in">
            {parts.map((part) => (
              <div key={part.label}>
                <strong>{part.value}</strong>
                <span>{part.label}</span>
              </div>
            ))}
          </div>
          <a className="text-link" href="#deals">
            View All Deals <Icon name="arrow" />
          </a>
        </div>

        {visible.length === 0 ? (
          <p className="empty">No products found for “{query}”.</p>
        ) : (
          <div className="deal-grid">
            {visible.map((deal) => {
              const wished = wishlist.includes(deal.id);
              return (
                <article className="deal" key={deal.id}>
                  <span className="off">{deal.off}% OFF</span>
                  <button
                    className={`wish ${wished ? "is-on" : ""}`}
                    type="button"
                    aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
                    aria-pressed={wished}
                    onClick={() => toggleWishlist(deal.id)}
                  >
                    <Icon name="heart" />
                  </button>
                  <button className="deal__open" type="button" onClick={() => navigate(`/product/${deal.id}`)}>
                    <div className="deal__art">
                      <Shot src={deal.image} alt={deal.name} />
                    </div>
                    <h3>{deal.name}</h3>
                  </button>
                  <p className="rating">
                    <Stars value={deal.rating} />
                    <span>
                      {deal.rating} ({deal.reviews})
                    </span>
                  </p>
                  <p className="price">
                    <strong>{formatInr(deal.price)}</strong>
                    <s>{formatInr(deal.mrp)}</s>
                  </p>
                  <button className="btn btn--block" type="button" onClick={() => addToCart(deal)}>
                    Add to Cart
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
