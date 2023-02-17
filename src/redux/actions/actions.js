import BookstoreService from "../../services/bookstore-service";
import {fetchBooksFailed, fetchBooksRequest, fetchBooksSuccess} from "../bookSlice";

// const booksRequest=()=>{
//     return {
//         type: "FETCH_BOOKS_REQUEST"
//     }
// }
//
//  const booksLoaded=(newBooks)=>{
//     return {
//         type: "FETCH_BOOKS_SUCCESS",
//         payload: newBooks
//     }
// }
//
//  const booksError=(error)=>{
//     return {
//         type: "FETCH_BOOKS_FAILED",
//         payload: error
//     }
// }

export const bookAddedToCart=(bookId)=>{
    return{
        type: "BOOK_ADDED_TO_CART",
        payload: bookId
    }
}

export const bookRemoveFromCart=(bookId)=>{
    return{
        type: "BOOK_REMOVE_FROM_CART",
        payload: bookId
    }
}
export const deleteAllBooksFromCart=(bookId)=>{
    return{
        type: "REMOVE_ALL_BOOKS_FROM_CART",
        payload: bookId
    }
}

