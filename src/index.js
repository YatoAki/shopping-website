import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from "./RouteSwitch";
import { BrowserRouter } from 'react-router-dom';
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/shopping-website/'>
    <header>
        <h1><a href="home">Apple Store</a></h1>
          <ul>
          <li><a href="home">Home</a></li>
            <li><a href="shop">Shop</a></li>
            <li><a href="about">About</a></li>
      </ul>
    </header>
    
    <RouteSwitch />
    </BrowserRouter>
  </React.StrictMode>
);


