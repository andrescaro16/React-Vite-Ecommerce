import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail/Index";
import { useShopiContext } from "../../Context/ShopiContext";

function Home() {

	const { products, searchByTitle, setSearchByTitle, filteredProducts } = useShopiContext();

	const searchingProducts = (event) => {
		setSearchByTitle(event.target.value);
	}

	const renderView = () => {
		if(!searchByTitle) {
			return (
				products?.map((product) => (
					<Card key={product.id} product={product}/> 
				))
			);
		} else {
			if (filteredProducts.length > 0) {
				return (
					filteredProducts?.map((product) => (
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