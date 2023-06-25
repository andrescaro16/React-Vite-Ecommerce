import { XMarkIcon } from "@heroicons/react/24/outline";

const ProductDetail = () => {
	return (
		<>
			<aside className="flex flex-col w-[360px] h-[calc(100%-68px)] top-[68px] border border-black rounded-lg fixed right-0 bg-white p-6">
				<div className="flex justify-between items-center">
					<h2>Detail</h2>
					<button>
						<XMarkIcon className="h-6 w-6 text-black" />
					</button>
				</div>
			</aside>
		</>
	);
};

export default ProductDetail;
