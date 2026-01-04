import { CartProvider } from "./context/CartContext";
import { useProducts } from "./hooks/useProducts";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <CartProvider>
      <div className="app">
        <h1 className="main-heading">Mini E-Commerce App</h1>
        <ProductList products={products} />
        <Cart />
      </div>
    </CartProvider>
  );
}