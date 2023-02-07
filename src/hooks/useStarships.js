import API, {extractId} from "../api/api";
import {useEffect, useState} from "react";


const transformStarships=(starship)=> {
    return {
        id: extractId(starship),
        name: starship.name,
        model: starship.message,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargoCapacity

    }
}

export const useStarships=()=>{
    const [starships, setStarships]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')



    useEffect(() => {
        setError('')
        setLoading(true)
        API.getAllStarships()
            .then((data)=>{
                const res=data.results.map((elem)=> transformStarships(elem))
                setStarships(res)
                setLoading(false)

            })
            .catch((error)=>{
                setLoading(false)
                setError(error.message)
            })
    }, [])

    return{
        loading,
        error,
     starships
    }
}

export const useStarship=()=>{
    const [starship, setStarship]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')

    useEffect(() => {
        setError('')
        setLoading(true)
        API.getStarships()
            .then((data)=>{
                console.log(data)
                // const res=data.results.map((elem)=> transformStarships(elem))
                // setStarship(res)
                setLoading(false)

            })
            .catch((error)=>{
                setLoading(false)
                setError(error.message)
            })
    }, [])

    return{
        loading,
        error,
        starship
    }

}