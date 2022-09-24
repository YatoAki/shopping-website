import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from "./RouteSwitch";
import { HashRouter } from 'react-router-dom';
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <header>
        <h1><a href="/">Apple Store</a></h1>
          <ul>
          <li><a href="/home">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
      </ul>
    </header>
    
    <RouteSwitch />
    </HashRouter>
  </React.StrictMode>
);


