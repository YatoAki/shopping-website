import React from 'react'
import "./Home.css"
import mac from "./mac.jpg"

const Home = () => {


    return(
        <div class="Home">
            <header>
                <h1>Apple Store</h1>
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/support">Support</a></li>
                    <li><a href="news">News</a></li>
                </ul>
            </header>
            <div class="contact">
                <img src={mac} alt="Mac" />
                <a href="/shop">Shop</a>
                <p>This is more than just a product</p>
            </div>
        </div>
    )
}

export default Home