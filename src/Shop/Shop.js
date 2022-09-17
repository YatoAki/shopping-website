import React, {useState} from 'react'
import "./Shop.css"
import Nav from "./Components/Nav/Nav.js"
import Cart from "./Components/Cart/Cart.js"
import ShoppingArea from "./Components/ShoppingArea/ShoppingArea.js"

const Shop = ()=> {

    const [currentArea, setCurrentArea] = useState("iPhone")

    const navClicked = (area) => {
        setCurrentArea(area)
    }

    return(
        <div className="shop">
            <Nav navClicked = {navClicked}/>
            <ShoppingArea currentArea={currentArea}/>
            <Cart/>
        </div>
    )
}

export default Shop