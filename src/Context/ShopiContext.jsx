import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();


export const ShopiContext = ({children}) => {

	// ----------------------------------[Shopping Cart]-------------------------------------

	const [cart, setCart] = useState([]);
	const [productCounter, setProductCounter] = useState(0);

	const addToCart = (product) => {
		const productAdded = cart.some(item => item.id === product.id);
		if (!productAdded) {
			setCart([...cart, {
				...product,
				quantity: 1,
			}].sort((a, b) => a.title.localeCompare(b.title)));
		} else {
			const filteredProducts = cart.filter(item => item.id !== product.id);
			setCart([...filteredProducts, {
				...product,
				quantity: product.quantity + 1,
			}].sort((a, b) => a.title.localeCompare(b.title)));
		}
	}

	const deleteProductFromCart = (id, quantity) => {
		if(quantity === -1){
			const filteredProducts = cart.filter(product => product.id !== id);
			setCart(filteredProducts);
		} else {
			const filteredProducts = cart.filter(product => product.id !== id);
			const product = cart.find(product => product.id === id);
			if(product.quantity === 1) return setCart(filteredProducts);
			setCart([...filteredProducts, {
				...product,
				quantity: product.quantity - quantity,
			}].sort((a, b) => a.title.localeCompare(b.title)));
		}
	}

	useEffect(() => {
		const counter = cart.reduce((acc, product) => acc + product.quantity, 0);
		setProductCounter(counter);
	}, [cart]);

	
	// ----------------------------------[Product Detail]--------------------------------------

	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const [productToShow, setProductToShow] = useState({});

	const openProductDetail = () => {
		setIsProductDetailOpen(true);
		closeCheckoutSideMenu();
	}

	const closeProductDetail = () => setIsProductDetailOpen(false);


	// ---------------------------------[Checkout Side Menu]-----------------------------------

	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

	const openCheckoutSideMenu = () => {
		setIsCheckoutSideMenuOpen(true);
		closeProductDetail();
	}

	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);


	return (
		<Context.Provider value={{
			productCounter,
			isProductDetailOpen,
			openProductDetail,
			closeProductDetail,
			productToShow,
			setProductToShow,
			isCheckoutSideMenuOpen,
			openCheckoutSideMenu,
			closeCheckoutSideMenu,
			cart,
			addToCart,
			deleteProductFromCart,
		}}>
			{children}
		</Context.Provider>
	);
}

export const useShopiContext = () => useContext(Context);