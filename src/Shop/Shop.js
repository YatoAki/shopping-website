import React, {useState} from 'react'
import "./Shop.css"
import Nav from "./Components/Nav/Nav.js"
import Cart from "./Components/Cart/Cart.js"
import ShoppingArea from "./Components/ShoppingArea/ShoppingArea.js"

const Shop = ()=> {

    const [currentArea, setCurrentArea] = useState("iPhone")
    const [selectedItems, setSelectedItems] = useState({})

    const navClicked = (area) => {
        setCurrentArea(area)
    }

    const itemClicked = (name,price) =>{
        if (selectedItems[name]){
            selectedItems[name] = [price,++selectedItems[name][1]]
        }else{
            selectedItems[name] = [price,1]
        }
        console.log(selectedItems[name])
    }

    return(
        <div className="shop">
            <Nav navClicked = {navClicked}/>
            <ShoppingArea currentArea={currentArea} itemClicked={itemClicked}/>
            <Cart/>
        </div>
    )
}

export default Shop