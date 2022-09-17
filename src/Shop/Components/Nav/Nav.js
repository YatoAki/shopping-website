import React,{useState} from "react";
import "./Nav.css"

const Nav = ({navClicked}) => {

    const [selected,setSelected] = useState("iphone")

    const clicked = (text,event) => {
        navClicked(text)
        setSelected(text)
    }

    return(
        <div className="Nav">
            <ul>
                <li 
                    onClick={(event) => clicked("iphone",event) } 
                    className={selected === "iphone" ? "active" : ""}>
                        iPhone
                </li>
                <li 
                    onClick={(event) => clicked("mac",event) } 
                    className={selected === "mac" ? "active" : ""}>
                        Mac
                </li>
                <li 
                    onClick={(event) => clicked("watch",event) } 
                    className={selected === "watch" ? "active" : ""}>
                        Apple Watch
                </li>
                <li 
                    onClick={(event) => clicked("airpods",event) } 
                    className={selected === "airpods" ? "active" : ""}>
                        AirPods
                </li>
                <li 
                    onClick={(event) => clicked("accessories",event) } 
                    className={selected === "accessories" ? "active" : ""}>
                        Apple Accessories
                </li>
            </ul>
        </div>
    )
}

export default Nav