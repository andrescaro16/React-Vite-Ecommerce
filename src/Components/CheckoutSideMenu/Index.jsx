import { XMarkIcon } from "@heroicons/react/24/outline";
import { useShopiContext } from "../../Context/ShopiContext";

const CheckoutSideMenu = () => {

	const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } = useShopiContext();

	return (
		<>
			<aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col w-[360px] h-[calc(100%-68px)] top-[69px] border border-black rounded-lg fixed right-0 bg-white p-6`}>
				<div className="flex justify-between items-center">
					<h2>Detail</h2>
					<button onClick={closeCheckoutSideMenu}>
						<XMarkIcon className="h-6 w-6 text-black" />
					</button>
				</div>
			</aside>
		</>
	);
};

export default CheckoutSideMenu;
