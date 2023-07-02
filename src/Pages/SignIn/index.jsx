import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useShopiContext } from '../../Context/ShopiContext';


const SignIn = () => {

	const { saveSignOut, account, saveAccount } = useShopiContext();
	const [view, setView] = useState("sign-in");
	const [hasAccount, setHasAccount] = useState(false);

	useEffect(() => {
		(account.name && account.email && account.password) ? setHasAccount(true) : setHasAccount(false);
	}, [account]);

	const signOutHandler = () => {
		saveSignOut(false);
	}

	const signInView = () => {
		return(
			<>
			<h1 className="text-3xl font-bold mb-8">Shopi Login</h1>
			<p className="flex w-full gap-1 justify-start">
				<span>Email:</span>
				<span className="font-medium">{account?.email}</span>
			</p>
			<p className="flex w-full gap-1 justify-start mb-8">
				<span>Password:</span>
				<span className="font-medium">{account?.password}</span>
			</p>
			<p className="underline underline-offset-4 mb-3 cursor-pointer select-none">
				Forgot my password
			</p>
			<Link
				to="/"
				className="flex flex-col w-full">
				<button
					className="border border-black bg-black text-white rounded-lg p-2 mb-3 disabled:bg-black/40 disabled:border-transparent hover:enabled:bg-white hover:enabled:text-black"
					disabled={!hasAccount}
					onClick={signOutHandler}>
					Log in
				</button>
			</Link>
			<button
				className="flex flex-col w-full justify-center items-center border border-black p-2 rounded-lg disabled:bg-black/40 disabled:border-transparent disabled:text-white hover:enabled:bg-black hover:enabled:text-white"
				disabled={hasAccount}
				onClick={() => setView("sign-up")}>
				Sign up
			</button>
			</>
		);
	}

	const signUpView = () => {
		return(
			<>
			<h1 className="text-3xl font-bold mb-8">Shopi Sign Up</h1>
			</>
		);
	}

	const renderView = () => {
		return(view === "sign-in" ? signInView()
			 : view === "sign-up" ? signUpView() : null);
	}


	return(
		<div className="flex items-center justify-center w-screen h-screen relative">
			<div className="flex flex-col items-center justify-center w-80 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[calc(-50%-69px)]">
				{renderView()}
			</div>
		</div>
	);
}

export default SignIn;