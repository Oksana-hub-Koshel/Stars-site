import React, {useEffect, useState} from 'react';
import img from "./../../data/The_Blue_Marble_(remastered).jpg"
import s from './starship-details.module.css';
import {useStarship} from "../../hooks/useStarships";
import Spinner from "../spinner/spinner";

export const StarshipDetails = ({id}) => {
    const {starship, loading} = useStarship()

    if (loading) {
        return <Spinner/>
    }
    return (

        <div className={s.block}>
            <img src={img} className={s.foto}/>
            <div>
                <h3>name: {starship.name}</h3>
                <p>passengers: {starship.passengers}</p>
                <p>model</p>
            </div>

        </div>
    );
};

