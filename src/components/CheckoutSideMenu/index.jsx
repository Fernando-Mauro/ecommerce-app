import { XCircleIcon } from "@heroicons/react/24/outline";
import { MainContext } from "../../Context/mainContext";
import { useContext } from "react";
import { OrderCart } from "../OrderCart";

export const CheckoutSideMenu = () => {
    const { handlerCloseCheckout, cart } = useContext(MainContext);
    return (
        <aside className="w-[360px] h-[calc(100vh-85px)] flex flex-col fixed bg-white right-1 border border-black rounded-lg overflow-y-scroll">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl text-center">Checkout Cart</h2>
                <XCircleIcon className="h-7 w-7 text-black cursor-pointer" onClick={() => handlerCloseCheckout()}>

                </XCircleIcon>
            </div>
            <div className="w-full px-6 py-4 flex flex-col gap-4">
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
        </aside>
    )
}