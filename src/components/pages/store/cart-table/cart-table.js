import React from 'react';
import s from "./cart-table.module.css";

const CartTable = () => {
    return (
        <div className={s.wrapp}>
            <h4>Your Order</h4>

            <div className={s.table}>
                <table className={s.table_1}>
                    <thead className={s.head_table}>
                    <tr>
                        <td>#</td>
                        <td>Item</td>
                        <td>Count</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Site Reability</td>
                        <td>2</td>
                        <td>$40</td>
                        <td className={s.command_line}>
                            <i className="bi bi-dash-circle"></i>
                            <i className="bi bi-plus-circle"></i>
                            <i className="bi bi-trash3"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Site Reability</td>
                        <td>2</td>
                        <td>$40</td>
                        <td className={s.command_line}>
                            <i className="bi bi-dash-circle"></i>
                            <i className="bi bi-plus-circle"></i>
                            <i className="bi bi-trash3"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Site Reability</td>
                        <td>2</td>
                        <td>$40</td>
                        <td className={s.command_line}>
                            <i className="bi bi-dash-circle"></i>
                            <i className="bi bi-plus-circle"></i>
                            <i className="bi bi-trash3"></i>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className={s.total}>
                    <h5>Total: 220$</h5>
                    <button className="btn-outline-primary" style={{height:40, width:150, backgroundColor:"wheat", color:"black"}}>Checkout</button>
                </div>

            </div>


        </div>
    );
};

export default CartTable;