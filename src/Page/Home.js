import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Slidehome from "../component/Slidehome"
const Home = ()=>{
    return(
        <div>
            <Navbar/>
            <div className="z-0 ">

                <div className="flex bg-head1 bg-cover h-screen text-center justify-center relative">
                    <div className=" font-Kanit text-white absolute bottom-44  text-6xl">
                    Head TEXT EX. Home for Sale!!!


                    </div>
                    <div className=" font-Kanit text-white absolute bottom-32  text-5xl">
                    Infomation TEXT EX. Bla bla bla bla bla



                    </div>

                    <button class=" font-Kanit absolute bottom-10 bg-gray-300 bg-opacity-75 hover:bg-gray-200 text-black font-bold py-2 px-4  rounded w-48 text-2xl">
  จองเลย
</button>

                </div>
                <div className=" flex bg-head2 bg-cover h-screen relative text-center justify-center ">
                   <button class=" font-Kanit absolute bottom-10 bg-gray-300 bg-opacity-75 hover:bg-gray-200 text-black font-bold py-2 px-4  rounded w-48 text-2xl">
  จองเลย
</button>
                </div>
                <div className=" flex bg-head3 bg-cover h-screen relative text-center justify-center ">
                   <button class=" font-Kanit absolute bottom-10 bg-gray-300 bg-opacity-75 hover:bg-gray-200 text-black font-bold py-2 px-4  rounded w-48 text-2xl">
  จองเลย
</button>
                </div>

            <Footer/>
            </div>
            {/* <Slidehome/> */}
        </div>

    );
}

export default Home;
