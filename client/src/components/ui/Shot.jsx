export default function Shot({ src, alt = "", className = "shot" }) {
  return <img className={className} src={src} alt={alt} referrerPolicy="no-referrer" />;
}
