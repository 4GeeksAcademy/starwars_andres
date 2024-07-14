import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars</span>
				</Link>
				<SearchBar />
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</a>

						<ul className="dropdown-menu">
							{store.favorites.map((item, index) => (
								<li key={index} className="dropdown-item">
									{item.name}
									<button className="btn btn-danger btn-sm" onClick={() => actions.removeFavorite(item)}>Remove</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
