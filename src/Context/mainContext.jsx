import { createContext, useState } from "react";
import {useShoppingCart} from "../hooks/useShoppingCart";
export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
    const [isOpenDetail, setIsOpenDetail] = useState(false);

    const [productDetail, setProductDetail] = useState({});

    const [isOpenCheckout, setIsOpenCheckout] = useState(false);

    const {cart, cartCounter, handlerAddNewElementCart, deleteProductFromCart, totalCartPrice} = useShoppingCart()
    

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
            totalCartPrice
        }}>
            {
                children
            }
        </MainContext.Provider>
    )
}