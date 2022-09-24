import React from "react";
import "./CartTemplate.css"

const CartTemplate = ({name,price,count,clickedToRemove}) => {

    return(
        <div className="cartTemplate" onClick={() => clickedToRemove(name)}>
            <h3>{name}</h3>
            <p className="price">{price.toLocaleString('en-US')}$</p>
            <p className="count"> x {count}</p>
        </div>
    )
}

export default CartTemplate