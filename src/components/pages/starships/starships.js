import s from "../planets/planets.module.css";
import Spinner from "../../../components/spinner/spinner";
import {useStarships} from "../../../hooks/useStarships";
import {Link} from "react-router-dom";


const StarshipsList = () => {
    const {starships, loading}=useStarships()

    return (
        <div className="outlet">
        <div className={s.block_list}>
            {loading ? <Spinner/> : null}

            {!loading ?  starships.map((elem)=>{

                return (

                    <div key={elem.id} className={s.item}>
                    <Link
                        to={`/starships/${elem.id}`}
                        style={{textDecoration:'none'}}
                    >
                        {elem.name}
                    </Link>
                    </div>

                )
            }) : null}

        </div>
        </div>

    );
};

export default StarshipsList;