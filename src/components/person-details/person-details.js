import React from 'react';
import img from "./../../data/The_Blue_Marble_(remastered).jpg"
import s from './person-details.module.css'
import {usePerson} from "../../hooks/usePeople";

export const PersonDetails = () => {
    const {person, loading, error}=usePerson()

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

