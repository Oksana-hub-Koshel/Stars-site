import React, {useEffect, useState} from 'react';
import BookListItem from "./../book-list-item/book_list_item";
import s from "./bookList.module.css";
import {connect} from "react-redux";
import withBookstoreService from "../../../../hoc/with-bookstore-service";
import BookstoreService from "../../../../services/bookstore-service";
import {booksLoaded} from "../../../../redux/actions/actions";
import {bindActionCreators} from "redux";
import CartTable from "../cart-table/cart-table";

const BookList = (props) => {
    const {books}=props

    useEffect(()=>{
        const data=BookstoreService.getBooks()
        props.booksLoaded(data)

    }, [])

    return (
        <>
            <div className={s.header_wrapp}>
                <h2>ReStore</h2>
                <div className={s.cart_icon}>
                    <i className="bi bi-bag-check-fill"></i>
                    <div>5 items(200 $)</div>
                </div>
            </div>
            <hr></hr>

        <ul>
            {books.map((book)=>{
                return(
                    <li key={book.id} className={s.lists}>
                        <BookListItem  book={book}/>
                    </li>
                )
            })}

        </ul>
            <CartTable/>
        </>
    );

};
const mapStateToProps=({books})=>{
    return {books}
}
const mapDispatchToProps={
    booksLoaded
    // return bindActionCreators({
    //         booksLoaded}, dispatch)

        // booksLoaded: (newBooks)=>{
        //     dispatch(
        //         booksLoaded(newBooks)
        //     )
        // }
}



export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));