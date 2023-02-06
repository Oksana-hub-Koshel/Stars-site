import React from 'react';
import img from "./../../data/The_Blue_Marble_(remastered).jpg"
import s from './person-details.module.css'

export const PersonDetails = () => {
    return (
        <div className={s.block}>
      <img src={img} className={s.foto}/>
            <div>
                <h3>name</h3>
                <p>birth</p>
                <p>model</p>
            </div>

        </div>
    );
};

