import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Shop from "./Shop/Shop.js";
import Support from "./Support/Support.js"
import News from "./News/News.js"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/support" element={<Support />}/>
        <Route path="/News" element={<News/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;