import Navbar from "../component/Navbar"
import loginImg from "./Pic/condo/เอ็กซ์ที พญาไท/3-01.png"
import { useState } from "react";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
const Sign = () => {
    const road = '';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        if (email.length == 0 || password.length == 0) {
            alert("Please Enter username and password");
        } else {
            navigate('/home');
        }
    }

    console.log('render all', email.length, password.length);
    return (
        <div>
            <div className="grid grid-cols-2 h-screen">
                <div className="hidden sm:block">
                    <img className="h-full w-full object-cover" src={loginImg} alt="" />
                </div>
                <div className="bg-gray-100 flex flex-col justify-center">
                    <form onSubmit={onSubmit}>
                        <div className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                            <h2 className="text-4xl dark:text-white font-bold text-center">Sign in</h2>
                            <div className="flex flex-col text-gray-400 py-2">
                                <label>Email</label>
                                <input
                                    id="email"
                                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                                    type="email"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col text-gray-400 py-2">
                                <label>Password</label>
                                <input
                                    id="password"
                                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                                    type="password"
                                    aria-describedby="passwordHelp"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-between text-gray-400 py-2">
                                <p className="flex items-center"><input className="mr-2" type="checkbox" /> Remember Me</p>
                                <p>forgot password</p>
                            </div>
                            {/* <Link to= {road}> */}
                            <button type="submit" className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semiblod rounded-lg">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    )
}

export default Sign