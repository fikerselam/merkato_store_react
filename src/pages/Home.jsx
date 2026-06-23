import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const featured = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    description: "High-quality sound with 20-hour battery life.",
    price: 45.0,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Cotton Summer Dress",
    category: "Clothing",
    description: "Lightweight and breathable fabric, perfect for warm climates.",
    price: 28.0,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Ethiopian Organic Coffee",
    category: "Food & Beverage",
    description: "Premium single-origin coffee from the highlands of Ethiopia.",
    price: 12.0,
    image: "/images/product3.jpg",
  },
];

export default function Home({ addToCart }) {
  return (
    <div>
      {/* Hero */}
      <section
        className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-[60px] text-white"
        style={{ background: "linear-gradient(135deg, #1f3864 0%, #2e4a80 100%)" }}
      >
        <div className="flex-1">
          <h2 className="text-white text-[40px] font-bold mb-4 leading-tight">
            Shop the Best Products
          </h2>
          <p className="text-[#ccddff] text-lg mb-8">
            Discover thousands of products delivered across Africa and the Middle East.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#1f3864] border-2 border-[#e8b84b] hover:bg-[#e8b84b] hover:text-[#1f3864] text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex-1">
          <img src="/images/banner.jpg" alt="Merkato Store Banner" className="w-full rounded-lg" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-8 py-8 bg-[#f5f7fa]">
        <h2 className="text-center text-[24px] font-bold text-[#1f3864] mb-8">Featured Products</h2>
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-4 justify-center">
          {featured.map((p) => (
            <div key={p.id} className="flex-[1_1_280px] max-w-[320px]">
              <ProductCard product={p} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </section>

      {/* Promo Video */}
      <section className="py-12 px-8">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-[24px] font-bold text-[#1f3864] mb-4">See What Merkato Store Offers</h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kuhf-5wyUyc"
              title="Merkato Store Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-8 px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[24px] font-bold text-[#1f3864] mb-6">About Merkato Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[20px] font-bold text-[#1f3864] mb-3">Why Shop With Us?</h3>
              <ul className="list-disc list-inside space-y-2 text-[#555]">
                <li>Wide variety of authentic local and international products</li>
                <li>Secure and fast delivery across 15+ countries</li>
                <li>24/7 customer support in English, Arabic, and Amharic</li>
                <li>Easy returns and buyer protection guarantee</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-[#1f3864] mb-3">How to Order</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#555]">
                <li>Browse products and click <strong>View Product</strong></li>
                <li>Click <strong>Add to Cart</strong> on the product page</li>
                <li>Review your cart and click <strong>Checkout</strong></li>
                <li>Enter delivery details and confirm your order</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
