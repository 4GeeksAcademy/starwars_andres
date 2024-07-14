import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const DetailedVehicle = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.getVehicleDetails(id);
    }, [id]);

    const vehicle = store.detailedVehicle;

    return (
        <div className="container mt-5 d-flex justify-content-center">
            {vehicle ? (
                <div className="card bg-dark text-white" style={{ width: "18rem" }}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                        className="card-img-top"
                        alt="vehicle"
                        onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5>
                        <p className="card-text">Cargo Capacity: {vehicle.cargo_capacity}</p>
                        <p className="card-text">Length: {vehicle.length}</p>
                        <p className="card-text">Vehicle Class: {vehicle.vehicle_class}</p>
                        <p className="card-text">Model: {vehicle.model}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

