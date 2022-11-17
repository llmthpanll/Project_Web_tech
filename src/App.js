import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Area from "./Page/Area";
import Condo from "./Page/Condo";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import House from "./Page/House";
import Sign from "./Page/Sign";
import Townhouse from "./Page/Townhouse";
import Booked from "./Page/Booked";
import pic from "./path/home.json";

export default function App() {
  let stamp = []
  console.log("ข้อมูล =")
  function BookHome(data) {
    stamp.push(data)
    stamp = [...new Set(stamp)]
    console.log(stamp)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />} ></Route>
        <Route path="/Home" element={<Home />} ></Route>
        <Route path="/Sign" element={<Sign />}></Route>

        {/* main */}
        <Route path="/House" element={<House data={pic.house} getDataApp={BookHome} />}></Route>
        <Route path="/Condo" element={<Condo data={pic.condo} getDataApp={BookHome} />}></Route>
        <Route path="/Townhouse" element={<Townhouse data={pic.townhouse} getDataApp={BookHome} />}></Route>
        <Route path="/Area" element={<Area data={pic.market} getDataApp={BookHome} />}></Route>

        {/* side */}
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Booked" element={<Booked  />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
