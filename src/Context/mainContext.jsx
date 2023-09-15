import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [isOpenDetail, setIsOpenDetail] = useState(false);

    const [productDetail, setProductDetail] = useState({});

    const [cart, setCart] = useState([]);
    const [isOpenCheckout, setIsOpenCheckout] = useState(false);

    const handlerAddNewElementCart = (el) => {
        setCart([...cart, el]);
    }

    const handlerIsOpenCheckout = () => {
        setIsOpenCheckout(!isOpenCheckout);
        if(isOpenDetail) setIsOpenDetail(false);
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
    const handlerCartCounter = () => {
        setCartCounter(cartCounter + 1);
    }

    const handlerIsOpenDetail = () => {
        setIsOpenDetail(!isOpenDetail);
        if(isOpenCheckout) setIsOpenCheckout(false);
    }

    return (
        <MainContext.Provider value={{
            cartCounter,
            handlerCartCounter,
            handlerIsOpenDetail,
            isOpenDetail,
            handlerSetProductDetail,
            productDetail,
            handlerAddNewElementCart,
            handlerIsOpenCheckout,
            isOpenCheckout
        }}>
            {
                children
            }
        </MainContext.Provider>
    )
}