import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import OrderCard from "../OrderCard/index";
import { totalPrice } from "../../Utils/functions";
import { useShopiContext } from "../../Context/ShopiContext";

const CheckoutSideMenu = () => {

	const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cart, emptyCart, orders, setOrders } = useShopiContext();

	const onCheckout = () => {
		const newOrder = {
			id: orders.length,
			cart,
			totalPrice: totalPrice(cart),
			date: new Date().toLocaleDateString(),
		}
		setOrders([...orders, newOrder]);
		emptyCart();
		closeCheckoutSideMenu();
	}

	return (
		<>
			<aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col w-[360px] h-[calc(100%-68px)] top-[69px] border border-black rounded-lg fixed right-0 bg-white p-6`}>
				<div className="flex justify-between items-center">
					<h2>My Order</h2>
					<button onClick={closeCheckoutSideMenu}>
						<XMarkIcon className="h-6 w-6 text-black" />
					</button>
				</div>
				<div className="mt-7 flex-auto overflow-y-scroll no-scrollbar">
					{isCheckoutSideMenuOpen ? (
						cart.map((product) => (
							<OrderCard key={product.id} id={product.id} title={product.title} imageURL={product.images[0]} state="checkoutSideMenu" />
						))
					) : null}
				</div>
				<div className="bottom-10 w-[312px]">
					<p className="flex justify-between items-center w-full my-2">
						<span className="font-normal text-lg">Total:</span>
						<span className="font-medium text-lg">${totalPrice(cart)}</span>
					</p>
					<Link to="/my-order/last">
						<button onClick={onCheckout} className="w-full h-10 p-1 bg-black text-white rounded-lg">Checkout</button>
					</Link>
				</div>
			</aside>
		</>
	);
};

export default CheckoutSideMenu;
