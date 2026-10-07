const paths = {
  shield: "M12 3 5 6v6c0 4.2 2.8 7.4 7 8.8 4.2-1.4 7-4.6 7-8.8V6l-7-3Z",
  return: "M4 8h10a5 5 0 1 1 0 10H9M4 8l3-3M4 8l3 3",
  lock: "M8 11V8a4 4 0 0 1 8 0v3M7 11h10v9H7v-9Z",
  truck: "M3 7h11v8H3V7Zm11 3h4l3 3v2h-7v-5ZM7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  trophy: "M8 4h8v5a4 4 0 0 1-8 0V4ZM6 5H4v2a3 3 0 0 0 3 3M18 5h2v2a3 3 0 0 1-3 3M10 14h4v2h-4v-2Zm-2 4h8v2H8v-2Z",
  tag: "M4 12 12 4h7v7l-8 8L4 12Zm10.5-4.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z",
  badge: "M12 3 14.5 5.2 17.8 5l1 3.2 2.8 1.8-1.6 2.9.2 3.4-3.2 1.2L15 20.5 12 19l-3 1.5-2-3-3.2-1.2.2-3.4L2.4 10 5.2 8.2l1-3.2L9.5 5.2 12 3Z",
  seal: "M12 3.5 14 8l4.8.4-3.6 3.2 1.1 4.6L12 14.2 7.7 16.2 8.8 11.6 5.2 8.4 10 8l2-4.5Z",
  search: "M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm5-2 4 4",
  user: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0",
  cart: "M6 7h15l-1.5 8h-12L6 7Zm0 0L5 4H2M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  heart: "M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  check: "M5 12.5 9.2 17 19 7",
  arrow: "M5 12h14M13 6l6 6-6 6",
  chevron: "M6 9l6 6 6-6",
  mail: "M4 6h16v12H4V6Zm0 0 8 7 8-7",
  eye: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  "eye-off": "M3 4 20 21M9.5 9.8A3 3 0 0 0 12 15a3 3 0 0 0 2.2-.9M6.1 6.7C3.7 8.3 2 12 2 12s3.5 6 10 6c1.6 0 3-.4 4.3-1M10.2 6.1A10 10 0 0 1 12 6c6.5 0 10 6 10 6a16 16 0 0 1-2.2 2.9",
  play: "M8 5.5v13l11-6.5-11-6.5Z",
  phone: "M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm4 15.2h.01",
  camera: "M4 8h3l1.5-2h7L17 8h3v10H4V8Zm8 8a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z",
  chip: "M8 8h8v8H8V8ZM9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3",
  usb: "M12 3v10M8 7l4-4 4 4M8 21h8v-6H8v6Z",
};

export default function Icon({ name, className = "icon" }) {
  const path = paths[name];
  if (!path) return null;
  const filled = name === "heart" || name === "bolt" || name === "shield" || name === "play";
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={path}
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
