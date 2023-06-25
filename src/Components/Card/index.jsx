import { useShopiContext } from "../../Context/ShopiContext";

const Card = ({product}) => {

	const { increment } = useShopiContext();

	return (
		<div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
			<figure className="relative mb-3 w-full h-4/5">
				<span className="absolute bottom-1 left-1 bg-white/60 rounded-lg text-xs text-black px-3 py-0.5">{product.category.name}</span>
				<img src={product.images[0]} alt={product.title} className="w-full h-full object-cover rounded-lg" />
				<button className="absolute top-1 right-1 w-5 h-5 flex justify-center items-center bg-white rounded-full font-medium" onClick={increment}>+</button>
			</figure>
			<p className="flex justify-between items-center">
				<span className="text-sm font-light">{product.title}</span>
				<span  className="text-base font-medium">${product.price}</span>
			</p>
		</div>
	);
}

export default Card;