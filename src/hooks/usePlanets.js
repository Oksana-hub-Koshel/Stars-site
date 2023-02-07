import {useEffect, useState} from "react";
import API from "../api/api";
import {extractId} from "../api/api";

const transformPlanets=(planet)=> {
    return {
        id: extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotationPeriod,
        diameter: planet.diameter
    }

}

export const usePlanets=()=>{
    const [planets, setPlanets]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')



    useEffect(() => {
        setError('')
        setLoading(true)
        API.getAllPlanets()
            .then((data)=>{
                const res=data.results.map((elem)=> transformPlanets(elem))
                setPlanets(res)
                setLoading(false)

            })
            .catch((error)=>{
            setLoading(false)
            setError(error.message)
        })
    }, [])
    return{
        planets,
        loading,
        error
    }
}

export const usePlanet=(id)=>{
    const [planet, setPlanet]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')

    useEffect(() => {
        setError('')
        setLoading(true)
        API.getPlanet(id)
            .then((data)=>{
                setPlanet(data)
                setLoading(false)
            })
            .catch((error)=>{
                setLoading(false)
                setError(error.message)
            })
    }, [id])
    return{
        planet,
        loading
    }
}


