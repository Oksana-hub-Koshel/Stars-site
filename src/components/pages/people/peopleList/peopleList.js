import React from 'react';
import s from "../people.module.css";
import {Link} from "react-router-dom";

const PeopleList = ({name, id}) => {
    return (
        <Link to={id} className={s.item}>{name}</Link>
    );
};

export default PeopleList;