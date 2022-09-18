import React,{useState} from "react";
import Card from "./Card.js"
import "./ShoppingArea.css"
import iphone7Plus from "./iphone/iPhone 7 Plus.png"
import iphone11Pro from "./iphone/iPhone 11 Pro.png"
import iphoneX from "./iphone/iPhone X.png"
import iphoneXR from "./iphone/iPhone XR.png"
import iphone8Plus from "./iphone/iPhone 8 Plus.png"

const ShoppingArea = ({currentArea}) => {
    
    const [cards,setCards] = useState({
        "iPhone 11 Pro": [iphone11Pro,899],
        "iPhone XR": [iphoneXR,1500],
        "iPhone X": [iphoneX,1399],
        "iPhone 8 Plus": [iphone8Plus,799], 
        "iPhone 7 Plus": [iphone7Plus,999]    
    })
    console.log(cards)
    return(
        <div className="shoppingArea">
            {
                Object.keys(cards).map( key => {
                    return(
                        <Card image={cards[key][0]} alt={key} price={cards[key][1]} />
                    )
                })
            }
        </div>
    )
}

export default ShoppingArea