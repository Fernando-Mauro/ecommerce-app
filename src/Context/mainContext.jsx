import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    
    const handlerCartCounter = () => {
        setCartCounter(cartCounter + 1);
    }

    const handlerIsOpenDetail = () => {
        console.log("click  ")
        setIsOpenDetail(!isOpenDetail);
    }

    return (
        <MainContext.Provider value={{
            cartCounter,
            handlerCartCounter,
            handlerIsOpenDetail,
            isOpenDetail
        }}>
            {
                children
            }
        </MainContext.Provider>
    )
}