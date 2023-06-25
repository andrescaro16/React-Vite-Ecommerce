import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail/Index";

function Home() {

	const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);


	return(
		<div>
			<div className="grid grid-cols-4 gap-5 w-full max-w-screen-lg">
				{products?.map((product) => (
					<Card key={product.id} product={product}/> 
				))}
			</div>
			<ProductDetail />
		</div>
	);
}

export default Home;