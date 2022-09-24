import React from "react";
import "./CartTemplate.css"

const CartTemplate = ({name,price,count}) => {

    return(
        <div className="cartTemplate">
            <h3>{name}</h3>
            <p className="price">{price}</p>
            <p className="count">x {count}</p>
        </div>
    )
}

export default CartTemplate