import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import React, { useState } from "react"

const Booked = (data) => {

    return (
        <div>
            <Navbar/>

            <div className="mt-16 bg-cover h-screen text-center justify-center relative">
            <div className="text-black text-5xl">Booking</div>

                <div className="justify-center w-60 h-60 border-10">

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Booked;
