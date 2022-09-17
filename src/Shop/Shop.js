import React from 'react'
import "./Shop.css"
import Nav from "./Components/Nav/Nav.js"
import Cart from "./Components/Cart/Cart.js"
import ShoppingArea from "./Components/ShoppingArea/ShoppingArea.js"

const Shop = ()=> {

    return(
        <div class="shop">
            <Nav/>
            <ShoppingArea/>
            <Cart/>
        </div>
    )
}

export default Shop