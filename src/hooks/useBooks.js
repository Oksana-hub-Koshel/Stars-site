import {useEffect, useState} from "react";
import BookstoreService from "../services/bookstore-service";

export const useBooks=(props)=>{
    const [books, setBooks]=useState([])
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState('')


    return{
        books,
        error,
        loading
    }
}