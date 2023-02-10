import React from 'react';
import img from "./../../data/The_Blue_Marble_(remastered).jpg"
import s from './person-details.module.css'
import {usePerson} from "../../hooks/usePeople";
import Spinner from "../spinner/spinner";
import { useParams} from "react-router-dom";


export const PersonDetails = () => {
    const {id}=useParams()

    const {person, loading, error}=usePerson(id)

    if(error){
        return <div>Something wrong...</div>
    }
    if (loading) {
        return <Spinner/>
    }
    return (
        <div className={s.block}>
      <img src={img} className={s.foto}/>
            <div>
                <h3>{person.name}</h3>
                <p>{person.birthDay}</p>
                <p>{person.gender}</p>
            </div>

        </div>
    );
};

