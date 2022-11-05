import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import SlideShow_home from "../component/Slideshow_home"
// import "./home.css"
const Home = ()=>{
    return(
        <div>
            <Navbar/>
            <div className="z-0">

                <div className="flex bg-head2 bg-cover h-screen text-center justify-center relative">
                    <div className="text-white absolute bottom-16 font-semibold text-6xl">
                        Welcome to Shop
                    </div>
                </div>
                <div className="bg-head bg-cover h-screen relative">
                    <button className="font-semibold text-6xl absolute bottom-16">ปุ่มเอง</button>
                </div>
            <Footer/>
            </div>
            {/* <SlideShow_home/> */}
        </div>

    );
}

export default Home;
