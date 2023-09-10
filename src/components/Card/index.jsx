import PropTypes from 'prop-types'; 

export const Card = ({ price, title, image, category, description }) => {
    
    return (
        <div className="bg-white cursor-pointer w-56 h-60">
            <figure className="relative mb-4 w-full h-4/5">
                <span className="p-1 m-2 absolute text-xs text-black bg-white/60 rounded-lg bottom-0 left-0">
                    {category}
                </span>
                <button className="m-2 p-1 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full">
                    +
                </button>
                <img className="w-full h-full object-cover rounded-lg" src={image} alt={description} />
            </figure>
            <p className="flex justify-between">
                <span className="text-sm truncate font-light">
                    {
                        title
                    }
                </span>
                <span className="text-lg font-bold">${price}</span>
            </p>
        </div>
    )
}

Card.propTypes = {
    price: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,

}