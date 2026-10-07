import { useEffect } from "react";
import TopBar from "./components/layout/TopBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/home/HomePage";
import CartPage from "./components/cart/CartPage";
import ProductPage from "./components/product/ProductPage";
import AuthModal from "./components/auth/AuthModal";
import { useRoute } from "./lib/navigate";

export default function App() {
  const path = useRoute();
  const productId = path.startsWith("/product/") ? decodeURIComponent(path.slice("/product/".length)) : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <TopBar />
      <Header />
      {path === "/cart" ? <CartPage /> : productId ? <ProductPage key={productId} productId={productId} /> : <HomePage />}
      <Footer />
      <AuthModal />
    </>
  );
}
