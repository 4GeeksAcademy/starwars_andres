import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const DetailedPlanet = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.getPlanetDetails(id);
    }, [id]);

    const planet = store.detailedPlanet;

    return (
        <div className="container mt-5 d-flex justify-content-center">
            {planet ? (
                <div className="card bg-dark text-white" style={{ width: "18rem" }}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        className="card-img-top"
                        alt="planet"
                        onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">Population: {planet.population}</p>
                        <p className="card-text">Terrain: {planet.terrain}</p>
                        <p className="card-text">Diameter: {planet.diameter}</p>
                        <p className="card-text">Gravity: {planet.gravity}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
