import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useShopiContext } from "../../Context/ShopiContext";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {

	const { orders } = useShopiContext();
	let id = window.location.pathname.split("/")[2];
	if(id === "last") id = orders.length - 1;


	return(
		<div className="flex flex-col justify-center">
			<div className="flex w-96 justify-center items-center relative my-8">
				<Link to="/my-orders">
					<button className="flex justify-center items-center">
						<ChevronLeftIcon className="h-6 w-6 text-black absolute left-0" />
					</button>
				</Link>
				<h1 className="text-xl font-bold">My order</h1>
			</div>
			<div className="w-96">
				{(
					orders?.[id].cart.map((product) => (
						<OrderCard key={product.id} id={product.id} title={product.title} imageURL={product.images[0]} state="order" price={product.price} numProduct={product.quantity} />
					))
				)}
			</div>
		</div>
	);
}

export default MyOrder;