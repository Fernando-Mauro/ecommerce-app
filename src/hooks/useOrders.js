import { useState } from "react";

export const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const [lastOrder, setLastOrder] = useState({});

    const [isOpenCheckout, setIsOpenCheckout] = useState(false);
    
    const handlerSetLastOrder = (newLastOrder) => {
        setLastOrder(newLastOrder);
        setOrders([...orders, newLastOrder]);
    };

    return {
        setIsOpenCheckout,
        isOpenCheckout,
        handlerSetLastOrder,
        lastOrder,
        orders
    }
};