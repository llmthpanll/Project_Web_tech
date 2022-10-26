import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HouseIcon from '@mui/icons-material/House';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 right-0'>
            <div className="align-middle flex justify-between p-3 bg-transparent font-bold text-white hover:bg-white hover:text-slate-900 duration-500">
                <div className="align-middle">
                    <Link to="/"><HouseIcon sx={{ fontSize: 25 }} /></Link>
                </div>
                <div className="align-middle justify-items-center items-center justify-items-center place-items-center">
                    <ul className="flex gap-5 align-middle">
                    <Link to="House"><li>บ้านเดี่ยว</li></Link>
                    <Link to="Towehouse"><li>ทาวเฮาส์</li></Link>
                    <Link to="Condo"><li>คอนโด</li></Link>
                    <Link to="Area"><li>พื้นที่ค้าขาย</li></Link>
                    </ul>
                </div>
                <div className="align-middle">
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
