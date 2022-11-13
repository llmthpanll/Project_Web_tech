import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import pic from "../path/home.json";
import React, { useState } from "react"
const Condo = () => {
    const [sell, setSell] = useState(pic.house)
    return (
        <div className="bg-[url('https://media.istockphoto.com/id/92893866/photo/space-stars-texture.jpg?b=1&s=170667a&w=0&k=20&c=XI0UEMpgVsp2BLl_FmKvHDDtaW7LWnH008h2yCFqrgQ=')]">
            <div className="h-fit p-16 grid grid-cols-3 gap-x-3 gap-y-4">
                <Navbar />
                {sell.map((element, index) => (
                    <div className="h-fit">
                        <div class="text-justify max-w-sm  rounded overflow-hidden shadow-lg">
                            <img class="w-full" src={element.path + "/1-01.png"} alt="home" />
                            <div class="px-6 py-4 bg-white">
                            <div class="font-prompt text-justify font-bold text-xl mb-2">{element.name}</div>
                                <span class="inline text-justify font-prompt text-gray-700 text-sm">
                                {element.description}
                                </span>
                                <div class="font-prompt font-bold text-lg mb-2">{element.price}</div>
                                <img class="w-6 py-2" src={element.icon1}  />
                                <p class=" font-prompt text-gray-700 text-sm">
                                {element.location1}
                                </p>
                                <img class="w-6 py-2" src={element.icon2}  />
                                <p class=" font-prompt text-gray-700 text-sm">
                                {element.location2}
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

export default Condo;
