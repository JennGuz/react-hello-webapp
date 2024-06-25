import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">
				<img className="logo" src="https://i.pinimg.com/564x/76/82/05/768205f9f220d8056a2d4e3a70031dda.jpg"/>
			</Link>
			<Link to="/favorites">
				<button>
					<strong>Favorites</strong>
				</button>
			</Link>
		</nav>
	);
};
