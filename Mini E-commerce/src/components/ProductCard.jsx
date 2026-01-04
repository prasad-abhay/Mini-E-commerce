import { memo } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = memo(({ product }) => {
  const { dispatch } = useCart();

  const inStock = product.stock > 0;

  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <h3>{product.title}</h3>

      <p><strong>₹{product.price}</strong></p>

      <p>
        Stock:
        <span className={inStock ? "stock-in" : "stock-out"}>
          {" "}{inStock ? product.stock : "Out of stock"}
        </span>
      </p>

      <button
        disabled={!inStock}
        onClick={() => dispatch({ type: "ADD", product })}
      >
        Add to Cart
      </button>
    </div>
  );
});

export default ProductCard;