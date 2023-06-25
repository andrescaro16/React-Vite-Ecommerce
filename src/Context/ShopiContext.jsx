import { createContext, useContext, useState } from "react";

const Context = createContext();


export const ShopiContext = ({children}) => {

	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	}

	return (
		<Context.Provider value={{
			counter,
			setCounter,
			increment,
		}}>
			{children}
		</Context.Provider>
	);
}

export const useShopiContext = () => useContext(Context);