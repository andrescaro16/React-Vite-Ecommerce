import { XMarkIcon } from "@heroicons/react/24/outline";
import { useShopiContext } from "../../Context/ShopiContext";

const ProductDetail = () => {

	const { isProductDetailOpen, closeProductDetail, productToShow } = useShopiContext();

	return (
		<>
			<aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col w-[360px] h-[calc(100%-68px)] top-[69px] border border-black rounded-lg fixed right-0 bg-white p-6`}>
				<div className="flex justify-between items-center">
					<h2>Detail</h2>
					<button onClick={closeProductDetail}>
						<XMarkIcon className="h-6 w-6 text-black" />
					</button>
				</div>
				{isProductDetailOpen ? (
					<>
						<figure className="flex items-center">
							<img src={productToShow.images[0]} alt={productToShow.title} className="rounded-lg w-full h-[80%] object-cover" />
						</figure>
						<p className="flex flex-col gap-2 text-justify">
							<span className="font-bold text-lg">${productToShow.price}</span>
							<span className="font-medium text-md">{productToShow.title}</span>
							<span className="font-light text-sm">{productToShow.description}</span>
						</p>
					</>
				) : null}
			</aside>
		</>
	);
};

export default ProductDetail;
