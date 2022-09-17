import React from 'react'
import "./Home.css"
import mac from "./images/mac.jpg"

const Home = () => {


    return(
        <div class="Home">
            <div class="contact">
                <img src={mac} alt="Mac" />
                <a href="/shop">SHOP</a>
                <p>This is more than just a product</p>
            </div>
        </div>
    )
}

export default Home