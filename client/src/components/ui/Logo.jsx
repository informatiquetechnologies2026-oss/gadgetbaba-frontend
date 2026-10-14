import { useNavigate } from "react-router-dom";
import logo from "../../assets/gadgetbaba-logo.jpg";

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
      <img src={logo} alt="" />
    </a>
  );
}
