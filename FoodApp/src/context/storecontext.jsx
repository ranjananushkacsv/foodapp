import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";  // Ensure correct path

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0
        }));
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
