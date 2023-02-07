import React from 'react';
import {usePlanet} from "../../hooks/usePlanets";
import {useParams} from "react-router-dom";
import Spinner from "../spinner/spinner";
import s from "../starship_details/starship-details.module.css";
import img from "../../data/The_Blue_Marble_(remastered).jpg";

const PlanetDetails = () => {
    let {id}=useParams()
    const {planet, loading}=usePlanet(id)

    if (loading) {
        return <Spinner/>
    }
    return (
        <div className={s.block}>
            <img src={img} className={s.foto}/>
            <div>
                <p>Name: {planet.name}</p>
                <p>Passengers: {planet.population}</p>
                <p>Model: {planet.diameter}</p>
            </div>

        </div>
    );
};

export default PlanetDetails;