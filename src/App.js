import { Favorite } from "@mui/icons-material";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Area from "./Page/Area";
import Condo from "./Page/Condo";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import House from "./Page/House";
import Sign from "./Page/Sign";
import Townhouse from "./Page/Townhouse";
import Booked_page from "./Page/Booked";
import pic from "./path/home.json";

export default function App() {
  const stamp = []
  function Booked(data){
    stamp = [...stamp, data]
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sign />} ></Route>
      <Route path="/Home" element={<Home />} ></Route>
      <Route path="/Sign" element={<Sign />}></Route>

      {/* main */}
      <Route path="/House" element={<House data={pic.house} getData={Booked}/>}></Route>
      <Route path="/Condo" element={<Condo data={pic.condo} getData={Booked}/>}></Route>
      <Route path="/Townhouse" element={<Townhouse data={pic.townhouse} getData={Booked}/>}></Route>
      <Route path="/Area" element={<Area data={pic.market} getData={Booked}/>}></Route>

      {/* side */}
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Booked" element={<Booked_page/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}
