import React from 'react';
import s from "../bookList.module.css";
import BookListItem from "../../book-list-item/book_list_item";

const BookListItems = ({books, onAddedToCart}) => {
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