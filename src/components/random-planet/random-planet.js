import React, {useState} from 'react';
import img from "./../../data/120927.jpg"
import s from "./random-planet.module.css"
import Spinner from "../spinner/spinner";
import API from "../../api/api";
import {useEffect} from "react";
import {usePlanet} from "../../hooks/useFetch";

export const RandomPlanet = () => {
const {loading, state}=usePlanet(6)

    const spinner=loading ? <Spinner/> : null
    const planet=!loading ? <Planet state={state} /> : null

    return (
        <div className={s.container_main}>
            <div className={s.block}>
                            {spinner}
                            {planet}
                        </div>
        </div>
    );
};

const Planet=({state})=>{

    return(
        <>
        <div className={s.foto}>
            <img src={img} className={s.img} />
        </div>


    <div style={{textAlign:"left"}}>
        {/*{state.map((elem, id)=>{*/}
        {/*    return(*/}
                <div >
                <h2>{state.name}</h2>
            <p>Population: {state.population}</p>
            <p>Ratation Period: {state.rotation_period}</p>
            <p>Diameter: {state.diameter}</p>
                </div>
        {/*    )*/}
        {/*})}*/}

    </div>
        </>
    )
}
