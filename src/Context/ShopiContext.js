import { createContext, useContext } from "react";

const Context = createContext();

export const ShopiContext = () => {
	return (
		<Context.Provider value={{}}>
			{children}
		</Context.Provider>
	);
}

export const useShopiContext = () => useContext(Context);