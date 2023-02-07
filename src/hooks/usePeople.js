import API from "../api/api";
import {useEffect, useState} from "react";
import {extractId} from "../api/api";

const transformPerson=(person)=> {
    return {
        id: extractId(person),
        name: person.name,
        gender: person.gender,
        birthDay: person.birthDay,
        eyeColor: person.eyeColor,
    }
}

export const usePeople=()=>{
    const [people, setPeople]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')

    useEffect(() => {
        setError('')
        setLoading(true)
        API.getAllPeople()
            .then((data)=>{
                const res=data.results.map((elem)=> transformPerson(elem))
                setPeople(res)
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
        people
    }
}

export const usePerson=(id)=>{
    const [person, setPerson]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')

    useEffect(() => {
        setError('')
        setLoading(true)
        API.getPerson(id)
            .then((data)=>{
                const res= transformPerson(data)
                setPerson(res)
                setLoading(false)

            })
            .catch((error)=>{
                setLoading(false)
                setError(error.message)
            })
    }, [id])

    return{
        loading,
        error,
        person
    }
}