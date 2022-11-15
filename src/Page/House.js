import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import React, { useState } from "react"
import Slideshow from "../component/Slideshow"
import pic from "../path/home.json";
const House = () => {
    const [place, setSell] = useState(pic);
    console.log(place)
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-2">
                <Slideshow prop={place.house[0]} />
                <p>lorem heloo</p>
                <Slideshow prop={place.house[1]} />
                <p>lorem heloo</p>
                <Slideshow prop={place.house[2]} />
                <p>lorem heloo</p>
                <Slideshow prop={place.house[3]} />
                <p>lorem heloo</p>
                <Slideshow prop={place.house[4]} />
                <p>lorem heloo</p>
            </div>
            <Footer />
        </div>
    );
}

export default House;
