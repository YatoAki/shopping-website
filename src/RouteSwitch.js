import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Shop from "./Shop/Shop.js";
import About from "./About/About.js"

const RouteSwitch = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />}/>
      </Routes>
  );
};

export default RouteSwitch;