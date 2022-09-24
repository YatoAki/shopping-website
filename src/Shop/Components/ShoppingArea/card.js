import React from "react";
import "./Card.css"

const Card = ({itemClicked, image, alt,price}) => {
    
    return(
        <div className="card" onClick={() => itemClicked(alt,price)}>
            <img src={image} alt={alt}/>
            <div>
                <h3>{alt}</h3>
                <h4>$ {price}</h4>
            </div>
        </div>
    )
}

export default Card