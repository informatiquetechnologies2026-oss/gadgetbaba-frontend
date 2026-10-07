import { promos } from "../../data/home";
import { photos } from "../../data/photos";
import Icon from "../ui/Icons";
import Shot from "../ui/Shot";

function PromoArt({ art }) {
  if (art === "phones") {
    return (
      <div className="promo-art promo-art--phones">
        <Shot src={photos.iphonePurple} alt="" />
        <Shot src={photos.iphoneSilver} alt="" />
        <Shot src={photos.iphoneBlue} alt="" />
      </div>
    );
  }
  if (art === "laptop") {
    return (
      <div className="promo-art promo-art--laptop">
        <Shot src={photos.laptop} alt="" />
      </div>
    );
  }
  if (art === "audio") {
    return (
      <div className="promo-art promo-art--audio">
        <Shot src={photos.buds} alt="" />
        <Shot src={photos.headphones} alt="" />
      </div>
    );
  }
  if (art === "watches") {
    return (
      <div className="promo-art promo-art--watches">
        <Shot src={photos.watch} alt="" />
        <Shot src={photos.watchGold} alt="" />
      </div>
    );
  }
  return (
    <div className="promo-art promo-art--gaming">
      <Shot src={photos.gamepad} alt="" />
    </div>
  );
}

function PromoCard({ promo, className = "" }) {
  return (
    <article className={`promo promo--${promo.tone} ${className}`}>
      <div className="promo__copy">
        <h2>{promo.title}</h2>
        <p>{promo.text}</p>
        <a className={promo.tone === "dark" ? (promo.id === "gaming" ? "btn btn--light" : "btn") : "btn btn--dark"} href={promo.href}>
          {promo.cta}
          <Icon name="arrow" />
        </a>
      </div>
      <PromoArt art={promo.art} />
    </article>
  );
}

export default function PromoGrid() {
  return (
    <section className="section">
      <div className="container promo-grid">
        <div className="promo-grid__top">
          {promos.top.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
        <div className="promo-grid__bottom">
          {promos.bottom.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </div>
    </section>
  );
}
