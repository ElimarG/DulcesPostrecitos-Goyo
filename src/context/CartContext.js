import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (cart.some((el) => el.id === item.id)) {
            const newCart = [...cart];
            newCart.forEach((el) => {
                if (el.id === item.id) {
                    el.quantity = el.quantity + quantity;
                }
            });
            
            setCart([...newCart]);
        }
        else {
            let product = { ...item, quantity };
            setCart([...cart, product]);
        }
    };

    const removeItem = (id) => {
        const newCart = [...cart];
        let index = newCart.findIndex((el) => el.id === id);
        newCart.splice(index, 1);
        setCart([...newCart]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, clearCart,}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;