import {useEffect, useState} from "react";
import API from "../api/api";

export const usePlanets=()=>{
    const [planets, setPlanets]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')

    useEffect(() => {
        setError('')
        setLoading(true)
        API.getAllPlanets()
            .then((data)=>{
                setPlanets(data.results)
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
    const [state, setState]=useState([])
    const [loading, setLoading]=useState(false)

    useEffect(() => {
        setLoading(true)
        API.getPlanet(3)
            .then((data)=>{
                setState(data)
                setLoading(false)
            })
    }, [])
    return{
        state,
        loading
    }
}

export const useAllStarships=() =>{
    const [starships, setStarships]=useState([])
    const [loading, setLoading]=useState(false)

    useEffect(() => {
        setLoading(true)
        API.getAllStarships()
            .then((data)=>{
                setStarships(data.results)
                setLoading(false)

            })}, [])
    return{
        starships,
        loading
    }
}