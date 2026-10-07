import { useEffect } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./components/home/HomePage";
import CartPage from "./components/cart/CartPage";
import ProductPage from "./components/product/ProductPage";
import AuthModal from "./components/auth/AuthModal";

function ProductRoute() {
  const { productId = "" } = useParams();
  return <ProductPage key={productId} productId={productId} />;
}

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:productId" element={<ProductRoute />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <AuthModal />
    </>
  );
}
