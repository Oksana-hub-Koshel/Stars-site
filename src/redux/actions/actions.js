import BookstoreService from "../../services/bookstore-service";

const booksRequest=()=>{
    return {
        type: "FETCH_BOOKS_REQUEST"
    }
}

 const booksLoaded=(newBooks)=>{
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
}

 const booksError=(error)=>{
    return {
        type: "FETCH_BOOKS_FAILED",
        payload: error
    }
}

export const bookAddedToCart=(bookId)=>{
    return{
        type: "BOOK_ADDED_TO_CART",
        payload: bookId
    }
}

export const fetchBooks=(dispatch)=>()=>{
    dispatch(booksRequest())
    BookstoreService.getBooks()
        .then((data)=>{
            dispatch(booksLoaded(data))
        })
        .catch((error)=>{
            dispatch(booksError(error))
        })

}