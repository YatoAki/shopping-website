import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from "./RouteSwitch";
import "./index.css"
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <header>
        <h1><a href="/">Apple Store</a></h1>
          <ul>
          <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
      </ul>
    </header>
    <RouteSwitch />
    </HashRouter>
  </React.StrictMode>
);


