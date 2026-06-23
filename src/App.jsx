import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState(null); // { message: string }

  function addToCart(productName) {
    setCartCount((prev) => prev + 1);
    setToast({ message: `${productName} added to cart!` });
    setTimeout(() => setToast(null), 3000);
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header cartCount={cartCount} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

          </Routes>
        </main>
        <Footer />
        {toast && <Toast message={toast.message} />}
      </div>
    </BrowserRouter>
  );
}
