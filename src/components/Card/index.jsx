
export const Card = () => {
    return (
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-4 w-full h-4/5">
                <span className="p-1 m-2 absolute text-xs text-black bg-white/60 rounded-lg bottom-0 left-0">
                    Elecronics
                </span>
                <button className="m-2 p-1 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full">
                    +
                </button>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1632312527375-bd5d5a0d3484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtZXBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Gamepad</span>
                <span className="text-lg font-bold">$300</span>
            </p>
        </div>
    )
}
