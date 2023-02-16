import React from 'react';
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <div>
            Cart
            <Link to="/book_list">Go to the store</Link>
        </div>
    );
};

export default Cart;