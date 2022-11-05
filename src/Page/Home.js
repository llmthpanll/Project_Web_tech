import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import SlideShow_home from "../component/Slideshow_home"
// import "./home.css"
const Home = ()=>{
    return(
        <div>
            <Navbar/>
                <div className="flex bg-head2 bg-cover h-screen text-center  justify-center">
                    <div className="text-white absolute bottom-16 font-semibold text-6xl">
                        Welcome to Shop
                    </div>
                    <button></button>
                </div>
                <div className="bg-head bg-cover h-screen "></div>
            <Footer/>
            {/* <SlideShow_home/> */}
        </div>

    );
}

export default Home;
