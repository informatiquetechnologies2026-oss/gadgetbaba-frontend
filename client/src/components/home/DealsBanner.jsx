import { photos } from "../../data/photos";
import Icon from "../ui/Icons";
import Shot from "../ui/Shot";

export default function DealsBanner() {
  return (
    <section className="section">
      <div className="container">
        <div className="savings">
          <div>
            <h2>
              Top Deals
              <span>Big Savings</span>
            </h2>
            <p>Grab the best offers on your favourite gadgets.</p>
            <a className="btn" href="#deals">
              View All Deals
              <Icon name="arrow" />
            </a>
          </div>
          <div className="savings__art" aria-hidden="true">
            <Shot src={photos.headphones} alt="" />
            <Shot src={photos.iphoneSilver} alt="" />
            <Shot src={photos.camera} alt="" />
          </div>
          <div className="savings__badge">
            <small>UP TO</small>
            <strong>50%</strong>
            <span>OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
