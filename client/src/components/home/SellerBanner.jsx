import { photos } from "../../data/photos";
import Icon from "../ui/Icons";
import Shot from "../ui/Shot";

export default function SellerBanner() {
  return (
    <section className="section" id="sell">
      <div className="container">
        <div className="seller">
          <div className="seller__art">
            <Shot src={photos.seller} alt="Seller holding a delivery box" />
          </div>

          <div className="seller__copy">
            <h2>Start Selling on GadgetBaba</h2>
            <p>
              Join thousands of sellers and grow your business with India's trusted electronics marketplace.
            </p>
            <ul>
              <li><Icon name="check" /> Easy Onboarding</li>
              <li><Icon name="check" /> Low Commission</li>
              <li><Icon name="check" /> Dedicated Support</li>
            </ul>
            <a className="btn" href="#sell">
              Become a Seller
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
