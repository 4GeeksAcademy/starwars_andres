import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    const isFavorite = (item) => {
        return store.favorites.some(fav => fav.name === item.name);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-danger">Vehicles</h1>
            <div className="my-carousel">
                {store.vehicles && store.vehicles.length > 0 && store.vehicles.map((item, index) => (
                    <div className="my-card" key={index}>
                        <div>
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.url.split("/")[5]}.jpg`} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} alt="vehicle" />
                        </div>
                        <div className="text-body">
                            <p>Name: {item.name}</p>
                            <p>Cargo Capacity: {item.cargo_capacity}</p>
                            <p>Length: {item.length}</p>
                            <p>Vehicle Class: {item.vehicle_class}</p>
                            <p>Model: {item.model}</p>
                        </div>
                        <div className="buttons-footer">
                            <Link to={`/vehicle/${item.url.split("/")[5]}`} className="btn btn-primary">Learn More</Link>
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

