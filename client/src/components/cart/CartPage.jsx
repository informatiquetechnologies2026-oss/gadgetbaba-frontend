import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartPerks, suggestions } from "../../data/cart";
import { useStore } from "../../context/StoreContext";
import { formatInr } from "../../utils/currency";
import Icon from "../ui/Icons";
import Shot from "../ui/Shot";

const DESIGN_SUBTOTAL = 65497;
const DESIGN_DISCOUNT = 14501;

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, count, wishlist, addToCart, removeFromCart, setQty, saveForLater, toggleWishlist, openAuth, user, notify } = useStore();
  const [coupon, setCoupon] = useState("");
  const [couponNote, setCouponNote] = useState("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = subtotal ? Math.round((subtotal * DESIGN_DISCOUNT) / DESIGN_SUBTOTAL) : 0;
  const total = Math.max(subtotal - discount, 0);

  const applyCoupon = (event) => {
    event.preventDefault();
    if (!coupon.trim()) {
      setCouponNote("Enter a coupon code.");
      return;
    }
    setCouponNote(`Coupon ${coupon.trim().toUpperCase()} applied.`);
    notify("Coupon applied");
  };

  const checkout = () => {
    if (!cart.length) return;
    if (!user) {
      openAuth("login");
      notify("Login to continue to checkout");
      return;
    }
    notify("Proceeding to checkout");
  };

  return (
    <main className="cart-page">
      <div className="container">
        <p className="crumbs">
          <button type="button" onClick={() => navigate("/")}>
            Home
          </button>
          <span>›</span>
          Cart
        </p>

        <div className="cart-head">
          <h1>
            My Cart <span>({count} items)</span>
          </h1>
          <button className="text-link" type="button" onClick={() => navigate("/")}>
            ‹ Continue Shopping
          </button>
        </div>

        <div className="cart-layout">
          <section className="cart-list">
            {cart.length === 0 ? (
              <p className="empty">Your cart is empty. Continue shopping to add gadgets.</p>
            ) : (
              cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item__photo">
                    <Shot src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item__info">
                    <h2>{item.name}</h2>
                    <p>{item.detail}</p>
                    <p className="stock">In Stock</p>
                    {item.badge ? <span className="best">{item.badge}</span> : null}
                    <div className="qty" aria-label={`Quantity for ${item.name}`}>
                      <button type="button" onClick={() => setQty(item.id, item.qty - 1)} aria-label="Decrease quantity">
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button type="button" onClick={() => setQty(item.id, item.qty + 1)} aria-label="Increase quantity">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item__price">
                    <strong>{formatInr(item.price)}</strong>
                    <s>{formatInr(item.mrp)}</s>
                    <em>{item.off}% OFF</em>
                    <div className="cart-item__links">
                      <button type="button" onClick={() => saveForLater(item.id)}>
                        Save for Later
                      </button>
                      <span>|</span>
                      <button type="button" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </section>

          <aside className="summary">
            <h2>Order Summary</h2>
            <dl>
              <div>
                <dt>Subtotal ({count} items)</dt>
                <dd>{formatInr(subtotal)}</dd>
              </div>
              <div>
                <dt>Discount</dt>
                <dd className="is-green">-{formatInr(discount)}</dd>
              </div>
              <div>
                <dt>Delivery Charge</dt>
                <dd className="is-green">FREE</dd>
              </div>
            </dl>
            <div className="summary__total">
              <div>
                <strong>Total Amount</strong>
                <small>Inclusive of all taxes</small>
              </div>
              <strong>{formatInr(total)}</strong>
            </div>
            <button className="btn btn--block" type="button" onClick={checkout} disabled={!cart.length}>
              Proceed to Checkout
              <Icon name="arrow" />
            </button>

            <form className="coupon" onSubmit={applyCoupon}>
              <p>
                <Icon name="tag" /> Have a Coupon Code?
              </p>
              <div>
                <input
                  value={coupon}
                  onChange={(event) => setCoupon(event.target.value)}
                  placeholder="Enter coupon code"
                  aria-label="Coupon code"
                />
                <button type="submit">Apply</button>
              </div>
              {couponNote ? <small>{couponNote}</small> : null}
            </form>

            <div className="safe-pay">
              <p>
                <Icon name="shield" /> 100% Safe & Secure Payments
              </p>
              <div className="pay-logos" aria-label="Visa, Mastercard, UPI, RuPay">
                <span>VISA</span>
                <span className="mc">MC</span>
                <span>UPI</span>
                <span>RuPay</span>
              </div>
              <small>Your payment information is always safe with us.</small>
            </div>
          </aside>
        </div>

        <section className="also">
          <div className="section-head">
            <h2>You May Also Like</h2>
            <button className="text-link" type="button" onClick={() => navigate("/")}>
              View All <Icon name="arrow" />
            </button>
          </div>
          <div className="also__grid">
            {suggestions.map((item) => (
              <article className="also-card" key={item.id}>
                <button
                  className={`wish ${wishlist.includes(item.id) ? "is-on" : ""}`}
                  type="button"
                  aria-label={wishlist.includes(item.id) ? "Remove from wishlist" : "Add to wishlist"}
                  onClick={() => toggleWishlist(item.id)}
                >
                  <Icon name="heart" />
                </button>
                <button className="also-card__open" type="button" onClick={() => navigate(`/product/${item.id}`)}>
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
                <button className="btn btn--block" type="button" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="perks" aria-label="Shopping benefits">
        <div className="container perks__grid">
          {cartPerks.map((perk) => (
            <article key={perk.title}>
              <Icon name={perk.icon} />
              <div>
                <h3>{perk.title}</h3>
                <p>{perk.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
