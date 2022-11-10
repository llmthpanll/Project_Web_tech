import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Slidehome from "../component/Slidehome"

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="z-0 ">

                <div className="flex bg-head2 bg-cover h-screen text-center justify-center relative">
                    <div className="text-white absolute bottom-16 font-semibold text-6xl">
                        Welcome to Shop
                    </div>

                </div>
                <div className=" flex bg-head bg-cover h-screen relative text-center justify-center ">
                        <button className=" font-Kanit absolute bottom-10 bg-gray-300 bg-opacity-75 hover:bg-gray-200 text-black font-bold py-2 px-4  rounded w-48 text-2xl">จองเลย</button>
                </div>
                <div className=" flex bg-house bg-cover h-screen relative text-center justify-center ">
                </div>
                    {/* <Slidehome/> */}
                    <Footer />
                </div>
            </div>

            );
}

            export default Home;
