import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import pic from "../path/home.json";
import React, { useState } from "react"
console.log(pic.house)
const House = () => {
    const [sell, setSell] = useState(pic.house)
    return (
        <div className="bg-[url('https://media.istockphoto.com/id/92893866/photo/space-stars-texture.jpg?b=1&s=170667a&w=0&k=20&c=XI0UEMpgVsp2BLl_FmKvHDDtaW7LWnH008h2yCFqrgQ=')]">
            <div className="p-16 grid grid-cols-3 gap-x-3 gap-y-4">
                <Navbar />
                {sell.map((element, index) => (
                    <div>
                        <p></p>
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src={element.path + "/1-01.png"} alt="home" />
                            <div class="px-6 py-4 bg-white">
                                <div class="font-bold text-xl mb-2">{element.name}</div>
                                <p class="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    Button
                                </button>

                            </div>

                        </div>
                    </div>
                ))}

            </div>
            <Footer />
        </div>
    );
}

export default House;
