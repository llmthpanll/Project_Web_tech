import { Link } from "react-router-dom";
import logo from "../Page/Pic/logo.png";
// function Footer() {
const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-3   font-medium bg-green-blue">
        <div className="flex">
          <img
            src={logo}
            alt="Logo"
            border="0"
            className="flex w-20 h-20 m-2"
          ></img>
        </div>

        <div className="text-center flex flex-col items-center justify-center">
          <ul className="text-left list-disc grid grid-cols-2 gap-x-8">
            <li>บ้านเดี่ยว</li>
            <li>ทาวน์เฮาส์</li>
            <li>คอนโด</li>
            <li>พิ้นที่ค้าขาย</li>
          </ul>
          <ul className="grid justify-items-center ">
            <Link to="/Contact">
              <li className="px-3">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="text-center flex flex-col items-center justify-center">
          <ul className="text-left list-disc grid grid-cols-2 gap-x-8">
            <li>เกี่ยวกับเรา</li>
            <li>เงื่อนไขการใช้งาน</li>
            <li>นโยบายความเป็นส่วนตัว</li>
            <li>คำถามที่พบบ่อย</li>
          </ul>

        </div>
      </div>
      <div className="text-center">
        <p>COPYRIGHT © 2019 , SANSIRI PUBLIC CO.,LTD ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
