import { categories } from "../../data/home";
import Shot from "../ui/Shot";

export default function CategoryRail() {
  return (
    <section className="section rail-wrap" aria-label="Shop by category">
      <div className="container rail">
        {categories.map((category) => (
          <a key={category.id} id={category.id} className="rail__item" href={`#featured-${category.id}`}>
            <span className="rail__icon">
              <Shot src={category.image} alt="" />
            </span>
            <span>{category.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
