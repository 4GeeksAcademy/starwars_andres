import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const DetailedCharacter = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.getCharacterDetails(id);
    }, [id]);

    const character = store.detailedCharacter;

    return (
        <div className="container mt-5 d-flex justify-content-center">
            {character ? (
                <div className="card bg-dark text-white" style={{ width: "18rem" }}>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                        className="card-img-top"
                        alt="character"
                        onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">Gender: {character.gender}</p>
                        <p className="card-text">Hair color: {character.hair_color}</p>
                        <p className="card-text">Eye color: {character.eye_color}</p>
                        <p className="card-text">Birth year: {character.birth_year}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
