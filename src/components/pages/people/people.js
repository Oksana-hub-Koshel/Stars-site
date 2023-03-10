import s from "./people.module.css";
import Spinner from "../../../components/spinner/spinner";
import {usePeople} from "../../../hooks/usePeople";
import {PersonDetails} from "../../person-details/person-details";
import {Link, useSearchParams} from "react-router-dom";
import React from "react";
import SearchForm from "../../searchForm/searchForm";


 const People = () => {
     const [searchParams, setSearchParams]=useSearchParams()
     const {people, loading, error} = usePeople()
     const peopleQuery=searchParams.get('person') || '';
     const latest=searchParams.has('latest')

     const startsFrom=latest ? 6 :1;



     if (error) {
        return <div>Something wrong...z</div>
    }
    if (loading) {
        return <Spinner/>
    }
    return (
        <div className="outlet">
            <div className={s.block_left}>
               <SearchForm setSearchParams={setSearchParams} peopleQuery={peopleQuery} latest={latest}/>
                {people.filter(person=> person.name.toLowerCase().includes(peopleQuery.toLowerCase()) && person.id>=startsFrom).map(people =>{
                    return(
                        <Link to={people.id}  className={s.item}>{people.name}</Link>
                    )

                })}
            </div>
            <div className={s.block_right}>

                <PersonDetails />
            </div>

        </div>
    )
}

export default People

