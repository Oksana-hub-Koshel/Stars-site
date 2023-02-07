import s from "../planets/planets.module.css";
import Spinner from "../spinner/spinner";
import {useStarships} from "../../hooks/useStarships";
import {Link} from "react-router-dom";


const StarshipsList = () => {
    const {starships, loading}=useStarships()

    return (
        <div className={s.block_list}>
            {loading ? <Spinner/> : null}
            {!loading ?  starships.map((elem, id)=>{
                console.log(elem.id)
                return (
                    <div key={id} className={s.item}>
                    <Link
                        to={`/starships/${id}`}
                        style={{textDecoration:'none'}}
                        state={id}
                    >
                        {elem.name}
                    </Link>
                    </div>

                )
            }) : null}

        </div>
    );
};

export default StarshipsList;