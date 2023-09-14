import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [isOpenDetail, setIsOpenDetail] = useState(false);

    const [productDetail, setProductDetail] = useState({});

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
    }

    return (
        <MainContext.Provider value={{
            cartCounter,
            handlerCartCounter,
            handlerIsOpenDetail,
            isOpenDetail,
            handlerSetProductDetail,
            productDetail
        }}>
            {
                children
            }
        </MainContext.Provider>
    )
}