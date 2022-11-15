import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import pic from "../path/home.json";
import React, { useState } from "react"
const Condo = () => {
    const [sell, setSell] = useState(pic.townhouse)
    return (
        <div className="">
            <Navbar />
            <Footer />
        </div>
    );
}

export default Condo;
