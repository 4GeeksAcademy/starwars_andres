import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    const isFavorite = (item) => {
        return store.favorites.some(fav => fav.name === item.name);
    };

    return (
        <div className="container">
            <h1 className="text-danger">Characters</h1>
            <div className="my-carousel">
                {store.people && store.people.length > 0 && store.people.map((item, index) => (
                    <div className="my-card" key={index}>
                        <div>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.url.split("/")[5]}.jpg`} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} alt="character" />
                        </div>
                        <div className="text-body">
                            <p>Name: {item.name}</p>
                            <p>Gender: {item.gender}</p>
                            <p>Hair color: {item.hair_color}</p>
                            <p>Eye color: {item.eye_color}</p>
                        </div>
                        <div className="buttons-footer">
                            <Link to={`/character/${item.url.split("/")[5]}`} className="btn btn-primary">Learn More</Link>
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



