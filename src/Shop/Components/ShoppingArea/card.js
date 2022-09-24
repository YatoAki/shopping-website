import React from "react";
import "./Card.css"

const Card = ({image, alt,price}) => {
    
    return(
        <div className="card">
            <img src={image} alt={alt}/>
            <div>
                <h3>{alt}</h3>
                <h4>$ {price}</h4>
            </div>
        </div>
    )
}

export default Card