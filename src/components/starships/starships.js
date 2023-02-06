import React, {useEffect, useState} from 'react';
import API from "../../api/api";
import s from "../planets/planets.module.css";
import Spinner from "../spinner/spinner";
import {useAllStarships} from "../../hooks/useFetch";

const StarshipsList = () => {

const {starships, loading}=useAllStarships()


    return (
        <div className={s.block_list}>
            {loading ? <Spinner/> : null}
            {!loading ?  starships.map((elem, id)=>{
                return (
                    <div key={id} className={s.item} onClick={()=> API.getPlanet(elem.id)}>{elem.name}</div>
                )
            }) : null}

        </div>
    );
};

export default StarshipsList;