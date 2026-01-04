import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const existing = state[action.product.id];
            const newQty = existing ? existing.quantity + 1 : 1;

            
            if (newQty > action.product.stock) return state;

            return {
                ...state,
                [action.product.id]: {
                    ...action.product,
                    quantity: newQty,
                },
            };

        case "REMOVE":
            const newState = { ...state };
            delete newState[action.id];
            return newState;

        case "UPDATE":
            return {
                ...state,
                [action.id]: { ...state[action.id], quantity: action.quantity }
            };

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, {});

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);