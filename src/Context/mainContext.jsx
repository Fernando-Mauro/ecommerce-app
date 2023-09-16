import { createContext, useState } from "react";

export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [isOpenDetail, setIsOpenDetail] = useState(false);

    const [productDetail, setProductDetail] = useState({});

    const [cart, setCart] = useState([]);
    const [isOpenCheckout, setIsOpenCheckout] = useState(false);

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

    const handlerOpenCheckout = () => {
        setIsOpenCheckout(true);
        if (isOpenDetail) setIsOpenDetail(false);
    }
    const handlerCloseCheckout = () => {
        setIsOpenCheckout(false);
    }

    const deleteProductFromCart = (id) => {
        setCart(cart.filter(element => element.id !== id));
    };

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
        let newCount = 0;
        cart.forEach(el => {
            newCount += el.count;
        });
        console.log(newCount, cart);
        setCartCounter(newCount);
    }

    const handlerIsOpenDetail = () => {
        setIsOpenDetail(!isOpenDetail);
        if (isOpenCheckout) setIsOpenCheckout(false);
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
            handlerOpenCheckout,
            isOpenCheckout,
            cart,
            handlerCloseCheckout,
            deleteProductFromCart
        }}>
            {
                children
            }
        </MainContext.Provider>
    )
}