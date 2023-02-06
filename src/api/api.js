import {useState} from "react";
import axios from "axios";
import {logDOM} from "@testing-library/react";


class API {
    location = "https://swapi.dev/api/"


    async getSource(url) {
        return await fetch(`${this.location}${url}`)
            .then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                },
             )
            .catch((error) => console.log(error.message))

    }
    getAllPlanets= async()=> {
        return await this.getSource('/planets/')
    }

   getAllPeople= async()=> {
        return await this.getSource('/people/')
    }

   getAllStarships= async()=> {
        return await this.getSource('/starships/')
    }

 getPlanet= async(id)=> {
        console.log(id)
        return await this.getSource(`/planets/${id}/`)
    }

   getPerson= async(id)=> {
        return await this.getSource(`/person/${id}/`)
    }

 getStarships= async(id)=> {
        return await this.getSource(`/starships/${id}/`)

    }
}

export default new API()


//
// export const useFetch=()=>{
//     const [loading, setLoading]=useState(false)
//     const _apiBase="https://swapi.dev/api/";
//
// const getResource= async (url)=>{
//     // setLoading(true)
//     await fetch(`${_apiBase}${url}`)
//         .then(res => res.json())
//     // setLoading(false)
//     //    if(!res.ok){
//     //        setLoading(false)
//     //        throw new Error(`could not fetch ${url}`)
//     //    }
//
// }
//
// }





