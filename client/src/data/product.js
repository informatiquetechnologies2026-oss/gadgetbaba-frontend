import { suggestions } from "./cart";
import { deals } from "./home";
import { photos } from "./photos";

const related = [
  suggestions.find((item) => item.id === "galaxy-s24"),
  {
    id: "pixel-8",
    name: "Google Pixel 8",
    price: 52999,
    mrp: 76999,
    off: 31,
    image: photos.pixel,
  },
  suggestions.find((item) => item.id === "oneplus-12"),
  suggestions.find((item) => item.id === "airpods-pro"),
  {
    id: "airdopes-141",
    name: "boAt Airdopes 141",
    price: 1399,
    mrp: 2999,
    off: 53,
    image: photos.airdopes,
  },
].filter(Boolean);

export const iphoneProduct = {
  id: "iphone-15",
  brand: "Apple",
  name: "Apple iPhone 15 (128GB)",
  tagline: "Dynamic Island. A16 Bionic. 48MP Main Camera. A Big Step Forward.",
  rating: 4.6,
  ratingsCount: "12,845",
  bought: "1,000+ bought in last month",
  rank: "#1 Best Seller in Smartphones",
  badge: "BESTSELLER",
  emi: "₹2,708/month",
  crumbs: [
    { label: "Home", href: "/" },
    { label: "Mobiles", href: "/#mobiles" },
    { label: "Smartphones", href: "/#mobiles" },
    { label: "Apple", href: "/product/iphone-15" },
  ],
  colors: [
    { id: "black", label: "Black", hex: "#2a2c2e", image: photos.iphoneDark },
    { id: "blue", label: "Blue", hex: "#d7e4ea", image: photos.iphoneBlue },
    { id: "green", label: "Green", hex: "#d7e3c8", image: photos.iphoneSilver },
    { id: "yellow", label: "Yellow", hex: "#f3ead0", image: photos.iphonePurple },
    { id: "pink", label: "Pink", hex: "#f6d5d0", image: photos.iphoneBlue },
  ],
  storage: [
    { id: "128", label: "128GB", price: 57999, mrp: 79900, off: 28 },
    { id: "256", label: "256GB", price: 67999, mrp: 89900 },
    { id: "512", label: "512GB", price: 87999, mrp: 109900 },
  ],
  thumbs: [
    photos.iphoneDark,
    photos.iphoneSilver,
    photos.iphoneBlue,
    photos.iphonePurple,
    photos.lifestyle,
    photos.camera,
  ],
  extraThumbs: 3,
  media: [
    { label: "Video (1:24)", image: photos.iphoneDark, video: true },
    { label: "Photos (6)", image: photos.iphoneSilver, video: false },
    { label: "360° View", image: photos.iphoneBlue, video: true },
    { label: "In Box", image: photos.iphonePurple, video: false },
    { label: "Official Video", image: photos.lifestyle, video: true },
  ],
  perks: [
    { icon: "return", title: "7 Days Replacement" },
    { icon: "seal", title: "1 Year Warranty" },
    { icon: "lock", title: "Secure Packaging" },
    { icon: "badge", title: "100% Original Product" },
  ],
  offers: [
    { icon: "tag", title: "Bank Offer", text: "Get up to ₹5,000 instant discount on HDFC Bank Cards" },
    { icon: "badge", title: "No Cost EMI", text: "Upto 12 months No Cost EMI on select cards" },
    { icon: "return", title: "Exchange Offer", text: "Up to ₹10,000 off on exchange of old phone" },
    { icon: "seal", title: "Partner Offer", text: "Get Apple AirPods at ₹9,999" },
  ],
  seller: {
    name: "Apple Official Store",
    score: "4.8",
    tag: "Official Brand Store",
    points: [
      { icon: "badge", text: "100% Original Products" },
      { icon: "mail", text: "GST Invoice Available" },
      { icon: "shield", text: "Brand Warranty" },
      { icon: "return", text: "7 Days Service Center Replacement" },
    ],
  },
  highlights: [
    { icon: "phone", title: "6.1-inch Super Retina XDR Display" },
    { icon: "chip", title: "A16 Bionic Chip", text: "Superfast. Super Efficient." },
    { icon: "camera", title: "48MP Main Camera with 2x Telephoto" },
    { icon: "camera", title: "12MP TrueDepth Front Camera" },
    { icon: "usb", title: "USB-C Fast Charging" },
    { icon: "lock", title: "iOS 17", text: "Smooth & Secure" },
  ],
  inBox: ["iPhone 15 Handset", "USB-C Charge Cable", "Documentation", "SIM Ejector Tool"],
  story: {
    kicker: "iPhone 15",
    title: "Newphoria",
    text: "A new era. A more dynamic you.",
    image: photos.iphonePurple,
  },
  details: {
    lead: "iPhone 15 comes with Dynamic Island, a 48MP Main camera and USB-C — all in a durable color-infused glass and aluminium design. It's a huge step forward.",
    points: [
      "6.1-inch Super Retina XDR display with Dynamic Island",
      "A16 Bionic chip for a lightning-fast experience",
      "48MP Main camera with 2x Telephoto",
      "USB-C connector for universal compatibility",
      "All-day battery life",
      "iOS 17 with powerful new features",
      "Ceramic Shield, tougher than any smartphone glass",
      "5G for superfast downloads and streaming",
    ],
    image: photos.iphoneBlue,
    caption: "Dynamic Island. A more magical way to experience iPhone.",
  },
  specs: [
    ["Display", "6.1-inch Super Retina XDR, Dynamic Island"],
    ["Chip", "A16 Bionic"],
    ["Camera", "48MP Main, 12MP Ultra Wide, 2x Telephoto"],
    ["Front camera", "12MP TrueDepth"],
    ["Battery", "All-day battery life, USB-C charging"],
    ["OS", "iOS 17"],
    ["Connectivity", "5G, Wi-Fi 6, Bluetooth 5.3"],
    ["SIM", "Dual eSIM"],
  ],
  questions: [
    { q: "Does iPhone 15 support eSIM?", a: "Yes. iPhone 15 uses dual eSIM. A physical SIM tray is not included." },
    { q: "Is a charger included in the box?", a: "The box includes a USB-C charge cable. The power adapter is sold separately." },
    { q: "Can I exchange my old phone?", a: "Yes. Exchange offers go up to ₹10,000 depending on the device you trade in." },
  ],
  ratingBars: [
    { star: 5, pct: 72 },
    { star: 4, pct: 18 },
    { star: 3, pct: 6 },
    { star: 2, pct: 2 },
    { star: 1, pct: 2 },
  ],
  reviews: [
    {
      id: "rohan",
      name: "Rohan Mehta",
      date: "15 Aug 2024",
      rating: 5,
      title: "Amazing phone, worth the upgrade!",
      text: "Camera quality is next level. Battery backup is also really good. Highly recommended.",
    },
    {
      id: "priya",
      name: "Priya Sharma",
      date: "10 Aug 2024",
      rating: 5,
      title: "Best iPhone so far",
      text: "Smooth performance, stunning display and great battery life. Delivery was also very fast.",
    },
  ],
  related,
};

