import { XMarkIcon } from "@heroicons/react/24/outline";
import { useShopiContext } from "../../Context/ShopiContext";


const OrderCard = ({id, title, imageURL}) => {

    const { cart, addToCart, deleteProductFromCart } = useShopiContext();

    const getQuantity = () => {
        const product = cart.find(product => product.id === id);
        return product.quantity;
    }

    const addProductToCart = () => {
        const product = cart.find(product => product.id === id);
        addToCart(product);
    }

    const pricePerProduct = () => {
        const product = cart.find(product => product.id === id);
        return product.price * product.quantity;
    }


    return (
        <>
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <figure className="w-16 h-16">
                        <img src={imageURL} alt={title} className="w-full h-full rounded-lg object-cover" />
                    </figure>
                    <div className="flex flex-col items-start gap-1">
                        <p className="font-light text-sm">{title}</p>
                        <div className="flex justify-between items-center w-[80px]">
                            <button
                                className="flex justify-center items-center w-5 h-5 bg-red-200 rounded-md"
                                onClick={() => deleteProductFromCart(id, 1)}
                            >-</button>
                            <p>{getQuantity()}</p>
                            <button
                                className="flex justify-center items-center w-5 h-5 bg-green-200 rounded-md"
                                onClick={addProductToCart}
                            >+</button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="font-bold text-lg">${pricePerProduct()}</p>
                    <button onClick={() => deleteProductFromCart(id, -1)}>
                        <XMarkIcon className="h-6 w-6 text-black" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default OrderCard;