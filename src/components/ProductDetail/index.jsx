import { XCircleIcon } from "@heroicons/react/24/outline";

export const ProductDetail = () => {
    return (
        <aside className="w-[360px] h-[calc(100vh-85px)] flex flex-col fixed bg-white right-1 border border-black rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl text-center">Detail</h2>
                <XCircleIcon className="h-7 w-7 text-black">

                </XCircleIcon>

            </div>
        </aside>
    )
}
