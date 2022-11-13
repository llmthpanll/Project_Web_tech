import { BrowserRouter, Routes, Route} from "react-router-dom";
import Area from "./Page/Area";
import Condo from "./Page/Condo";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import House from "./Page/House";
import Sign from "./Page/Sign";
import Townhouse from "./Page/Townhouse";



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sign />} ></Route>
      <Route path="/Home" element={<Home />} ></Route>
      <Route path="/House" element={<House />}></Route>
      <Route path="/Sign" element={<Sign />}></Route>
      <Route path="/Condo" element={<Condo />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Townhouse" element={<Townhouse />}></Route>
      <Route path="/Area" element={<Area />}></Route>

    </Routes>
  </BrowserRouter>
  );
}
