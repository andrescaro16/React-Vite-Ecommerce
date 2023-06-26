import { createContext, useContext, useState } from "react";

const Context = createContext();


export const ShopiContext = ({children}) => {

	// Shopping Cart · Add products to cart
	const [cart, setCart] = useState([]);
	// Shopping Cart · Product counter
	const [productCounter, setProductCounter] = useState(0);
	const incrementProductCounter = () => {
		setProductCounter(productCounter + 1);
	}
	
	// Product Detail · Open or Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => {
		setIsProductDetailOpen(true);
		closeCheckoutSideMenu();
	}
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Product Detail · Product to show
	const [productToShow, setProductToShow] = useState({});

	// Checkout Side Menu · Open or Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckoutSideMenu = () => {
		setIsCheckoutSideMenuOpen(true);
		closeProductDetail();
	}
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);


	return (
		<Context.Provider value={{
			productCounter,
			incrementProductCounter,
			isProductDetailOpen,
			openProductDetail,
			closeProductDetail,
			productToShow,
			setProductToShow,
			isCheckoutSideMenuOpen,
			openCheckoutSideMenu,
			closeCheckoutSideMenu,
			cart,
			setCart,
		}}>
			{children}
		</Context.Provider>
	);
}

export const useShopiContext = () => useContext(Context);