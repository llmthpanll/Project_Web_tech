import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import HouseIcon from "@mui/icons-material/House";
import { Outlet, Link } from "react-router-dom";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import React, { useState } from "react";
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = ()=> setSidebar(!sidebar);

    return (
        <div className="fixed top-0 left-0 right-0 z-10">
            {/* navbar */}
            <div className={sidebar ? "fixed top-0 right-0 h-full w-64 px-5 py-3 z-10 bg-white ": "hidden duration-300"}>
                <button className='absolute right-2.5 btn' onClick={showSidebar}><DisabledByDefaultIcon /></button>
                <ul className='relative'>
                    <div className='mt-14 grid gap-y-4'>
                        <Link to="/Sign"><li>Sign In</li></Link>
                        <Link to="/Contract"><li>Contact Us</li></Link>
                    </div>
                </ul>

            </div>
            {/* menubar */}
            <div className={sidebar ?"z-0 align-middle flex justify-between p-3 font-bold bg-white text-slate-900 duration-500":"z-0 align-middle flex justify-between p-3 bg-transparent font-bold text-white hover:bg-white hover:text-slate-900 duration-500"}>
                <div className="align-middle">
                    <Link to="/">
                        <HouseIcon sx={{ fontSize: 25 }} />
                    </Link>
                </div>
                <div className="align-middle justify-items-center items-center justify-items-center place-items-center">
                    <ul className="flex gap-5 align-middle">
                        <Link to="/House">
                            <li>บ้านเดี่ยว</li>
                        </Link>
                        <Link to="/Townhouse">
                            <li>ทาวเฮาส์</li>
                        </Link>
                        <Link to="/Condo">
                            <li>คอนโด</li>
                        </Link>
                        <Link to="/Area">
                            <li>พื้นที่ค้าขาย</li>
                        </Link>
                    </ul>
                </div>
                <div className="align-middle">
                    <ul className="flex gap-5">
                        <li>
                            <SearchIcon className="cursor-pointer" sx={{ fontSize: 25 }} />
                        </li>
                        <li>
                            <MenuIcon className="cursor-pointer" onClick={showSidebar} sx={{ fontSize: 25 }} />
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default Navbar;
