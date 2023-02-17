import React from 'react';
import s from "./cart-table.module.css";
import {connect} from "react-redux";
import {
    bookAddedToCart,

    bookDecreaseCount,
    bookIncreaseCount,
    bookRemoveBookFromCart, bookRemoveFromCart, deleteAllBooksFromCart
} from "../../../../redux/actions/actions";

const CartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {


    return (
        <div className={s.wrapp}>
            <h4>Your Order</h4>

            <div className={s.table}>
                <table className={s.table_1}>
                    <thead className={s.head_table}>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total Amount</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, idx)=>{
                        const {id, title, count, total}=item
                        return(
                            <tr key={id}>
                                <td>{idx+1}</td>
                                <td>{title}</td>
                                <td>{count}</td>
                                <td>$ {total}</td>
                                <td className={s.command_line}>
                                    <i className="bi bi-dash-circle" onClick={()=>onDecrease(id)}></i>
                                    <i className="bi bi-plus-circle" onClick={()=>onIncrease(id)}></i>
                                    <i className="bi bi-trash3" onClick={()=>onDelete(id)}></i>
                                </td>
                            </tr>
                        )
                    })}


                    </tbody>
                </table>
                <div className={s.total}>
                    <h5>Total: {total} $</h5>
                    <button className="btn-outline-primary" style={{height:40, width:150, backgroundColor:"wheat", color:"black"}}>Checkout</button>
                </div>

            </div>


        </div>
    );
};
const mapStateToProps = ({cartItems, orderTotal}) => {

    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onIncrease: (id)=> dispatch(bookAddedToCart(id)),
        onDecrease: (id)=> dispatch(bookRemoveFromCart(id)),
        onDelete: (id)=> dispatch(deleteAllBooksFromCart(id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartTable) ;