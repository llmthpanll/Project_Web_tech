import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import React, { useState } from "react"

const Booked = (data) => {

    return (
        <div>
            <Navbar/>

            <div className="text-center">
                <div className="text-2xl text-black">Booking</div>

            </div>
            <Footer/>
        </div>
    );
}

export default Booked;
