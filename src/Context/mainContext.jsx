import { createContext } from "react";

const MainContext = createContext()

export const MainContextProvider = ({ children }) => {


    return (
        <MainContext.Provider>
            {
                children
            }
        </MainContext.Provider>
    )
}