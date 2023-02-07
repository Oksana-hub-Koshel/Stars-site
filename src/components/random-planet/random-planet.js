import React, {useState} from 'react';
import img from "./../../data/120927.jpg"
import s from "./random-planet.module.css"
import Spinner from "../spinner/spinner";
import {usePlanet} from "../../hooks/usePlanets";

export const RandomPlanet = () => {
    const {loading, planet} = usePlanet(6)

    const spinner = loading ? <Spinner/> : null
    const renderPlanet = !loading ? <Planet planet={planet}/> : null

    return (
        <div className={s.container_main}>
            <div className={s.block}>
                {spinner}
                {renderPlanet}
            </div>
        </div>
    );
};

const Planet = ({planet}) => {
    const {name, population, diameter} = planet

    return (
        <>
            <img src={img} className={s.img}/>
            <div style={{textAlign: "left"}}>
                <div>
                    <h2>{name}</h2>
                    <p>Population: {population}</p>
                    <p>Diameter: {diameter}</p>
                </div>
            </div>
        </>
    )
}
