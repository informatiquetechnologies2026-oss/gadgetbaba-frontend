import { useId } from "react";

export default function Stars({ value }) {
  const uid = useId().replace(/:/g, "");
  const full = Math.floor(value);
  const half = value - full >= 0.3;

  return (
    <span className="stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const star = index + 1;
        const state = star <= full ? "is-full" : star === full + 1 && half ? "is-half" : "";
        return (
          <svg key={star} viewBox="0 0 20 20" className={state}>
            <defs>
              <linearGradient id={`${uid}-${star}`}>
                <stop offset="50%" stopColor="#FD751A" />
                <stop offset="50%" stopColor="#D9DDE3" />
              </linearGradient>
            </defs>
            <path
              d="m10 1.8 2.1 4.6 5 .6-3.7 3.4.9 5-4.3-2.4L5.7 15.4l.9-5L2.9 7l5-.6L10 1.8Z"
              fill={state === "is-half" ? `url(#${uid}-${star})` : "currentColor"}
            />
          </svg>
        );
      })}
    </span>
  );
}
