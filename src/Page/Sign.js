import Navbar from "../component/Navbar"
import loginImg from "./Pic/condo/เอ็กซ์ที พญาไท/3-01.png"
import { Outlet, Link } from "react-router-dom";
const Sign = ()=>{
    return(
        <div>

            <div>
                <Navbar/>
            </div>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                    <div className="hidden sm:block">
                        <img className="h-full w-full object-cover" src={loginImg} alt=""/>
                    </div>

                    <div className="bg-gray-400 flex flex-col justify-center">
                        <div className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                            <h2 className="text-4xl dark:text-white font-bold text-center">Sign in</h2>
                            <div className="flex flex-col text-gray-400 py-2">
                                <label>User Name</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text"/>
                            </div>
                            <div className="flex flex-col text-gray-400 py-2">
                                <label>Password</label>
                                <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password"/>
                            </div>
                            <div className="flex justify-between text-gray-400 py-2">
                                <p className="flex items-center"><input className="mr-2" type="checkbox"/> Remember Me</p>
                                <p>forgot password</p>
                            </div>
                            <Link to= "/Home">
                                <button  className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semiblod rounded-lg">Sign In</button>
                            </Link>
                            <Link to= "/Home">
                                <button  className="w-full my-5 py-2 bg-teal-400 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semiblod rounded-lg">Login as guest</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sign
