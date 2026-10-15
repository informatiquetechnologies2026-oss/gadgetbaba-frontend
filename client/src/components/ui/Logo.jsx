import { useNavigate } from "react-router-dom";
import logoDark from "../../assets/gadgetbaba-logo.png";
import logoLight from "../../assets/gadgetbaba-logo-light.png";

export default function Logo({ tone = "dark" }) {
  const navigate = useNavigate();
  return (
    <a
      className={`logo logo--${tone}`}
      href="/"
      aria-label="GadgetBaba home"
      onClick={(event) => {
        event.preventDefault();
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={tone === "light" ? logoLight : logoDark} alt="" />
    </a>
  );
}
