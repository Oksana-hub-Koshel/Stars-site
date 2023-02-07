import s from "./people.module.css";
import Spinner from "../spinner/spinner";
import {usePeople} from "../../hooks/usePeople";
import {Link} from "react-router-dom";

const People = () => {
    const {people, loading, error}=usePeople()

    if(error){
        return <div>Something wrong...</div>
    }
    if(loading){
        return <Spinner />
    }
    return (
        <div className={s.block_list}>
            {people && people.map((elem)=>{
                return (
                    <div key={elem.id} className={s.item}>
                    <Link
                        to={`/people/${elem.id}`}
                        style={{textDecoration:'none'}}
                    >
                        {elem.name}
                    </Link>
                    </div>
                )
            }) }

        </div>
    );
};

export default People;