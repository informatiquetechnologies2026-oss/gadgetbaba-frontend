import { createContext, useContext, useMemo, useState } from "react";
import { initialCart } from "../data/cart";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(initialCart);
  const [wishlist, setWishlist] = useState([]);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");
  const [user, setUser] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => setToast(""), 1800);
  };

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...current, { ...product, qty: 1 }];
    });
    notify(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
    notify("Removed from cart");
  };

  const setQty = (id, qty) => {
    setCart((current) =>
      current.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item))
    );
  };

  const saveForLater = (id) => {
    setWishlist((current) => (current.includes(id) ? current : [...current, id]));
    setCart((current) => current.filter((item) => item.id !== id));
    notify("Saved for later");
  };

  const openAuth = (mode = "login") => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const closeAuth = () => setAuthOpen(false);

  const login = (nextUser) => {
    setUser(nextUser);
    setAuthOpen(false);
    notify(`Welcome, ${nextUser.name}`);
  };

  const logout = () => {
    setUser(null);
    notify("Logged out");
  };

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      query,
      setQuery,
      toast,
      count,
      total,
      addToCart,
      removeFromCart,
      setQty,
      saveForLater,
      toggleWishlist,
      notify,
      user,
      authOpen,
      authMode,
      setAuthMode,
      openAuth,
      closeAuth,
      login,
      logout,
    }),
    [cart, wishlist, query, toast, count, total, user, authOpen, authMode]
  );

  return (
    <StoreContext.Provider value={value}>
      {children}
      {toast ? <div className="toast">{toast}</div> : null}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
}
