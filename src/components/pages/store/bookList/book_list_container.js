import React, {useEffect, useState} from 'react';
import s from "./bookList.module.css";
import { useDispatch, useSelector} from "react-redux";
import withBookstoreService from "../../../../hoc/with-bookstore-service";
import {bookAddedToCart, } from "../../../../redux/actions/actions";
import CartTable from "../cart-table/cart-table";
import Spinner from "../../../spinner/spinner";
import ErrorIndicator from "../../../error-indicator/error-indicator";
import Book_list_header from "./book_list_header/book_list_header";
import BookListItems from "./book_list/book_list_items";
import {fetchBooks } from "../../../../redux/bookSlice"

const BookListContainer = () => {
    const error=useSelector(state=> state.books.error)
    const loading=useSelector(state=>state.books.loading)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBooks())

    }, [])

    if(error){
        return <ErrorIndicator/>
    }

    if(loading){
        return <Spinner />
    }

    return (
        <>
            <Book_list_header/>
            <BookListItems />
            {/*<CartTable/>*/}
        </>
    );

};
// const mapStateToProps=( {bookList: {books, loading, error}})=>{
//
//     return {books, loading, error}
//
// }

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         fetchBooks: fetchBooks(dispatch),
//         onAddedToCart: (id) => dispatch(bookAddedToCart(id))
//
//     }
//
//
// }


export default BookListContainer;
// export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));