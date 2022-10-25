import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HouseIcon from '@mui/icons-material/House';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 right-0'>
            <div className="flex justify-between p-5 h-20 bg-transparent font-bold text-white hover:bg-white hover:text-slate-900 duration-500">
                <div>
                    <Link to="/"><HouseIcon sx={{ fontSize: 25 }} /></Link>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li>บ้านเดี่ยว</li>
                        <li>ทาวเฮาส์</li>
                        <li>คอนโด</li>
                        <li>พื้นที่ค้าขาย</li>
                    </ul>
                </div>
                <div >
                    <ul className="flex gap-5">
                        <li><SearchIcon sx={{ fontSize: 25 }} /></li>
                        <li><MenuIcon sx={{ fontSize: 25 }} /></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
