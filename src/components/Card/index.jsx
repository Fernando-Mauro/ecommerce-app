import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MainContext } from '../../Context/mainContext';
import { PlusIcon } from "@heroicons/react/24/outline"
export const Card = ({ price, title, image, category, description }) => {

    const { handlerCartCounter, handlerIsOpenDetail, handlerSetProductDetail, handlerAddNewElementCart , handlerIsOpenCheckout} = useContext(MainContext);

    const onClickCard = () => {
        handlerSetProductDetail({
            price,
            title,
            image,
            category,
            description
        })
        handlerIsOpenDetail()
    }

    const onAddElementToCart = (event) => {
        event.stopPropagation();
        handlerCartCounter();
        handlerAddNewElementCart({
            price,
            title,
            image,
            category,
            description
        });
        handlerIsOpenCheckout();
    }

    return (
        <div className="bg-white cursor-pointer w-56 h-60 select-none" onClick={onClickCard}>
            <figure className="relative mb-4 w-full h-4/5">
                <span className="p-1 m-2 absolute text-xs text-black bg-white/60 rounded-lg bottom-0 left-0">
                    {category}
                </span>
                <PlusIcon className="m-2 p-1 absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full"
                    onClick={onAddElementToCart}
                >

                </PlusIcon>
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