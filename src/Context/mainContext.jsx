import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0);

    const handlerCartCounter = () => {
        setCartCounter(cartCounter + 1);
    }
    return (
        <MainContext.Provider value={{
            cartCounter,
            handlerCartCounter
        }}>
            {
                children
            }
        </MainContext.Provider>
    )
}