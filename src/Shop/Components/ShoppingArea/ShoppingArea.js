import React,{useState,useEffect} from "react";
import Card from "./Card.js"
import "./ShoppingArea.css"
import iphone7Plus from "./iphone/iPhone 7 Plus.png"
import iphone11Pro from "./iphone/iPhone 11 Pro.png"
import iphoneX from "./iphone/iPhone X.png"
import iphoneXR from "./iphone/iPhone XR.png"
import iphone8Plus from "./iphone/iPhone 8 Plus.png"

import imac from "./mac/imac.png"
import macbookair from "./mac/macbookair.png"
import macbookpro from "./mac/macbookpro.png"
import macmini from "./mac/macmini.png"
import macstudio from "./mac/macstudio.png"

import watchS8 from "./watch/appleWatchS8.png"
import watchSE from "./watch/appleWatchSE.png"
import watchUltra from "./watch/appleWatchUltra.png"
import watchHermes from "./watch/appleWatchHermes.png"

import airpods2G from "./airpods/airpods_2nd_Gen.png"
import airpods3G from "./airpods/airpods_3nd_Gen.png"
import airpodsMax from "./airpods/airpods_max.png"
import airpodsPro2G from "./airpods/airpods_pro_2nd_Gen.png"

import clearcase from "./accessories/clearcase.png"
import leatherwallet from "./accessories/leatherwallet.png"

const ShoppingArea = ({currentArea}) => {

    const [cards,setCards] = useState({
        "iPhone 11 Pro": [iphone11Pro,899],
        "iPhone XR": [iphoneXR,1500],
        "iPhone X": [iphoneX,1399],
        "iPhone 8 Plus": [iphone8Plus,799], 
        "iPhone 7 Plus": [iphone7Plus,999]    
    })

    useEffect(() => {
        if (currentArea === "iphone"){
            setCards({
                "iPhone 11 Pro": [iphone11Pro,899],
                "iPhone XR": [iphoneXR,260],
                "iPhone X": [iphoneX,245],
                "iPhone 8 Plus": [iphone8Plus,200], 
                "iPhone 7 Plus": [iphone7Plus,169]    
            })
        }else if (currentArea === "mac"){
            setCards({
                "Mac Mini": [macmini,699],
                "MacBook Air": [macbookair,999],
                "MacBook Pro": [macbookpro,1299],
                "iMac": [imac,1299],
                "Mac Studio": [macstudio,1999]   
            })
        }else if (currentArea === "watch"){
            setCards({
                "Apple Watch Hermes": [watchHermes,1229],
                "Apple Series 8": [watchS8,399],
                "Apple Watch SE": [watchSE,249],
                "Apple Watch Ultra": [watchUltra,799]
            })
        }else if (currentArea === "airpods"){
            setCards({
                "Airpods(2nd Generation)":[airpods2G,129],
                "Airpods(3rd Generation)":[airpods3G,169],
                "Airpods Max":[airpodsMax,549],
                "Airpods Pro(2nd Generation)":[airpodsPro2G,249]
            })
        }else if (currentArea === "accessories"){
            setCards({
                "iPhone Leather Wallet":[leatherwallet,59],
                "iPhone 14 Clear Case":[clearcase,49]
            })
        }
    },[currentArea])

    return(
        <div className="shoppingArea">
            {
                Object.keys(cards).map( key => {
                    return(
                        <Card image={cards[key][0]} alt={key} price={cards[key][1]} key={key}/>
                    )
                })
            }
        </div>
    )
}

export default ShoppingArea