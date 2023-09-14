import { XCircleIcon } from "@heroicons/react/24/outline";
import { MainContext } from "../../Context/mainContext";
import { useContext } from "react";

export const ProductDetail = () => {
    const { handlerIsOpenDetail, productDetail } = useContext(MainContext);
    const {
        price,
        title,
        image,
        description
    } = productDetail;
    return (
        <aside className="w-[360px] h-[calc(100vh-85px)] flex flex-col fixed bg-white right-1 border border-black rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl text-center">Detail</h2>
                <XCircleIcon className="h-7 w-7 text-black cursor-pointer" onClick={() => handlerIsOpenDetail()}>

                </XCircleIcon>
            </div>
            <figure className="flex items-center justify-items-center flex-col">
                <img className="w-4/5" src={image} alt={description.trim(" ")[0]} />
            </figure>
            <p className="flex flex-col p-6 gap-4">
                <span className="font-medium text-2xl">${price}</span>
                <span className="font-medium text-md">{title}</span>
                <span className="font-light text-sm">{description}</span>
            </p>
        </aside>
    )
}
