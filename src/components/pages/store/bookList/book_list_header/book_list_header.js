import React from 'react';
import s from "../bookList.module.css";
import {Link} from "react-router-dom";

const BookListHeader = () => {
    return (
        <>
        <div className={s.header_wrapp}>
            <Link to="/">
                <h2>ReStore</h2>
            </Link>
            <Link to="/cart">
                <div className={s.cart_icon}>
                    <i className="bi bi-bag-check-fill" style={{color: "wheat"}}></i>
                    <div>5 items (200 $)</div>
                </div>
            </Link>

        </div>
    <hr></hr>
        </>
    );
};

export default BookListHeader;