import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cart } = useCart();
    const items = Object.values(cart);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );


    if (items.length === 0) {

        return <><div><h1>🛒 Your Cart</h1>
            <p>Cart is empty</p></div></>
    }

    return (
        <div className="cart">
            <h1>🛒 Your Cart</h1>

            <h2>Cart ({totalItems} items)</h2>

            {items.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}

            <div className="cart-total">
                <span>Total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default Cart;