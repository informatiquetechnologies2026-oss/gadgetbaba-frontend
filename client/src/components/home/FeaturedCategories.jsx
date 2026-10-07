import { featured } from "../../data/home";
import Icon from "../ui/Icons";
import Shot from "../ui/Shot";

export default function FeaturedCategories() {
  return (
    <section className="section featured" id="featured">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Featured Categories</h2>
            <p>Explore Our Most Popular Categories</p>
          </div>
          <a className="text-link" href="#top">
            View All Categories <Icon name="arrow" />
          </a>
        </div>
        <div className="featured__grid">
          {featured.map((item) => (
            <a className="feature" id={`featured-${item.id}`} key={item.id} href={`#${item.id}`}>
              <span className="feature__art">
                <Shot src={item.image} alt="" />
              </span>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
