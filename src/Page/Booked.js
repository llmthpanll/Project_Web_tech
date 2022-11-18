import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import React, { useState } from "react";

const Booked = (data) => {
  return (
    <div>
        <Navbar />
        <div className="flex flex-col mt-16 mx-0 bg-cover h-screen text-center relative">
            <div className="text-black text-5xl">Booking</div>
            <div className="text-black text-2xl">Your Booking</div>
            <div className="border-2 border-red-600 mx-40">
              <div>gear</div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Booked;
