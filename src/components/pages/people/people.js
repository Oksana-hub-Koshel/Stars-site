import s from "./people.module.css";
import Spinner from "../../../components/spinner/spinner";
import {usePeople} from "../../../hooks/usePeople";
import {PersonDetails} from "../../person-details/person-details";
import PeopleList from "./peopleList/peopleList";
import { useParams} from "react-router-dom";


 const People = () => {
     const {people, loading, error} = usePeople()

     if (error) {
        return <div>Something wrong...</div>
    }
    if (loading) {
        return <Spinner/>
    }
    return (
        <>
            <div className={s.block_left}>
                {people && people.map((elem) => {
                    return (
                        <PeopleList name={elem.name} id={elem.id}
                      />
                    )
                })}
            </div>
            <div className={s.block_right}>
                <PersonDetails  />
            </div>

        </>
    )
}

export default People

