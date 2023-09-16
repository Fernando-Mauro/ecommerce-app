import { useEffect, useState } from "react";

export const useShoppingCart = () => {
    const [cartCounter, setCartCounter] = useState(0);
    const [cart, setCart] = useState([]);
    const [totalCartPrice, setTotalCartPrice] = useState(0);
    
    useEffect(() => {
        const suma = cart.reduce((sum, actual) => sum + actual.count, 0);
        const price = cart.reduce((suma, actual) => suma + (actual.price * actual.count), 0);
        setCartCounter(suma)
        setTotalCartPrice(price);
    }, [cart]);

    const handlerAddNewElementCart = (el) => {
        const duplicateEl = cart.find(element => el.id === element.id);
        if (duplicateEl === undefined) {
            setCart([...cart, el]);
        } else {
            setCart(cart.map(element => {
                if (element.id == el.id) {
                    element.count += 1;
                }
                return element;
            }));
        }
    }

    const deleteProductFromCart = (id) => {
        setCart(cart.filter(element => element.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    }
    return {
        setCart, 
        cart,
        cartCounter,
        handlerAddNewElementCart,
        deleteProductFromCart,
        totalCartPrice,
        clearCart
    }
}