import { useMemo, useState } from "react";
import { getProduct } from "../../data/product";
import { useStore } from "../../context/StoreContext";
import { navigate } from "../../lib/navigate";
import { formatInr } from "../../utils/currency";
import Icon from "../ui/Icons";
import Shot from "../ui/Shot";
import Stars from "../ui/Stars";

function go(href) {
  if (href.startsWith("/#")) {
    navigate("/");
    const id = href.slice(2);
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 40);
    return;
  }
  navigate(href);
  window.scrollTo(0, 0);
}

export default function ProductPage({ productId }) {
  const product = useMemo(() => getProduct(productId), [productId]);
  const { wishlist, toggleWishlist, addToCart, notify } = useStore();
  const [colorId, setColorId] = useState(product?.colors[0]?.id);
  const [storageId, setStorageId] = useState(product?.storage[0]?.id);
  const [shot, setShot] = useState(0);
  const [tab, setTab] = useState("details");
  const [more, setMore] = useState(false);
  const [emiOpen, setEmiOpen] = useState(false);
  const [offerNote, setOfferNote] = useState("");
  const [reviewOpen, setReviewOpen] = useState(false);
  const [extraReviews, setExtraReviews] = useState([]);
  const [draft, setDraft] = useState({ name: "", title: "", text: "" });
  const [relatedStart, setRelatedStart] = useState(0);

  if (!product) {
    return (
      <main className="product">
        <div className="container empty">
          <p>This product is not listed.</p>
          <button className="btn" type="button" onClick={() => navigate("/")}>
            Back to home
          </button>
        </div>
      </main>
    );
  }

  const color = product.colors.find((item) => item.id === colorId) || product.colors[0];
  const storage = product.storage.find((item) => item.id === storageId) || product.storage[0];
  const gallery = color?.image ? [color.image, ...product.thumbs.filter((src) => src !== color.image)] : product.thumbs;
  const mainImage = gallery[shot] || gallery[0];
  const off = storage.off ?? Math.round((1 - storage.price / storage.mrp) * 100);
  const wished = wishlist.includes(product.id);
  const title =
    product.id === "iphone-15" ? `Apple iPhone 15 (${storage.label}) - ${color.label}` : product.name;
  const visiblePoints = more ? product.details.points : product.details.points.slice(0, 5);
  const reviews = [...extraReviews, ...product.reviews];
  const related = product.related.slice(relatedStart, relatedStart + 5);

  const line = {
    id: product.id === "iphone-15" && !(color.id === "black" && storage.id === "128")
      ? `${product.id}-${color.id}-${storage.id}`
      : product.id,
    name: title,
    detail: product.colors.length > 1 ? `${color.label} | ${storage.label}` : color.label,
    price: storage.price,
    mrp: storage.mrp,
    off,
    image: color.image || mainImage,
    badge: product.badge,
  };

  const add = () => addToCart(line);
  const buy = () => {
    addToCart(line);
    navigate("/cart");
  };

  const submitReview = (event) => {
    event.preventDefault();
    if (!draft.name.trim() || !draft.title.trim() || !draft.text.trim()) {
      notify("Add your name, title and review");
      return;
    }
    setExtraReviews((current) => [
      {
        id: `local-${Date.now()}`,
        name: draft.name.trim(),
        date: "Today",
        rating: 5,
        title: draft.title.trim(),
        text: draft.text.trim(),
      },
      ...current,
    ]);
    setDraft({ name: "", title: "", text: "" });
    setReviewOpen(false);
    notify("Review submitted");
  };

  return (
    <main className="product">
      <div className="container">
        <p className="crumbs">
          {product.crumbs.map((crumb) => (
            <span key={crumb.label}>
              <button type="button" onClick={() => go(crumb.href)}>
                {crumb.label}
              </button>
              <span>›</span>
            </span>
          ))}
          <span>{title}</span>
        </p>

        <section className="pdp">
          <div className="pdp__gallery">
            <div className="pdp__thumbs">
              {gallery.slice(0, 6).map((src, index) => (
                <button
                  className={shot === index ? "is-on" : ""}
                  type="button"
                  key={`${src}-${index}`}
                  onClick={() => setShot(index)}
                  aria-label={`Show image ${index + 1}`}
                >
                  <Shot src={src} alt="" />
                </button>
              ))}
              {product.extraThumbs ? <span className="pdp__more">+{product.extraThumbs} more</span> : null}
            </div>
            <div className="pdp__stage">
              {product.badge ? <span className="best">{product.badge}</span> : null}
              <button
                className="pdp__nav"
                type="button"
                aria-label="Previous image"
                onClick={() => setShot((index) => (index === 0 ? gallery.length - 1 : index - 1))}
              >
                <Icon name="arrow" className="icon flip" />
              </button>
              <Shot src={mainImage} alt={title} />
              <button
                className="pdp__nav pdp__nav--next"
                type="button"
                aria-label="Next image"
                onClick={() => setShot((index) => (index + 1) % gallery.length)}
              >
                <Icon name="arrow" />
              </button>
            </div>
          </div>

          <div className="pdp__info">
            <p className="pdp__brand">{product.brand}</p>
            <div className="pdp__title">
              <h1>{title}</h1>
              <button
                className={`wish ${wished ? "is-on" : ""}`}
                type="button"
                aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
                onClick={() => toggleWishlist(product.id)}
              >
                <Icon name="heart" />
              </button>
            </div>
            <p className="pdp__tag">{product.tagline}</p>
            <p className="pdp__rate">
              <Stars value={product.rating} />
              <strong>{product.rating}</strong>
              <span>({product.ratingsCount} ratings)</span>
              <span>· {product.bought}</span>
            </p>
            <p className="pdp__rank">
              <Icon name="trophy" /> {product.rank}
            </p>
            <p className="pdp__price">
              <strong>{formatInr(storage.price)}</strong>
              <s>{formatInr(storage.mrp)}</s>
              <em>{off}% OFF</em>
            </p>
            <p className="pdp__tax">Inclusive of all taxes</p>
            <p className="pdp__emi">
              {String(product.emi).startsWith("₹") ? `${product.emi} No Cost EMI available. ` : `${product.emi}. `}
              <button type="button" onClick={() => setEmiOpen((open) => !open)}>
                Details
              </button>
            </p>
            {emiOpen ? (
              <p className="pdp__note">No Cost EMI is available for up to 12 months on select credit cards. T&C apply.</p>
            ) : null}

            <p className="pdp__label">
              Color: <strong>{color.label}</strong>
            </p>
            <div className="swatches">
              {product.colors.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === color.id ? "is-on" : ""}
                  onClick={() => {
                    setColorId(item.id);
                    setShot(0);
                  }}
                >
                  <span style={{ background: item.hex }} />
                  {item.label}
                </button>
              ))}
            </div>

            <p className="pdp__label">
              Storage: <strong>{storage.label}</strong>
            </p>
            <div className="sizes">
              {product.storage.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={item.id === storage.id ? "is-on" : ""}
                  onClick={() => setStorageId(item.id)}
                >
                  <strong>{item.label}</strong>
                  <span>{formatInr(item.price)}</span>
                </button>
              ))}
            </div>

            <div className="pdp__buy">
              <button className="btn btn--ghost btn--block" type="button" onClick={add}>
                <Icon name="cart" /> Add to Cart
              </button>
              <button className="btn btn--block" type="button" onClick={buy}>
                <Icon name="bolt" /> Buy Now
              </button>
            </div>
          </div>
        </section>

        <div className="pdp__media">
          {product.media.map((item) => (
            <button key={item.label} type="button" onClick={() => notify(item.label)}>
              <Shot src={item.image} alt="" />
              {item.video ? (
                <span className="pdp__play">
                  <Icon name="play" />
                </span>
              ) : null}
              <small>{item.label}</small>
            </button>
          ))}
        </div>

        <ul className="pdp__perks">
          {product.perks.map((perk) => (
            <li key={perk.title}>
              <Icon name={perk.icon} />
              {perk.title}
            </li>
          ))}
        </ul>

        <section className="panel">
          <h2>Available Offers</h2>
          <div className="offers">
            {product.offers.map((offer) => (
              <article key={offer.title}>
                <h3>
                  <Icon name={offer.icon} /> {offer.title}
                </h3>
                <p>{offer.text}</p>
                <button type="button" onClick={() => setOfferNote(`${offer.title}: terms apply on eligible cards and devices.`)}>
                  T&C Apply
                </button>
              </article>
            ))}
          </div>
          {offerNote ? <p className="pdp__note">{offerNote}</p> : null}
        </section>

        <section className="panel seller">
          <h2>Seller Information</h2>
          <div className="seller__row">
            <div className="seller__brand">
              <span>A</span>
              <div>
                <strong>{product.seller.name}</strong>
                <small>
                  <Stars value={4.8} /> {product.seller.score} · {product.seller.tag}
                </small>
              </div>
            </div>
            <ul>
              {product.seller.points.map((point) => (
                <li key={point.text}>
                  <Icon name={point.icon} />
                  {point.text}
                </li>
              ))}
            </ul>
            <div className="seller__actions">
              <button className="btn btn--ghost" type="button" onClick={() => notify(product.seller.name)}>
                View Seller
              </button>
              <button className="btn btn--line" type="button" onClick={() => notify("Seller contact request sent")}>
                Contact Seller
              </button>
            </div>
          </div>
        </section>

        <section className="pdp__mid">
          <article className="panel">
            <h2>Key Highlights</h2>
            <ul className="highlights">
              {product.highlights.map((item) => (
                <li key={item.title}>
                  <Icon name={item.icon} />
                  <div>
                    <strong>{item.title}</strong>
                    {item.text ? <small>{item.text}</small> : null}
                  </div>
                </li>
              ))}
            </ul>
          </article>
          <article className="panel">
            <h2>What's in the Box</h2>
            <ul className="box-list">
              {product.inBox.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          {product.story ? (
            <article className="story">
              <div>
                <p>{product.story.kicker}</p>
                <h2>{product.story.title}</h2>
                <p>{product.story.text}</p>
                <button type="button" onClick={() => setTab("details")}>
                  Learn More <Icon name="arrow" />
                </button>
              </div>
              <Shot src={product.story.image} alt={product.story.title} />
            </article>
          ) : null}
        </section>

        <div className="tabs" role="tablist">
          {[
            ["details", "Product Details"],
            ["specs", "Specifications"],
            ["reviews", `Reviews (${product.ratingsCount})`],
            ["qa", "Questions & Answers (320)"],
          ].map(([id, label]) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} className={tab === id ? "is-on" : ""} onClick={() => setTab(id)}>
              {label}
            </button>
          ))}
        </div>

        {tab === "details" ? (
          <section className="details">
            <div>
              <p>{product.details.lead}</p>
              <ul>
                {visiblePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {product.details.points.length > 5 ? (
                <button type="button" onClick={() => setMore((open) => !open)}>
                  {more ? "Show Less" : "Show More"} <Icon name="chevron" />
                </button>
              ) : null}
            </div>
            <figure>
              <Shot src={product.details.image} alt="" />
              <figcaption>{product.details.caption}</figcaption>
            </figure>
          </section>
        ) : null}

        {tab === "specs" ? (
          <section className="specs">
            {product.specs.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </section>
        ) : null}

        {tab === "qa" ? (
          <section className="qa">
            {product.questions.map((item) => (
              <article key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </section>
        ) : null}

        <section className="reviews" id="product-reviews">
          <div className="reviews__head">
            <h2>Customer Reviews</h2>
            <button className="btn btn--ghost" type="button" onClick={() => setReviewOpen((open) => !open)}>
              Write a Review
            </button>
          </div>
          {reviewOpen ? (
            <form className="review-form" onSubmit={submitReview}>
              <input
                value={draft.name}
                onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))}
                placeholder="Your name"
                aria-label="Your name"
              />
              <input
                value={draft.title}
                onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))}
                placeholder="Review title"
                aria-label="Review title"
              />
              <textarea
                value={draft.text}
                onChange={(event) => setDraft((current) => ({ ...current, text: event.target.value }))}
                placeholder="Share your experience"
                aria-label="Review"
              />
              <button className="btn" type="submit">
                Submit Review
              </button>
            </form>
          ) : null}
          <div className="reviews__grid">
            <div className="reviews__score">
              <strong>
                {product.rating} <small>out of 5</small>
              </strong>
              <Stars value={product.rating} />
              <span>{product.ratingsCount} global ratings</span>
              <ul>
                {product.ratingBars.map((bar) => (
                  <li key={bar.star}>
                    <span>{bar.star} ★</span>
                    <i>
                      <b style={{ width: `${bar.pct}%` }} />
                    </i>
                    <span>{bar.pct}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reviews__list">
              {reviews.map((review) => (
                <article key={review.id}>
                  <header>
                    <span>{review.name.slice(0, 1)}</span>
                    <div>
                      <strong>{review.name}</strong>
                      <small>Verified Purchase</small>
                    </div>
                    <time>{review.date}</time>
                  </header>
                  <Stars value={review.rating} />
                  <h3>{review.title}</h3>
                  <p>{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="also">
          <div className="section-head">
            <h2>You May Also Like</h2>
            <div className="also__arrows">
              <button
                type="button"
                aria-label="Previous products"
                onClick={() => setRelatedStart((index) => Math.max(0, index - 1))}
              >
                <Icon name="arrow" className="icon flip" />
              </button>
              <button
                type="button"
                aria-label="Next products"
                onClick={() => setRelatedStart((index) => Math.min(product.related.length - 1, index + 1))}
              >
                <Icon name="arrow" />
              </button>
            </div>
          </div>
          <div className="also__grid also__grid--five">
            {related.map((item) => (
              <article className="also-card" key={item.id}>
                <button
                  className={`wish ${wishlist.includes(item.id) ? "is-on" : ""}`}
                  type="button"
                  aria-label="Save"
                  onClick={() => toggleWishlist(item.id)}
                >
                  <Icon name="heart" />
                </button>
                <button className="also-card__open" type="button" onClick={() => go(`/product/${item.id}`)}>
                  <div className="also-card__photo">
                    <Shot src={item.image} alt={item.name} />
                  </div>
                  <h3>{item.name}</h3>
                </button>
                <p className="price">
                  <strong>{formatInr(item.price)}</strong>
                  <s>{formatInr(item.mrp)}</s>
                </p>
                <span className="also-card__off">{item.off}% OFF</span>
                <button className="btn btn--block" type="button" onClick={() => addToCart({ ...item, qty: 1 })}>
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
