import React from "react";
import "./Card.css"

const Card = ({image, alt,price}) => {
    
    return(
        <div className="card">
            <img src={image} alt={alt} />
            <h3>{alt}</h3>
            <h4>${price}</h4>
        </div>
    )
}

export default Card