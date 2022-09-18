import React,{useState} from "react";
import "./ShoppingArea.css"
import iphone7Plus from "./iphone/iPhone 7 Plus.png"
import iphone11Pro from "./iphone/iPhone 11 Pro.png"
import iphoneX from "./iphone/iPhone X.png"
import iphoneXR from "./iphone/iPhone XR.png"

const ShoppingArea = ({currentArea}) => {
    
    const [cards,setCards] = useState({
        iphone7plus: iphone7Plus, 
        iphone11Pro: iphone11Pro,
        iphoneX: iphoneX,
        iphoneXR: iphoneXR
    })
    console.log(cards)
    return(
        <div className="shoppingArea">
            {
                Object.keys(cards).map( key => {
                    return(
                        <img src={cards[key]} alt={key} />
                    )
                })
            }
        </div>
    )
}

export default ShoppingArea