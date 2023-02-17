import React from 'react';
import s from "../bookList.module.css";
import BookListItem from "../../book-list-item/book_list_item";
import {useSelector} from "react-redux";

const BookListItems = ({onAddedToCart}) => {
    const books=useSelector(state=>state.books.books)

    return (
        <ul>
            {books.map((book)=>{
                return(
                    <li key={book.id} className={s.lists}>
                        <BookListItem  book={book} onAddedToCart={()=>onAddedToCart(book.id)}/>
                    </li>
                )
            })}

        </ul>
    );
};

export default BookListItems;