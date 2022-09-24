import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Shop from "./Shop/Shop.js";
import About from "./About/About.js"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-website/" element={<Home />} />
        <Route path="/shopping-website/home" element={<Home/>}/>
        <Route path="/shopping-website/shop" element={<Shop />} />
        <Route path="/shopping-website/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;