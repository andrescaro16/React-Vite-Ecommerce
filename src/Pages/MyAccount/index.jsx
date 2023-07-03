import { useState, useRef } from "react";
import { useShopiContext } from '../../Context/ShopiContext';


const MyAccount = () => {

	const { account, saveAccount } = useShopiContext();
	const [view, setView] = useState("user-info");
	const form = useRef(null);

	const onEditUserInfoSubmit = () => {
		const formData = new FormData(form.current);
		const validation = form.current.checkValidity();
		if(validation){
			const data = Object.fromEntries(formData);
			saveAccount(data);
			return setView("user-info");
		} else{
			return;
		}
	}

	const userInfoView = () => {
		return(
			<>
			<h1 className="text-3xl font-bold mb-8">My Shopi Account</h1>
			<p className="flex w-full gap-1 justify-start">
				<span>Name:</span>
				<span className="font-medium">{account?.name}</span>
			</p>
			<p className="flex w-full gap-1 justify-start">
				<span>Email:</span>
				<span className="font-medium">{account?.email}</span>
			</p>
			<p className="flex w-full gap-1 justify-start mb-8">
				<span>Password:</span>
				<span className="font-medium">{account?.password ? "**********" : null}</span>
			</p>
			<button
				className="flex flex-col w-full justify-center items-center border border-black p-2 rounded-lg disabled:bg-black/40 disabled:border-transparent disabled:text-white hover:enabled:bg-black hover:enabled:text-white"
				onClick={() => setView("edit-user-info")}>
				Edit
			</button>
			</>
		);
	}

	const editUserInfoView = () => {
		return(
			<>
			<h1 className="text-3xl font-bold mb-8">Shopi Sign Up</h1>
			<form ref={form} className="flex flex-col w-80">
				<div className="flex flex-col mb-2">
					<label htmlFor="name" className="mb-1">Your name</label>
					<input type="text" name="name" defaultValue={account.name}
					className="border border-black rounded-lg px-2 py-2 w-full focus:outline-none select-none"
					required />
				</div>
				<div className="flex flex-col mb-2">
					<label htmlFor="email" className="mb-1">Your email</label>
					<input type="email" name="email" defaultValue={account.email}
					className="border border-black rounded-lg px-2 py-2 w-full focus:outline-none select-none"
					required />
				</div>
				<div className="flex flex-col mb-8">
					<label htmlFor="password" className="mb-1">Your password</label>
					<input type="password" name="password" placeholder="Password"
					className="border border-black rounded-lg px-2 py-2 w-full focus:outline-none select-none"
					required />
				</div>
				<button
					className="flex flex-col w-full justify-center items-center border border-black bg-black text-white p-2 rounded-lg hover:enabled:bg-white hover:enabled:text-black"
					onClick={onEditUserInfoSubmit}>
					Sign up
				</button>
			</form>
			</>
		);
	}

	const renderView = () => {
		return(view === "user-info" ? userInfoView()
			 : view === "edit-user-info" ? editUserInfoView() : null);
	}


	return(
		<div className="flex items-center justify-center w-screen h-screen relative">
			<div className="flex flex-col items-center justify-center w-80 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[calc(-50%-69px)]">
				{renderView()}
			</div>
		</div>
	);
}

export default MyAccount;