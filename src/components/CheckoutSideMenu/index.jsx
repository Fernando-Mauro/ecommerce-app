import { XCircleIcon } from "@heroicons/react/24/outline";
import { MainContext } from "../../Context/mainContext";
import { useContext } from "react";
import { OrderCart } from "../OrderCart";
import { Link } from "react-router-dom";

export const CheckoutSideMenu = () => {
    const { handlerCloseCheckout, cart, totalCartPrice, handlerCheckOut } = useContext(MainContext);

    return (
        <aside className="w-[360px] h-[calc(100vh-85px)] flex flex-col fixed bg-white right-1 border border-black rounded-lg overflow-y-auto">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl text-center">Checkout Cart</h2>
                <XCircleIcon className="h-7 w-7 text-black cursor-pointer" onClick={() => handlerCloseCheckout()}>

                </XCircleIcon>
            </div>
            <div className="w-full px-6 py-4 flex flex-1 flex-col gap-4">
                {
                    cart.map(element => (
                        <OrderCart
                            key={element.id}
                            image={element.image}
                            title={element.title}
                            price={element.price}
                            count={element.count}
                            id={element.id}
                        />
                    ))
                }
            </div>
            <div className="px-6 mb-6 ">
                <p className="flex justify-between items-center">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-xl"> ${totalCartPrice} </span>
                </p>
                <Link to="/my-orders/last">
                    <button className="w-full py-3 mt-4 text-white rounded-full bg-green-500" onClick={() => handlerCheckOut()}> Checkout </button>
                </Link>
            </div>
        </aside>
    )
}