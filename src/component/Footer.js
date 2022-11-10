import {Link} from "react-router-dom"
function Footer() {

  return (
    // <div className="fixed top-0 left-0 right-0 z-10"></div>
    <div className="fixed bottom-0 left-0 right-0 justify-items-center text-center font-medium bg-gray-200">
        <ul className="grid justify-items-center ">
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
