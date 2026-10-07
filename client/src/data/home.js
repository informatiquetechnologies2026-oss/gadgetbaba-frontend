import { photos } from "./photos";

export const topLinks = [
  { label: "Track Order", href: "#track-order" },
  { label: "Become a Seller", href: "#sell" },
  { label: "Help Center", href: "#help" },
];

export const navLinks = [
  { label: "Mobiles", href: "#mobiles" },
  { label: "Laptops", href: "#laptops" },
  { label: "Audio", href: "#audio" },
  { label: "Smart Watches", href: "#smart-watches" },
  { label: "Tablets", href: "#tablets" },
  { label: "TV & Appliances", href: "#tv" },
  { label: "Cameras", href: "#cameras" },
  { label: "Gaming", href: "#gaming" },
  { label: "Accessories", href: "#accessories" },
  { label: "Home & Lifestyle", href: "#home-lifestyle" },
  { label: "Deals", href: "#deals" },
];

export const categories = [
  { id: "mobiles", label: "Mobiles", image: photos.iphoneDark },
  { id: "laptops", label: "Laptops", image: photos.laptop },
  { id: "tablets", label: "Tablets", image: photos.tablet },
  { id: "audio", label: "Audio", image: photos.headphones },
  { id: "smart-watches", label: "Smart Watches", image: photos.watch },
  { id: "tv", label: "TV & Appliances", image: photos.tv },
  { id: "cameras", label: "Cameras", image: photos.camera },
  { id: "gaming", label: "Gaming", image: photos.gamepad },
  { id: "accessories", label: "Accessories", image: photos.cables },
  { id: "home-lifestyle", label: "Home & Lifestyle", image: photos.lifestyle },
];

export const heroSlides = [
  {
    id: "destination",
    eyebrow: "Tech for a better tomorrow",
    title: ["Everything", "Gadgets.", "One Destination."],
    accentLine: 1,
    subtitle: "Latest Technology | Best Prices | Trusted Sellers",
    cta: "Shop Now",
    href: "#deals",
  },
  {
    id: "deals",
    eyebrow: "This week on GadgetBaba",
    title: ["Top Deals.", "Big Savings.", "Up to 50% Off."],
    accentLine: 1,
    subtitle: "Grab the best offers on your favourite gadgets.",
    cta: "View All Deals",
    href: "#deals",
  },
  {
    id: "phones",
    eyebrow: "New arrivals",
    title: ["Latest", "Smartphones.", "Upgrade Today."],
    accentLine: 1,
    subtitle: "Top Brands | Best Deals | Trusted Sellers",
    cta: "Shop Mobiles",
    href: "#mobiles",
  },
];

export const heroTrust = [
  { label: "100% Genuine Products", icon: "shield" },
  { label: "Easy Returns", icon: "return" },
  { label: "Secure Payments", icon: "lock" },
  { label: "Fast Delivery", icon: "truck" },
];

export const promos = {
  top: [
    {
      id: "phones",
      href: "#mobiles",
      tone: "cream",
      title: "Latest Smartphones",
      text: "Top Brands. Best Deals. Upgrade Today.",
      cta: "Shop Mobiles",
      art: "phones",
    },
    {
      id: "laptops",
      href: "#laptops",
      tone: "dark",
      title: "Powerful Laptops for Every Need",
      text: "Work | Study | Play | Create",
      cta: "Shop Laptops",
      art: "laptop",
    },
  ],
  bottom: [
    {
      id: "audio",
      href: "#audio",
      tone: "light",
      title: "Audio",
      text: "Feel the Real Sound",
      cta: "Shop Audio",
      art: "audio",
    },
    {
      id: "watches",
      href: "#smart-watches",
      tone: "sand",
      title: "Smart Watches",
      text: "Track More. Do More.",
      cta: "Shop Now",
      art: "watches",
    },
    {
      id: "gaming",
      href: "#gaming",
      tone: "dark",
      title: "Gaming Zone",
      text: "Level Up Your Game",
      cta: "Shop Gaming",
      art: "gaming",
    },
  ],
};

export const deals = [
  {
    id: "iphone-15",
    name: "Apple iPhone 15 (128GB)",
    rating: 4.6,
    reviews: "2k",
    price: 57999,
    mrp: 79900,
    off: 28,
    image: photos.iphoneDark,
  },
  {
    id: "galaxy-s24",
    name: "Samsung Galaxy S24",
    rating: 4.5,
    reviews: "9k",
    price: 50999,
    mrp: 74999,
    off: 33,
    image: photos.samsung,
  },
  {
    id: "sony-wh",
    name: "Sony WH-CH520",
    rating: 4.4,
    reviews: "4k",
    price: 2999,
    mrp: 4999,
    off: 40,
    image: photos.headphones,
  },
  {
    id: "boat-wave",
    name: "boAt Wave Call Plus",
    rating: 4.3,
    reviews: "6k",
    price: 4499,
    mrp: 6999,
    off: 35,
    image: photos.watch,
  },
  {
    id: "realme-buds",
    name: "realme Buds T300",
    rating: 4.0,
    reviews: "8k",
    price: 3249,
    mrp: 4499,
    off: 28,
    image: photos.buds,
  },
];

export const featured = [
  { id: "mobiles", title: "Mobiles", text: "Latest Smartphones", image: photos.iphoneSilver },
  { id: "laptops", title: "Laptops", text: "Work, Study & Gaming", image: photos.laptop },
  { id: "tablets", title: "Tablets", text: "Learn, Play & Create", image: photos.tablet },
  { id: "audio", title: "Audio", text: "Headphones & Speakers", image: photos.headphones },
  { id: "tv", title: "TV & Appliances", text: "Smart Living", image: photos.tv },
  { id: "cameras", title: "Cameras", text: "Capture Every Moment", image: photos.camera },
  { id: "gaming", title: "Gaming", text: "Consoles & Accessories", image: photos.gamepad },
  { id: "accessories", title: "Accessories", text: "Cables, Chargers & More", image: photos.cables },
  { id: "smart-home", title: "Smart Home", text: "Smarter Living", image: photos.smartHome },
  { id: "home-lifestyle", title: "Home & Lifestyle", text: "Everyday Essentials", image: photos.lifestyle },
];

export const reasons = [
  { title: "Wide Range", text: "1000+ Products", icon: "trophy" },
  { title: "Best Prices", text: "Unbeatable Deals", icon: "tag" },
  { title: "Trusted Sellers", text: "Verified Vendors", icon: "badge" },
  { title: "Genuine Products", text: "Original & Certified", icon: "seal" },
  { title: "Fast Delivery", text: "Across India", icon: "truck" },
  { title: "Easy Returns", text: "Hassle Free", icon: "return" },
];

export const footerColumns = [
  {
    title: "Shop",
    links: [
      "Mobiles",
      "Laptops",
      "Tablets",
      "Audio",
      "TV & Appliances",
      "Cameras",
      "Gaming",
      "Accessories",
      "Home & Lifestyle",
      "Deals",
    ],
  },
  {
    title: "Customer Service",
    links: [
      "Help Center",
      "Track Order",
      "Return & Refund",
      "Shipping Policy",
      "Terms & Conditions",
      "Privacy Policy",
      "Contact Us",
      "FAQs",
    ],
  },
  {
    title: "For Sellers",
    links: [
      "Become a Seller",
      "Seller Login",
      "Seller Guide",
      "Commission & Fees",
      "Seller Support",
    ],
  },
];
