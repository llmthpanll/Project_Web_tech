import {Link} from "react-router-dom"
function Footer() {

  return (
    <div className="text-center font-medium p-9 bg-gray-200">
        <ul className="grid justify-items-center">
            <div className="flex p-3">
            <Link to="/Company"><li className="px-3">Company</li></Link>
            <Link to="/History"><li className="px-3">History</li></Link>
            <Link to="/Contact"><li className="px-3">Contact</li></Link>
            </div>
        </ul>
    </div>
  );
}

export default Footer;
