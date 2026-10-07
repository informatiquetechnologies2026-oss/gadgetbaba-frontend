import { photos } from "./photos";

export const initialCart = [
  {
    id: "iphone-15",
    name: "Apple iPhone 15 (128GB)",
    detail: "Black | 128GB",
    price: 57999,
    mrp: 79900,
    off: 28,
    qty: 1,
    badge: "BESTSELLER",
    image: photos.iphoneDark,
  },
  {
    id: "sony-wh",
    name: "Sony WH-CH520 Wireless Headphones",
    detail: "Black",
    price: 2999,
    mrp: 4499,
    off: 33,
    qty: 1,
    image: photos.headphones,
  },
  {
    id: "boat-wave",
    name: "boAt Wave Call Plus Smartwatch",
    detail: "Active Black",
    price: 4499,
    mrp: 6999,
    off: 35,
    qty: 1,
    image: photos.watch,
  },
];

export const suggestions = [
  {
    id: "galaxy-s24",
    name: "Samsung Galaxy S24",
    price: 50999,
    mrp: 74999,
    off: 32,
    image: photos.samsung,
  },
  {
    id: "airpods-pro",
    name: "Apple AirPods Pro (2nd Gen)",
    price: 22999,
    mrp: 26900,
    off: 15,
    image: photos.buds,
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    price: 54999,
    mrp: 69999,
    off: 21,
    image: photos.iphoneBlue,
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3",
    price: 89999,
    mrp: 114999,
    off: 22,
    image: photos.laptop,
  },
];

export const cartPerks = [
  { icon: "truck", title: "Free Shipping", text: "On all prepaid orders" },
  { icon: "return", title: "Easy Returns", text: "7 days return policy" },
  { icon: "shield", title: "Secure Payments", text: "100% safe & secure" },
  { icon: "badge", title: "24/7 Support", text: "We're here to help" },
];
