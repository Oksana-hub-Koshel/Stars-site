
import s from "./planets.module.css";
import Spinner from "../../../components/spinner/spinner";
import {usePlanets} from "../../../hooks/usePlanets";
import {Link} from "react-router-dom";

const Planets = () => {
    const {planets, loading, error}=usePlanets()

    if(error){
        return <div>Something wrong...</div>
    }
    if(loading){
        return <Spinner />
    }
    return (
        <div className={s.block_list}>
            {planets && planets.map((elem, id)=>{
                return (
                   <div key={id} className={s.item}>
                       <Link
                           to={`/planets/${elem.id}`}
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

export default Planets;