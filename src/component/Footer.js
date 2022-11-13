import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
// function Footer() {
const Footer = () => {
  return (
    // <div className="bg-black text-white p-5">
    //   <div className="grid grid-cols-3 font-medium ">
    //   <div className="text-center flex flex-col items-center justify-center">
    //       <p>สมาชิกกลุ่ม</p>
    //       <ul className="text-left list-disc grid gap-x-8">
    //         <li>พิชญุตม์ ศรีม่วง 64070074</li>
    //         <li>กัมปนาท คนคล่อง 64070125</li>
    //         <li>กานต์ แก้วประภา 64070126</li>
    //         <li>ภาคิน เค้าภูไทย 64070207</li>
    //         <li>เมธาสิทธิ์ ประทีปเมธากุล 64070215</li>
    //       </ul>
    //     </div>

    //   <div className="flex justify-center items-center">
    //       <img
    //         src={logo}
    //         alt="Logo"
    //         border="0"
    //         className="flex w-20 h-20 m-2"
    //       ></img>
    //     </div>

    //   <div className="text-center flex flex-col items-center justify-center">
    //   <ul className="text-left list-disc grid grid-cols-2 gap-x-8">
    //         <li>บ้านเดี่ยว</li>
    //         <li>ทาวน์เฮาส์</li>
    //         <li>คอนโด</li>
    //         <li>พิ้นที่ค้าขาย</li>
    //       </ul>
    //   <ul className="grid justify-items-center ">
    //         <Link to="/Contact">
    //           <li className="px-3">Contact</li>
    //         </Link>
    //       </ul>
    //   </div>
    //   </div>
    <div className="bg-black text-white text-center p-4">
      <div className="flex justify-center gap-2">
        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookOutlinedIcon />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon />
          </a>
        </div>
        <div>
        <a href="https://www.github.com/" target="_blank">
          <GitHubIcon />
        </a>
        </div>
      </div>
      <div className="m-2 mb-0">
        <p>COPYRIGHT © 2022</p>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
