import { Link } from "react-router-dom";
import { useShopiContext } from "../../Context/ShopiContext";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {

	const { orders } = useShopiContext();


	return(
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-xl font-bold my-8">My orders</h1>
			<div className="w-96">
				{(
					orders?.map((order) => (
						<Link key={order.id} to={`/my-order/${order.id}`}>
							<OrdersCard orderDate={order.date} totalPrice={order.totalPrice} numProducts={order.cart.length} />
						</Link>
					))
				)}
			</div>
		</div>
	);
}

export default MyOrders;