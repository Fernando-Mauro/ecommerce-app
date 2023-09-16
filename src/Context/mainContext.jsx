import { createContext, useState } from "react";
import {useShoppingCart} from "../hooks/useShoppingCart";
export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
    const [isOpenDetail, setIsOpenDetail] = useState(false);

    const [productDetail, setProductDetail] = useState({});

    const [isOpenCheckout, setIsOpenCheckout] = useState(false);

    const {cart, cartCounter, handlerAddNewElementCart, deleteProductFromCart, totalCartPrice, clearCart} = useShoppingCart()
    const [order, setOrder] = useState([]); 

    const handlerCheckOut = () => {
        const orderToAdd = {
            date: new Date(),
            products: cart,
            totalProducts: cartCounter, 
            totalPrice: totalCartPrice,
        };
        setOrder([...order, orderToAdd]);
        clearCart();
    };

    const handlerOpenCheckout = () => {
        setIsOpenCheckout(true);
        if (isOpenDetail) setIsOpenDetail(false);
    }
    const handlerCloseCheckout = () => {
        setIsOpenCheckout(false);
    }

    const handlerSetProductDetail = ({
        price,
        title,
        image,
        category,
        description
    }) => {
        setProductDetail({
            price,
            title,
            image,
            category,
            description
        })
    };


    const handlerIsOpenDetail = () => {
        setIsOpenDetail(!isOpenDetail);
        if (isOpenCheckout) setIsOpenCheckout(false);
    }

    return (
        <MainContext.Provider value={{
            cartCounter,
            handlerIsOpenDetail,
            isOpenDetail,
            handlerSetProductDetail,
            productDetail,
            handlerAddNewElementCart,
            handlerOpenCheckout,
            isOpenCheckout,
            cart,
            handlerCloseCheckout,
            deleteProductFromCart,
            totalCartPrice,
            handlerCheckOut
        }}>
            {
                children
            }
        </MainContext.Provider>
    )
}