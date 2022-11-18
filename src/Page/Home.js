import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Slidehome from "../component/Slidehome";
import pic from "../path/home.json";
import { Outlet, Link, json } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const place = pic.house;
  return (
    <div>
      <Navbar />
      <div className="z-0 ">
        <div className="flex bg-head1 bg-cover h-screen text-center justify-center relative">
          {/* <div className=" font-Inter text-white absolute bottom-44  text-6xl"> */}
          <div className=" font-Inter text-black absolute top-44 right-96  text-6xl">
            บ้านเดี่ยวหรู หลากหลายสไตล์
          </div>
          <div className=" font-Inter text-right text-black absolute top-64 right-96  text-2xl">
            มาพร้อมกับโครงการใหม่
            Scadinavian Touch บนทำเลดีเยี่ยม
            สัมผัสกับธรรมชาติ
          </div>
          <Link to="/House">
            <button className=" font-Inter absolute top-80 right-96 bg-gray-300 bg-opacity-75 hover:bg-gray-200 text-black font-bold py-2 px-4  rounded w-48 text-2xl">
              จองเลย
            </button>
          </Link>
        </div>

        <div className=" flex bg-head2 bg-cover h-screen relative text-center justify-center ">
          <div className=" font-Inter text-black absolute top-44 right-96  text-6xl">
            บ้านทาวเฮาส์สุดแจ่ม
          </div>
          <div className=" font-Inter text-right text-black absolute top-64 right-96  text-2xl">
            มาพร้อมกับโครงการใหม่ พื้นที่ส่วนกลางครบครัน ดีเยี่ยม สวัสดิการดี
            มีสระว่ายน้ำ ฟิตเนส ครบ
          </div>
        <Link to="/Townhouse">
          <button className=" font-Inter absolute top-80 right-96 bg-gray-300 bg-opacity-75 hover:bg-gray-200 text-black font-bold py-2 px-4  rounded w-48 text-2xl">
            จองเลย
          </button>
        </Link>
        </div>

        <div className=" flex bg-head3 bg-cover h-screen relative text-center justify-center ">
          <div className=" font-Inter text-white absolute top-44 right-96  text-6xl">
            คอนโด หรู สไตล์ธรรมชาติ
          </div>
          <div className=" font-Inter text-right text-white absolute top-64 right-96  text-2xl">
            มาพร้อมกับโครงการใหม่ ส่วนกลางดีเยี่ยมเป็นมิตรกับสิ่งแวดล้อมมาพร้อมกับสระว่ายน้ำและฟิตเนส
          </div>
        <Link to="/Condo">
          <button className=" font-Inter absolute top-80 right-96 bg-gray-300 bg-opacity-75 hover:bg-gray-200 text-black font-bold py-2 px-4  rounded w-48 text-2xl">
            จองเลย
          </button>
        </Link>
        </div>

        <Slidehome  place={place} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
