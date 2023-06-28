import { useShopiContext } from "../../Context/ShopiContext";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {

	const { order } = useShopiContext();
	console.log(order?.slice(-1)[0].cart);

	return(
		<div>
			<h1 className="text-3xl font-bold underline">MyOrder</h1>
			<div className="w-96 mt-7">
				{(
					order?.slice(-1)[0].cart.map((product) => (
						<OrderCard key={product.id} id={product.id} title={product.title} imageURL={product.images[0]} state="order" price={product.price} />
					))
				)}
			</div>
		</div>
	);
}

export default MyOrder;