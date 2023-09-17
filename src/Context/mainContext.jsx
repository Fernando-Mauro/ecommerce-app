import { createContext, useEffect, useState } from "react";
import {useShoppingCart} from "../hooks/useShoppingCart";
import { useOrders } from "../hooks/useOrders";
import { useFetch } from "../hooks/useFetch";
export const MainContext = createContext()

export const MainContextProvider = ({ children }) => {
    const [url, setUrl] = useState("https://fakestoreapi.com/products?limit=30");
    
    const { data : products } = useFetch({ url });
    
    const [isOpenDetail, setIsOpenDetail] = useState(false);

    const [productDetail, setProductDetail] = useState({});

    const {cart, cartCounter, handlerAddNewElementCart, deleteProductFromCart, totalCartPrice, clearCart} = useShoppingCart()
    const {setIsOpenCheckout, isOpenCheckout, handlerSetLastOrder, lastOrder, orders } = useOrders();

    const handlerCheckOut = () => {
        const orderToAdd = {
            date: new Date().toLocaleDateString(),
            products: cart,
            totalProducts: cartCounter,
            totalPrice: totalCartPrice,
        };
        handlerSetLastOrder(orderToAdd);
        clearCart();
        setIsOpenCheckout(false);
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

    const [searchValue, setSearchValue] = useState("");

    const onInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const toLowerCase = searchValue.toLowerCase();

        setFilteredProducts(products?.filter(product => {
            const toLowerProduct = product.title.toLowerCase();

            return toLowerProduct.includes(toLowerCase)
        }));

    }, [searchValue, products]);

    return (
        <MainContext.Provider value={{
            cart,
            cartCounter,
            deleteProductFromCart,
            handlerAddNewElementCart,
            handlerCheckOut,
            handlerCloseCheckout,
            handlerIsOpenDetail,
            handlerOpenCheckout,
            handlerSetProductDetail,
            isOpenCheckout,
            isOpenDetail,
            lastOrder,
            orders,
            productDetail,
            products,
            totalCartPrice,
            onInputChange,
            searchValue,
            filteredProducts,
            setUrl
        }}>
            {
                children
            }
        </MainContext.Provider>
    )
}