const catalog = [...deals, ...suggestions, ...related];

export function getProduct(id) {
  if (!id || id === iphoneProduct.id) return iphoneProduct;
  const item = catalog.find((entry) => entry.id === id);
  if (!item) return null;
  return {
    ...iphoneProduct,
    id: item.id,
    brand: item.name.split(" ")[0],
    name: item.name,
    tagline: "Genuine product from a verified GadgetBaba seller.",
    rating: item.rating || 4.4,
    ratingsCount: item.reviews || "1,200",
    bought: "Popular on GadgetBaba",
    rank: "Top rated in this category",
    badge: item.off >= 30 ? "BESTSELLER" : "",
    emi: "No Cost EMI available",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Deals", href: "/#deals" },
      { label: item.name, href: `/product/${item.id}` },
    ],
    colors: [{ id: "default", label: "Default", hex: "#f3f4f6", image: item.image }],
    storage: [{ id: "std", label: "Standard", price: item.price, mrp: item.mrp }],
    thumbs: [item.image, photos.lifestyle, photos.seller].filter(Boolean),
    extraThumbs: 0,
    media: [
      { label: "Photos", image: item.image, video: false },
      { label: "In Box", image: photos.lifestyle, video: false },
    ],
    highlights: [
      { icon: "badge", title: "100% original product" },
      { icon: "truck", title: "Fast delivery across India" },
      { icon: "return", title: "7 days easy replacement" },
      { icon: "shield", title: "Secure packaging" },
    ],
    inBox: ["Product", "Documentation", "Charging accessory where applicable"],
    story: null,
    details: {
      lead: `${item.name} is sold by a verified seller on GadgetBaba with genuine stock, easy returns and secure payments.`,
      points: ["Verified seller", "GST invoice available", "Easy 7-day returns", "Secure checkout"],
      image: item.image,
      caption: item.name,
    },
    specs: [
      ["Price", `₹${item.price.toLocaleString("en-IN")}`],
      ["MRP", `₹${item.mrp.toLocaleString("en-IN")}`],
      ["Discount", `${item.off}% OFF`],
    ],
    questions: [
      { q: "Is this a genuine product?", a: "Yes. GadgetBaba sellers are verified and products are original." },
      { q: "What is the return window?", a: "You can request a return within 7 days of delivery." },
    ],
    related: related.filter((entry) => entry.id !== item.id),
  };
}
