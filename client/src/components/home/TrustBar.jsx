import { reasons } from "../../data/home";
import Icon from "../ui/Icons";

export default function TrustBar() {
  return (
    <section className="section trust" aria-label="Why shop with GadgetBaba">
      <div className="container trust__grid">
        {reasons.map((reason) => (
          <article key={reason.title}>
            <span>
              <Icon name={reason.icon} />
            </span>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
