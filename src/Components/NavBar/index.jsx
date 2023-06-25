import { NavLink } from "react-router-dom";

const NavBar = () => {

	const activeStyle = 'underline underline-offset-4';
	const active = ({ isActive }) => isActive ? activeStyle : '';

	return(
		<nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">

			<ul className="flex items-center gap-3">
				<li className="text-lg font-semibold">
					<NavLink to='/'>
						Shopi
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={active}>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/clothes'
						className={active}>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/electronics'
						className={active}>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/furnitures'
						className={active}>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/toys'
						className={active}>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/others'
						className={active}>
						Others
					</NavLink>
				</li>
			</ul>

			<ul className="flex items-center gap-3">
				<li className="text-black/60">
					andrescaro@gmail.com
				</li>
				<li>
					<NavLink
						to='/my-orders'
						className={active}>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/my-account'
						className={active}>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/sign-in'
						className={active}>
						Sign In
					</NavLink>
				</li>
				<li>
					🛒0
				</li>
			</ul>

		</nav>
	);
}

export default NavBar;