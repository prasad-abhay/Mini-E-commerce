import { memo } from "react";
import { useCart } from "../context/CartContext";

const CartItem = memo(({ item }) => {
  const { dispatch } = useCart();

  const handleQuantityChange = (e) => {
    let qty = Number(e.target.value);

    if (qty < 1) qty = 1;

    if (qty > item.stock) qty = item.stock;

    dispatch({
      type: "UPDATE",
      id: item.id,
      quantity: qty,
    });
  };

  return (
    <div className="cart-item">
      <div>
        <strong>{item.title}</strong>
        <p>₹{item.price}</p>
      </div>

      <input
        type="number"
        min="1"
        max={item.stock}
        value={item.quantity}
        onChange={handleQuantityChange}
      />

      <button onClick={() => dispatch({ type: "REMOVE", id: item.id })}>
        Remove
      </button>
    </div>
  );
});

export default CartItem;