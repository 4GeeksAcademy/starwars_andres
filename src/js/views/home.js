import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <>
            <Characters />
            <Planets />
            <Vehicles />
        </>
    );
};







