import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail/Index";
import { useShopiContext } from "../../Context/ShopiContext";

function Home() {

	const { products, searchByTitle, setSearchByTitle, filteredProducts } = useShopiContext();
	const { category } = useParams();
	const [searchByCategory, setSearchByCategory] = useState("");

	useEffect(() => {
		category ? setSearchByCategory(category) : setSearchByCategory("");
	}, [category]);

	Array.prototype.filterByCategory = function() {
		return this.filter(product => (product.category.name).toLowerCase().includes(searchByCategory.toLocaleLowerCase()));
	}

	const searchingProducts = (event) => {
		setSearchByTitle(event.target.value);
	}

	const renderView = () => {
		if(!searchByTitle) {
			if(products?.filterByCategory().length > 0) {
				return (
					products?.filterByCategory().map((product) => (
						<Card key={product.id} product={product}/> 
					))
				);
			} else {
				return (
					<div className="flex flex-col w-[450%] items-center justify-center gap-6 mb-16">
						<h1 className="text-xl font-bold">No products found</h1>
					</div>
				);
			}
		} else {
			if (filteredProducts.length > 0) {
				return (
					filteredProducts?.filterByCategory().map((product) => (
						<Card key={product.id} product={product}/> 
					))
				);
			} else {
				return (
					<div className="flex flex-col w-[450%] items-center justify-center gap-6 mb-16">
						<h1 className="text-xl font-bold">No products found</h1>
					</div>
				);
			}
		}
	}


	return(
		<div className="flex flex-col my-20 items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-6 mb-16">
				<h1 className="text-3xl font-bold">Welcome to Shopi</h1>
				<input
					type="text"
					placeholder="Search a product..."
					className="border border-black opacity-80 rounded-lg px-2 py-2 w-96 focus:outline-none select-none"
					value={searchByTitle}
					onChange={searchingProducts} />
			</div>
			<div className="grid grid-cols-4 gap-5 w-full max-w-screen-lg">
				{renderView()}
			</div>
			<ProductDetail />
		</div>
	);
}

export default Home;