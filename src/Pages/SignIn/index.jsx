import { Link } from 'react-router-dom';
import { useShopiContext } from '../../Context/ShopiContext';


const SignIn = () => {

	const { signOut, saveSignOut } = useShopiContext();

	const signOutHandler = () => {
		saveSignOut(false);
	}


	return(
		<div className="flex items-center justify-center w-screen h-screen relative">
			<div className="flex flex-col items-center justify-center w-80 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[calc(-50%-69px)]">
				<h1 className="text-3xl font-bold mb-8">Shopi Login</h1>
				<p className="flex w-full gap-1 justify-start">
					<span>Email:</span>
					<span className="font-medium">andrescaro@gmail.com</span>
				</p>
				<p className="flex w-full gap-1 justify-start mb-8">
					<span>Password:</span>
					<span className="font-medium">**********</span>
				</p>
				<p className="underline underline-offset-4 mb-3 cursor-pointer select-none">
					Forgot my password
				</p>
				<Link
					to="/"
					className="flex flex-col w-full justify-center items-center border border-black bg-black text-white p-2 rounded-lg mb-3 hover:bg-white hover:text-black"
					onClick={signOutHandler}>
					<button>
						Log in
					</button>
				</Link>
				<Link
					to="/sign-up"
					className="flex flex-col w-full justify-center items-center border border-black p-2 rounded-lg  hover:bg-black hover:text-white">
					<button>
						Sign up
					</button>
				</Link>
			</div>
		</div>
	);
}

export default SignIn;