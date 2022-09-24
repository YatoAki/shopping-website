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
        let copy = JSON.parse(JSON.stringify(selectedItems))
        setSelectedItems(copy)
    }

    const clickedToRemove = (name)=>{
        if (selectedItems[name][1] > 1){
            selectedItems[name] = [selectedItems[name][0],--selectedItems[name][1]]
        }else{
            delete selectedItems[name]
        }
        let copy = JSON.parse(JSON.stringify(selectedItems))
        setSelectedItems(copy)
    }

    return(
        <div className="shop">
            <Nav navClicked = {navClicked}/>
            <ShoppingArea currentArea={currentArea} itemClicked={itemClicked}/>
            <Cart selectedItems={selectedItems} clickedToRemove={clickedToRemove}/>
        </div>
    )
}

export default Shop