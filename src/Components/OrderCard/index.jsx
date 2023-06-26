import { XMarkIcon } from "@heroicons/react/24/outline";
import { useShopiContext } from "../../Context/ShopiContext";


const OrderCard = ({id, title, price, imageURL}) => {

    const { cart, setCart } = useShopiContext();

    const onDelete = () => {
        const filteredProducts = cart.filter(product => product.id !== id);
        setCart(filteredProducts);
    }


    return (
        <>
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <figure className="w-20 h-20">
                        <img src={imageURL} alt={title} className="w-full h-full rounded-lg object-cover" />
                    </figure>
                    <p className="font-light text-sm">{title}</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="font-bold text-lg">${price}</p>
                    <button onClick={onDelete}>
                        <XMarkIcon className="h-6 w-6 text-black" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default OrderCard;