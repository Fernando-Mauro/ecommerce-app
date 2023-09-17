import { XCircleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { MainContext } from "../../Context/mainContext";

export const OrderCart = ({
    image,
    title,
    price,
    count,
    id,
    flag = false, 
    date
}) => {
    const trimTitle = title.split(" ")[0];
    const { deleteProductFromCart } = useContext(MainContext);
    return (

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={image} alt={title} />
                </figure>
                <p className="font-light text-md"> {trimTitle} {count}<strong>u </strong></p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-bold flex flex-col gap-2">
                    <span>${price}</span>
                    <span className="font-light text-sm">{date}</span>
                </p>
                {
                    !flag &&
                    <button>
                        <XCircleIcon className="h-7 w-7 text-black cursor-pointer" onClick={() => {
                            deleteProductFromCart(id);
                        }}></XCircleIcon>
                    </button>
                }

            </div>
        </div>
    )
}
