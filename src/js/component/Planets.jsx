import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    const isFavorite = (item) => {
        return store.favorites.some(fav => fav.name === item.name);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-danger">Planets</h1>
            <div className="my-carousel">
                {store.planets && store.planets.length > 0 && store.planets.map((item, index) => (
                    <div className="my-card" key={index}>
                        <div>
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${item.url.split("/")[5]}.jpg`} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} width="300px" height="300px" alt="planet" />
                        </div>
                        <div className="text-body">
                            <p>Name: {item.name}</p>
                            <p>Population: {item.population}</p>
                            <p>Terrain: {item.terrain}</p>
                            <p>Diameter: {item.diameter}</p>
                            <p>Gravity: {item.gravity}</p>
                        </div>
                        <div className="buttons-footer">
                            <Link to={`/planet/${item.url.split("/")[5]}`} className="btn btn-primary">Learn More</Link>
                            {isFavorite(item) ? (
                                <button className="btn btn-warning" onClick={() => actions.removeFavorite(item)}>💔</button>
                            ) : (
                                <button className="btn btn-warning" onClick={() => actions.addFavorite(item)}>♥️</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

