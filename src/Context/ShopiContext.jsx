import { createContext, useContext, useState } from "react";

const Context = createContext();


export const ShopiContext = ({children}) => {

	// Shopping Cart · Product counter
	const [productCounter, setProductCounter] = useState(0);
	const incrementProductCounter = () => {
		setProductCounter(productCounter + 1);
	}
	
	// Product Detail · Open or Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen);

	// Product Detail · Product to show
	const [productToShow, setProductToShow] = useState({});


	return (
		<Context.Provider value={{
			productCounter,
			incrementProductCounter,
			isProductDetailOpen,
			toggleProductDetail,
			productToShow,
			setProductToShow,
		}}>
			{children}
		</Context.Provider>
	);
}

export const useShopiContext = () => useContext(Context);