import { XMarkIcon } from "@heroicons/react/24/outline";
import OrderCard from "../OrderCard/index";
import { totalPrice } from "../../Utils";
import { useShopiContext } from "../../Context/ShopiContext";

const CheckoutSideMenu = () => {

	const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cart } = useShopiContext();

	return (
		<>
			<aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col w-[360px] h-[calc(100%-68px)] top-[69px] border border-black rounded-lg fixed right-0 bg-white p-6`}>
				<div className="flex justify-between items-center">
					<h2>My Order</h2>
					<button onClick={closeCheckoutSideMenu}>
						<XMarkIcon className="h-6 w-6 text-black" />
					</button>
				</div>
				<div className="mt-7">
					{isCheckoutSideMenuOpen ? (
						cart.map((product) => (
							<OrderCard key={product.id} id={product.id} title={product.title} imageURL={product.images[0]} />
						))
					) : null}
				</div>
				<div className="absolute bottom-10 w-[312px]">
					<p className="flex justify-between items-center w-full">
						<span className="font-normal text-lg">Total:</span>
						<span className="font-medium text-lg">${totalPrice(cart)}</span>
					</p>
				</div>
			</aside>
		</>
	);
};

export default CheckoutSideMenu;
