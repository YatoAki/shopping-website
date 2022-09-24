import React from "react";
import CartTemplate from "./Components/CartTemplate.js"
import "./Cart.css"

const Cart = ({selectedItems}) => {

    const calculateTotal = () => {
        let count = 0
        for (let k in selectedItems) {
            count += selectedItems[k][0]*selectedItems[k][1]
        }
        return count
    }
    
    return(
        <div className="Cart">
            {
                Object.keys(selectedItems).map( key => {
                    return(
                        <CartTemplate name={key} price={selectedItems[key][0]} count={selectedItems[key][1]} />
                    )
                })
            }
            <div className="total">
                <h3>Total</h3>
                <p>{calculateTotal().toLocaleString('en-US')} $</p>
            </div>
        </div>
    )
}

export default Cart