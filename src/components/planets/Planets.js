import React, {useEffect, useState} from 'react';
import s from "./planets.module.css";
import API from "../../api/api";
import Spinner from "../spinner/spinner";
import {usePlanets} from "../../hooks/useFetch";

const Planets = () => {
    const {planets, loading, error}=usePlanets()

    if(error){
        return <div>Something wrong...</div>
    }
    if(loading){
        return <Spinner />
    }
    return (
        <div className={s.block_list}>
            {planets && planets.map((elem, id)=>{
                return (
                   <div key={id} className={s.item} onClick={()=> API.getPlanet(elem.id)}>{elem.name}</div>
                )
            }) }

        </div>
    );
};

export default Planets;