import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const { store } = useContext(Context);
    const [query, setQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const value = event.target.value.toLowerCase();
        setQuery(value);

        if (value.length > 0) {
            const results = [
                ...store.people.filter(item => item.name.toLowerCase().includes(value)),
                ...store.planets.filter(item => item.name.toLowerCase().includes(value)),
                ...store.vehicles.filter(item => item.name.toLowerCase().includes(value)),
            ];
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    const handleResultClick = (item) => {
        if (store.people.includes(item)) {
            navigate(`/character/${item.url.split("/")[5]}`);
        } else if (store.planets.includes(item)) {
            navigate(`/planet/${item.url.split("/")[5]}`);
        } else if (store.vehicles.includes(item)) {
            navigate(`/vehicle/${item.url.split("/")[5]}`);
        }
        setQuery("");
        setFilteredResults([]);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                className="form-control search-input"
                placeholder="Search characters, planets, vehicles..."
                value={query}
                onChange={handleInputChange}
            />
            {filteredResults.length > 0 && (
                <ul className="list-group autocomplete-results">
                    {filteredResults.map((item, index) => (
                        <li
                            key={index}
                            className="list-group-item list-group-item-action"
                            onClick={() => handleResultClick(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};