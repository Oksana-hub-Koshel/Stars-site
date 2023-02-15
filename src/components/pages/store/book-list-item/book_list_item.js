import React from 'react';
import s from "./../bookList/bookList.module.css"

const BookListItem = ({book}) => {
    const {title, author, price, image}=book;

    return (
        <div className={s.book_block}>
        <div>
            <img src={image} className={s.img_book}/>
        </div>
        <div className={s.info_book}>
            <span style={{fontSize:22, color:"wheat"}}>{title}</span>
            <span style={{fontSize:18, }}>{author}</span>
            <span style={{fontSize:20}}>$ {price}</span>
            <button className="btn-outline-primary" style={{height:40, width:150, backgroundColor:"wheat", color:"black"}}>Add to Cart</button>

        </div>
        </div>
    );
};

export default BookListItem;