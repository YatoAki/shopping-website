import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Support from "./Support"
import News from "./News"

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