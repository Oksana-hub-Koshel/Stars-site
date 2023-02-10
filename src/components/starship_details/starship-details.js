import React, {useEffect, useState} from 'react';
import img from "./../../data/The_Blue_Marble_(remastered).jpg"
import s from './starship-details.module.css';
import {useStarship} from "../../hooks/useStarships";
import Spinner from "../spinner/spinner";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export const StarshipDetails = () => {
    let {id} = useParams()
    const navigate=useNavigate()
    const {starship, loading, error} = useStarship(id)

    const goBack=()=>{
        navigate(-1)
    }

    if (error) {
        return <div>Something wrong...</div>
    }
    if (loading) {
        return <Spinner/>
    }
    return (
        <div className={s.wrapp}>

        <div className={s.block}>
            <img src={img} className={s.foto}/>
            <div>
                <p>Name: {starship.name}</p>
                <p>Passengers: {starship.passengers}</p>
                <p>Model: {starship.model}</p>
            </div>

        </div>
        <button onClick={goBack} className={s.btn}>Go back</button>
        </div>
    );
};

